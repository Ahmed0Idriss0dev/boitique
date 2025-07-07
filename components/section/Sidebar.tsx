import React from 'react'
import Logo from '../kits/Logo'
import Button from '../kits/Button'
import { ButtonLinks } from '../helper'

const Sidebar = () => {
  return (
    <aside className='w-full gap-2 flex-col border-r bg-neutral-50 border-neutral-200 h-full flex justify-between p-2'>
        <div className="w-full h-10 flex justify-start items-center">
        <Logo/>
        </div>
        <div className=" h-full py-3 flex flex-col gap-2 w-full rounded-md">
          
          {
              ButtonLinks.map(({icon ,label ,path}, i)=>(
                <Button 
                  key={i}
                  icon={icon}
                  label={label}
                  path={path}
                />

            ))
          }

        </div>
    </aside>
  )
}

export default Sidebar