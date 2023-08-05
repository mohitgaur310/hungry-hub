import React from "react";
import '../App.css'
import {LOGO_URL} from "../utils/constants"

const Header=()=>{
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
                </ul>
            </div>
        </div>
    )
}

export default Header;