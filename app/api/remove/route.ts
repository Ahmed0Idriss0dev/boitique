import { Prisma } from "@/lib/generated/prisma";
import prisma from "@/utils/client";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const user = await currentUser()
  const data = await req.json()
  const users = user?.id
  const { id} = data
  const products = await prisma.products.delete({
    where:{id}
  })
  revalidateTag('collection')  
  return Response.json( { status: 200 })
}