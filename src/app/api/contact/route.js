// src/app/api/contact/route.js
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'Все поля обязательны' }, { status: 400 });
    }

    const newContact = await prisma.contactRequest.create({
      data: {
        name,
        email,
        phone,
        message,
      },
    });

    return NextResponse.json(newContact);
  } catch (error) {
    console.error('Ошибка при создании контакта:', error);
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}
export async function GET() {
  try {
    const contacts = await prisma.contactRequest.findMany();
    return NextResponse.json(contacts);
  } catch (error) {
    console.error('Ошибка при получении контактов:', error);
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}

// DELETE запрос для удаления контакта по ID
export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: 'ID обязательное поле' }, { status: 400 });
    }

    await prisma.contactRequest.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Контакт удален' });
  } catch (error) {
    console.error('Ошибка при удалении контакта:', error);
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}
