import React from "react";
import Itemcard from "./Itemcard";

const ItemList = ({ itemList }) => {
  return (
    <div className="bg-gray-50">
      {itemList.map((item) => {
        return <Itemcard item={item} />;
      })}
    </div>
  );
};

export default ItemList;
