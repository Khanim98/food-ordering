import styles from '../styles/Footer.module.css';
import Image from 'next/image';
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" fill alt=""  style={{objectFit:"cover"}}/>
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>Oh Yes, We did the Pizza!</h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.motto}>Find our restarants</h1>
                    <p className={styles.text}>
                         Ganja Avenue 190
                        <br /> Baku, Azerbaijan
                        <br /> 05005050
                    </p>
                    <p className={styles.text}>
                         Ganja Avenue 190
                        <br /> Baku, Azerbaijan
                        <br /> 05005050
                    </p>
                    <p className={styles.text}>
                         Ganja Avenue 190
                        <br /> Baku, Azerbaijan
                        <br /> 05005050
                    </p>
                    <p className={styles.text}>
                         Ganja Avenue 190
                        <br /> Baku, Azerbaijan
                        <br /> 05005050
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.motto}>Working hours</h1>
                    <p className={styles.text}>
                        Monday-Sunday
                        <br /> 12:00-00:00
                    </p>
                </div>
            </div>
        </div>
      );
}
 
export default Footer;