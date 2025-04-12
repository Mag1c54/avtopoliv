"use client";

import { useEffect, useState } from "react";
import styles from "./admin-contact-style.module.css"; // создайте соответствующий файл стилей
import Image from "next/image";

export default function ContactAdminForm() {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchContacts = async () => {
    const res = await fetch("/api/contact");
    const data = await res.json();
    setContacts(data);
  };

  const deleteContact = async (id) => {
    const confirmed = confirm("Удалить контакт?");
    if (!confirmed) return;

    const res = await fetch("/api/contact", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (res.ok) fetchContacts();
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <section className={styles.contactSection}>
      <button
        className={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Скрыть контакты" : "Управление контактами"}
      </button>

      {isOpen && (
        <>
          <h2 className={styles.title}>Список контактов</h2>
          <div className={styles.contactGrid}>
            {contacts.map((contact) => (
              <div key={contact.id} className={styles.card}>
                <div className={styles.cardContent}>
                  <h3>Имя: {contact.name}</h3>
                  <p>Email: {contact.email}</p>
                  <p>Phone: {contact.phone}</p>
                  <p>Message: {contact.message}</p>
                  <span>Дата: {new Date(contact.createdAt).toLocaleDateString()}</span>
                  <button
                    className={styles.deleteButton}
                    onClick={() => deleteContact(contact.id)}
                  >
                    🗑️ Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
