import styles from "./hero-style.module.css";
import HeroVideo from "./hero-video";

const HeroContent = () => {
    return ( 
       <HeroVideo>

        <div className={styles.heroContent}>
            <h1>Welcome to our website</h1>
        </div>

       </HeroVideo>

    

    
    );
}
 
export default HeroContent;