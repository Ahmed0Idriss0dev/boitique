import {create} from 'zustand'
interface ContextType{
    isOpen:boolean ,
    openClose:()=> void
}
export const ContextProvider=create<ContextType>((set)=>({
isOpen:false ,
openClose() {
set((state)=>({
    isOpen:state.isOpen ? false : true
}))
},
}))