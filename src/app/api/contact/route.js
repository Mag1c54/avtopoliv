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
