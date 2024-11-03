"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import "@/app/page.css";
import "@/app/comingSoon/page.css";
import hero_img from "@/app/assets/hero_img.svg";
import Navbar from "@/app/components/Navbar";

function App() {
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');

    

    
    const handleSubmit = async (e: any) => {
        const googleScriptURL = "https://script.google.com/macros/s/AKfycbyeRWOfgXzJY1DysSZLLNxHLdBpeOssgF_dGiBWuCef9h5crV6JQtF9yGCD_B6o1xVdfQ/exec"

        e.preventDefault();

        if (email) {
            console.log("submitting")
            setLoading(true);
            try {
                const response = await fetch(googleScriptURL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams({
                        email
                    }),
                });
    
                const status = response.status;
    
                if (status === 200) {
                    console.log("success")
                    setMessage(`Thank you for joining our email list, ${email}!`);
                    setIsError(false);
                    setEmail('');
                } else {
                    console.log("FAIL")
                    setMessage("We're having trouble adding your email.");
                    setIsError(true);
                }
            } catch (error) {
                console.log(error)
                setMessage('Error connecting to the server.');
                setIsError(true);
            } finally {
                setLoading(false);
            }
        }
    };

	return (
        <div className="section1">
            <h1 className="headline">Coming soon...</h1>
            <p className="bodytext">
                We're hard at work building the future of networking for models! Keep an eye on this website for our launch.
            </p>
            <p className="bodytext">
                Interested in My Pocketfolio? Sign up for email updates below!
            </p>
            <div className="email-form-conatiner">

                <form onSubmit={handleSubmit} method="POST">
                    <div className="email-form">
                        <div className="email-field">
                            <h6 id="email-label">
                                <label htmlFor="email">Email</label>
                            </h6>
                            <input id="email" type="text" name="name" 
                                value={email} 
                                onChange={(e) => {
                                    !loading ? setEmail(e.target.value) : null
                                }} 
                            />
                        </div>
                        <p>
                            <button className="filled"
                                style={{
                                    backgroundColor: loading ? "var(--secondary-color)" : "var(--primary-color)"
                                }}
                            >
                                <input type="submit" value="Submit" disabled={loading}/>
                            </button>
                        </p>
                    </div>
                </form>
                { message && (
                    <div className={`message ${isError ? "error" : "success"}`}>
                        <h5 style={{ marginTop: "0.5rem" }}>
                            {message}    
                        </h5>
                    </div>
                )}
            </div>
            <p>
                <Link href="/">
                    <button className="filled large">Back to home</button>
                </Link>
            </p>

            <Image id="hero_img" src={hero_img} alt="hero_img" />
        </div>
	);
}

export default App;