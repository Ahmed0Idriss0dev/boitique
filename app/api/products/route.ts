export const runtime = 'nodejs'; 

import prisma from "@/utils/client"
import { auth, currentUser } from "@clerk/nextjs/server"
import { revalidatePath, revalidateTag } from "next/cache"
import { NextRequest, NextResponse } from "next/server"


///  <==============================Ahmed idriss=================================>
export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const data = await req.json()
   const { price,
    description,
    ProductsImageList,
    title,
    Delivery,
  } = data
  await prisma.products.create({
    data: {
      price: parseFloat(price),
      description,
      ProductsImageList,
      title,
      Delivery,
      userId,
    }
  })
  revalidateTag('collection')  
  return Response.json({ status: 200 })
}