import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Получение всех товаров
export async function GET() {
  try {
    const items = await prisma.catalogItem.findMany();
    return NextResponse.json(items);
  } catch (error) {
    console.error('Failed to fetch catalog items:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// Добавление нового товара
export async function POST(request) {
  try {
    const { title, description, price, imageUrl } = await request.json();
    const newItem = await prisma.catalogItem.create({
      data: {
        title,
        description,
        price: `${price} руб.`,
        imageUrl: imageUrl, // <- Добавляем "/images/" перед URL
      },
    //   `/images/${imageUrl}`
    });
    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error('Error creating catalog item:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


// Редактирование товара
export async function PUT(request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    const { title, description, price, imageUrl } = await request.json();

    const updatedItem = await prisma.catalogItem.update({
      where: { id: parseInt(id) },
      data: {
        title,
        description,
        price: parseFloat(price),
        imageUrl,
      },
    });

    return NextResponse.json(updatedItem);
  } catch (error) {
    console.error('Error updating catalog item:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// Удаление товара
export async function DELETE(request) {
    try {
      const { id } = await request.json();
  
      const deletedItem = await prisma.catalogItem.delete({
        where: { id: parseInt(id) },
      });
  
      return NextResponse.json(deletedItem);
    } catch (error) {
      console.error('Error deleting catalog item:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }
  
