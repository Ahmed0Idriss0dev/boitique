'use client'
import { ContextProvider } from '@/store'
import React from 'react'

const Search = () => {
  const {addKeywords ,producds} = ContextProvider()
  return (
    <div className='button w-70 h-11 '>
     <input placeholder='Search' className='w-full h-full outline-0' onInput={e=> addKeywords(e.currentTarget.value)} type="text" />
    </div>
  )
}

export default Search