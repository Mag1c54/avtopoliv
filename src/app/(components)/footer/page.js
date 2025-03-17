import styles from "./footer-style.module.css";


const Footer = () => {
    return ( 
        <footer>
            <div className={styles.footer}>
                <div className={styles.footerContent}>
                    <h4>Контакты</h4>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;