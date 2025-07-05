import { Product } from '@/types'
import { MapPin, Truck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Remove from '../kits/Remove'

import { GetProducts } from '@/client/db/curd'


const Products = async  () => {
      const data:Product[] = await  GetProducts()
    
    return (
        <>
        {
            data && (

        <div className='grid grid-cols-4 gap-2 '>
            {
                data.map(({ price, description, title, Delivery , id  ,ProductImage }, i) => (
                    <div key={i} className="w-full flex flex-col justify-between  border border-neutral-200 h-full bg-white rounded-md">
                        {!ProductImage[0]  ? (
                            <div className="w-full h-30 bg-neutral-100"></div>
                        ) :
                            <Image key={i} width={400} height={400} src={ProductImage[0] as string} alt="Uploaded" className="w-full object-cover h-70 rounded shadow" />
                        }
                        <div className="p-2.5">
                            <h3 className='t '>{title}</h3>
                            <p className='text-sm opacity-90'>{price}DH </p>
                        </div>
                            <div className="flex p-2.5 justify-between items-center gap-1.5">
                                <p>{Delivery ? <Truck/> : <MapPin/>} </p>
                              <Remove id={id} />
                            </div>
                    </div>
                ))
            }
        

        </div>
            )
        }
        
        </>
        )
}

export default Products