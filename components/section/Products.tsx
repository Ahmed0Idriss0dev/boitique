'use client'
import { Product } from '@/types'
import { MapPin, MoreVertical, Truck } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ProductCard from '../kits/ProductCard'
import { ContextProvider } from '@/store'


const Products = () => {
    const {producds} = ContextProvider()
    const [data , setdata] = useState<Product[]>([])
    useEffect(() => {
        const res = async()=> {
          const response = await fetch(`/api/get-products`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
         const json = await response.json()
         console.log(json.data)
         setdata(json.data)
        }
        res()
        console.log(data)
    }, [])
    const Produts = data.filter((item)=>{
        const tolower = item.title.toLowerCase().trim()
        const key = producds.toLowerCase().trim()
        const data = tolower.startsWith(key)
        return data
    })
    return (
        <>
            {
                data[0] ? (
                    <div className='flex flex-col gap-1 '>
                        {
                            Produts.map(({ price, description, title, Delivery, ProductImage, $id, currency }, i) => (
                                <ProductCard currency={currency} description={description} id={$id} userId={''} key={i} Delivery={Delivery} title={title} ProductImage={ProductImage} price={price} />
                            ))
                        }
                    </div>
                ) :
                    <div className="flex w-full h-full justify-center items-center">
                        <Image src='/logo/noProduct.svg' className='w-50' width={400} height={400} alt='logo' />
                    </div>
            }

        </>
    )
}

export default Products