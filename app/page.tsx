"use client"

import { useState } from 'react';
import Image from "next/image";
import "./page.css";
import hero_img from "./assets/hero_img.svg";
import squiggle from "./assets/squiggle.svg";
import arrow from "./assets/arrow.svg";
import Navbar from "./components/Navbar";
import Button from "./components/Button";

function App() {
    const [quadHover, setQuadHover] = useState(0);

	return (
		<>
			<div className="section1">
				<h1 className="headline">Networking for Models</h1>
				<p className="bodytext">
					My PocketFolio empowers models with personalized profiles showcasing
					their portfolios and booking information, while giving agents
					intuitive dashboards that offer insights into revenue, bookings, and
					trends—creating a seamless experience that drives growth. We aim to
					digitize and centralize the casting and networking experience in the
					modeling industry by providing a user-friendly discovery & networking
					platform.
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
					We're here to revolutionize the modeling industry by providing a
					data-driven platform that connects models and agents.
				</h2>
			</div>
			<div className="section3">
				<h1 className="underlined">Why us?</h1>
				<div className="card-container">
					<div className="card">
						<h3>Developed by models for models</h3>
						<p>
							Founder of My Pocketfolio, Nyala Tolfree is a professional model
							who strives to help and uplift fellow models like you.
						</p>
					</div>
					<div className="card">
						{/* TODO: entrepreneurship is too long of a word */}
						<h3>NYU Entrepreneurship Center</h3>
						<p>
							NYU's Entrepreneurship Center backs and works with My PocketFolio.
							The founders dually participated in NYU's Start-Up Bootcamp.
						</p>
					</div>
					<div className="card">
						<h3>
							By Data Systems & Technology Professionals
						</h3>
						<p>
							We value your data and information, that is why My Pocketfolio is
							built and designed by information system specialists and
							technology experts.
						</p>
					</div>
				</div>
				<Image id="squiggle" src={squiggle} alt="squiggle" />
				<h1>Get to know us.</h1>
                <div className="body-container">
                    <p className="bodytext">
                        Our company offers a unique platform and exponentially lower costs than the majority of resource suppliers that create portfolio websites and comp-cards for professionals.
                    </p>

                    <div className="quad-container" onMouseLeave={() => setQuadHover(-1)}>
                        <div className="quad-button quad1" style={{
                            backgroundColor: "#7139FF",
                            color: "white"
                        }} onMouseEnter={() => setQuadHover(1)}>
                            <Image className="arrow" src={arrow} alt="arrow" 
                                style={{
                                    width: (quadHover == 1 ? "2.5rem" : "1.5rem")
                                }}
                            />
                            <h3><strong>Explore</strong></h3>
                            <h5>Demo My Pocketfolio</h5>
                        </div>
                        <div className="quad-button quad2" style={{
                            backgroundColor: "#DECAF1",
                            color: "#7139FF"
                        }} onMouseEnter={() => setQuadHover(2)}>
                            <Image className="arrow" src={arrow} alt="arrow" 
                                style={{
                                    width: (quadHover == 2 ? "2.5rem" : "1.5rem")
                                }}
                            />
                            <div className="spacer"></div>
                            <h3><strong>About</strong></h3>
                            <h5>Our solution to modeling cards.</h5>
                        </div>
                        <div className="quad-button quad3" style={{
                            backgroundColor: "#A5BAFF",
                            color: "#7139FF"
                        }} onMouseEnter={() => setQuadHover(3)}>
                            <Image className="arrow" src={arrow} alt="arrow" 
                                style={{
                                    width: (quadHover == 3 ? "2.5rem" : "1.5rem")
                                }}
                            />
                            <div className="spacer"></div>
                            <h3><strong>Connect</strong></h3>
                            <h5>Meet the My Pocketfolio team</h5>
                        </div>
                        <div className="quad-button quad4" style={{
                            backgroundColor: "#7139FF",
                            color: "white"
                        }} onMouseEnter={() => setQuadHover(4)}>
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