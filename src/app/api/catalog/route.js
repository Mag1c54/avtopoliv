import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const items = await prisma.catalogItem.findMany();
  return NextResponse.json(items);
}

export async function POST(req) {
  const body = await req.json();
  const newItem = await prisma.catalogItem.create({
    data: {
      title: body.title,
      description: body.description,
      price: body.price,
      imageUrl: body.imageUrl,
      
    },
    
  });
  console.log(body)
  return NextResponse.json(newItem);
}

export async function PUT(req) {
  const body = await req.json();
  const updatedItem = await prisma.catalogItem.update({
    where: { id: body.id },
    data: {
      title: body.title,
      description: body.description,
      price: body.price,
      imageUrl: body.imageUrl,
    },
  });

  return NextResponse.json(updatedItem);
}

export async function DELETE(req) {
  const body = await req.json();

  await prisma.catalogItem.delete({
    where: { id: body.id },
  });

  return NextResponse.json({ message: 'Удалено' });
}
