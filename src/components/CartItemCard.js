import React from 'react'
import { IMG_URL } from '../utils/constants'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeItems } from '../utils/cartSlice';
import { addItems, setTotalAmount ,decrementCounter } from '../utils/cartSlice';


const CartItemCard = ({item}) => {
    const[itemCount , setItemCount] = useState(1);
    const dispatch = useDispatch();

    const{
        name,
        description,
        price,
        defaultPrice,
        imageId
    } = item.card.info;

    const IncrementCount =(item)=>{
        setItemCount(itemCount + 1);
        addFoodItem(item);
    }

    const decrementCount=(item)=>{
        if(itemCount > 1){
            setItemCount(itemCount - 1);
            dispatch(decrementCounter(item));
            dispatch(setTotalAmount());
        }
        
        
    }

    const removeFoodItem = (item)=>{
        dispatch(removeItems(item));
        dispatch(setTotalAmount());
    }

    const addFoodItem = (item)=>{
        dispatch(addItems(item));
        dispatch(setTotalAmount());
    }

  return (
    <div className="flex m-2 p-2  border-b-2">
        <div className='w-1/4 mr-2'>
        <img src={IMG_URL + imageId} alt='cardItemImg'  className='h-28  rounded-sm'></img>
        </div>
        
        <div className='w-2/3'>
            <div className='text-lg font-semibold mb-1'>{name}</div>
            <div className='text-sm line-clamp-1 text-slate-600 mb-1'>{description || "Serves 1" }</div>
            <div className='text-lg font-semibold w-full mb-1'>₹{price/100 || defaultPrice}<span className='text-sm text-slate-600 font-normal m-1'>({`${price/100} x ${itemCount}`})</span></div>
            <div className='flex justify-between  '>
                <div className='flex item-center'>
                    <button onClick={()=>decrementCount(item)} className='bg-orange-500 text-white font-bold w-8 h-8 rounded-md'>-</button>
                    <div className='font-bold w-8 h-8 flex justify-center items-center'>{itemCount}</div>
                    <button onClick={()=>IncrementCount(item)} className='bg-orange-500 text-white font-bold w-8 h-8 rounded-md'>+</button>
                </div>
                <button onClick={()=>removeFoodItem(item)}  className='border border-orange-500  font-semibold text-orange-500 p-2 px-4 rounded-md hover:bg-orange-500 hover:text-white'>Remove</button>
            </div>
        </div>
    </div>
  )
}

export default CartItemCard