export interface buttonType{
    icon:React.ReactNode ,
    label:string , 
    path:string 
}
export interface Product {
  id: string
  userId: string
  title: string
  description: string
  price: number
  Delivery: boolean
  ProductImage: string[]
}
