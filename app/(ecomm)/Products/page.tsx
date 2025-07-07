import Add from '@/components/kits/Add'
import Loder from '@/components/kits/Loder'
import Search from '@/components/kits/Search'
import Products from '@/components/section/Products'
import React, { Suspense } from 'react'

const page = async () => {
  return (
    <>
      <div className="flex h-14 justify-between items-center gap-2 ">
        <h1 className='text-2xl'>Products</h1>
        <div className="flex items-center gap-1.5">
        <Search/>
        <Add />
        </div>
      </div>
      <Suspense fallback={<Loder />}>
        <Products />
      </Suspense>

    </>
  )
}

export default page