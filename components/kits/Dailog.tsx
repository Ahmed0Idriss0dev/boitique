'use client'

import React, { useState } from 'react'
import { Switch } from '../ui/switch'
import Upload from './Upload'
import Image from 'next/image'
import Close from './close'
import { ContextProvider } from '@/store'

const Dailog = () => {
  const {openClose} =ContextProvider()
  
  const [imageData, setImageData] = useState<string[]>([])
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [        Delivery , setDelivery] = useState(false)
  const [loading, setLoading] = useState(false)

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const payload = {
       price , 
        description ,
        ProductsImageList :imageData,
        title ,
        Delivery ,
    }

    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      if (res.ok) {
        alert('Product added successfully!')
        // reset form
        setTitle('')
        setPrice('')
        setDescription('')
        setDelivery(false)
        setImageData([])
        openClose()
      } else {
        console.error(await res.text())
        alert('Something went wrong.')
      }
    } catch (err) {
      console.error(err)
      alert('Error submitting product.')
    } finally {
      setLoading(false)
    }
  }
   
  return (
    <div className='inset-0 p-7 overflow-auto bg-brand-950/10 fixed flex justify-center items-center'>
      <form onSubmit={handleSubmit} className="w-[490px] rounded-md space-y-2 p-4 z-10 bg-white border border-neutral-200 h-max">
        <div>
          <h1>Add new products</h1>
        </div>

        <div>
            {imageData.length < 3 ? '': <Upload onUpload={(url) => setImageData((prev) => [...prev, url])}/>
          }
          <div className="grid grid-cols-3 gap-2">
          {imageData.map((image, i) => (
            <Image key={i} width={400} height={400} src={image} alt="Uploaded" className="w-30 object-cover h-30 rounded shadow" />
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

          <div className="grid gap-2 grid-cols-[100px_1fr]">
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
      </form>
    </div>
  )
}

export default Dailog
