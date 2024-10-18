"use client"

import Image from 'next/image'
import Link from 'next/link'
import './Navbar.css'
import logo from '@/app/assets/logo.svg'
import Button from '@/app/components/Button'

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
                <Button text={"Sign Up"} variant="transparent" href="/comingSoon" />
            </p>
            <p className="comingSoonButton">
                <Button text={"Login"} variant="filled" href="/comingSoon" />
            </p>
        </div>
        </>
    );
}
 
export default Navbar;