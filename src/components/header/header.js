import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header-style.module.css";
import AutoPolivLogo from "../logo";
import DropDownMenu from "./dropdown/dropdown";


const Header = () => {

    const catalogLinks = [
        { href: "/catalog/category1", label: "Категория 1" },
        { href: "/catalog/category2", label: "Категория 2" },
        { href: "/catalog/category3", label: "Категория 3" },
      ];
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Логотип */}
        <div className={styles.logoSection}>
       <AutoPolivLogo />
        </div>

        {/* Навигация */}
        <nav className={styles.nav}>
          <Link href="#">О нас</Link>
          <Link href="#">Новости</Link>
          <Link href="#">Услуги</Link>
          <Link href="#">Работы</Link>
          <Link href="#">Контакты</Link>
        
          <DropDownMenu title="Каталог ▾" links={catalogLinks} />

        </nav>

        

        {/* Контакты */}
        {/* <div className={styles.contacts}>
          <p>
            📍 г. Москва, Стройдвор Яуза, Осташковское шоссе 4с6, пав.6, ворота 6-1
          </p>
          <p>Пн-Пт: 09:00 - 18:00</p>
          <p>📞 8 (800) 500-47-49 (многоканальный)</p>
          <p>📞 +7 (930) 035-12-31 (проектный отдел)</p>
        </div> */}

        {/* Соцсети */}
        <div className={styles.social}>
          <Link href="https://wa.me/your-number">
            <Image src="/whatsapp-icon.svg" alt="WhatsApp" width={30} height={30} />
          </Link>
          <Link href="https://t.me/your-channel">
            <Image src="/tg-icon.svg" alt="Telegram" width={30} height={30} />
          </Link>
        </div>

    
      </div>
    </header>
  );
};

export default Header;
