import React from 'react'
import { useSelector } from 'react-redux'

export default function HomePage() {
  const uiState = useSelector(state => state.ui)

  console.log(uiState)
  return (
    <div className='text-black'>HomePage</div>
  )
}
