export const runtime = 'nodejs'; 
import { NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'
import { getById, GetProductsStore } from '@/client/db/curd';

export async function POST(req: Request , { params }: {params:{id:string}}) {
   const AccessKey =  req.headers.get('Access-key')
   const {id} = params
   if(!AccessKey) return NextResponse.json({status:401})
   const Product = await getById(id)
   return NextResponse.json({Product})
  }
