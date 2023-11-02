import React from 'react'
import { USER_DATA } from '../utils/constants'
import { Navigate } from 'react-router-dom'

export default function PrivateRouter({ children }) {
  const user = localStorage.getItem(USER_DATA)
  console.log(user)

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children
}
