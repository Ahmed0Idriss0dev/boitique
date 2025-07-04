import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Nav = () => {
  return (
    <div className='w-full h-12 border-b flex  border-neutral-200 section justify-end items-center'>
        <UserButton/>
    </div>
  )
}

export default Nav