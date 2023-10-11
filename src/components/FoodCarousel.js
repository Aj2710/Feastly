import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CAROUSEL_IMG_URL, IMG_URL } from '../utils/constants';

const ItemCarousel = ({carousel}) => {
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
    <div>
      <h1 className='text-2xl font-bold my-4'>Best offers for you</h1>
        <Carousel responsive={responsive}>
          {
            carousel.map((item)=>{
              return (
                    <div className='px-2 cursor-pointer '>               
                      <img src={IMG_URL + item.imageId} alt='carousel-img' className= "object-contain rounded-3xl"></img>
                    </div>   
                  
              )
          })
          }
        </Carousel>
    </div>
  )
}

export default ItemCarousel