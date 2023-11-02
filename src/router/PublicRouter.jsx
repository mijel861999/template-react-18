import React from 'react'
import { USER_DATA } from '../utils/constants'
import { Navigate } from 'react-router-dom'

export default function PublicRouter({ children }) {
  const user = localStorage.getItem(USER_DATA)

  console.log(user)

  if (!user) {
    return children
  }

  return <Navigate to="/" replace />
}
