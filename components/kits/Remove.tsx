import prisma from '@/utils/client'
import { Trash } from 'lucide-react'
import { revalidatePath, revalidateTag } from 'next/cache'
import React from 'react'
import { mutate } from 'swr'

const Remove =  ({id}:{id:string}) => {
  async function Action() {
    "use server"
    await prisma.products.delete({
      where:{
        id
      }
    })
    revalidatePath('/Products')
  }
  return (
    <form action={Action}>

    <button  className='text-white h-10 w-10 bg-brand-500 rounded-full flex justify-center items-center'>
        <Trash/>
    </button>
    </form>
  )
}

export default Remove