import styles from "./hero-style.module.css";

const HeroVideo = ({ children }) => {
  return (
    <div className={styles.videoContainer}>
      <video className={styles.video} autoPlay loop muted playsInline>
        <source src="/grass.mp4" type="video/mp4" />
      </video>
      {children}
    </div>
  );
};

export default HeroVideo;
