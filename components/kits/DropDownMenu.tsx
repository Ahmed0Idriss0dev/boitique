'use client'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Remove from './Remove'
import { MoreVertical } from 'lucide-react'
function DropDownMenu({id}:{id:string}) {
  return (
<DropdownMenu>
  <DropdownMenuTrigger>
    <MoreVertical/>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>
        Delete
    </DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Edite</DropdownMenuItem>
    <DropdownMenuItem>
        <Remove id={id}/>
    </DropdownMenuItem>

   
  </DropdownMenuContent>
</DropdownMenu>  )
}

export default DropDownMenu
 