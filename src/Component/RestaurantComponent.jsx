import React from "react";
import "../App.css"
import {CDN_URL} from "../utils/constants"
const RestaurantComponent =(props)=>{
    
    const {resData} =props
    const {name,cuisines,costForTwo,avgRating,sla}= resData.info
     return(
        
        <div className="res-card">
            {/*this is the way we write comments in */} 
            <img 
            className="res-logo"
            alt="res-logo.png"
            src={CDN_URL+ resData.info.cloudinaryImageId} />
            <h3>{name} </h3>
            <h6>{cuisines.join(", ")}</h6>
            <h6>{costForTwo}</h6>
            <div className="star-div">
                <h5>&#9734;{avgRating} </h5>
            </div>
            <h6>{sla.deliveryTime} Mints </h6>
        </div>
    )
}

export default RestaurantComponent