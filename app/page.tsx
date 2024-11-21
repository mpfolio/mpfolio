"use client"

import { useState } from 'react';
import Image from "next/image";
import "@/app/page.css";
import hero_img from "./assets/hero_img.svg";
import squiggle from "./assets/squiggle.svg";
import arrow from "./assets/arrow.svg";
import whyus_1 from "@/app/assets/whyus_1.svg";
import whyus_2 from "@/app/assets/whyus_2.svg";
import whyus_3 from "@/app/assets/whyus_3.svg";
import Navbar from "./components/Navbar";
import Link from 'next/link';

function App() {
    const [quadHover, setQuadHover] = useState(0);

	return (
		<>
			<div className="section1">
				<h1 className="headline">Networking for Models</h1>
				<p className="bodytext">
                    My PocketFolio is an emerging media social networking platform that provides professionals in the modeling industry with a place to showcase their portfolios, compcards, resumes, and professional experience while connecting with others.
				</p>
				{/* <h3>
					<Button text="Make an Account" variant="filled" />
				</h3> */}
				{/* <img id="hero_img" src={hero_img} alt="hero_img" /> */}
				<Image id="hero_img" src={hero_img} alt="hero_img" />
			</div>
			<div className="section2">
				{/* TODO: import dark filter blob from figma */}
				{/* TODO: the styles here are really inconsistent @sophie */}
				<h1 className="underline">Our Mission</h1>
				<h2 style={{ fontWeight: 400 }}>
                    "Our mission is to revolutionize the modeling industry by providing a data-driven platform that connects models and agents."
				</h2>
			</div>
			<div className="section3">
				<h1 className="underlined">Why us?</h1>
				<div className="card-container">
					<div className="card">
                        <Image src={whyus_1} alt="holding hands" />
						<h3>Developed by Models for Models</h3>
						<p>
							Founder of My PocketFolio, Nyala Tolfree is a professional model
							who strives to help and uplift fellow models like you.
						</p>
					</div>
					<div className="card">
                        <Image src={whyus_2} alt="nyu_logo" />
                        <h3>
                            NYU Entrepreneurship Center
                        </h3>
						<p>
							NYU's Entrepreneurship Center backs and works with My PocketFolio.
							The founders dually participated in NYU's Start-Up Bootcamp.
						</p>
					</div>
					<div className="card">
                        <Image src={whyus_3} alt="lock" />
						<h3>
							By Data Systems & Technology Professionals
						</h3>
						<p>
							We value your data and information, that is why My PocketFolio is
							built and designed by information system specialists and
							technology experts.
						</p>
					</div>
				</div>
				<Image id="squiggle" src={squiggle} alt="squiggle" />
				<h1>Get to know us.</h1>
                <div className="body-container">
                    <div className="body-text">
                        <p>
                            Our company is an emerging media social networking platform that provides professionals in the modeling industry with a place to showcase their portfolios, compcards, resumes, and professional experience while connecting with others.
                        </p>
                        <h4>
                            <Link href="/comingSoon">
                                <button className="outlined large">Make an account</button>
                            </Link>
                        </h4>
                    </div>

                    <div className="quad-container" onMouseLeave={() => setQuadHover(-1)}>
                        <div className="quad-button quad1" onMouseEnter={() => setQuadHover(1)}>
                            <Image className="arrow" src={arrow} alt="arrow" 
                                style={{
                                    width: (quadHover == 1 ? "2.5rem" : "1.5rem")
                                }}
                            />
                            <h3><strong>Explore</strong></h3>
                            <h5>Demo My PocketFolio</h5>
                        </div>
                        <Link href='/about'>
                        <div className="quad-button quad2" onMouseEnter={() => setQuadHover(2)}>
                            <Image className="arrow" src={arrow} alt="arrow" 
                                style={{
                                    width: (quadHover == 2 ? "2.5rem" : "1.5rem")
                                }}
                            />
                            <div className="spacer"></div>
                            <h3><strong>About</strong></h3>
                            <h5>Why My PocketFolio?</h5>
                        </div>
                        </Link>
                        <Link href="/team">
                            <div className="quad-button quad3" onMouseEnter={() => setQuadHover(3)}>
                                <Image className="arrow" src={arrow} alt="arrow" 
                                    style={{
                                        width: (quadHover == 3 ? "2.5rem" : "1.5rem")
                                    }}
                                />
                                <div className="spacer"></div>
                                <h3><strong>Connect</strong></h3>
                                <h5>Meet the My PocketFolio team</h5>
                            </div>
                        </Link>

                        <div className="quad-button quad4" onMouseEnter={() => setQuadHover(4)}>
                            <Image className="arrow" src={arrow} alt="arrow" 
                                style={{
                                    width: (quadHover == 4 ? "2.5rem" : "1.5rem")
                                }}
                            />
                            <div className="spacer"></div>
                            <h3><strong>Subscribe</strong></h3>
                            <h5>Purchase a subscription</h5>
                        </div>
                    </div>
                </div>
			</div>
		</>
	);
}

export default App;