import styles from './about-style.module.css';

const AboutCompany = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.title}>О компании</h2>
        <p className={styles.text}>
          На российском рынке ирригационной техники мы являемся представителями мировых лидеров по производству оборудования для систем автоматического полива.
        </p>
        <p className={styles.text}>
          <strong>Автополив РФ</strong> занимается активным продвижением передового оборудования и опыта в области ирригации.
        </p>
      </div>
    </section>
  );
};

export default AboutCompany;
