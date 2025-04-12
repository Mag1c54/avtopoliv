"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./header-style.module.css";
import AutoPolivLogo from "../logo";
import DropDownMenu from "./dropdown/dropdown";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Статичные данные категорий
  const categories = [
    { id: 1, name: "Категория 1", href: "/catalog", image: "/images/grass.png" },
    { id: 2, name: "Категория 2", href: "/catalog", image: "/images/grass.png" },
    { id: 3, name: "Категория 3", href: "/catalog", image: "/images/grass.png" },
  ];

  const handleAnchorClick = (e, id) => {
    e.preventDefault();

    if (pathname === "/") {
      // Если мы уже на главной — просто скроллим
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Если не на главной — переходим с якорем
      router.push(`/#${id}`);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Link href="/"><AutoPolivLogo /></Link>
        </div>

        <nav className={styles.nav}>
          <a href="#about" onClick={(e) => handleAnchorClick(e, "about")}>О нас</a>
          <a href="#news" onClick={(e) => handleAnchorClick(e, "news")}>Новости</a>
          <a href="#services" onClick={(e) => handleAnchorClick(e, "services")}>Услуги</a>
          <a href="#projects" onClick={(e) => handleAnchorClick(e, "projects")}>Работы</a>
          <a href="#contacts" onClick={(e) => handleAnchorClick(e, "contacts")}>Контакты</a>

          {/* Передаем данные категорий в DropdownMenu */}
          <DropDownMenu title="Каталог ▾" categories={categories} />
        </nav>

        <div className={styles.social}>
          <Link href="https://wa.me/your-number">
            <Image src="/icons/whatsapp-icon.svg" alt="WhatsApp" width={30} height={30} />
          </Link>
          <Link href="https://t.me/your-channel">
            <Image src="/icons/tg-icon.svg" alt="Telegram" width={30} height={30} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
