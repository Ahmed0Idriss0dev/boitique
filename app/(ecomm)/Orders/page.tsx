import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-dvh'>
       <div className="w-full flex-col h-full flex justify-center items-center">
         <Image src='/order.svg' className='w-60 h-60' width={400} height={400} alt='logo' />
         <p>🛒 No orders yet.</p>
       </div>
    </div>
  )
}

export default page