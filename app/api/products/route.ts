import prisma from "@/utils/client"
import { auth, currentUser } from "@clerk/nextjs/server"
import { NextRequest, NextResponse } from "next/server"

export async function  GET() {
    const user = await currentUser()
    const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const products = await prisma.products.findMany({
        where:{
            userId:user?.id
        }
    })
    return Response.json({hello:'world'})
}
export async function  POST(req:NextRequest) {
   const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const user = await currentUser()
    const data = await req.json()
    const users = user?.id 
    const { price , 
        description ,
        ProductsImageList ,
        title ,
        Delivery ,
         } = data
    const products= await prisma.products.create({
      data:{
        price:parseFloat(price) , 
        description ,
        ProductsImageList ,
        title ,
        Delivery ,
        userId ,
      }
    })
    return Response.json({hello:'world'} , {status:200}) 
}