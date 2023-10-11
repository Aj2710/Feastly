import { Link } from "react-router-dom";
import { IMG_URL } from "../utils/constants";

const RestaurantCard = ({ resInfo }) => {
  const {
    name,
    cuisines,
    id,
    cloudinaryImageId,
    costForTwo,
    avgRating,
    areaName,
  } = resInfo;

  const path = "/restaurant/" + id;

  return (
    
    <Link to={path}>
      <div className="p-2.5 m-2 w-72">
        <div className="p-3 rounded-md shadow-lg shadow-stone-300 hover:border transition-transform transform hover:scale-[1.03] duration-300 hover:cursor-pointer ">
          <img
            className="rounded-lg object-contain bg-white"
            src={IMG_URL + cloudinaryImageId}
            alt="res-img"
          ></img>
          <h3 className="text-lg font-bold line-clamp-1 ">{name}</h3>
          <h5 className="font-light text-sm line-clamp-1">
            {cuisines.join(",")}
          </h5>
          <h5 className="font-light text-sm">{areaName}</h5>
          <span className="flex mt-2 justify-between text-xs font-bold">
            <h4
              className={`${
                avgRating < 4 ? "bg-red-600" : "bg-green-600"
              } text-white  flex items-center rounded-md p-1 mt-1`}
            >
              <i class="fa-solid fa-star "></i>
              {avgRating}
            </h4>
            <h4 className="mt-2.5">•</h4>
            <h4 className="mt-2.5">5.7 km</h4>
            <h4 className="mt-2.5">•</h4>
            <h4 className="mt-2.5">{costForTwo}</h4>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
