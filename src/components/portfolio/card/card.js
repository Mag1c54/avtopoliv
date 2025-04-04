import React from "react";
import styles from "./card-style.module.css";
import Image from "next/image";

const PortfolioCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <Image src={project.image} alt={project.title} width={350} height={200} className={styles.image} />
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
    </div>
  );
};

export default PortfolioCard;
