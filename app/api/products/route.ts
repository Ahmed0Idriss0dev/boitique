import prisma from "@/utils/client"
import { auth, currentUser } from "@clerk/nextjs/server"
import { revalidatePath, revalidateTag } from "next/cache"
import { NextRequest, NextResponse } from "next/server"


///  <==============================Ahmed idriss=================================>
export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const user = await currentUser()
  const data = await req.json()
  const users = user?.id
  const { price,
    description,
    ProductsImageList,
    title,
    Delivery,
  } = data
  const products = await prisma.products.create({
    data: {
      price: parseFloat(price),
      description,
      ProductsImageList,
      title,
      Delivery,
      userId,
    }
  })
  revalidateTag('data')
  revalidatePath('/Products')
  return Response.json({ hello: 'world' }, { status: 200 })
}