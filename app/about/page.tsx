import Image from "next/image";
import '@/app/about/page.css';
import artist from "@/app/assets/about/artist.svg";
import ladder from "@/app/assets/about/ladder.svg";
import tap from "@/app/assets/about/tap.svg";

function App() {
    return (
        <>
        <div className="body">
            <h1 className="main-title">About</h1>
            <div className="section">
                <h4 className="title-chip">Our Problem</h4>
                <h1>1.78 million</h1>
                <p>employed/signed models, apart from non-working signed models and freelance models. With that number not including a vast pool of those who are unemployed or aspiring. One of the biggest factors contributing to the success of those in the modeling industry is networking, yet there is no professional platform to do so on. Our company offers a unique platform and exponentially lower costs than the majority of resource suppliers that create portfolio websites and comp-cards for professionals.</p>
            </div>
            <div className="section subsection-container">
                <h4 className="title-chip">Solution</h4>
                <p>Our product makes consumer lives easier and more convenient. We bring together multiple different resources and virtualize an otherwise tedious and outdated process. Artists, photographers, models, actors and videographers can connect, discover, and communicate through our product. </p>
                <div className="subsection">
                    <Image className="subsection-image" src={artist} alt="artist" />
                    <div className="subsection-text">
                        <h2>Custom Portfolios & Compcards</h2>
                        <p>We offer a multitude of different packages and creating an account is free of charge. These packages include options and subscriptions from 5 - 50 dollars that would otherwise individually be upward of $100. </p>
                    </div>
                </div>
                <div className="subsection">
                    <Image className="subsection-image" src={tap} alt="tap" />
                    <div className="subsection-text">
                        <h2>Tap Feature</h2>
                        <p>Agencies and castings can also host events and keep track of attendees through the My Pocket Portfolio Tap feature. </p>
                    </div>
                </div>
                <div className="subsection">
                    <Image className="subsection-image" src={ladder} alt="ladder" />
                    <div className="subsection-text">
                        <h2>User Friendly</h2>
                        <p>My Pocket PortFolio is aimed to be user friendly. People can add photos and information to their profile in an alike manner to Instagram and navigate pages with ease.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default App;