import React from "react";
import CartItem from "../components/Cart/CartItem";
import {  FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Navbar from '../components/Common/Navbar';


const AddToCartPage = () => {
  return (
    <>
    <Navbar/>
      <div className="container mx-auto mt-3 px-4">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-sm mb-4 mt-10">
          <FaCircleCheck color="green"/>
          <span className="font-bold">Cart</span>
          <div className="border-b border-gray-500 w-20"></div>
          <span>Delivery</span>
          <div className="border-b border-gray-500 w-20"></div>
          <span>Payment</span>
        </div>
        <div className="flex flex-col gap-4 mt-20 ">
          <CartItem
            imageSrc="https://www.clipartmax.com/png/middle/426-4263190_coat-png-photo-suit-png.png"
            itemName="Corporate suit"
            itemDescription="100% silk, 100% office-ready"
            itemPrice="2002"
          />
          <CartItem
            imageSrc="https://www.clipartmax.com/png/middle/426-4263190_coat-png-photo-suit-png.png"
            itemName="Corporate suit"
            itemDescription="100% silk, 100% office-ready"
            itemPrice="2002"
          />
          {/* Add more CartItem components here if needed */}
        </div>
        <div className="fixed bottom-14 right-20 bg-white p-4 rounded-lg w-1/4 shadow-md">
          <div className="flex flex-col justify-between items-center mb-4">
            <p  className="mb-2"><span className="font-bold mr-10 ">Rent Price    :</span> Rs. 2002</p>
            <p className="mb-2"><span className="font-bold mr-10 ">Delivery Price:</span> Rs. 100</p>
            <div className="border-b border-gray-500 w-60"></div>
            <p className="mb-2"><span className="font-bold mr-10 ">Total Price   :</span> Rs. 2102</p>
            <Link to="/delivery">
      <button className="bg-black w-full hover:bg-slate-800 hover:text-white text-white px-4 mt-3 py-2 rounded-md">
        Add to Cart
      </button>
    </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCartPage;