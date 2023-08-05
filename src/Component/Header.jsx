import React, { useState } from "react";
import '../App.css'
import {LOGO_URL} from "../utils/constants"

const Header=()=>{
    // const [login,setLogin]=useState(false)
    const [btnLogin,setbtnLogin]=useState('login')
    const changeHandler=()=>{
               btnLogin==='login'? setbtnLogin('Logout') : setbtnLogin('login'); 
    }
    return(
        <div className="header">
            <div className="logo"> 
                <img className="logo" src={LOGO_URL}  alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button onClick={changeHandler} className="login-btn">{btnLogin}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;