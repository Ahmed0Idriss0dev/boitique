export const runtime = 'nodejs'; 
import { NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'
import { GetProductsStore } from '@/client/db/curd';

export async function POST(req: Request) {
   const AccessKey =  req.headers.get('Access-key')
   if(!AccessKey) return NextResponse.json({status:401})
   const Product = await GetProductsStore(AccessKey)
   return NextResponse.json({Product})
  }
