import Link from 'next/link';
import styles from './Navbar.module.sass';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>FormNext</Link>
            <div className={styles.links}>
                <Link href="/" className={styles.link}>Home</Link>
                <Link href="/date" className={styles.link}>Dados do Form</Link>
            </div>
        </nav>
    );
};

export default Navbar;
