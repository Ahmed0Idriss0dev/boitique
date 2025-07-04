'use client'
import { ContextProvider } from '@/store'
import { Plus } from 'lucide-react'
import React from 'react'

const Add = () => {
        const {openClose} =ContextProvider()
    
  return (
<button onClick={openClose} className='button flex justify-center items-center w-36 h-10 cursor-pointer  border-0 bg-brand-500 text-white '>
          <Plus className='text-sm'/>
          <span>New Product</span>
        </button>  )
}

export default Add