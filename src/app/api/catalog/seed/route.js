import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST() {
  try {
    await prisma.catalogItem.deleteMany(); // Очистим таблицу перед вставкой

 const mockData  = [
  { id: 1, title: 'Система автополива', description: 'Полный комплект для автоматического полива сада.', price: '25 000 руб.', imageUrl: '/images/grass.png' },
  { id: 2, title: 'Распылитель воды', description: 'Эффективное распыление воды на 360°.', price: '1 500 руб.', imageUrl: '/images/grass.png' },
  { id: 3, title: 'Контроллер полива', description: 'Умное управление поливом через смартфон.', price: '9 990 руб.', imageUrl: '/images/grass.png' },
  { id: 4, title: 'Шланг для полива 20м', description: 'Гибкий и прочный, не заламывается.', price: '2 400 руб.', imageUrl: '/images/grass.png' },
  { id: 5, title: 'Дождеватель секторный', description: 'Идеально подходит для газонов и клумб.', price: '1 300 руб.', imageUrl: '/images/grass.png' },
  { id: 6, title: 'Фильтр для воды', description: 'Очищает воду перед подачей в систему.', price: '850 руб.', imageUrl: '/images/grass.png' },
  { id: 7, title: 'Таймер полива', description: 'Настройка времени полива на неделю вперёд.', price: '3 200 руб.', imageUrl: '/images/grass.png' },
  { id: 8, title: 'Насос для воды', description: 'Мощный и экономичный насос для дачи.', price: '14 500 руб.', imageUrl: '/images/grass.png' },
  { id: 9, title: 'Капельница регулируемая', description: 'Точный расход воды для каждого растения.', price: '90 руб.', imageUrl: '/images/grass.png' },
  { id: 10, title: 'Комплект фитингов', description: 'Все соединения для сборки системы.', price: '1 000 руб.', imageUrl: '/images/grass.png' },
  { id: 11, title: 'Система полива грядок', description: 'Лёгкая установка и высокая эффективность.', price: '7 500 руб.', imageUrl: '/images/grass.png' },
  { id: 12, title: 'Датчик влажности почвы', description: 'Автоматическое определение необходимости полива.', price: '2 700 руб.', imageUrl: '/images/grass.png' },
];
``


    await prisma.catalogItem.createMany({ data: mockData });

    return NextResponse.json({ message: 'Mock data inserted successfully!' });
  } catch (error) {
    console.error('Error inserting mock catalog items:', error);
    return NextResponse.json({ error: 'Failed to insert mock data' }, { status: 500 });
  }
}
