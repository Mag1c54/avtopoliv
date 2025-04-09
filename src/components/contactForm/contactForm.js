"use client"


import React, { useState } from "react";
import styles from "./contact-form-style.module.css";
import InputField from "./input/inputField";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus("Заявка успешно отправлена!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Ошибка при отправке. Попробуйте снова.");
      }
    } catch (err) {
      console.error("Ошибка отправки формы:", err);
      setStatus("Ошибка при отправке.");
    }
  };

  return (
    <section className={styles.contactSection} id="contacts">
      <h2 className={styles.title}>Свяжитесь с нами</h2>
      <p className={styles.subtitle}>Оставьте заявку, и мы ответим в ближайшее время.</p>

      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <h3>Наши контакты</h3>
          <p>📍 Москва, Осташковское шоссе, 4с6</p>
          <p>📞 8 (800) 500-47-49</p>
          <p>✉ info@avtopoliv.ru</p>
          <br />
          <h3>Наши контакты</h3>
          <p>📍 Москва, Осташковское шоссе, 4с6</p>
          <p>📞 8 (800) 500-47-49</p>
          <p>✉ info@avtopoliv.ru</p>
          <br />
          <h3>Наши контакты</h3>
          <p>📍 Москва, Осташковское шоссе, 4с6</p>
          <p>📞 8 (800) 500-47-49</p>
          <p>✉ info@avtopoliv.ru</p>
        </div>
        

        <form className={styles.form} onSubmit={handleSubmit}>
          <InputField type="text" name="name" placeholder="Ваше имя" value={formData.name} onChange={handleChange} />
          <InputField type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <InputField type="tel" name="phone" placeholder="Телефон" value={formData.phone} onChange={handleChange} />
          <textarea
            className={styles.textarea}
            name="message"
            placeholder="Ваше сообщение"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className={styles.submitBtn}>Отправить</button>
          {status && <p className={styles.status}>{status}</p>}
        </form>
      </div>

      <div className={styles.mapContainer}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A8f435a6c17f6b6547c4c14c5ec3d8b8df92b96a50e85d2d9586e7cd65aeb4b75&source=constructor"
          className={styles.map}
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default ContactForm;
