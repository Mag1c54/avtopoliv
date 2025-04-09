'use client';

import { useEffect, useState } from 'react';
import styles from './catalog-list-style.module.css';

export default function CatalogList() {
  const [catalog, setCatalog] = useState([]);

  const fetchCatalog = async () => {
    const res = await fetch('/api/catalog');
    const data = await res.json();
    setCatalog(data);
  };

  const deleteItem = async (id) => {
    try {
      await fetch('/api/catalog', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      fetchCatalog(); // обновить список после удаления
    } catch (error) {
      console.error('Ошибка удаления:', error);
    }
  };
  
  useEffect(() => {
    fetchCatalog();
  }, []);

  return (
    <div>
      <h2>Текущий каталог</h2>
      <ul className={styles.list}>
        {catalog.map((item) => (
          <li key={item.id} className={styles.item}>
            <strong>{item.title}</strong> — {item.price}₽
            <button onClick={() => deleteItem(item.id)} className={styles.deleteButton}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
