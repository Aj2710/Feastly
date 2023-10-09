import React from "react";
import { useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";
import DefaultCart from "./DefaultCart";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const amount = useSelector((store)=>store.cart.totalAmount);
  const dispatch = useDispatch();

  const discountPercentage = 10;
  const discount = (discountPercentage/100 * amount).toFixed(2);
  const deliveryCharges = (5/100 * amount);
  const amountToBePaid = amount - discount +  deliveryCharges;

  const clearCartItems = ()=>{
    dispatch(clearCart());
  }

  return cartItems.length === 0 ?(<DefaultCart/>):(
    <div className="w-3/4 mx-auto p-4">
      <div>
        <div className="flex justify-between p-3 border-b-2">
        <div className="text-3xl font-bold">Cart</div>
        <button className="px-2 py-1  text-orange-500 border-2 border-orange-500 hover:text-white hover:bg-orange-500 rounded-md" onClick={clearCartItems}>Clear Cart</button>
        </div>
        
        <div className="flex">
          <div className=" w-1/2 flex  flex-col ">
            {cartItems.map((item) => {
              console.log(item);
              return <CartItemCard key={item.card.info.id} item={item} />;
            })}
          </div>
          <div className="h-[480px] w-1/2 py-6 px-4 border-2 rounded-md my-2 mr-2">
            <div className="text-2xl font-bold border-b-2  py-2">
              Order Summary
            </div>
            <div className="border-b-2 py-4">
              <div className="flex justify-between ">
                <h3 className="text-xl font-semibold">Price({cartItems.length} Item)</h3>
                <h3 className="font-bold text-xl mb-1">₹{amount}</h3>
              </div>
              <div className="flex justify-between">
                <h3 className="text-xl font-semibold">Discount({discountPercentage}%)</h3>
                <h3 className="font-bold text-xl mb-1">-₹{discount}</h3>
              </div>
              <div className="flex justify-between">
                <h3 className="text-xl font-semibold">Delivery charges(5%)</h3>
                <h3 className="font-bold text-xl mb-1">+₹{deliveryCharges.toFixed(2)}</h3>
              </div>
              <p className="text-sm">You'll save ₹{discount} on this order 🎉</p>
            </div>
            <div className="flex justify-between py-4  border-b-2 mb-4">
              <h3 className="text-2xl font-bold">Total Amount</h3>
              <h3 className="text-2xl text-orange-500 font-bold">₹{amountToBePaid.toFixed(2)}</h3>
            </div>
            <div className="hover:bg-orange-500 hover:text-white hover:border-none rounded-md p-4 text-center text-xl font-bold border-2 border-orange-500 text-orange-500 hover:cursor-pointer">
              PLACE ORDER
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
