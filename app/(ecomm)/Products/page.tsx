import { GetProducts, WriteProducts } from '@/client/db/curd'
import Add from '@/components/kits/Add'
import Dailog from '@/components/kits/Dailog'
import Loder from '@/components/kits/Loder'
import Products from '@/components/section/Products'
import { Product } from '@/types'
import getProducts from '@/utils/getProducts'
import { currentUser } from '@clerk/nextjs/server'
import Image from 'next/image'
import React, { Suspense } from 'react'

const page = async () => {
    return (
    <>
    <div className="flex h-14 justify-between items-center gap-2 ">
      <h1 className='text-2xl'>Products</h1>
      <Add/>
    </div>
  <Suspense fallback={<Loder/>}>
     <Products/>
  </Suspense>
  
    </>
  )
}

export default page