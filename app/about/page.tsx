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
                <p>There are</p>
                <h1 className="fill-gradient">1.78 million</h1>
                <p>employed/signed models, apart from non-working signed models and freelance models. That number does not including a vast pool of those who are unemployed or aspiring. One of the biggest factors contributing to the success of those in the modeling industry is networking, yet there is no professional platform to do so on. Our company offers a unique platform and exponentially lower costs than the majority of resource suppliers that create portfolio websites and comp-cards for professionals.</p>
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
                        <p>Agencies and castings can also host events and keep track of attendees through the My PocketFolio Tap feature. </p>
                    </div>
                </div>
                <div className="subsection">
                    <Image className="subsection-image" src={ladder} alt="ladder" />
                    <div className="subsection-text">
                        <h2>User Friendly</h2>
                        <p>My PocketFolio is aimed to be user friendly. People can add photos and information to their profile in an alike manner to Instagram and navigate pages with ease.</p>
                    </div>
                </div>
            </div>
            <div className="section">
                <h4 className="title-chip">Sustainability</h4>
                <p>We aim to bring the modeling industry into the paperless age. By allowing models to display all information needed to get the best job for them, including professional digitals and headshots, all measurement information, and best professional experiences, printed paper comp cards will be left in the past. In a time that should be so desperately focused on how to better the planet, moving this industry into the age of technology is a huge step.</p>
            </div>
            <div className="section">
                <h4 className="title-chip">NYU Impact</h4>
                <div className="section-text">
                    <p>My PocketFolio Founders are both currently a part of NYU's Entrepreneurial Exchange Group, and the CEO has gained the business a spot in their Entrepreneur in Residence program. These groups both have helped our business grow exponentially and given us resources we would not have been able to get without their partnership.</p>
                    <p>My PocketFolio has also finished NYU's Startup Bootcamp and soon hopes to participate in their NYU Female Founders Fellowship, their Startup Sprint, and their Summer Launchpad.</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default App;