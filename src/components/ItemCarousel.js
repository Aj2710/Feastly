import React from 'react'
import Carousel from './Carousel';

const ItemCarousel = ({itemCarousel}) => {

  return (
    <div className='m-8 px-10'>       
        <h2 className='font-bold text-2xl my-4'>Hey, what's on your mind?</h2>
        <Carousel items={itemCarousel}/>
    </div>
  )
}

export default ItemCarousel