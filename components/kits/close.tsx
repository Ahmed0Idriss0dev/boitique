'use client'
import { ContextProvider } from '@/store'
import React from 'react'

const Close = () => {
    const {openClose} =ContextProvider()
  return (
    <button onClick={openClose} className='button cursor-pointer'> close</button>
  )
}

export default Close