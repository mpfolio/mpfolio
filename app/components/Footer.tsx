import Image from 'next/image'
import Link from 'next/link'
import styles from '@/app/components/Footer.module.css'
import logo from '@/app/assets/logo.svg'

const Footer = () => {
    return (
        <>
        <div className={styles.footer}>
            <div className={styles.links_row}>
                <div className={styles.block}>
                    <h3>Learn More</h3>
                    <h5>About Us</h5>
                    <h5>Technology</h5>
                    <h5>Sustainability</h5>
                    <h5>NYU Impact</h5>
                </div>
                <div className={styles.block}>
                    <h3>Help</h3>
                    <h5>Manage my subscription</h5>
                    <h5>FAQ</h5>
                    <h5>Contact</h5>
                    <h5>Chat with us</h5>
                </div>
            </div>
            <h5 className={styles.copyright}>
                My PocketFolio ©
            </h5>
        </div>
        </>
    );
}
 
export default Footer;