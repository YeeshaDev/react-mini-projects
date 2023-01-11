import React from "react";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import welcome from "../welcome.svg"

export default function Signup(){
    

const signForm= {
    fullName:"",
    email:"",
    password:"",
    passConfirm:"",

}

const [formValues,setFormValues] = useState(signForm)
const [formError,setFormError] = useState({})
const [isSubmit,setIsSubmit] = useState(false)


function handleChange(event){
    const {name,value} = event.target
 setFormValues({...formValues,
[name]: value
});

}
// This where the validation and error messages happens
function validate(values){
    const errors ={}
    const regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.fullName){
        errors.fullName="Please name field is required";
    }
    if (!values.email){
        errors.email="Email field is required";
    }else if(!regex.test(values.email)){
        errors.email = "This is not a valid email"
    }
    if (!values.password){
        errors.password="Please password field is required";
    }else if(values.password.length < 4){
        errors.password = "Password cannot be less than 4 characters"
    }
    if (!values.passConfirm){
        errors.passConfirm="This field cannot be empty";
    }else if(values.passConfirm !== values.password){
        errors.passConfirm = "Password does not match!"
    }
    return errors;
    }

    
function handleSubmit  (event) {
      event.preventDefault();
      setFormError(validate(formValues))
      setIsSubmit(true)

}

useEffect (() => {
    console.log(formError)
    if(Object.keys(formError).length === 0 && isSubmit){
        
    }
    
    
},[formError]);




return (
    <div className="wrapper"> 
    <img src={welcome} className="sign--img"/>
    <h1 className="sign--heading">Welcome Onboard!</h1>
    <h3 className="sign--sub">Let's help you meet up your task</h3>

    <form className="sign-form" onSubmit={handleSubmit}>
        <input type="text" 
        placeholder="Enter your full name"
        name="fullName"
        onChange={handleChange}
        value={formValues.fullName}
     />
     <span className="error"><p>{formError.fullName}</p></span>
     

        <input type="text" 
        placeholder="Enter your email"
        name="email"
        onChange={handleChange}
        value={formValues.email}
        />
        <span className="error"><p>{formError.email}</p></span>
     

        <input type="text" 
        placeholder="Enter password"
        name="password"
        onChange={handleChange}
        value={formValues.password}
        />
        <span className="error"><p>{formError.password}</p></span>
     

        <input type="text" 
        placeholder="Confirm password"
        className=""
        name="passConfirm"
        onChange={handleChange}
        value={formValues.passConfirm}
        />
        <span className="error"><p>{formError.passConfirm}</p></span>
     
        <button className="sign--btn">
            Register
        </button>
    </form>
    <h4 className="sign--text">Already have account?
    <Link to="/login">
        <span className="link--text">Sign in</span></Link>
    </h4>
   </div>
)
}