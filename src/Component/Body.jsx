import React, { useEffect, useState } from "react";
import '../App.css'
import RestaurantComponent from "./RestaurantComponent";
import resData from "../utils/mockData"
import Shimmer from "./Shimmer";


const Body=()=>{

    const [restaurantList,setRestaurantsList]=useState([])
    const handleChange =(e)=>{
        setRestaurantsList(resData.filter(x =>x.info.avgRating >4 ))
    }
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData =async ()=>{
        const data= await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
         const json=await data.json()
         setRestaurantsList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    
    if(restaurantList?.length === 0){
        return  <Shimmer /> 
    }
    
    return(
        <div className="body-container">
         <div className="filter-div">
                <button onClick={handleChange} className="filter-btn" value="top-rated">Top Rated</button>
         </div>

            <div className="res-container">
            {restaurantList?.map((res,index)=>
                <RestaurantComponent  key={index} resData={res} />
            )}
            </div>
        </div>
        
    )
}

export default Body