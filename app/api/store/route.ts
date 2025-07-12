export const runtime = 'nodejs'; 
import { NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'
import { GetProductsStore } from '@/client/db/curd';
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Access-key',
};
export async function POST(req: Request) {
   const AccessKey =  req.headers.get('Access-key')
   if(!AccessKey) return NextResponse.json({status:401})
   const Product = await GetProductsStore(AccessKey)
return new NextResponse(JSON.stringify({ Product }), {
    status: 200,
    headers: CORS_HEADERS,
  });  }
