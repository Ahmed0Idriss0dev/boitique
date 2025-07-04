'use client'
import { Trash } from 'lucide-react'
import React from 'react'

const Remove =  ({id}:{id:string}) => {
  async function Remove() {
    const res = await fetch('/api/remove', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
      })
  }
  return (
    <button onClick={Remove} className='text-brand-950 bg-'>
        <Trash/>
    </button>
  )
}

export default Remove