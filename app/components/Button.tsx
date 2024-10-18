"use client"

import Link from 'next/link';
import './Button.css';

interface ButtonProps {
    text: string;
    variant: 'filled' | 'outlined' | 'transparent';
    onClick?: () => void;
    href?: string;
}

const Button = ({ text, variant, onClick, href }: ButtonProps) => {
    const buttonComponent = (
        // variants: filled, outlined, transparent
        <button className={variant} onClick={onClick}>
            { text }
        </button>
    )

    return (
        href ? (
            <Link href={href}>
                { buttonComponent }
            </Link>
        ) : buttonComponent
    );
}
 
export default Button;