import { ShoppingBag } from 'lucide-react'
import React from 'react'
import Logo from '../../Logo'

const Nav = () => {
  return (
    <nav className='w-full h-12 flex px-2 justify-between items-center bg-white'>
      <Logo/>
      <ShoppingBag/>
    </nav>
  )
}

export default Nav