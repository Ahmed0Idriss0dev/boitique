'use client'
import React from 'react'
import { ContextProvider } from '@/store'
import { Product, producttype } from '@/types'
import { Plus } from 'lucide-react'
const AddTocard = (Product:{Product:producttype}) => {
  const {addProducds} = ContextProvider()
  return (
    <button onClick={()=> addProducds(Product)} className='button flex justify-center rounded-full items-center cursor-pointer w-11 bg-brand-500 text-white'><Plus/></button>
  )
}

export default AddTocard