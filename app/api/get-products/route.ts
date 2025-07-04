import prisma from "@/utils/client"
import { auth, currentUser } from "@clerk/nextjs/server"

export async function GET() {
   
  const user = await currentUser()
  const products = await prisma.products.findMany()
  console.log('hello',user?.id)
  return Response.json(products)
}