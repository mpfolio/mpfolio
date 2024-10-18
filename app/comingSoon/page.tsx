import Image from "next/image";
import "@/app/page.css";
import hero_img from "@/app/assets/hero_img.svg";
import Navbar from "@/app/components/Navbar";
import Button from "../components/Button";

function App() {
	return (
		<>
			<Navbar />

			<div className="section1">
				<h1 className="headline">Coming soon...</h1>
				<h3 className="bodytext">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis consectetur tortor, nec tincidunt quam. Cras sed ex lacus. Vestibulum vitae convallis dolor, in egestas erat.
                </h3>
                <h3>
                    <Button text="Back to home" variant="filled" href="/" />
                </h3>
				<Image id="hero_img" src={hero_img} alt="hero_img" />
			</div>
		</>
	);
}

export default App;