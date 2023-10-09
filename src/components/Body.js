import RestaurantCard from './RestaurantCard'
import useRestaurant from '../utils/useRestaurant';
import Shimmer from './Shimmer';
import Search from './Search';

const Body = ()=>{
    const {filteredList , searchIt} = useRestaurant();    
   
    return filteredList.length === 0 ? <Shimmer numberofCards={9}/> : (
        <div className="flex flex-col items-center mt-5">
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