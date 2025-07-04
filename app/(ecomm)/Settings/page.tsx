import { currentUser } from '@clerk/nextjs/server'
import { CopyPlusIcon } from 'lucide-react'
import React from 'react'

const page = async () => {
  const user = await currentUser()
  return (
    <div className='flex flex-col gap-2'>
      <div className="">
        <h3 className='text-[20px] '>Store acess key</h3>
        <p> Please keep it confidential to ensure the safety of your store.</p>
      </div>
      <div className="w-96 px-2.5 text-sm flex justify-between items-center h-11 bg-brand-50 border border-neutral-200 rounded-md">
        <p>{user?.id} </p>
        <button>
          <CopyPlusIcon className='text-brand-500'/>
        </button>
      </div>
    </div>
  )
}

export default page