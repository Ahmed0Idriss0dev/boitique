import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <header className='section flex justify-center items-center h-dvh'>
        <div className="flex justify-center items-center flex-col gap-2">
            <div className="text-center">
                <h1 className='text-5xl'>All-in-One E-Commerce <br /> Management Platform</h1>
                <p className='opacity-90 text-md'>anage your products, orders, inventory, and analytics across multiple stores <br /> all from one powerful dashboard. Designed for growing brands, made for smarter selling.</p>
            </div>
             <Link className='button border-0 bg-black text-white w-40 flex justify-center items-center' href={'/Products'}>
                Get started
            </Link>
        </div>
    </header>
  )
}

export default Hero