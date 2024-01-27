import React, { useState, useEffect } from 'react'
import useForm from '../hooks/useForm'
import { useParams, useNavigate } from 'react-router-dom'
import * as UserService from '../services/userServices.js'
import { ToastContainer, toast } from 'react-toastify'


export default function RecoverPassword() {
  const { token } = useParams()
  const navigate = useNavigate()

  const { formData, handleChange, resetForm } = useForm({
    newPassword: "",
    confirmPassword: "",
  }) 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.newPassword || !formData.confirmPassword || formData.newPassword !== formData.confirmPassword) {
      alert('Complete todos los campos y que las contraseñas sean iguales');
      return
    }

    console.log(formData)
    console.log('Cambiando la contraseña...');
  };

  const checkTokenValidity = async () => {
    console.log(token)

    try {
      await UserService.checkTokenValid(token);
    } catch (error) {
      console.log(error.message)
      console.error('Error al validar el usuario:', error);
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate('/access-denied')
    }
  }

  useEffect(() => {
    checkTokenValidity()
  }, [])

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Cambiar Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Nueva contraseña
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600">
            Confirmar nueva contraseña
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Cambiar Contraseña
        </button>
      </form>
    </div>
  );
}
