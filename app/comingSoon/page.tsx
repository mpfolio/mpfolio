import Image from "next/image";
import "@/app/page.css";
import hero_img from "@/app/assets/hero_img.svg";
import Navbar from "@/app/components/Navbar";
import Button from "../components/Button";

function App() {
	return (
		<>
			<div className="section1">
				<h1 className="headline">Coming soon...</h1>
				<p className="bodytext">
                    We're hard at work building the future of networking for models! Keep an eye on this website for our launch.
                </p>
                <p>
                    <Button text="Back to home" variant="filled" href="/" />
                </p>
				<Image id="hero_img" src={hero_img} alt="hero_img" />
			</div>
		</>
	);
}

export default App;