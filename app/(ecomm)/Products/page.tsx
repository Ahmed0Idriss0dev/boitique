import Add from '@/components/kits/Add'
import Loder from '@/components/kits/Loder'
import Products from '@/components/section/Products'
import React, { Suspense } from 'react'

const page = async () => {
  return (
    <>
      <div className="flex h-14 justify-between items-center gap-2 ">
        <h1 className='text-2xl'>Products</h1>
        <Add />
      </div>
      <Suspense fallback={<Loder />}>
        <Products />
      </Suspense>

    </>
  )
}

export default page