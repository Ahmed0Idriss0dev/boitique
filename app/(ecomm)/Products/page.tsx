import Dailog from '@/components/kits/Dailog'
import getProducts from '@/utils/getProducts'
import React from 'react'

const page = async () => {
  const data = await getProducts()
  console.log(data)
  return (
    <>
    <Dailog/>
    <div>page</div>
    
    </>
  )
}

export default page