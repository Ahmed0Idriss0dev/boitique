import { UploadCloud } from 'lucide-react';
import { CldUploadWidget } from 'next-cloudinary';
import React from 'react'
interface OnUpload{
    onUpload:(url:string)=> void
}
const Upload = ({onUpload}:OnUpload) => {
  return (
<CldUploadWidget
  uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!}
  onSuccess={(res, { widget }) => {
    onUpload(res.info.secure_url)
    widget.close();
  }}
   >
  {({ open }) => (
   <div onClick={() => open?.()} className="w-full cursor-pointer rounded-2xl flex-col gap-0.5 h-40 border border-neutral-200 flex justify-center items-center">
     <UploadCloud/>
     <p>upload your products</p>
   </div>
)}
</CldUploadWidget>  )
}

export default Upload