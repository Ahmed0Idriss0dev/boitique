import { UserButton } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import React from 'react'
import Add from '../kits/Add'

const Nav = () => {
  return (
    <div className='w-full h-12 border-b gap-1.5 flex  border-neutral-200 section justify-end items-center'>
        <Add/>
        <UserButton
      
        />
    </div>
  )
}

export default Nav