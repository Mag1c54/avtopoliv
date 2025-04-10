"use client";

import React, { useEffect, useState } from "react";
import styles from "./categories-admin-style.module.css";
import Image from "next/image";

const AdminCategoriesForm = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({ name: "", href: "", image: "" });
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ name: "", href: "", image: "" });

  const fetchCategories = async () => {
    const res = await fetch("/api/categories");
    const data = await res.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    await fetch("/api/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCategory),
    });
    setNewCategory({ name: "", href: "", image: "" });
    fetchCategories();
  };

  const handleDelete = async (id) => {
    await fetch("/api/categories", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      
    fetchCategories();
  };

  const handleEdit = (category) => {
    setEditingId(category.id);
    setEditData({
      name: category.name,
      href: category.href,
      image: category.image || "",
    });
  };
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    
    await fetch("/api/categories", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...editData, id: editingId }),  // добавляем id
    });
  
    setEditingId(null);
    fetchCategories();
  };
  

  return (
    <div className={styles.catalogSection}>
   
      <button className={styles.toggleButton} onClick={() => setShowCategories(!showCategories)}>
        {showCategories ? "Скрыть категории" : "Показать категории"}
      </button>

      {showCategories && (
         
        <>
         <h2 className={styles.title}>Управление категориями</h2>

          <form onSubmit={handleAdd} className={styles.form}>
            <h3>Добавить категорию</h3>
            <input
              type="text"
              placeholder="Название"
              value={newCategory.name}
              onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Ссылка"
              value={newCategory.href}
              onChange={(e) => setNewCategory({ ...newCategory, href: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="URL картинки"
              value={newCategory.image}
              onChange={(e) => setNewCategory({ ...newCategory, image: e.target.value })}
            />
            <button type="submit">Добавить</button>
          </form>

          <div className={styles.catalogGrid}>
            {categories.map((cat) => (
              <div key={cat.id} className={styles.card}>
                <Image src={cat.image || "/images/grass.png"} alt={cat.name}  width={50} height={50}/>
                <div className={styles.cardContent}>
                  <h3>{cat.name}</h3>
                  <p>Ссылка: {cat.href}</p>
                  <div className={styles.editFormButtons}>
                    <button onClick={() => handleEdit(cat)}>✏️</button>
                    <button onClick={() => handleDelete(cat.id)}>❌</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {editingId && (
            <form onSubmit={handleEditSubmit} className={styles.editForm}>
              <h3>Изменить категорию</h3>
              <input
                type="text"
                name="name"
                value={editData.name}
                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                required
              />
              <input
                type="text"
                name="href"
                value={editData.href}
                onChange={(e) => setEditData({ ...editData, href: e.target.value })}
                required
              />
              <input
                type="text"
                name="image"
                value={editData.image}
                onChange={(e) => setEditData({ ...editData, image: e.target.value })}
              />
              <div className={styles.editFormButtons}>
                <button type="submit">Сохранить</button>
                <button type="button" onClick={() => setEditingId(null)}>Отмена</button>
              </div>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default AdminCategoriesForm;
