import prisma from "@/utils/client"
import { auth, currentUser } from "@clerk/nextjs/server"

export async function GET() {
   const { userId } = await auth(); // this gets the currently authenticated user's ID

  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }
  console.log(userId)
  const products = await prisma.products.findMany({
    where: {
      userId:'user_2zPKUHEXsWMVpqi3KpjWGNvjGeK'
    }
  })
  
  return Response.json(products)
}