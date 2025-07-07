export const runtime = 'nodejs'; 
import { NextResponse } from 'next/server'
import { auth, currentUser } from '@clerk/nextjs/server'
import { GetProducts } from '@/client/db/curd';

export async function POST(req: Request) {
      const { userId } = await auth();
      if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
       const data = await GetProducts()
      return NextResponse.json({data})
  }
