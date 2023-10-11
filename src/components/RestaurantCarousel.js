import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import RestaurantCard from './RestaurantCard';


const RestaurantCarousel = ({restaurantCarousel}) => {
    console.log(restaurantCarousel)
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div className='border-b-2'>
      <h1 className='text-2xl font-bold my-4 '>Top restaurant chains in Faridabad</h1>
        <Carousel responsive={responsive}>
          {
            restaurantCarousel.map((item)=>{
              return (
                       <RestaurantCard resInfo={item.info} />                  
              )
          })
          }
        </Carousel>
    </div>
  )
}

export default RestaurantCarousel