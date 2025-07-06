import { motion} from 'motion/react'
import React from 'react'
import Close from '../../close'

function ShopingCard() {
  return (
<motion.div
     initial={{opacity:0 , }}
      animate={{opacity:1} }
      exit={{opacity:0 , }}
     className='inset-0 z-30  backdrop-blur-md overflow-auto bg-brand-950/10 fixed flex justify-center items-end'>
      <motion.div 
      initial={{opacity:0 , translateY:33}}
      animate={{opacity:1 , translateY:0}}
      exit={{opacity:0 , translateY:33}}
       className="w-full h-full flex flex-col justify-between gap-2 rounded-md space-y-2 p-4 z-10 bg-linear-90 from-brand-50 to-white border border-neutral-200">
        <div>
          <h1>Shoping card</h1>
        </div>
        <div className="w-full h-full bg-amber-100"></div>
        
          <div className="grid gap-2 grid-cols-[44px_1fr]">
           <Close/>
            <button
              type="submit"
              className="button bg-brand-500 justify-center text-white"
              
            >
              Pass la commond sure whatsapp
            </button>
          </div>
      </motion.div>
    </motion.div>  )
}

export default ShopingCard