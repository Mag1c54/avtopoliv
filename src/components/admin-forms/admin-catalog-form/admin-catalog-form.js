"use client";

import { useEffect, useState } from "react";
import styles from "./catalog-admin-style.module.css";
import Image from "next/image";

export default function CatalogAdminForm() {
  const [catalog, setCatalog] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [editingItem, setEditingItem] = useState(null);

  const fetchCatalog = async () => {
    const res = await fetch("/api/catalog");
    const data = await res.json();
    setCatalog(data);
  };

  const deleteItem = async (id) => {
    const confirmed = confirm("Удалить товар?");
    if (!confirmed) return;

    const res = await fetch("/api/catalog", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (res.ok) fetchCatalog();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editingItem) {
      setEditingItem((prev) => ({ ...prev, [name]: value }));
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

    const res = await fetch("/api/catalog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, imageUrl: uploadData.imageUrl }),
    });

    if (res.ok) {
      setForm({ title: "", description: "", price: "" });
      setImageFile(null);
      fetchCatalog();
    } else {
      alert("Ошибка при добавлении товара!");
    }
  };

  const handleUpdate = async () => {
    const res = await fetch("/api/catalog", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingItem),
    });

    if (res.ok) {
      setEditingItem(null);
      fetchCatalog();
    } else {
      alert("Ошибка при обновлении товара!");
    }
  };

  useEffect(() => {
    fetchCatalog();
  }, []);

  return (
    <section className={styles.catalogSection}>
      <h2 className={styles.title}>Добавить товар</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles["input-focus"]}
          name="title"
          placeholder="Название"
          value={form.title}
          onChange={handleChange}
          required
        />
        <textarea
          className={styles["textarea-focus"]}
          name="description"
          placeholder="Описание"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          className={styles["input-focus"]}
          name="price"
          placeholder="Цена"
          value={form.price}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required
        />
        <button type="submit">➕ Добавить товар</button>
      </form>

      <h2 className={styles.title}>Список товаров</h2>
      <div className={styles.catalogGrid}>
        {catalog.map((item) => (
          <div key={item.id} className={styles.card}>
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={400}
              height={200}
            />
            <div className={styles.cardContent}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span>{item.price}₽</span>
              <button
                className={styles.deleteButton}
                onClick={() => setEditingItem(item)}
              >
                ✏️ Изменить
              </button>
              <button
                className={styles.deleteButton}
                onClick={() => deleteItem(item.id)}
              >
                🗑️ Удалить
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingItem && (
        <div className={styles.editForm}>
          <h3>Редактировать товар</h3>
          <input
            className={styles["input-focus"]}
            name="title"
            placeholder="Название"
            value={editingItem.title}
            onChange={handleChange}
          />
          <textarea
            className={styles["textarea-focus"]}
            name="description"
            placeholder="Описание"
            value={editingItem.description}
            onChange={handleChange}
          />
          <input
            className={styles["input-focus"]}
            name="price"
            placeholder="Цена"
            value={editingItem.price}
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
    </section>
  );
}
