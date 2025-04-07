import styles from "./theory-style.module.css";
import Image from "next/image";

const features = [
  { icon: "/icons/grass-icon.svg", title: "Монтаж" },
  { icon: "/icons/grass-icon.svg", title: "Проектирование" },
  { icon: "/icons/grass-icon.svg", title: "Сервисное обслуживание" },
  { icon: "/icons/grass-icon.svg", title: "Зимняя консервация" }
];

const applications = [
  {
    icon: "/icons/grass-icon.svg",
    title: "Частные объекты",
    desc: "Сады, огороды, перед коттеджами"
  },
  {
    icon: "/icons/grass-icon.svg",
    title: "Муниципальные территории",
    desc: "Парки и скверы"
  },
  {
    icon: "/icons/grass-icon.svg",
    title: "Коммерческие объекты",
    desc: "Перед ТЦ, офисами"
  },
  {
    icon: "/icons/grass-icon.svg",
    title: "Аграрные территории",
    desc: "Поля, фермерские хозяйства"
  }
];

const TheorySection = () => {
  return (
    <section className={styles.theorySection}>
      {/* Заголовок услуг */}
      <h2 className={styles.sectionTitle}>Полный спектр услуг</h2>

      <div className={styles.cardGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.card}>
            <Image src={feature.icon} width={50} height={50} alt={feature.title} />
            <div className={styles.cardTitle}>{feature.title}</div>
          </div>
        ))}
      </div>

      {/* Заголовок применения */}
      <h2 className={styles.sectionTitle}>Сферы применения</h2>

      <p className={styles.subtext}>
        Автоматический полив значительно упрощает уход за растениями — от частных садов до крупных фермерских угодий.
      </p>

      <div className={styles.cardGrid}>
        {applications.map((app, index) => (
          <div key={index} className={styles.card}>
            <Image src={app.icon} width={50} height={50} alt={app.title} />
            <div className={styles.cardTitle}>{app.title}</div>
            <div className={styles.cardText}>{app.desc}</div>
          </div>
        ))}
      </div>

      {/* Информация и преимущества */}
      <div className={styles.bulletBox}>
        <p>
          Мы проектируем и обслуживаем системы автополива с 1999 года. Используем надёжные комплектующие Hunter,
          предоставляя оптимальные решения для любых участков.
        </p>
        <ul>
          <li>Готовность к монтажу сразу</li>
          <li>Можно дополнить другими модулями</li>
          <li>Упрощённое подключение и настройка</li>
        </ul>
      </div>
    </section>
  );
};

export default TheorySection;
