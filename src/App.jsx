import "./App.css";
import hero_img from "../assets/hero_img.svg";
import squiggle from "../assets/squiggle.svg";
import Navbar from "../components/Navbar.jsx";
import Button from "../components/Button.jsx";

function App() {
	return (
		<>
			<Navbar />
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
				<h3>
					<Button text="Make an Account" variant="filled" />
				</h3>
				<img id="hero_img" src={hero_img} alt="hero_img" />
			</div>
			<div className="section2">
				{/* TODO: import dark filter blob from figma */}
				{/* TODO: the styles here are really inconsistent @sophie */}
				<h1 style={{ fontSize: "6rem" }}>Our Mission</h1>
				<h2 style={{ fontWeight: 400 }}>
					"Our mission is to revolutionize the modeling industry by providing a
					data-driven platform that connects models and agents."
				</h2>
			</div>
			<div className="section3">
				<h1 className="underline">Why us?</h1>
				<div className="card-container">
					<div className="card">
						<h2 style={{ fontSize: "2.5rem" }}>
							Developed by models for models
						</h2>
						<p>
							Founder of My Pocketfolio, Nyala Tolfree is a professional model
							who strives to help and uplift fellow models like you.
						</p>
					</div>
					<div className="card">
						{/* TODO: entrepreneurship is too long of a word */}
						<h2 style={{ fontSize: "2.5rem" }}>NYU Entrepreneurship Center</h2>
						<p>
							NYU’s Entrepreneurship Center backs and works with My PocketFolio.
							The founders dually participated in NYU’s Start-Up Bootcamp.
						</p>
					</div>
					<div className="card">
						<h2 style={{ fontSize: "2.5rem" }}>
							By Data Systems & Technology Professionals
						</h2>
						<p>
							We value your data and information, that is why My Pocketfolio is
							built and designed by information system specialists and
							technology experts.
						</p>
					</div>
				</div>
				<img id="squiggle" src={squiggle} alt="squiggle" />
				<h1>Get to know us.</h1>
				<p className="bodytext">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.{" "}
				</p>
				<p>
					<Button text="Make an Account" variant="outlined" />
				</p>
			</div>
		</>
	);
}

export default App;
