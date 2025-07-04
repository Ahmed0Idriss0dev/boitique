'use client'
import { buttonType } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { twMerge } from 'tailwind-merge'


const Button = ({icon ,label  , path}:buttonType) => {
  const ispath = usePathname()
  const isActive = ispath.startsWith(path) ? true : false
  return (
    <Link href={path} className={twMerge('button cursor-pointer flex justify-start gap-1 items-center px-3' , isActive ? 'bg-brand-600 border-0 text-white':'opacity-70')}>
        {icon}
        <span>{label} </span>
    </Link>
  )

}

export default Button