'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './admin-style-news.module.css';

const NewsAdminBlock = () => {
  const [news, setNews] = useState([]);
  const [editingNews, setEditingNews] = useState(null);
  const [newNews, setNewNews] = useState({
    title: '',
    content: '',
    imageUrl: ''
  });
  const [isOpen, setIsOpen] = useState(false); // 🔧 добавлено состояние

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch('/api/news');
      if (res.ok) {
        const data = await res.json();
        setNews(data);
      }
    };

    fetchNews();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = confirm('Удалить новость?');
    if (!confirmed) return;

    const res = await fetch('/api/news', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      setNews(news.filter((n) => n.id !== id));
    } else {
      alert('Ошибка при удалении');
    }
  };

  const handleUpdate = async () => {
    const res = await fetch('/api/news', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editingNews),
    });

    if (res.ok) {
      const updated = await res.json();
      setNews(news.map((n) => (n.id === updated.id ? updated : n)));
      setEditingNews(null);
    } else {
      alert('Ошибка при обновлении');
    }
  };

  const handleCreate = async () => {
    console.log(handleCreate)
    const res = await fetch('/api/news', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newNews),
    });

    if (res.ok) {
      const created = await res.json();
      setNews([created, ...news]);
      setNewNews({ title: '', content: '', imageUrl: '' });
    } else {
      alert('Ошибка при создании');
    }
  };

  return (
    <section className={styles.newsSection}>
      <button
        className={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Скрыть новости' : 'Управление новостями'}
      </button>

      {isOpen && (
        <>
          <h2 className={styles.title}>Управление новостями</h2>

          {/* --- Add Form --- */}
          <div className={styles.editForm}>
            <h3>Добавить новость</h3>
            <input
              type="text"
              placeholder="Заголовок"
              value={newNews.title}
              onChange={(e) => setNewNews({ ...newNews, title: e.target.value })}
            />
            <textarea
              placeholder="Контент"
              value={newNews.content}
              onChange={(e) => setNewNews({ ...newNews, content: e.target.value })}
            />
            <input
              type="text"
              placeholder="URL изображения"
              value={newNews.imageUrl}
              onChange={(e) => setNewNews({ ...newNews, imageUrl: e.target.value })}
            />
            <button className={styles.moreBtn} onClick={handleCreate}>
              ➕ Добавить новость
            </button>
          </div>

          {/* --- News List --- */}
          <div className={styles.newsGrid}>
            {news.map((item) => (
              <div key={item.id} className={styles.newsCard}>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={400}
                  height={200}
                  className={styles.newsImage}
                />
                <div className={styles.newsContent}>
                  <h3 className={styles.newsTitle}>{item.title}</h3>
                  <p className={styles.newsDate}>
                    {new Date(item.createdAt).toLocaleDateString()}
                  </p>
                  <button
                    className={styles.moreBtn}
                    onClick={() => setEditingNews(item)}
                  >
                    ✏️ Изменить
                  </button>
                  <button
                    className={styles.moreBtn}
                    onClick={() => handleDelete(item.id)}
                  >
                    🗑️ Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* --- Edit Form --- */}
          {editingNews && (
            <div className={styles.editForm}>
              <h3>Редактировать новость</h3>
              <input
                type="text"
                placeholder="Заголовок"
                value={editingNews.title}
                onChange={(e) =>
                  setEditingNews({ ...editingNews, title: e.target.value })
                }
              />
              <textarea
                placeholder="Контент"
                value={editingNews.content}
                onChange={(e) =>
                  setEditingNews({ ...editingNews, content: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="URL изображения"
                value={editingNews.imageUrl}
                onChange={(e) =>
                  setEditingNews({ ...editingNews, imageUrl: e.target.value })
                }
              />
              <div style={{ marginTop: '1rem' }}>
                <button className={styles.moreBtn} onClick={handleUpdate}>
                  💾 Сохранить
                </button>
                <button
                  className={styles.moreBtn}
                  onClick={() => setEditingNews(null)}
                  style={{ marginLeft: '10px' }}
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
};

export default NewsAdminBlock;
