import React from "react";
import { Link } from "react-router-dom";
import signin from "../signin.svg"

export default function Login(){
    return (
        <div className="sign--wrapper">
        <img src={signin} className="sign--img"/>
        <h2 className="sign--heading">Welcome Back !</h2>
        
        <form className="sign-form">

        <input type="text" 
        placeholder="Enter your email"/>
         <input type="text" 
        placeholder="Enter Password"/>
         <a href="#" className="forget--btn">Forget Password</a>
         </form>
         <Link style={{textDecoration:"none"}} to="/main">
            <button className="login--btn">
            Login</button>
            </Link>
         <h4>Don't have account? 
           <Link to="/signup">
           <span className="link--text">
            Sign Up</span></Link>
            </h4>
        </div>
    )

    }
