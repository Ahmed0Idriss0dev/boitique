export const runtime = 'nodejs'; 
import { NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'
import prisma from '@/utils/client'

export async function POST(req: Request) {
  const { userId } :{userId:string} = await req.json()

  const products = await prisma.products.findMany({})

  return NextResponse.json({products})
}
