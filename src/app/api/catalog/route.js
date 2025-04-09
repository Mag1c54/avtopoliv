import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const items = await prisma.catalogItem.findMany();
    return NextResponse.json(items);
  } catch (error) {
    console.error('Failed to fetch catalog items:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
