'use client'
import { buttonType } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { twMerge } from 'tailwind-merge'


const Button = ({icon ,label  , path}:buttonType) => {
  const ispath = usePathname()
  const isActive = ispath.startsWith(path) ? true : false ;
  const route = useRouter()
  const Gopath = ()=> route.push(path)
  return (
    <button onClick={Gopath} className={twMerge('button h-10 cursor-pointer flex justify-start gap-1 items-center px-3' , isActive ? 'bg-brand-600/15 border-0 text-brand-950':'opacity-70')}>
        
        <Image  src={icon as string} width={20} height={20} alt='icons'/>
        <span>{label} </span>
    </button>
  )

}

export default Button