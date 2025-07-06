'use client'
import ShopingCard from '@/components/kits/store/components/ShopingCard';
import { ContextProvider } from '@/store';
import { AnimatePresence } from 'motion/react';
import React from 'react'

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    const {isOpen} = ContextProvider()
  return (
  <>
  {isOpen && <ShopingCard/>}
 
  {children}
  </>
  )
}

export default Provider