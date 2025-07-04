'use client'
import { ContextProvider } from '@/store'
import { Plus } from 'lucide-react'
import React from 'react'

const Add = () => {
        const {openClose} =ContextProvider()
    
  return (
<button onClick={openClose} className='button flex justify-center items-center w-8 cursor-pointer h-8 border-0 bg-brand-500 text-white rounded-full'>
          <Plus className='text-sm'/>
        </button>  )
}

export default Add