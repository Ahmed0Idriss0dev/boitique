import { buttonType } from "@/types";
import { Box, Settings, ShoppingCart } from "lucide-react";

export const ButtonLinks:buttonType[] =[
    //==== ===
    {
        icon:'/icons/box.svg' ,
        label:'Products',
        path:'/Products'
    } ,
     //==== === = === === === === === 
    {
        icon:'/icons/Order.svg' ,
        label:'Orders',
        path:'/Orders'
    } ,
    /// ===------- ===== /// ====>
    {
        icon:'/icons/Settings.svg' ,
        label:'Settings',
        path:'/Settings'
    }
]