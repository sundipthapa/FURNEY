import React, { useState } from 'react';
import { FaTrash } from "react-icons/fa";

const CartItem = ({ title, description, image, price , quantity, changeQuantity, removeItem }) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const increaseQuantity = () => {
    const newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
    changeQuantity(newQuantity);
  };

  const decreaseQuantity = () => {
    if (itemQuantity > 1) {
      const newQuantity = itemQuantity - 1;
      setItemQuantity(newQuantity);
      changeQuantity(newQuantity);
    }
  };

  return (
    <div className="border border-gray-200 shadow-lg rounded-lg p-4">
      <div className="flex justify-between items-center gap-3">
        <img src={image} className="w-36 h-36" alt={title} />
        <div className="text-xl flex flex-col">
          <span className="font-bold text-xl">{title}</span>
          <span>{description}</span>
          <span>Rs. {price}</span>
        </div>
        <div className='flex items-center gap-2'>
          <button onClick={decreaseQuantity} className="text-gray-700 px-2 py-1 border rounded">-</button>
          <span>{itemQuantity}</span>
          <button onClick={increaseQuantity} className="text-gray-700 px-2 py-1 border rounded">+</button>
        </div>
        <button className="text-red-500" onClick={removeItem}>
          <FaTrash size={22} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
