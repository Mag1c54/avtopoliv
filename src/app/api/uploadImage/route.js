import { writeFile } from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get('file');

  if (!file) {
    return new NextResponse(JSON.stringify({ error: 'Нет файла' }), { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${Date.now()}-${file.name}`;
  const filepath = path.join(process.cwd(), 'public', 'images', filename);

  // Записываем файл на сервер
  await writeFile(filepath, buffer);

  return new NextResponse(JSON.stringify({ imageUrl: `/images/${filename}` }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
