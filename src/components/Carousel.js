import React from 'react'
import { CAROUSEL_IMG_URL } from '../utils/constants'


const Carousel = ({items}) => {
  return (
    <div className='overflow-hidden relative flex justify-between'>
        <div className='flex overflow-x-hidden '>
            {
                items.map((item)=>{
                    return (
                       
                            <img src={CAROUSEL_IMG_URL + item.imageId} alt='carousel-img' className='w-[150px]'></img>
                        
                    )
                })
            }
           
        </div>
        <div className='flex'>
                <button className='p-1 font-extrabold rounded-1/2  absolute top-[40%] left-0'>{"<"}</button>
                <button className='p-1 font-extrabold bg-gray-100 rounded-full top-[40%] right-2 absolute' >{">"}</button>
        </div>
    </div>
  )
}

export default Carousel