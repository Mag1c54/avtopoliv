import React from "react";
import styles from "./contact-form-style.module.css";
import InputField from "./input/inputField";

const ContactForm = () => {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>Свяжитесь с нами</h2>
      <p className={styles.subtitle}>Оставьте заявку, и мы ответим в ближайшее время.</p>

      <div className={styles.container}>
        {/* Контакты слева */}
        <div className={styles.contactInfo}>
          <h3>Наши контакты</h3>
          <p>📍 Москва, Осташковское шоссе, 4с6</p>
          <p>📞 8 (800) 500-47-49</p>
          <p>✉ info@avtopoliv.ru</p>
          <br />
          <p>📍 Москва, Осташковское шоссе, 4с6</p>
          <p>📞 8 (800) 500-47-49</p>
          <p>✉ info@avtopoliv.ru</p>
          <br />
          <p>📍 Москва, Осташковское шоссе, 4с6</p>
          <p>📞 8 (800) 500-47-49</p>
          <p>✉ info@avtopoliv.ru</p>
        </div>

        {/* Форма справа */}
        <form className={styles.form}>
          <InputField type="text" placeholder="Ваше имя" />
          <InputField type="email" placeholder="Email" />
          <InputField type="tel" placeholder="Телефон" />
          <textarea className={styles.textarea} placeholder="Ваше сообщение" rows="4"></textarea>
          <button className={styles.submitBtn}>Отправить</button>
        </form>
      </div>

      {/* Карта внизу по центру */}
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
