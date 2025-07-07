import { Product } from '@/types'
import { MoreVertical } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import DropDownMenu from './DropDownMenu'

const ProductCard = ({ Delivery, ProductImage, id, title, price, currency }: Product) => {
  return (
    <div className="w-full p-2 flex  justify-between  border border-neutral-200 h-full bg-white rounded-md">
      <div className="flex  items-center gap-2">
        {!ProductImage[0] ? (
          <div className="w-full h-40 bg-neutral-100"></div>
        ) :
          <Image width={400} height={400} src={ProductImage[0] as string} alt="Uploaded" className="w-20 object-cover h-20 rounded shadow" />
        }
        <div className="p-2.5">
          <h3 className='t '>{title}</h3>
          <p className='text-sm opacity-90'>
            {price}
            <span></span> {currency} </p>
          <span className='opacity-50 w-max text-sm '>{id} </span>
        </div>
      </div>

      <DropDownMenu id={id} />
    </div>)
}

export default ProductCard