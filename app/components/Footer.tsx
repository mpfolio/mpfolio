import Image from 'next/image'
import Link from 'next/link'
import styles from '@/app/components/Footer.module.css'
import logo from '@/app/assets/logo.svg'

const Footer = () => {
    return (
        <>
        <div className={styles.footer}>
            <div className={styles.block}>
                <Link href="/comingSoon">
                    <h3>More Info</h3>
                    <h5>About Us</h5>
                    <h5>Contact</h5>
                </Link>
            </div>
            <div className={styles.block}>
                <Link href="/comingSoon">
                    <h3>Help</h3>
                    <h5>Common Questions</h5>
                    <h5>Chat with Us</h5>
                </Link>
            </div>
            <h5 className={styles.copyright}>My PocketFolio ©</h5>
        </div>
        </>
    );
}
 
export default Footer;