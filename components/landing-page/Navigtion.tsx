import React from 'react'
import Logo from '../kist/Logo'
import Link from 'next/link'

const Navigtion = () => {
  return (
    <nav className='section flex justify-between items-center gap-1 py-2'>
        <Logo/>
        <div className="flex items-center gap-1">
          <Link className='button w-40 flex justify-center items-center' href={'/sign-in'}>
            login
          </Link>
          <Link className='button border-0 bg-brand-500 text-white w-40 flex justify-center items-center' href={'/sign-in'}>
            Sign Up
          </Link>
        </div>
    </nav>
  )
}

export default Navigtion