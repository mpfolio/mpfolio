"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/app/components/Navbar.module.css'
import logo from '@/app/assets/logo.svg'
import home from '@/app/assets/navbar/home.svg'
import messages from '@/app/assets/navbar/messages.svg'
import default_avatar from '@/app/assets/default_avatar.svg'


type NavbarProps = {
    loggedIn: boolean;
}
const Navbar = ({ loggedIn }: NavbarProps) => {
    const [showProfileSettings, setShowProfileSettings] = useState(false);
    
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
            { !loggedIn ?
                <>
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
                </>
                :
                <>
                <div className={styles.navbar_icon}>
                    <Image src={home} alt="home" />
                    <h5>Home</h5>
                </div>
                <div className={styles.navbar_icon}>
                    <Image src={messages} alt="messages" />
                    <h5>Messages</h5>
                </div>
                <div className={styles.navbar_icon} onClick={() => setShowProfileSettings(!showProfileSettings)}>
                    <Image src={default_avatar} alt="messages" />
                    <h5>Me</h5>
                </div>
                </>
            }
        </div>
        </>
    );
}
 
export default Navbar;