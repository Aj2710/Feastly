import React from 'react';
import { useState, useEffect } from 'react';
import { FETCH_RES_MENU_URL_FIRST_PART } from './constants';
import { FETCH_RES_MENU_URL_SECOND_PART } from './constants';
import { useParams } from 'react-router-dom';

const useRestaurantMenu = () => {
    const{ resId } = useParams();

    const restaurantFormat = {
        name: "",
        logo: "",
        id: "",
        cuisines : [],
        areaname: "",
        deliverymsg: "",
        avgrating: "",
        totalratings: "",
        itemCards: []
    }

    const [restaurant , setRestaurant] = useState(restaurantFormat);

    useEffect(()=>{
        fetchMenu();
    } , [])

    const fetchMenu = async()=>{
        const data = await fetch(FETCH_RES_MENU_URL_FIRST_PART + resId + FETCH_RES_MENU_URL_SECOND_PART);
        const json = await data.json()
        
    
        const card = json?.data?.cards[0]?.card?.card?.info;

        const cuisineDetails = (json?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards) ? (json?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards): (json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

        setRestaurant({
            name: card?.name,
            logo: card?.cloudinaryImageId,
            id: card?.id,
            cuisines: card?.cuisines,
            areaname: card?.areaName,
            deliverymsg: card?.feeDetails?.message,
            avgrating: card?.avgRatingString,
            totalratings: card?.totalRatingsString,
            itemCards: cuisineDetails
        })
    }
    
    return restaurant;
}

export default useRestaurantMenu;