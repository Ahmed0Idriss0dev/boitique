'use client'
import { Product } from '@/types'
import { MapPin, MoreVertical, Truck } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { GetProducts } from '@/client/db/curd'
import ProductCard from '../kits/ProductCard'


const Products = () => {
    const [data , setdata] = useState([])
    useEffect(() => {
        async function get() {
            try {
                const response = await fetch(`/api/get-products`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                const data = await response.json()
                console.log(data)
            } catch (error) {

            }
        }
        get()
    }, [])
    const results = data.filter((item) => item.currency.startsWith("E"));
    return (
        <>
            {
                data[0] ? (
                    <div className='flex flex-col gap-1 '>
                        {
                            results.map(({ price, description, title, Delivery, ProductImage, $id, currency }, i) => (
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