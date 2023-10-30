import React from 'react'
import useForm from '../hooks/useForm'

export default function LoginPage() {
  const { formData, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
        <button type="button" onClick={resetForm}>Limpiar</button>
      </form>
    </section> 
  )
}
