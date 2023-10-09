import React from 'react'
import { useState, useEffect } from 'react';
import { API_EXPIRY_TIME, RES_URL } from './constants';
import { getDataFromLocalStorage, setDataToLocalStorage } from './helper';


const useRestaurant = () => {
    let[listOfRestaurants , setListOfRestaurants] = useState([]);
    let[filteredList , setFilteredList] = useState([]);
    const[carousel , setCarousel] = useState([]);

    useEffect(()=>{
        fetchData()
    } , []);

    const fetchData = async () => {
        let json ;
        if(getDataFromLocalStorage("api_response") !== null){
            json = getDataFromLocalStorage("api_response");
        }
        else{
            const data = await fetch(RES_URL);
            json = await data.json();
            setDataToLocalStorage(API_EXPIRY_TIME , "api_response" ,json)
        }
        setCarousel()
        const arrayOfCards = json.data.cards;
        const restaurant_list = "restaurant_grid_listing";
        
        for( const cardObj of arrayOfCards ){
          
            if (cardObj.card.card && cardObj.card.card.id ===
            restaurant_list) {
            const resData = cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setListOfRestaurants(resData); 
            setFilteredList(resData) ;           
            }

        }

    }

    const  searchIt = (searchText)=>{
        filteredList = listOfRestaurants.filter((restaurant)=>{
            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
        })
        setFilteredList(filteredList);
    }

    return {filteredList , searchIt};

}

export default useRestaurant