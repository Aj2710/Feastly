import RestaurantCard from './RestaurantCard'
import useRestaurant from '../utils/useRestaurant';
import Shimmer from './Shimmer';
import Search from './Search';
import FoodCarousel from './FoodCarousel'
import ItemCarousel from './ItemCarousel';
import RestaurantCarousel from './RestaurantCarousel';

const Body = ()=>{
    const {carousel, itemCarousel,filteredList , searchIt , restaurantCarousel} = useRestaurant();   
   
    return filteredList.length === 0 ? <Shimmer numberofCards={9}/> : (
        <div className="flex flex-col items-center  justify-center w-4/5 mx-auto ">
            <div className='w-full  px-10 mb-10'>
                <FoodCarousel carousel={carousel} />
            </div>
            <div className='w-full px-10 mb-2'>
                <ItemCarousel   itemCarousel={itemCarousel} />
            </div> 
            <div className='w-full px-10 mb-2 '>
                <RestaurantCarousel   restaurantCarousel={restaurantCarousel} />
            </div> 
            <Search searchIt={searchIt}/>
            <div className="flex flex-wrap justify-center ">
                
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