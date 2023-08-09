import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { RES_MENU , PRE_RES_MENU } from "../utils/constants"
const RestaurantMenu =()=>{

    const [restaurantsMenu, setRestaurantsList]=useState([])
    const [restaurantDetails,setRestaurantsDetails]=useState({})
    const {resId}=useParams();
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async () =>{
        const data =await fetch(RES_MENU+resId+PRE_RES_MENU);
        const json =await data?.json();
        console.log(json);
        setRestaurantsDetails(json?.data?.cards[0]?.card?.card?.info)           
        setRestaurantsList(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
            console.log(restaurantsMenu);
            console.log('Details',restaurantDetails);
   
        }
    return (
    <div className="menu-body">
        <div className="res-outlet">
            <div>
                <h4 className="outlet-name">{restaurantDetails.name}</h4>
                <h5 className="outlet-details">{restaurantDetails?.cuisines?.join(", ")}</h5>
                <h6 className="outlet-details">{restaurantDetails?.areaName}, {restaurantDetails.city}</h6>
            </div>
            <div className="outlet-rating">
                   <p>{restaurantDetails.avgRating}</p> 
                   <p>{restaurantDetails.totalRatingsString}</p>
            </div>
        </div>
        
        <div className="res-details">
            <ul>
           {restaurantsMenu?.map((e)=>
          
            <li key={e.card.info.id} >{e.card.info.name} </li>
            )}
           </ul>
        </div>

    </div>
    )
}
export default RestaurantMenu