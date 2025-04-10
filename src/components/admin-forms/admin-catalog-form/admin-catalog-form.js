'use client';

import { useEffect, useState } from 'react';
import styles from './catalog-admin-style.module.css';
import Image from 'next/image';

export default function CatalogAdminForm() {
  const [catalog, setCatalog] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    imageUrl: '',
  });
  const [editingItem, setEditingItem] = useState(null);

  const fetchCatalog = async () => {
    const res = await fetch('/api/catalog');
    const data = await res.json();
    setCatalog(data);
  };

  const deleteItem = async (id) => {
    const confirmed = confirm('Удалить товар?');
    if (!confirmed) return;

    await fetch('/api/catalog', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchCatalog();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (editingItem) {
      setEditingItem({ ...editingItem, [name]: value });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/catalog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({ title: '', description: '', price: '', imageUrl: '' });
      fetchCatalog();
    } else {
      alert('Ошибка при добавлении!');
    }
  };

  const handleUpdate = async () => {
    const res = await fetch('/api/catalog', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editingItem),
    });

    if (res.ok) {
      setEditingItem(null);
      fetchCatalog();
    } else {
      alert('Ошибка при обновлении!');
    }
  };

  useEffect(() => {
    fetchCatalog();
  }, []);

  return (
    <section className={styles.catalogSection}>
      <button
        className={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Скрыть каталог' : 'Управление каталогом'}
      </button>

      {isOpen && (
        <>
          <h2 className={styles.title}>Добавить товар</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              name="title"
              placeholder="Название"
              value={form.title}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Описание"
              value={form.description}
              onChange={handleChange}
              required
            />
            <input
              name="price"
              placeholder="Цена"
              value={form.price}
              onChange={handleChange}
              required
            />
            <input
              name="imageUrl"
              placeholder="URL изображения"
              value={form.imageUrl}
              onChange={handleChange}
              required
            />
            <button type="submit">➕ Добавить товар</button>
          </form>

          <h2 className={styles.title}>Список товаров</h2>
          <div className={styles.catalogGrid}>
            {catalog.map((item) => (
              <div key={item.id} className={styles.card}>
                <Image src={item.imageUrl} alt={item.title} width={400} height={200} />
                <div className={styles.cardContent}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span>{item.price}₽</span>
                  <button
                    className={styles.deleteButton}
                    onClick={() => deleteItem(item.id)}
                  >
                    🗑️ Удалить
                  </button>
                  <button
                    className={styles.deleteButton}
                    onClick={() => setEditingItem(item)}
                  >
                    ✏️ Изменить
                  </button>
                </div>
              </div>
            ))}
          </div>

          {editingItem && (
  <div className={styles.editForm}>
    <h3>Редактировать товар</h3>
    <input
      name="title"
      placeholder="Название"
      value={editingItem.title}
      onChange={handleChange}
    />
    <textarea
      name="description"
      placeholder="Описание"
      value={editingItem.description}
      onChange={handleChange}
    />
    <input
      name="price"
      placeholder="Цена"
      value={editingItem.price}
      onChange={handleChange}
    />
    <input
      name="imageUrl"
      placeholder="URL изображения"
      value={editingItem.imageUrl}
      onChange={handleChange}
    />
    <div className={styles.editFormButtons}>
      <button className={styles.moreBtn} onClick={handleUpdate}>
        💾 Сохранить
      </button>
      <button
        className={styles.moreBtn}
        onClick={() => setEditingItem(null)}
      >
        ❌ Отмена
      </button>
    </div>
  </div>
)}

        </>
      )}
    </section>
  );
}
