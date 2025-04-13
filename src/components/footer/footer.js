import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer-style.module.css";
import AutoPolivLogo from "../logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/"><AutoPolivLogo /></Link>
        </div>

        <div className={styles.social}>
          <Link href="https://t.me/your-channel">
            <Image src="/icons/tg-icon.svg" alt="Telegram" width={40} height={40} />
          </Link>
          <Link href="https://vk.com/your-page">
            <Image src="/icons/whatsapp-icon.svg" alt="Whatsapp" width={40} height={40} />
          </Link>
        </div>

        <div className={styles.copyright}>
          © 1999–2025 Автополив РФ
        </div>
      </div>
    </footer>
  );
};

export default Footer;
