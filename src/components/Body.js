import RestaurantCard from './RestaurantCard'
import useRestaurant from '../utils/useRestaurant';
import Shimmer from './Shimmer';
import Search from './Search';
import FoodCarousel from './FoodCarousel'
import ItemCarousel from './ItemCarousel';

const Body = ()=>{
    const {carousel, itemCarousel,filteredList , searchIt} = useRestaurant();   
   
    return filteredList.length === 0 ? <Shimmer numberofCards={9}/> : (
        <div className="flex flex-col items-center  justify-center w-4/5 mx-auto ">
            <FoodCarousel carousel={carousel} />
            <ItemCarousel itemCarousel={itemCarousel}/>
            <Search searchIt={searchIt}/>
            <div className="flex flex-wrap justify-center">
                {
                    filteredList.map((restaurant)=>{
                        return(<RestaurantCard  key={restaurant.info.id} resInfo={restaurant.info}/>)
                    })
                }
            </div>
        </div>
    )
    
}

export default Body;