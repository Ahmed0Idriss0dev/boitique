export const runtime = 'nodejs'; 
import { NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'

export async function POST(req: Request) {
  const { userId } :{userId:string} = await req.json()
   return NextResponse.json({data:[]})
  }
