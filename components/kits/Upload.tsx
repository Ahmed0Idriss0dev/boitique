import { UploadCloud } from 'lucide-react';
import { CldUploadWidget } from 'next-cloudinary';
import React from 'react'

const Upload = () => {
  return (
<CldUploadWidget
  uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!}
  onSuccess={(res, { widget }) => {
    
    widget.close();
  }}
 
  
>
  {({ open }) => (
   <div onClick={() => open?.()} className="w-full flex-col gap-0.5 h-40 border border-neutral-200 flex justify-center items-center">
     <UploadCloud/>
     <p>upload your products</p>
   </div>
)}
</CldUploadWidget>  )
}

export default Upload