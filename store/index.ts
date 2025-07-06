import { Product, producttype } from '@/types'
import {create} from 'zustand'

interface ContextType{
    isOpen:boolean ,
    openClose:()=> void ,
    producds:producttype[] ,
    addProducds:(Product:producttype)=> void
}
export const ContextProvider=create<ContextType>((set)=>({
isOpen:false ,
addProducds(Product) {
    set((state)=>({
        producds:[...state.producds ,Product]
    }))
},
producds:[] ,
openClose() {
set((state)=>({
    isOpen:state.isOpen ? false : true
}))
},
}))