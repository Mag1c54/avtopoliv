import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const news = await prisma.news.findMany({
      orderBy: { createdAt: 'desc' },
    });

    const formattedNews = news.map(item => ({
      ...item,
      createdAt: item.createdAt.toISOString(),
    }));

    return NextResponse.json(formattedNews);
  } catch (error) {
    console.error(error);
    return new NextResponse('Ошибка сервера', { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    await prisma.news.delete({
      where: { id: Number(id) },
    });

    return new NextResponse('Новость удалена', { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse('Ошибка при удалении', { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const { id, title, content, imageUrl } = await req.json();

    const updated = await prisma.news.update({
      where: { id: Number(id) },
      data: { title, content, imageUrl },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error(error);
    return new NextResponse('Ошибка при обновлении', { status: 500 });
  }
}
export async function POST(req) {
  try {
    const { title, content, imageUrl } = await req.json();

    if (!title || !content || !imageUrl) {
      return new NextResponse('Все поля обязательны', { status: 400 });
    }

    const newNews = await prisma.news.create({
      data: {
        title,
        content,
        imageUrl,
      },
    });

    return NextResponse.json({
      ...newNews,
      createdAt: newNews.createdAt.toISOString(),
    });
  } catch (error) {
    console.error(error);
    return new NextResponse('Ошибка при создании новости', { status: 500 });
  }
}

