import React from "react";
import { useEffect } from "react";

 const Alert = ({ msg,type,removeAlert,list }) => {
useEffect (() => {
const timeout = setTimeout(() => {
removeAlert();
},3000)
return () => clearTimeout(timeout)
},[list])

    return <h3 className={`alert alert-${type}`}>{msg}</h3>
}
export default Alert;