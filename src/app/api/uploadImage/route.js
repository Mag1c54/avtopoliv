import cloudinary from '@/lib/cloud'; 
import { NextResponse } from 'next/server';

// Функция для загрузки с повторными попытками
async function uploadFileWithRetry(fileBuffer, retries = 3, delay = 2000) {
  let attempts = 0;
  let result;

  while (attempts < retries) {
    try {
      result = await new Promise((resolve, reject) => {
        const uploadResult = cloudinary.v2.uploader.upload_stream(
          { resource_type: 'auto' },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        uploadResult.end(fileBuffer);
      });
      return result;
    } catch (error) {
      attempts++;
      if (attempts < retries) {
        console.log(`Попытка ${attempts} не удалась, повторная попытка через ${delay / 1000} секунд.`);
        await new Promise(resolve => setTimeout(resolve, delay)); // Задержка между попытками
      } else {
        throw new Error(`Не удалось загрузить файл после ${retries} попыток: ${error.message}`);
      }
    }
  }
}

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get('file');

  if (!file) {
    return new NextResponse(JSON.stringify({ error: 'Нет файла' }), { status: 400 });
  }

  try {
    const fileBuffer = Buffer.from(await file.arrayBuffer());

    // Попытки загрузки с повторными попытками
    const uploadResult = await uploadFileWithRetry(fileBuffer);

    return new NextResponse(
      JSON.stringify({ imageUrl: uploadResult.secure_url }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Ошибка загрузки:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Не удалось загрузить изображение' }),
      { status: 500 }
    );
  }
}
