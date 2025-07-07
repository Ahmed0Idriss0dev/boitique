import { Product, producttype } from '@/types'
import {create} from 'zustand'

interface ContextType{
    isOpen:boolean ,
    openClose:()=> void ,
    producds:string ,
    addKeywords:(key:string)=> void ,
}
export const ContextProvider=create<ContextType>((set)=>({
isOpen:false ,
addKeywords(key) {
    set({producds:key})
},
producds:'' ,
openClose() {
set((state)=>({
    isOpen:state.isOpen ? false : true
}))
},
}))