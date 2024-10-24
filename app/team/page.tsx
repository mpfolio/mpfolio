import Image, { StaticImageData } from "next/image";
import "@/app/team/page.css";
import brandon_img from "@/app/assets/team/Brandon_Headshot.png"
import erika_img from "@/app/assets/team/Erika_Headshot.jpeg"
import nyala_img from "@/app/assets/team/Nyala_Headshot.jpeg"
import rowan_img from "@/app/assets/team/Rowan_Headshot.jpg"
import sophie_img from "@/app/assets/team/Sophie_Headshot.jpg"

type CardProps = {
    dir?: "left" | "right"; // position of img
    name: string;
    title: string;
    img: StaticImageData;
    body: string;
}
// TODO: update default image to filler image
const Card = ({ dir="left", name, title, img, body } : CardProps) => {

    return (
        <div className="about-card">
            <div className={`card-img-container ${dir}`}>
                <Image className="card-img" src={img} alt="head" />
            </div>
            <div className={`card-body ${dir}`}>
                <h2 className="name color-primary" style={{ textAlign: dir }}>
                    { name }
                </h2>
                <h3 className="title" style={{ textAlign: dir }}>CEO</h3>
                <p style={{ textAlign: dir }}>
                    { body }
                </p>
            </div>
        </div>
    )
}

function App() {
    return (
        <>
        <h1 className="main-title">Our Team</h1>
        <div className="card-container">
           
               <Card 
                dir="left"
                name="Nyala Tolfree"
                title="CEO"
                img={nyala_img}
                body="Nyala is an Undergraduate student at NYU studying Business and Technology Management. The idea of My Pocket Portfolio stemmed from her fashion model experience in New York City where she has been featured in magazines such as Harpers' Bazaar. As an Engineer and a person working in the technology industry it is glaring how archaic the arts & entertainment industry can be. Along with her team and entertainment colleagues,she has developed MPF to bring this industry into the technological era the world is in today."
            />
            <Card 
                dir="right"
                name="Erika Grossman"
                title="Chief of Front End Development"
                img={erika_img}
                body="Erika is an Undergraduate student at NYU's Tandon School of Engineering. She is studying a major in Integrated Design and Media, and a minor in Business of Entertainment, Media, and Technology. She is experienced in graphic and front end website engineering. Specializing in front end design and development, Erika works on all of the visual aspects and visual coding segments of the website you are looking at today."
            />
     
            <Card 
                dir="left"
                name="Rowan Tolfree"
                title="Back End Developer"
                img={rowan_img}
                body="Rowan is an Undergraduate student at PSU studying Data Analytics. He specializes in data systems and back end development for My PocketFolio. Excelling in programming in multiple languages and building data structures, he has joined this team to create a social media networking platform that makes the arts & entertainment industry more accessible. "
            />
            <Card 
                dir="right"
                name="Sophia Manalo"
                title="Creative Director"
                img={sophie_img}
                body="Sophia is an Undergraduate student at NYU studying Integrated Design and Media. She has a background in graphic design, print design, and UX/UI, and is experienced  with softwares in the Adobe suite."
                />
            <Card 
                dir="left"
                name="Brandon Kim"
                title="Web Developer"
                img={brandon_img}
                body="Brandon Kim is an undergraduate student at NYU studying Computer Science. He has a background in frontend development, and is experienced in technologies like Next.js and database management."
            />
        </div>
        <div className="temp-spacer"></div>
        </>
    );
}

export default App;