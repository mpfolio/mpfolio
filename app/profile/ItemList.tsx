"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import "./page.css";
import default_filler from "@/app/assets/profile/default_filler.svg";
import { ExperienceType } from "@/app/types";

const ExperienceItem = (exp: ExperienceType) => {
    return (
        <div className="exp-item">
            <Image className="exp-img" src={default_filler} alt="head" />
            <div className="exp-body">
                <h4>{ exp.title }</h4>
                <h6>{ exp.body }</h6>
            </div>
        </div>
    )
}

const EmploymentItem = (emp: ExperienceType) => {
    return (
        <div className="emp-item">
            <Image className="emp-img" src={default_filler} alt="head" />
            <div className="emp-body">
                <h4>{ emp.title }</h4>
                <h6>{ emp.body }</h6>
            </div>
        </div>
    )
}

type ItemListProps = {
    items: ExperienceType[];
    type: string;
}
const ItemList = ({ items, type }: ItemListProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="items-container">
            { !open ? 
                items.slice(0, 3).map((item, i) => (
                    <>
                    {   
                        type == "exp" ? <ExperienceItem {...item} /> :
                        type == "emp" ? <EmploymentItem {...item} /> :
                        <></>
                    }
                    { i != 2 && <div className="item-line"></div>}
                    </>
                ))
                :
                items.map((item, i) => (
                    <>
                    {   
                        type == "exp" ? <ExperienceItem {...item} /> :
                        type == "emp" ? <EmploymentItem {...item} /> :
                        <></>
                    }
                    { i != items.length - 1 && <div className="item-line"></div>}
                    </>
                ))
            }
            { items.length > 3 && (
                <div className="show-more" onClick={() => setOpen(!open)}>
                    { !open ? 
                        <h6>
                            Click for {items.length - 3} more experience{items.length == 4 ? "" : "s"}
                        </h6>
                        :
                        <h6>
                            Hide {items.length - 3} experience{items.length == 4 ? "" : "s"}
                        </h6>
                    }
                </div>
            )}
        </div>
    );
}
export default ItemList;