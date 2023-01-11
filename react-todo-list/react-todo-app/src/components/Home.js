import React from "react";
import { Link } from "react-router-dom"
import {FaArrowRight} from "react-icons/fa";
import  { IconContext} from "react-icons";
import todo from "../todo.svg";

export default function Home(){

    return (
        <div className="home--container">
            <img src={todo} className="todo--img" />
            <h1 className="top--text">Manage your tasks!</h1>
            <p className="bottom--text">Manage your daily activities easily to increase
                your productivity,organize your work and life.you
                can now plan your day,manage your progress and make
                real progress towards your goals.
            </p>
                <Link style={{textDecoration:"none"}} to="/signup">
            <button className="top--btn"> Get Started
            </button>
            </Link>
            <Link style={{textDecoration:"none"}} to="/main">
            <button className="bottom--btn"> 
            View Demo
            <IconContext.Provider value={{ className:"icon"}}>
            <FaArrowRight/>
            </IconContext.Provider>
            </button>
            </Link>
        </div>

    )
}