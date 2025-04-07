import React from "react";
import styles from "./portfolio-styles.module.css";
import ProjectCard from "./card/card";

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
    image: "/images/grass-alternative.jpg",
    description: "Система капельного полива для плодовых деревьев и кустарников.",
  },
  {
    id: 3,
    title: "Автоматизированный полив спортивного поля",
    image: "/images/grass-alternative.jpg",
    description: "Монтаж системы спринклеров для футбольного газона.",
  },
];

const Portfolio = () => {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.title}>Наши работы</h2>
      <p className={styles.subtitle}>Мы успешно реализовали множество проектов по автоматическому поливу.</p>

      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
