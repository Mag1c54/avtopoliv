"use client"

import React, { useState } from "react";
import styles from "./dropdown-style.module.css";
import Image from "next/image";
import Link from "next/link";

const items = [
  { id: 1, name: 'Роторные дождеватели', image: '/images/grass.png', href: '/catalog' },
  { id: 2, name: 'Веерные дождеватели', image: '/images/grass.png', href: '/catalog' },
  { id: 3, name: 'Сопла', image: '/images/grass.png', href: '/catalog' },
  { id: 4, name: 'Гибкие колена', image: '/images/grass.png', href: '/catalog' },
  { id: 5, name: 'Клапаны', image: '/images/grass.png', href: '/catalog' },
  { id: 6, name: 'Пульты управления', image: '/images/grass.png', href: '/catalog' },
  // Добавь ещё по желанию
];

const DropdownMenu = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={styles.dropdown}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className={styles.dropbtn}>{title}</button>

      {isOpen && (
        <div className={styles.dropdownContent}>
          {items.map(item => (
            <Link href={item.href} key={item.id} className={styles.item}>
              <Image src={item.image} alt={item.name} width={50} height={50} />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
