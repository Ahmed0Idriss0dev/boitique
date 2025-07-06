'use client'
import { ContextProvider } from '@/store'
import { ShoppingBag } from 'lucide-react'
import React from 'react'

const Crad = () => {
  const {openClose} = ContextProvider()
  return (
    <div onClick={openClose} className='w-80 mx-auto px-3 h-12 fixed bottom-3 flex justify-between items-center  bg-neutral-900 text-white rounded-md'>
        <p>Shoping card</p>
        <ShoppingBag/>
    </div>
  )
}

export default Crad