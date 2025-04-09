'use client';
import { useState, useEffect } from 'react';
import styles from './news-style.module.css';
import Image from 'next/image';

const NewsBlock = () => {
  const [news, setNews] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch('/api/news');
      if (!res.ok) {
        console.error('Failed to fetch news');
        return;
      }

      const data = await res.json();
      setNews(data);
    };

    fetchNews();
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const visibleNews = news.slice(0, visibleCount);

  return (
    <section className={styles.newsSection} id="news">
      <h2 className={styles.title}>Свежие новости</h2>
      <div className={styles.newsGrid}>
        {visibleNews.map((item) => (
          <div key={item.id} className={styles.newsCard}>
            <Image
              src={item.imageUrl} // Используем imageUrl из данных
              alt={item.title}
              width={400}
              height={200}
              className={styles.newsImage}
            />
            <div className={styles.newsContent}>
              <h3 className={styles.newsTitle}>{item.title}</h3>
              <p className={styles.newsDate}>{new Date(item.createdAt).toLocaleDateString()}</p>
              <button className={styles.moreBtn}>Подробнее</button>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < news.length && (
        <button className={styles.allNewsBtn} onClick={handleShowMore}>
          Смотреть другие новости
        </button>
      )}
    </section>
  );
};

export default NewsBlock;
