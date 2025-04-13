"use client";

import { useEffect, useState } from "react";
import styles from "./admin-contact-style.module.css"; // создайте соответствующий файл стилей

export default function ContactAdminForm() {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Функция для загрузки списка контактов
  const fetchContacts = async () => {
    try {
      const res = await fetch("/api/contact");
      if (!res.ok) {
        throw new Error("Ошибка при загрузке контактов");
      }
      const data = await res.json();
      setContacts(data);
    } catch (error) {
      console.error(error);
      alert("Не удалось загрузить контакты");
    }
  };

  // Функция для удаления контакта
  const deleteContact = async (id) => {
    const confirmed = confirm("Удалить контакт?");
    if (!confirmed) return;

    try {
      const res = await fetch("/api/contact", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) {
        throw new Error("Ошибка при удалении контакта");
      }
      fetchContacts(); // Обновить список контактов после удаления
    } catch (error) {
      console.error(error);
      alert("Не удалось удалить контакт");
    }
  };

  // Загружаем список контактов при монтировании компонента
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>Список контактов</h2>
      <div className={styles.contactGrid}>
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <div key={contact.id} className={styles.card}>
              <div className={styles.cardContent}>
                <h3>Имя: {contact.name}</h3>
                <p>Email: {contact.email}</p>
                <p>Телефон: {contact.phone}</p>
                <p>Сообщение: {contact.message}</p>
                <span>Дата: {new Date(contact.createdAt).toLocaleDateString()}</span>
                <button
                  className={styles.deleteButton}
                  onClick={() => deleteContact(contact.id)}
                >
                  🗑️ Удалить
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Контакты не найдены.</p>
        )}
      </div>
    </section>
  );
}
