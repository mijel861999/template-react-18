import React from 'rect'
import { USER_DATA } from '../utils/constants'
import { Navigate } from 'react-router-dom' }

export default function PublicRouter({ children }) {
  const user = localStorage.getItem(USER_DATA)

  if (!user) {
    return children
  }

  return <Navigate to="/" replace />
}
