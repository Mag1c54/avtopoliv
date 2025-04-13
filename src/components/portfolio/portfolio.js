'use client';

import React, { useState, useEffect } from 'react';
import styles from './portfolio-styles.module.css';
import ProjectCard from './card/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

const projects = [
  {
    id: 1,
    title: "Автополив газона в частном доме",
    image: "/images/grass-alternative.jpg",
    description: "Полный монтаж автоматической системы полива на участке 10 соток.",
  },
  {
    id: 2,
    title: "Орошение сада в коттедже",
    video: "/grass.mp4",
    image: "/images/grass-alternative.jpg",
    description: "Система капельного полива для плодовых деревьев и кустарников.",
  },
  {
    id: 3,
    title: "Автоматизированный полив спортивного поля",
    image: "/images/grass-alternative.jpg",
    description: "Монтаж системы спринклеров для футбольного газона.",
  },
  {
    id: 4,
    title: "Автополив газона в частном доме",
    image: "/images/grass-alternative.jpg",
    description: "Полный монтаж автоматической системы полива на участке 10 соток.",
  },
  {
    id: 5,
    title: "Орошение сада в коттедже",
    video: "/grass.mp4",
    image: "/images/grass-alternative.jpg",
    description: "Система капельного полива для плодовых деревьев и кустарников.",
  },
  {
    id: 6,
    title: "Автоматизированный полив спортивного поля",
    image: "/images/grass-alternative.jpg",
    description: "Монтаж системы спринклеров для футбольного газона.",
  },
];

const Portfolio = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3); // для десктопов
      } else {
        setItemsPerView(1); // для мобильных
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);

    return () => {
      window.removeEventListener('resize', updateItemsPerView);
    };
  }, []);

  const maxIndex = Math.floor(projects.length / itemsPerView);

  const handlePrev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.title}>Наши работы</h2>
      <p className={styles.subtitle}>
        Мы успешно реализовали множество проектов по автоматическому поливу.
      </p>

      <div className={styles.carouselWrapper}>
        <button className={styles.arrow} onClick={handlePrev}>
          <ChevronLeft size={32} />
        </button>

        <div className={styles.carousel} {...handlers}>
          <div
            className={styles.inner}
            style={{ transform: `translateX(-${index * (100 / itemsPerView)}%)` }}
          >
            {projects.map((project) => (
              <div key={project.id} className={styles.slide}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        <button className={styles.arrow} onClick={handleNext}>
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
