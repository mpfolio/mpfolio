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
                    <h2>PocketFolio</h2>
                </div>
            </Link>
            <div className="spacer"></div>
            <h3 className="comingSoonButton">
                <Button text={"Sign Up"} variant="transparent" href="/comingSoon" />
            </h3>
            <h3 className="comingSoonButton">
                <Button text={"Login"} variant="filled" href="/comingSoon" />
            </h3>
        </div>
        </>
    );
}
 
export default Navbar;