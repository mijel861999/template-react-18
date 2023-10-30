import React from 'react'
import useForm from '../hooks/useForm'
import logo from '../assets/logo.png'

export default function LoginPage() {
  const { formData, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <img
            src={ logo } // Reemplaza con la ruta de tu logo
            alt="Logo de la aplicación"
            className="w-40 mx-auto mb-4"
          />
        </div>
        <h2 className="text-3xl font-extrabold text-center">Iniciar sesión</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block font-medium">Nombre de usuario</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.username}
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
      </div>
    </div> 
  )
}
