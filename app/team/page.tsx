import Image, { StaticImageData } from "next/image";
import "@/app/team/page.css";
import brandon_img from "@/app/assets/team/Brandon_Headshot.png"
import erika_img from "@/app/assets/team/Erika_Headshot.jpeg"
import nyala_img from "@/app/assets/team/Nyala_Headshot.jpeg"
import rowan_img from "@/app/assets/team/Rowan_Headshot.jpg"
import sophie_img from "@/app/assets/team/Sophie_Headshot.jpg"

type CardIconProps = {
    name: string;
    title: string;
    img: StaticImageData;
    body?: string;
}
// TO DO: update default image to filler image

const Card = ({ name, title, img, body } : CardIconProps) => {

    return (
        <div className="about-card">
            <div className={`card-img-container`}>
                <Image className="card-img" src={img} alt="head" />
            </div>
            { body ? 
                <div className={`card-body`}>
                    <h3 className="name color-primary">
                        { name }
                    </h3>
                    <h4 className="title">{title}</h4>
                    <p>
                        { body }
                    </p>
                </div>
            :
                <>
                <h3 className="name color-primary">
                    { name }
                </h3>
                <h4 className="title" style={{ fontWeight: 400 }}>{title}</h4>
                </>
            }
        </div>
    )
}

function App() {
    return (
        <>
        <h1 className="main-title">Our Team</h1>
        <div className="card-container">
           <div className="flex-row">
               <Card 
                    name="Nyala Tolfree"
                    title="Co-Founder & CEO"
                    img={nyala_img}
                    body="Nyala is an Undergraduate student at NYU studying Business and Technology Management. The idea of My Pocket Portfolio stemmed from her fashion model experience in New York City where she has been featured in magazines such as Harpers' Bazaar. As an Engineer and a person working in the technology industry it is glaring how archaic the arts & entertainment industry can be. Along with her team and entertainment colleagues,she has developed MPF to bring this industry into the technological era the world is in today."
                />
                <Card 
                    name="Erika Grossman"
                    title="Co-Founder & CTO"
                    img={erika_img}
                    body="Erika is an Undergraduate student at NYU's Tandon School of Engineering. She is studying a major in Integrated Design and Media, and a minor in Business of Entertainment, Media, and Technology. She is experienced in graphic and front end website engineering. Specializing in front end design and development, Erika works on all of the visual aspects and visual coding segments of the website you are looking at today."
                />
            </div>
            {/* <div className="flex-row">
                <Card 
                    name="Rowan Tolfree"
                    title="Back End Developer"
                    img={rowan_img}
                />
                <Card 
                    name="Sophia Manalo"
                    title="Creative Director"
                    img={sophie_img}
                />
                <Card 
                    name="Brandon Kim"
                    title="Web Developer"
                    img={brandon_img}
                />
            </div> */}
        </div>
        <div className="temp-spacer"></div>
        </>
    );
}

export default App;