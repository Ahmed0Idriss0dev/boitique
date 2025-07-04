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
        label:'Orders',
        path:'/Orders'
    } ,
    {
        icon:<Settings/> ,
        label:'Settings',
        path:'/Settings'
    }
]