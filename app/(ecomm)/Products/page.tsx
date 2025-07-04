import Dailog from '@/components/kits/Dailog'
import { Product } from '@/types'
import prisma from '@/utils/client'
import getProducts from '@/utils/getProducts'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const page = async () => {
  const data: Product[] = await getProducts()
    return (
    <>
   
    <div>
      {
        data.map(({price ,description ,title}, i)=>(
          <div className="w-full h-full bg-white rounded-md">
            <h1>

              {title}
            </h1>
          </div>
        ))
      }
    </div>
    
    </>
  )
}

export default page