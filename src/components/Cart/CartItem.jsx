import React from 'react';
import { FaCircleMinus, FaDeleteLeft } from "react-icons/fa6";

const CartItem = ({ imageSrc, itemName, itemDescription, itemPrice }) => {
    return (
      <div>
         <div className="border-b border-gray-500 w-full"></div>
        <div className="flex justify-between items-center gap-3 px-4 bg-white rounded-lg py-9">
          <img src={imageSrc} className="w-20 h-20" alt={itemName} />
          <div className="flex flex-col">
            <span className="font-bold text-sm">{itemName}</span>
            <span>{itemDescription}</span>
            <span>Rs. {itemPrice}</span>
          </div>
          <div className='flex gap-6'>
            <div className="flex flex-col gap-1">
              <span className="font-bold">Delivery Date</span>
              <span>21-May</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold">Pick Date</span>
              <span>21-May</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold">Duration</span>
              <span>2</span>
            </div>
          </div>
          <div>
            <FaCircleMinus size={22} color="red" />
          </div>
          
        </div>
        <div className="border-b border-gray-500 w-full"></div>
      </div>
    );
  };

  export default CartItem;