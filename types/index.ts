export interface buttonType{
    icon:string ,
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
  ProductImage: string[] ,
  currency?:string ,
}
export interface producttype{
    price:number ,
    title:string , 
    ProductImage:string[]
}