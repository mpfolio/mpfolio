"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import squiggle from "@/app/assets/squiggle.svg";
import '@/app/subscription/page.css';
import check from "@/app/assets/check.svg";

type SubscriptionCardProps = {
    i: number;
    title: string;
    price: string;
    subtitle: string;
    features: string[];
    focus: number;
    setFocus: (i: number) => void;
};
const SubscriptionCard = ({ i, title, price, subtitle, features, focus, setFocus }: SubscriptionCardProps) => {
    return (
        <div className={`subscription-card ${focus == i ? "focused" : ""}`}
            onMouseEnter={() => setFocus(i)}
            onMouseLeave={() => setFocus(1)}
        >
            <h3>{ title }</h3>
            {
                price.includes("/") ? (
                    <>
                    <h1>
                        {price.substring(0, price.indexOf("/"))}
                        <span style={{
                            fontSize: "2.5rem"
                        }}>
                            {price.substring(price.indexOf("/"))}
                        </span>
                    </h1>
                    </>
                ) : (
                    <h1>{price}</h1>
                )
            }
            <p>{ subtitle }</p>
            <div className="subscription-card-list">
                {
                    features.map(text => {
                        return (
                            <div className="subscription-card-item">
                                <p>O</p>
                                <p>{ text }</p>
                            </div>
                        )
                    })
                }
            </div>
            <p className="button-wrapper">
                <button className="filled">Get { title } Plan</button>
            </p>
        </div>
    );
}
 
function App() {
    const [focus, setFocus] = useState(1);

    useEffect(() => {
        // -1 = unselected
        // set to 1 by default
        if (focus == -1) {
            setFocus(1);
        }
    }, [focus])

    const compare_table : (string | boolean)[][] = [
        ["Measurements", true, true, true],
        ["Comp Card Templates", false, true, true],
        ["Digital Display", true, true, true],
        ["Highlight Experiences", true, true, true],
        ["Admin View", false, false, true],
        ["Portfolio Site", false, true, true],
        ["Model Card", false, true, true],
        ["Host Castings", false, false, true],
        ["Visualized Data", false, false, true],
    ]

    return (
        <>
        <div className="body">
            <h1 className="title">Packages</h1>
            <div className="subscription-card-container">
                <SubscriptionCard 
                    i={0}
                    title="Regular"
                    price="Free"
                    subtitle="Free plan for all users."
                    features={["Measurements", "Digital Display", "Highlight Experiences"]}
                    focus={focus} setFocus={setFocus}
                />
                <SubscriptionCard 
                    i={1}
                    title="Premium"
                    price="$5/month"
                    subtitle="Ideal for all creators"
                    features={["Comp Card Templates", "Portfolio Site", "Model Card"]}
                    focus={focus} setFocus={setFocus}
                />
                <SubscriptionCard 
                    i={2}
                    title="Deluxe"
                    price="$10/month"
                    subtitle="Ideal for companies."
                    features={["Admin View", "Host Castings", "Visualized Data"]}
                    focus={focus} setFocus={setFocus}
                />
            </div>
            <Image id="squiggle" src={squiggle} alt="squiggle" />
            <h1 className="title color-primary">Compare Plans</h1>
            <div className="compare-table"
                style={{ gridTemplateRows: `repeat(${compare_table.length + 1}, 1fr)` }}
            >
                <p></p>
                <h3>Regular</h3>
                <h3>Premium</h3>
                <h3>Deluxe</h3>
                {
                    compare_table.map((row, i) => {
                        return (
                            <>
                            <h3>{ row[0] }</h3>
                            { row.slice(1).map((j) => {
                                return j ? 
                                    <p className={i != compare_table.length - 1 ? "underlined-cell" : ""}>
                                        <Image className="check" src={check} alt="check" />
                                    </p> 
                                :   <p className={i != compare_table.length - 1 ? "underlined-cell" : ""}></p>
                            })}
                            </>
                        )
                    })
                }
                <div className="background"></div>
                <div className="vertical background"
                    style={{ gridColumn: "2 / 2" }}
                ></div>
                <div className="vertical background"
                    style={{ gridColumn: "3 / 3" }}
                ></div>
                <div className="vertical background"
                    style={{ gridColumn: "4 / 4" }}
                ></div>
            </div>
        </div>
        </>
    );
}

export default App;