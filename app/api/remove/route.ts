import { Delete } from "@/client/db/curd";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const {ProductId} = await req.json()
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  console.log(ProductId)
  if(!ProductId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await Delete(ProductId)
  return Response.json( { status: 200 })
}