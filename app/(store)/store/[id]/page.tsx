import ProductsBard from '@/components/kits/store/components/ProductsBard'
import Searchbar from '@/components/kits/store/components/Searchbar'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-2.5 px-2'>
    <Searchbar/>
    <ProductsBard/>
    </div>
  )
}

export default page