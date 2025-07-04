import Dailog from '@/components/kits/Dailog'
import { Product } from '@/types'
import prisma from '@/utils/client'
import getProducts from '@/utils/getProducts'
import { currentUser } from '@clerk/nextjs/server'
import Image from 'next/image'
import React from 'react'

const page = async () => {
  const data: Product[] = await getProducts()
    return (
    <>
   
    <div className='grid grid-cols-4 gap-2 p-2'>
      {
        data.map(({price ,description ,title ,Delivery , ProductsImageList}, i)=>(
          <div key={i} className="w-ful border border-neutral-200 h-full bg-white rounded-md">
            {!ProductsImageList[0] ? (
              <div className="w-full h-30 bg-neutral-100"></div>
            ):            <Image key={i} width={400} height={400} src={ProductsImageList[0] as string} alt="Uploaded" className="w-full object-cover h-30 rounded shadow" />
            }
            <div className="p-2.5">

            <h3>{title}</h3>
            <p>{price}DH </p>
             <p>{Delivery ? 'yse':'no'} </p>
            </div>
          </div>
        ))
      }
    </div>
    
    </>
  )
}

export default page