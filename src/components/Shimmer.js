import React from 'react'
import ShimmerCard from './ShimmerCard'

const Shimmer = ({numberofCards}) => {
  return (
    <div className='flex flex-wrap justify-center'>
        {Array(numberofCards).fill("").map((e , idx)=>{
            return <ShimmerCard key={idx}/>
        })}
    </div>
  )
}

export default Shimmer