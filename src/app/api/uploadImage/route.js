import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get('file');

  if (!file) {
    return new Response(JSON.stringify({ error: 'Нет файла' }), { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${Date.now()}-${file.name}`;

  const filepath = path.join(process.cwd(), 'public', 'images', filename);

  await writeFile(filepath, buffer);

  return new Response(JSON.stringify({ imageUrl: `/images/${filename}` }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
