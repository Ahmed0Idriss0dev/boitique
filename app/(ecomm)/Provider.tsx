'use client'
import Dailog from '@/components/kits/Dailog';
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
  {isOpen && <Dailog/>}
 
  {children}
  </>
  )
}

export default Provider