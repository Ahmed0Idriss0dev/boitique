'use client'
import { ContextProvider } from '@/store'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Add = () => {
        const {openClose} =ContextProvider()
    
  return (
        <button onClick={openClose} className='button flex justify-center items-center w-36 h-10 cursor-pointer  border-0 bg-brand-600 gap-2 text-white '>
                 <Image  src={'/icons/add.svg'} width={20} height={20} alt='icons'/>
         
          <span>New Product</span>
        </button>  )
}

export default Add