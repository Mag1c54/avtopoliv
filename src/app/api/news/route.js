import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const news = await prisma.news.findMany({
      orderBy: { createdAt: 'desc' },
    });

    // Преобразуем дату в строку, если нужно
    const formattedNews = news.map(item => ({
      ...item,
      createdAt: item.createdAt.toISOString(), // Преобразуем дату в строку
    }));

    return NextResponse.json(formattedNews);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
