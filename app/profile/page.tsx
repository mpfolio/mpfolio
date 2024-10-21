import Image from "next/image";
import "./page.module.css";
import head from "@/app/assets/profile_test/head.jpg";

function App() {
    return (
        <div className="profile">
            <div className="header">
                <Image className="pfp" src={head} alt="head" />
                <div className="header-content">
                    <div className="header-name">
                        <h2>Sophia Manalo</h2>
                        <h4>
                            <button className="outlined">Edit</button>
                        </h4>
                    </div>
                    <p>@sophialeano</p>
                    <p>10 connections</p>
                    <div className="spacer"></div>
                    <p>UX Designer | she/her | [loc] NYC, LA</p>
                    <div className="header-buttons">
                        <h5>
                            <button className="outlined">Portfolio</button>
                        </h5>
                        <h5>
                            <button className="outlined">
                                Compcard
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

            <div className="sections-row">
                <div className="section photos">
                    <div className="section-header">
                        <h3 className="color-primary">Photos</h3>
                        <div className="spacer"></div>
                        <h5>
                            <button className="outlined square">Edit</button>
                        </h5>
                    </div>
                </div>

                <div className="section msmt">
                    <div className="section-header">
                        <h3 className="color-primary">Measurements</h3>
                        <div className="spacer"></div>
                        <h5>
                            <button className="outlined square">Edit</button>
                        </h5>
                    </div>
                    <h5 className="units-toggle">METRIC / IMPERIAL</h5>
                    <div className="msmt-grid">
                        <div className="msmt-grid-cell">
                            <h5 style={{fontWeight: 500}}>Height</h5>
                            <h2>5' 8"</h2>
                        </div>
                        <div className="msmt-grid-cell">
                            <h5 style={{fontWeight: 500}}>Weight</h5>
                            <h2>115 lbs</h2>
                        </div>
                        <div className="msmt-grid-cell">
                            <h5 style={{fontWeight: 500}}>Hips</h5>
                            <h2>30"</h2>
                        </div>
                        <div className="msmt-grid-cell">
                            <h5 style={{fontWeight: 500}}>Bust</h5>
                            <h2>34"</h2>
                        </div>
                        <div className="msmt-grid-cell">
                            <h5 style={{fontWeight: 500}}>Shoe</h5>
                            <h2>9 US</h2>
                        </div>
                        <div className="msmt-grid-cell">
                            <h5 style={{fontWeight: 500}}>Dress</h5>
                            <h2>4 US</h2>
                        </div>
                        <div className="msmt-grid-cell">
                            <h5 style={{fontWeight: 500}}>Eye Color</h5>
                            <h2>Brown</h2>
                        </div>
                        <div className="msmt-grid-cell">
                            <h5 style={{fontWeight: 500}}>Hair Color</h5>
                            <h2>Brown</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section exp">
                <div className="section-header">
                    <h3 className="color-primary">Experience</h3>
                    <div className="spacer"></div>
                    <h5>
                        <button className="outlined square">Add new</button>
                    </h5>
                    <h5>
                        <button className="outlined square">Edit</button>
                    </h5>
                </div>
                <div className="exp-item">
                    <Image className="exp-img" src={head} alt="head" />
                </div>
            </div>
            <div className="h-20">spacer</div>
        </div>
    );
}

export default App;