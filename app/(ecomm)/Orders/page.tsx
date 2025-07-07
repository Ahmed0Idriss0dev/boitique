import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-dvh'>
       <div className="w-full flex-col h-full flex justify-center items-center">
         <Image src='/icons/Order.svg' className='w-40 h-40' width={400} height={400} alt='logo' />
         <p>🛒 No orders yet.</p>
       </div>
    </div>
  )
}

export default page