'use client';
import { useState } from 'react';
import styles from './news-style.module.css';
import Image from 'next/image';

const allNews = [
  {
    id: 1,
    title: 'Автополив для цветников: как сохранить красоту клумб без лишних забот',
    date: '19.03.2025',
    image: '/images/grass.png',
  },
  {
    id: 2,
    title: 'Автополив и красота сада: как грамотно организовать систему',
    date: '13.03.2025',
    image: '/images/grass.png',
  },
  {
    id: 3,
    title: 'Автополив для альпийских горок и рокариев: особенности монтажа',
    date: '05.03.2025',
    image: '/images/grass.png',
  },
  {
    id: 4,
    title: 'Как выбрать систему автополива для участка',
    date: '01.03.2025',
    image: '/images/grass.png',
  },
  {
    id: 5,
    title: 'Умный автополив: интеграция с IoT и датчиками',
    date: '25.02.2025',
    image: '/images/grass.png',
  },
  {
    id: 6,
    title: 'Весеннее обслуживание автополива: чек-лист',
    date: '15.02.2025',
    image: '/images/grass.png',
  },
];

const NewsBlock = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const visibleNews = allNews.slice(0, visibleCount);

  return (
    <section className={styles.newsSection} id='news'>
      <h2 className={styles.title}>Свежие новости</h2>
      <div className={styles.newsGrid}>
        {visibleNews.map((item) => (
          <div key={item.id} className={styles.newsCard}>
            <Image src={item.image} alt={item.title} width={400} height={200} className={styles.newsImage} />
            <div className={styles.newsContent}>
              <h3 className={styles.newsTitle}>{item.title}</h3>
              <p className={styles.newsDate}>{item.date}</p>
              <button className={styles.moreBtn}>Подробнее</button>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < allNews.length && (
        <button className={styles.allNewsBtn} onClick={handleShowMore}>
          Смотреть другие новости
        </button>
      )}
    </section>
  );
};

export default NewsBlock;
