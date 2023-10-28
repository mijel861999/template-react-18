import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeState } from '../features/uxSlice'

export default function HomePage() {
  const dispatch = useDispatch()
  const uiState = useSelector(state => state.ui)

  const handleDispatch = () => {
    dispatch(changeState('Parámetro'))
  }

  return (
    <div className='text-black'>
      HomePage
      <button onClick={handleDispatch}>Dispatch</button>
    </div>
  )
}
