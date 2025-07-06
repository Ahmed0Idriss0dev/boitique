import { ShoppingBag } from 'lucide-react'
import React from 'react'

const Nav = () => {
  return (
    <nav className='w-full h-12 flex justify-between items-center bg-white'>
      <h1>Store</h1>
      <ShoppingBag/>
    </nav>
  )
}

export default Nav