import { Delete } from '@/client/db/curd'
import { Trash } from 'lucide-react'
import React from 'react'

const Remove =  ({id}:{id:string}) => {
  const Delete= async ()=>{
    try {
        const res = await fetch('/api/remove',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ProductId:id})
        })

    } catch (error) {
      
    }
  }
  
  return (

    <button onClick={Delete}  className='button text-white cursor-pointer h-10 w-40  bg-red-500  flex justify-center items-center'>
        Delete
    </button>
  )
}

export default Remove