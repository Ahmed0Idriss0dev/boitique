import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const Selects = ({HendleChange}:{HendleChange:(e:any)=> void}) => {
  return (
<Select  onValueChange={e=> HendleChange(e)}>
  <SelectTrigger className="w-[180px]">
    <SelectValue  defaultValue={'MAD'} placeholder='currency' />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="MAD">MAD</SelectItem>
    <SelectItem value="USD">USD</SelectItem>
    <SelectItem value="EUR">EUR</SelectItem>
  </SelectContent>
</Select>  )
}

export default Selects