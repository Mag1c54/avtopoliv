'use client';

import { useState } from 'react';

import CatalogAdminForm from '@/components/admin-forms/admin-catalog-form/admin-catalog-form';
import NewsAdminBlock from '@/components/admin-forms/admin-news-form/admin-news-form';
import ContactAdminForm from '@/components/admin-forms/admin-contact-form/admin-contact-form';
import LogoutButton from '@/components/logout-button/logoutButton';

import styles from './admin-style-main.module.css';

export default function AdminDashboardContent() {
  const [activeTab, setActiveTab] = useState('catalog');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.adminContainer}>
      <button
        className={styles.menuToggle}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰ Меню
      </button>

      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.showSidebar : ''}`}>
        <button onClick={() => { setActiveTab('catalog'); setSidebarOpen(false); }}>📦 Каталог</button>
        <button onClick={() => { setActiveTab('news'); setSidebarOpen(false); }}>📰 Новости</button>
        <button onClick={() => { setActiveTab('contacts'); setSidebarOpen(false); }}>📬 Обратная связь</button>
        <LogoutButton />
      </aside>

      <main className={styles.mainContent}>
        {activeTab === 'catalog' && <CatalogAdminForm />}
        {activeTab === 'news' && <NewsAdminBlock />}
        {activeTab === 'contacts' && <ContactAdminForm />}
      </main>
    </div>
  );
}
