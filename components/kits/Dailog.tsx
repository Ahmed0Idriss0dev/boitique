'use client'
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react'
import { Switch } from '../ui/switch'
import Upload from './Upload'
import Image from 'next/image'
import Close from './close'
import { ContextProvider } from '@/store'
import { useUser } from '@clerk/nextjs'
import {motion} from 'motion/react'
import Selects from './Select';
const Dailog = () => {
  const user = useUser()
  const {openClose} =ContextProvider()
  
  const [imageData, setImageData] = useState<string[]>([])
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [currency, setCurrency] = useState('')

  const [Delivery , setDelivery] = useState(false)
  const [loading, setLoading] = useState(false)

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const id = uuidv4()
    const payload = {
        id,
        price:parseFloat(price) , 
        description ,
        userId:user.user?.id ,
        ProductImage :imageData,
        title ,
        Delivery ,
        currency
    }
    if(!payload.title && !payload.ProductImage && !payload.price) return
    try {
      const res = await fetch(`/api/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      
      if (res.ok) {
        console.log(res.json)
        setTitle('')
        setPrice('')
        setDescription('')
        setDelivery(false)
        setImageData([])
        openClose()
      } else {
        console.log(await res.text())
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }
  return (
    <motion.div
     initial={{opacity:0 , }}
      animate={{opacity:1} }
      exit={{opacity:0 , }}
     className='inset-0 z-30 p-7 backdrop-blur-md overflow-auto bg-brand-950/10 fixed flex justify-center items-center'>
      <motion.form 
      initial={{opacity:0 , translateY:33}}
      animate={{opacity:1 , translateY:0}}
      exit={{opacity:0 , translateY:33}}
      onSubmit={handleSubmit} className="w-[490px] rounded-md space-y-2 p-4 z-10 bg-linear-90 from-white to-white border border-neutral-200 h-max">
        <div>
          <h1>Add new products</h1>
        </div>

        <div>
            {imageData.length ==3 ? '': <Upload onUpload={(url) => setImageData((prev) => [...prev, url])}/>
          }
          <div className="grid w-full py-1.5 grid-cols-3 gap-2">
          {imageData.map((image, i) => (
            <img key={i} width={400} height={400} src={image} alt="Uploaded" className="w-30 object-cover h-30 rounded shadow" />
          ))}

          </div>
        </div>

        <div className="grid grid-cols-1 gap-1">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="price">Price</label>
          <input
            type="number"
            placeholder="Price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="">Currency</label>
           <Selects HendleChange={(e)=> setCurrency(e)}/>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border outline outline-transparent focus:outline-brand-500 border-neutral-200 p-2 resize-none h-40 rounded-md"
          />

          <div className="flex items-center gap-1">
            <Switch
              checked={ Delivery }
              onCheckedChange={setDelivery}
              className="data-[state=checked]:bg-brand-500 bg-gray-300"
            />
            <span>Delivery</span>
          </div>

          <div className="grid gap-2 grid-cols-[200px_1fr]">
           <Close/>
            <button
              type="submit"
              className="button bg-brand-500 justify-center text-white"
              disabled={loading}
            >
              {loading ? 'Publishing...' : 'Publish'}
            </button>
          </div>
        </div>
      </motion.form>
    </motion.div>
  )
}

export default Dailog
