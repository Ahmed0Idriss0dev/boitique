import { Product } from '@/types'
import { MapPin, MoreVertical, Truck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Remove from '../kits/Remove'

import { GetProducts } from '@/client/db/curd'
import ProductCard from '../kits/ProductCard'


const Products = async  () => {
      const data:Product[] = await  GetProducts()
    return (
        <>
        {
            data[0] ? (

        <div className='flex flex-col gap-1 '>
            {
                data.map(({ price, description, title, Delivery   ,ProductImage , $id ,currency}, i) => (
                  <ProductCard currency={currency} description={description} id={$id} userId={''} key={i} Delivery={Delivery} title={title} ProductImage={ProductImage} price={price}  />
                ))
            }
        

        </div>
            ) :
            <div className="flex w-full h-full justify-center items-center">

                <Image src='/logo/noProduct.svg' className='w-50'  width={400} height={400} alt='logo'/>
            </div>
        }
        
        </>
        )
}

export default Products