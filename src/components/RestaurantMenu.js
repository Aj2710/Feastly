import React from "react";
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const restaurant = useRestaurantMenu();
  const [showIndex, setShowIndex] = useState(null);

  const {
    name,
    cuisines,
    areaname,
    deliverymsg,
    avgrating,
    totalratings,
    itemCards,
    logo,
  } = restaurant;

  const restaurantCategory = restaurant.itemCards.filter((c) => {
    return (
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  return (
    <div className="flex flex-col mx-auto w-[50vw]">
      <div className="flex justify-between p-4 mt-2 border-b-2">
        <div className="flex flex-col">
          <span className="text-lg font-bold">{name}</span>
          <span className="text-gray-500">{cuisines.join(" ,")}</span>
          <span className="text-gray-500">
            <i className="fa-solid fa-location text-orange-600 mr-1"></i>
            {areaname}
          </span>
        </div>
        <div className="flex flex-col border w-28 rounded-md">
          <span className="p-1.5 border-b-2 text-center text-green-500 font-bold">
            <i className="fa-solid fa-star text-green-500 mr-1"></i>
            {avgrating}
          </span>
          <span className="p-1.5 text-center font-bold text-gray-500">
            {totalratings}
          </span>
        </div>
      </div>
      <div>
        {restaurantCategory.map((c, index) => {
          return (
            <RestaurantCategory
              data={c?.card?.card}
              showList={index === showIndex ? true : false}
              index={index}
              setShowIndex={() => {
                index === showIndex ? setShowIndex(null) : setShowIndex(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
