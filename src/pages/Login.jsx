import React, { useState } from 'react'
import useForm from '../hooks/useForm'
import logo from '../assets/logo.png'
import * as UserService from '../services/userServices.js'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import GenericModal from '../components/modals/GenericModal'

export default function LoginPage() {
  const navigate = useNavigate()
  const { formData, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  })

  const [recoverEmail, setRecoverEmail ] = useState("")


  const [isGenericModalOpen, setGenericModalOpen] = useState(false);

  const openGenericModal = () => {
    setGenericModalOpen(true);
  };

  const closeGenericModal = () => {
    setGenericModalOpen(false);
  };


  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    if (!formData.email || !formData.password) {
      alert('Complete todos los campos');
      return
    }


    try {
      await UserService.loginUser(formData);
      navigate('/')
    } catch (error) {
      console.error('Error al crear el usuario:', error);
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
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <img
            src={logo}
            alt="Logo de la aplicación"
            className="w-40 mx-auto mb-4"
          />
        </div>
        <h2 className="text-3xl font-extrabold text-center">Iniciar sesión</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block font-medium">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <button type="submit" className="w-full p-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300">
              Ingresar
            </button>
          </div>
        </form>
        
        <div className="text-center flex justify-between w-full">
          <Link to="/registro" className="text-blue-500 hover:underline">Crear una cuenta</Link>
          <button onClick={openGenericModal} className="text-red-500 hover:underline">Olvidé mi contraseña</button>
        </div>
      </div>
      <GenericModal isOpen={isGenericModalOpen} toggle={closeGenericModal}>
        <div>
          <h1 className="text-2xl font-bold mb-2">Recupera tu contraseña</h1>
          <p>Ingresa tu correo electrónico para enviarte el correo de recuperación</p>
          <input
            type="email"
            value={recoverEmail}
            onChange={e => setRecoverEmail(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
          <button className="w-full p-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 mt-4">Recuperar contraseña</button>
        </div>
      </GenericModal>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div> 
  )
}
