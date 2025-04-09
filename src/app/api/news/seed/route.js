import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST() {
  try {
    await prisma.news.deleteMany(); // Очистим таблицу перед вставкой

 const mockData  = [
  
  { id: 2, title:"wdawdawdwad" ,content:"dwdwdwdadadada", imageUrl: '/images/grass.png' },
  { id: 3, title:"wdawdawdwad" ,content:"dwdwdwdadadada", imageUrl: '/images/grass.png' },
  { id: 4, title:"wdawdawdwad" ,content:"dwdwdwdadadada", imageUrl: '/images/grass.png' },
  { id: 5, title:"wdawdawdwad" ,content:"dwdwdwdadadada", imageUrl: '/images/grass.png' },
  { id: 6, title:"wdawdawdwad" ,content:"dwdwdwdadadada", imageUrl: '/images/grass.png' },
  { id: 7, title:"wdawdawdwad" ,content:"dwdwdwdadadada", imageUrl: '/images/grass.png' },
  { id: 8, title:"wdawdawdwad" ,content:"dwdwdwdadadada", imageUrl: '/images/grass.png' },
  { id: 9, title:"wdawdawdwad" ,content:"dwdwdwdadadada", imageUrl: '/images/grass.png' },
 ]



    await prisma.news.createMany({ data: mockData });

    return NextResponse.json({ message: 'Mock data inserted successfully!' });
  } catch (error) {
    console.error('Error inserting mock catalog items:', error);
    return NextResponse.json({ error: 'Failed to insert mock data' }, { status: 500 });
  }
}
