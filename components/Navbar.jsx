import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import Link from 'next/link';
const Navbar = () => {

const quantity = useSelector(state => state.cart.quantity)

    return ( 
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" width="32" height="32" alt=""/>
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>Order Now!</div>
                    <div className={styles.text}>012***</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                <Link href="/">
                    <li className={styles.listItem}>Homepage</li>
                </Link>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image src="/img/logo.png" width="70" height="70" alt=""/>
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <Link href="/cart">
                <div className={styles.item}>
                    <div className={styles.cart}>
                        <Image src="/img/cart.png" width="30" height="30" alt=''/>
                        <div className={styles.counter}>{quantity}</div>
                    </div>
                </div>
            </Link>
        </div>
     );
}
 
export default Navbar;