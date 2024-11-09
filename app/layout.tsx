import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "My PocketFolio",
    description: "Networking for models",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body
            className={`antialiased ${outfit.className}`}
        >
            <Navbar loggedIn={false} />
            {children}
            <Footer />
        </body>
        </html>
    );
}
