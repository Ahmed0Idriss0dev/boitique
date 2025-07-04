import Dailog from '@/components/kits/Dailog'
import Loder from '@/components/kits/Loder'
import Products from '@/components/section/Products'
import { Product } from '@/types'
import prisma from '@/utils/client'
import getProducts from '@/utils/getProducts'
import { currentUser } from '@clerk/nextjs/server'
import Image from 'next/image'
import React, { Suspense } from 'react'

const page = async () => {
  const user = await currentUser()
    return (
    <>
  <Suspense fallback={<Loder/>}>
     <Products/>
  </Suspense>
   {user?.id}
    
    </>
  )
}

export default page