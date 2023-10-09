import React from "react";
import ItemList from "./ItemList";
import ComponentWrapper from "./ComponentWrapper";

const RestaurantCategory = ({ data, showList, setShowIndex }) => {
  return (
    
    <div className="flex justify-between p-3 my-1 border-b-8 hover:cursor-pointer  flex-col">
      <div
        className="flex justify-between"
        onClick={() => {
          setShowIndex();
        }}
      >
        <span className="font-bold">
          {data.title}({data.itemCards.length})
        </span>
        <span>
          <i className="fa-solid fa-caret-down"></i>
        </span>
      </div>
      {showList && <ItemList itemList={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
