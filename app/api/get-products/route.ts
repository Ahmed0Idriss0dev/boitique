// /api/get-products/route.ts (Next.js 13/14 App Router)
import { NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'
import prisma from '@/utils/client'

export async function POST(req: Request) {
  const { userId } :{userId:string} = await req.json()

  const products = await prisma.products.findMany({
    where: { userId }
  })

  return NextResponse.json({products})
}
