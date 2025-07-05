export const runtime = 'nodejs'; 

import { WriteProducts } from "@/client/db/curd";
import { Product } from "@/types";
import { auth, currentUser } from "@clerk/nextjs/server"
import {  revalidateTag } from "next/cache"
import { NextRequest, NextResponse } from "next/server"


export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const data:Product = await req.json()
   
  WriteProducts(data)
  revalidateTag('collection')  
  return Response.json({ status: 200 })
}