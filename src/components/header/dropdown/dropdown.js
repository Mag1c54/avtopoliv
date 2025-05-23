"use client";

import React, { useState } from "react";
import styles from "./dropdown-style.module.css";
import Image from "next/image";
import Link from "next/link";

const DropdownMenu = ({ title, categories }) => {
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
          {categories.map((item) => (
            <Link href={item.href} key={item.id} className={styles.item}>
              <Image
                src={item.image || "/images/grass.png"}
                alt={item.name}
                width={50}
                height={50}
              />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
