import { Search } from 'lucide-react'
import React from 'react'

const Searchbar = () => {
  return (
    <div className="flex button px-2 justify-between items-center">

        <input className='w-full outline-0 border-0 h-full ' placeholder='Find products' type="text" />
        <Search/>
    </div>
  )
}

export default Searchbar