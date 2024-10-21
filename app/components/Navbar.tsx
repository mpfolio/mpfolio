"use client"

import Image from 'next/image'
import Link from 'next/link'
import './Navbar.css'
import logo from '@/app/assets/logo.svg'

const Navbar = () => {
    return (
        <>
        <div className="navbar">
            <Link href="/">
                <div className="logo-container">
                    <Image id="logo" src={logo} alt="logo" />
                    <h3>PocketFolio</h3>
                </div>
            </Link>
            <div className="spacer"></div>
            <p className="comingSoonButton">
                <Link href="/comingSoon">
                    <button className="transparent large">Sign up</button>
                </Link>
            </p>
            <p className="comingSoonButton">
                <Link href="/comingSoon">
                    <button className="filled large">Log in</button>
                </Link>
            </p>
        </div>
        </>
    );
}
 
export default Navbar;