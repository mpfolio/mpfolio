"use client"

import Image from "next/image";
import "./page.css";
import default_avatar from "@/app/assets/default_avatar.svg";
import portfolio from "@/app/assets/profile/portfolio.svg";
import compcard from "@/app/assets/profile/compcard.svg";
import instagram from "@/app/assets/profile/instagram.svg";
import ItemList from "@/app/profile/ItemList";
import photo1 from "@/app/assets/profile/photo1.jpg";
import photo2 from "@/app/assets/profile/photo2.jpg";
import photo3 from "@/app/assets/profile/photo3.jpg";
import { ExperienceType } from "@/app/types";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import EditModal from "./EditModal";
import { useState } from "react";

export default function App() {
    type ModalValues = "profile" | "measurement" | "photos" | "experience" | "skills";
    const [modal, setModal] = useState<ModalValues | null>(null);

    const experiences: ExperienceType[] = [
        {
            title: "Experience 1 | MM/YYYY",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a suscipit turpis, eu commodo leo. Nunc bibendum malesuada feugiat. Pellentesque fermentum vehicula euismod. Nulla facilisi. Lorem ipsum dolor sit ame Vivamus auctor nulla non ipsum vulputate, in bibendum orci pretium. Curabitur in dolor accumsan, dictum libero et, euismod nunc."
        },
        {
            title: "Experience 2 | MM/YYYY",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a suscipit turpis, eu commodo leo. Nunc bibendum malesuada feugiat. Pellentesque fermentum vehicula euismod. Nulla facilisi. Lorem ipsum dolor sit ame Vivamus auctor nulla non ipsum vulputate, in bibendum orci pretium. Curabitur in dolor accumsan, dictum libero et, euismod nunc."
        },
        {
            title: "Experience 3 | MM/YYYY",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a suscipit turpis, eu commodo leo. Nunc bibendum malesuada feugiat. Pellentesque fermentum vehicula euismod. Nulla facilisi. Lorem ipsum dolor sit ame Vivamus auctor nulla non ipsum vulputate, in bibendum orci pretium. Curabitur in dolor accumsan, dictum libero et, euismod nunc."
        },
        {
            title: "Experience 4 | MM/YYYY",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a suscipit turpis, eu commodo leo. Nunc bibendum malesuada feugiat. Pellentesque fermentum vehicula euismod. Nulla facilisi. Lorem ipsum dolor sit ame Vivamus auctor nulla non ipsum vulputate, in bibendum orci pretium. Curabitur in dolor accumsan, dictum libero et, euismod nunc."
        },
    ]

    const employments: ExperienceType[] = [
        {
            title: "Employment 1",
            body: "MM/YYYY"
        },
        {
            title: "Employment 2",
            body: "MM/YYYY"
        },
        {
            title: "Employment 3",
            body: "MM/YYYY"
        },
        {
            title: "Employment 4",
            body: "MM/YYYY"
        },
    ]

    const photos = [photo1, photo2, photo3, photo2]

    const measurements = {
        height: "5'5",
        hips: 34,
        bust: 32,
        shoe: "8 US",
        dress: 2,
        eyes: "BROWN",
        hair: "BROWN"
    }

    const skills = [
        "Commercial",
        "Runway",
        "Professionalism",
        "Adaptability",
        "Editorial",
        "Confidence",
        "Adaptable Appearance",
        "Teamwork",
        "Flexibility",
        "Balance & Coordination"
    ]


    return (
        <div className="profile">
            <div className="header">
                <Image className="pfp" src={default_avatar} alt="head" />
                <div className="header-content">
                    <div className="header-name">
                        <h2>Sophia Manalo</h2>
                        <h4>
                            <button className="outlined" onClick={() => setModal("profile")}>Edit</button>
                        </h4>
                    </div>
                    <p>@sophialeano</p>
                    <p>10 connections</p>
                    <div className="spacer"></div>
                    <p>UX Designer | she/her | [loc] NYC, LA</p>
                    <div className="header-buttons">
                        <h5>
                            <button className="icon outlined">
                                <div className="icon-container">
                                    <Image className="icon-img" src={portfolio} alt="" />
                                </div>
                                Portfolio
                            </button>
                        </h5>
                        <h5>
                            <button className="icon outlined">
                                <div className="icon-container">
                                    <Image className="icon-img" src={compcard} alt="" />
                                </div>
                                Compcard
                            </button>
                        </h5>
                        <h5>
                            <button className="icon outlined">
                                <div className="icon-container">
                                    <Image className="icon-img" src={instagram} alt="" />
                                </div>
                                Instagram
                            </button>
                        </h5>
                    </div>
                </div>
            </div>

            <div className="section about">
                <div className="section-header">
                    <h3 className="color-primary">About me</h3>
                    <div className="spacer"></div>
                    <h5>
                        <button className="outlined square">Edit</button>
                    </h5>
                </div>
                <p>This is the max 400. A character can be any letter, number, punctuation, special character, or space. Each of these characters takes up one byte of space in a computer's memory. Some Unicode characters, like emojis and some letters in non-Latin alphabets, take up two bytes of space and therefore count as two characters. Use our character counter tool below for an accurate count of your characters.</p>
            </div>

            <div className="section photos">
                <div className="section-header">
                    <h3 className="color-primary">Photos and Measurements</h3>
                    <div className="spacer"></div>
                    <h5>
                        <button className="outlined square" onClick={() => setModal("measurement")}>Edit</button>
                    </h5>
                </div>

                
                <Carousel
                    opts={{ 
                        loop: true
                    }}
                    className="carousel"
                >
                    <CarouselContent>
                        { photos.map((photo, i) => (
                            <CarouselItem className="basis-1/3">
                                <Image src={photo} alt={`photo ${i}`} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="carousel-controls">
                        <CarouselPrevious className="outlined" />
                        <CarouselNext className="outlined" />
                    </div>
                </Carousel>
            </div>

            <div className="section measurements">
                <h6 className="units">METRIC/IMPERIAL</h6>
                { Object.entries(measurements).map(([key, value]) => (
                    <div className="measurement">
                        <h5>
                            <span className="measurement-key">{key[0].toUpperCase() + key.slice(1)}</span>
                        </h5>
                        <h5>
                            <span className="measurement-value"><strong>{value}</strong></span>
                        </h5>
                    </div>
                ))}
            </div>

            <div className="section exp">
                <div className="section-header">
                    <h3 className="color-primary">Experience</h3>
                    <div className="spacer"></div>
                    <h5>
                        <button className="outlined square">Add new</button>
                    </h5>
                    <h5>
                        <button className="outlined square" onClick={() => setModal("experience")}>Edit</button>
                    </h5>
                </div>
                <ItemList items={experiences} type="exp" />
            </div>

            <div className="sections-row">
                <div className="section emp">
                    <div className="section-header">
                        <h3 className="color-primary">Employment</h3>
                        <div className="spacer"></div>
                        <h5>
                            <button className="outlined square">Add new</button>
                        </h5>
                        <h5>
                            <button className="outlined square">Edit</button>
                        </h5>
                    </div>
                    <div className="emp-skills-row">
                        <div className="emp-container">
                            <ItemList items={employments} type="emp" />
                        </div>
                    </div>
                </div>
                <div className="section skills">
                    <div className="section-header">
                        <h3 className="color-primary">Skills</h3>
                        <div className="spacer"></div>
                        <h5>
                            <button className="outlined square">Add new</button>
                        </h5>
                        <h5>
                            <button className="outlined square">Edit</button>
                        </h5>
                    </div>
                    <div className="emp-skills-row">
                        <div className="skills-bubbles-container">
                            { skills.map(s => {
                                return (
                                    <div className="skill-bubble">
                                        <h4>{ s }</h4>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-20"></div>
            { modal != null ? <EditModal type={modal} handleClose={() => {setModal(null)}}/> : <></>}
        </div>
    );
}