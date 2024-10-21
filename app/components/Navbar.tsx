import Image from 'next/image'
import Link from 'next/link'
import styles from '@/app/components/Navbar.module.css'
import './Navbar.module.css'
import logo from '@/app/assets/logo.svg'

const Navbar = () => {
    return (
        <>
        <div className={styles.navbar}>
            <Link href="/">
                <div className={styles.logo_container}>
                    <Image id={styles.logo} src={logo} alt="logo" />
                    <h3>PocketFolio</h3>
                </div>
            </Link>
            <div className="spacer"></div>
            <p>
                <Link href="/comingSoon">
                    <button className="transparent large">Sign up</button>
                </Link>
            </p>
            <p>
                <Link href="/comingSoon">
                    <button className="filled large">Log in</button>
                </Link>
            </p>
        </div>
        </>
    );
}
 
export default Navbar;