import React from "react";
import "../App.css"
import {CDN_URL} from "../utils/constants"
const RestaurantComponent =(props)=>{
    
    const {resData} =props
    const {name,cuisines,costForTwo,avgRating,sla}= resData.info
   
   
    return(
    <div>        
        <div className="res-card"  >
            <img 
            className="res-logo"
            alt="res-logo.png"
            src={CDN_URL+ resData.info.cloudinaryImageId} />
         <div className="res-details">
            <div>
                <h3>{name} </h3>
            </div>
            <div>
                <h6>{cuisines.join(", ")}</h6>
            </div>
            <div>
                <h6>{costForTwo}</h6>
            </div>
            <div className="star-div">
                <h5>&#9734;{avgRating} </h5>
            </div>
            <div>
            <h6>{sla.deliveryTime} Mints </h6>
            </div>
        </div>
        </div>
   
    </div>
    )
}

export default RestaurantComponent