import { buttonType } from "@/types";
import { Box, Settings, ShoppingCart } from "lucide-react";

export const ButtonLinks:buttonType[] =[
    {
        icon:<Box/> ,
        label:'Products',
        path:'/Products'
    } ,
    {
        icon:<ShoppingCart/> ,
        label:'Store',
        path:'/store'
    } ,
    {
        icon:<Settings/> ,
        label:'Settings',
        path:'/Settings'
    }
]