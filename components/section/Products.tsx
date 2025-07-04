import { Product } from '@/types'
import getProducts from '@/utils/getProducts'
import { MapPin, Truck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Remove from '../kits/Remove'

const Products = async () => {
    const data: Product[] = await getProducts()
    return (
        <div className='grid grid-cols-4 gap-2 '>
            {/* {
                data.map(({ price, description, title, Delivery, ProductsImageList , id  }, i) => (
                    <div key={i} className="w-full border border-neutral-200 h-full bg-white rounded-md">
                        {!ProductsImageList[0] ? (
                            <div className="w-full h-30 bg-neutral-100"></div>
                        ) :
                            <Image key={i} width={400} height={400} src={ProductsImageList[0] as string} alt="Uploaded" className="w-full object-cover h-30 rounded shadow" />
                        }
                        <div className="p-2.5">
                            <h3>{title}</h3>
                            <p>{price}DH </p>
                            <p>{Delivery ? <Truck/> : <MapPin/>} </p>
                            <Remove id={id} />
                        </div>
                    </div>
                ))
            } */}
            <div className="w-full h-70 border border-neutral-200 rounded-2xl"></div>
            <div className="w-full h-70 border border-neutral-200 rounded-2xl"></div>
            <div className="w-full h-70 border border-neutral-200 rounded-2xl"></div>
            <div className="w-full h-70 border border-neutral-200 rounded-2xl"></div>

        </div>)
}

export default Products