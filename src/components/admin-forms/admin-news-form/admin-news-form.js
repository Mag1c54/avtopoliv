"use client";

import { useEffect, useState } from "react";
import styles from "./admin-style-news.module.css";
import Image from "next/image";

export default function NewsAdminBlock() {
  const [news, setNews] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    content: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [editingNews, setEditingNews] = useState(null);

  const fetchNews = async () => {
    const res = await fetch("/api/news");
    const data = await res.json();
    setNews(data);
  };

  const deleteNews = async (id) => {
    const confirmed = confirm("Удалить новость?");
    if (!confirmed) return;

    const res = await fetch("/api/news", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (res.ok) fetchNews();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editingNews) {
      setEditingNews((prev) => ({ ...prev, [name]: value }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      alert("Пожалуйста, выбери изображение");
      return;
    }

    const formData = new FormData();
    formData.append("file", imageFile);

    const uploadRes = await fetch("/api/uploadImage", {
      method: "POST",
      body: formData,
    });

    const uploadData = await uploadRes.json();
    if (!uploadRes.ok || !uploadData.imageUrl) {
      alert("Ошибка при загрузке изображения");
      return;
    }

    const res = await fetch("/api/news", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, imageUrl: uploadData.imageUrl }),
    });

    if (res.ok) {
      setForm({ title: "", content: "" });
      setImageFile(null);
      fetchNews();
    } else {
      alert("Ошибка при добавлении новости!");
    }
  };

  const handleUpdate = async () => {
    const res = await fetch("/api/news", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingNews),
    });

    if (res.ok) {
      setEditingNews(null);
      fetchNews();
    } else {
      alert("Ошибка при обновлении новости!");
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <section className={styles.newsSection}>
    

      
        <>
          <h2 className={styles.title}>Добавить новость</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              name="title"
              placeholder="Заголовок"
              value={form.title}
              onChange={handleChange}
              required
            />
            <textarea
              name="content"
              placeholder="Контент"
              value={form.content}
              onChange={handleChange}
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
            <button type="submit">➕ Добавить новость</button>
          </form>

          <h2 className={styles.title}>Список новостей</h2>
          <div className={styles.newsGrid}>
            {news.map((item) => (
              <div key={item.id} className={styles.card}>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={400}
                  height={200}
                />
                <div className={styles.cardContent}>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                  <p>{new Date(item.createdAt).toLocaleDateString()}</p>
                  
                  <button
                    className={styles.deleteButton}
                    onClick={() => setEditingNews(item)}
                  >
                    ✏️ Изменить
                  </button>
                  <button
                    className={styles.deleteButton}
                    onClick={() => deleteNews(item.id)}
                  >
                    🗑️ Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>

          {editingNews && (
            <div className={styles.editForm}>
              <h3>Редактировать новость</h3>
              <input
                name="title"
                placeholder="Заголовок"
                value={editingNews.title}
                onChange={handleChange}
              />
              <textarea
                name="content"
                placeholder="Контент"
                value={editingNews.content}
                onChange={handleChange}
              />
              <div className={styles.editFormButtons}>
                <button className={styles.moreBtn} onClick={handleUpdate}>
                  💾 Сохранить
                </button>
                <button
                  className={styles.moreBtn}
                  onClick={() => setEditingNews(null)}
                >
                  ❌ Отмена
                </button>
              </div>
            </div>
          )}
        </>
      
    </section>
  );
}
