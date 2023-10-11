import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CAROUSEL_IMG_URL } from '../utils/constants';

const ItemCarousel = ({itemCarousel}) => {
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
      <h1 className='text-2xl font-bold'>Hey, what's on your mind?</h1>
        <Carousel responsive={responsive}>
          {
            itemCarousel.map((item)=>{
              return (
                    <div className='flex justify-center block cursor-pointer '>               
                      <img src={CAROUSEL_IMG_URL + item.imageId} alt='carousel-img' className='object-fill border-none w-1/2 '></img>
                    </div>   
                  
              )
          })
          }
        </Carousel>
    </div>
  )
}

export default ItemCarousel