import React, { useEffect, useState } from "react";
import '../App.css'
import RestaurantComponent from "./RestaurantComponent";
import resData from "../utils/mockData"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body=()=>{

    const [restaurantList,setRestaurantsList]=useState([])
    const [filterList,setFilterList]=useState([])
    const [searchValue,setSearchValue]=useState("")
    const handleChange =(e)=>{
        setFilterList(resData.filter(x =>x.info.avgRating >4 ))
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
        setFilterList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
    const searchValueHandler=(e)=>{
        setSearchValue(e.target.value)
    }
    const btnHandle =()=>{  
        let filterData= restaurantList.filter((e) => e?.info?.name?.toLowerCase().includes(searchValue.toLowerCase())) 
        if(filterData.length>10){
            fetchData();
            filterData= restaurantList.filter((e) => e?.info?.name?.toLowerCase().includes(searchValue.toLowerCase()))
        }else{
            setFilterList(filterData)
        }
        

    }
    
    return (restaurantList?.length === 0) ? <Shimmer /> : (
        <div className="body-container">
         <div className="filter-div">
                <div className="search">
                    <input className="search-input" value={searchValue} onChange={searchValueHandler}  type="text" />
                    <button onClick={btnHandle} className="search-btn">Search</button>
                </div>
                <button onClick={handleChange} className="filter-btn" value="top-rated">Top Rated</button>
         </div>

            <div className="res-container">
            {filterList?.map((res,index)=>
                <Link className="custom-link" to={"/restaurant/"+res.info.id}  key={res.info.id}>
                <RestaurantComponent  resData={res} />
                </Link>)}
            </div>
        </div>
        
    )
}

export default Body