import { Delete } from '@/client/db/curd'
import { Trash } from 'lucide-react'
import { revalidatePath, revalidateTag } from 'next/cache'
import React from 'react'
import { mutate } from 'swr'

const Remove =  ({id}:{id:string}) => {
  async function Action() {
    "use server"
   const data=  await Delete(id)
   console.log(data)
    revalidatePath('/Products')
  }
  return (
    <form action={Action}>
    <button  className='text-white cursor-pointer h-10 w-10 bg-brand-500 rounded-full flex justify-center items-center'>
        <Trash/>
    </button>
    </form>
  )
}

export default Remove