import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function handler(req) {
  const { method } = req;

  if (method === 'GET') {
    try {
      const categories = await prisma.category.findMany();
      return NextResponse.json(categories);
    } catch (error) {
      console.error("Ошибка при получении категорий:", error);
      return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
    }
  }

  if (method === 'POST') {
    try {
      const body = await req.json();
      const newCategory = await prisma.category.create({
        data: {
          name: body.name,
          href: body.href,
          imageUrl: body.image,
        },
      });
      return NextResponse.json(newCategory);
    } catch (error) {
      console.error("Ошибка при создании категории:", error);
      return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
    }
  }

  if (method === 'PUT') {
    try {
      const body = await req.json();
      const id = parseInt(body.id);
      const updated = await prisma.category.update({
        where: { id },
        data: {
          name: body.name,
          href: body.href,
          imageUrl: body.image,
        },
      });
      return NextResponse.json(updated);
    } catch (error) {
      console.error("Ошибка при обновлении категории:", error);
      return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
    }
  }

  if (method === 'DELETE') {
    try {
      const body = await req.json();
      const id = parseInt(body.id);
      await prisma.category.delete({
        where: { id },
      });
      return NextResponse.json({ message: "Удалено" });
    } catch (error) {
      console.error("Ошибка при удалении категории:", error);
      return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
    }
  }

  return NextResponse.json({ error: "Метод не поддерживается" }, { status: 405 });
}

// Чтобы Next.js знал, как обрабатывать все методы
export { handler as GET, handler as POST, handler as PUT, handler as DELETE };
