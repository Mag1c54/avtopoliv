import styles from "./hero-style.module.css";
import HeroVideo from "./hero-video";

const HeroContent = () => {
    return ( 
       <HeroVideo>

        <div className={styles.heroContent}>
        <div className={styles.heroContentText}>
    <h3> Системы автоматического полива</h3>
    <p>Проектируем и устанавливаем под ключ системы автополива и ландшафтное освещение. Предлагаем широкий выбор профессионального оборудования Hunter для частных домовладельцев, специализированных агентств и ландшафтных дизайнеров.</p>
    </div>
        <div className={styles.heroContentContainer}>
            <a className={styles.heroContentContainerItem}>
                {/* todo: add link  and styles*/}
            </a>
            <a className={styles.heroContentContainerItem}>
                {/* todo: add link  and styles*/}
            </a>
            

        </div>
       </div>
       </HeroVideo>

    

    
    );
}
 
export default HeroContent;