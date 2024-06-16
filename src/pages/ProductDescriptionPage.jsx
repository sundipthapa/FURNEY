import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaHeart, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../components/Common/Navbar';

const ProductDescriptionPage = () => {
    const [mainImage, setMainImage] = useState("https://www.clipartmax.com/png/middle/426-4263190_coat-png-photo-suit-png.png");
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("brown");
    const [isFavorite, setIsFavorite] = useState(false);

    const colorOptions = {
        brown: "https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg",
        grey: "https://www.clipartmax.com/png/middle/426-4263190_coat-png-photo-suit-png.png",
        white: "https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg",
        black: "https://www.clipartmax.com/png/middle/426-4263190_coat-png-photo-suit-png.png"
    };

    const handleColorChange = (color) => {
        setColor(color);
        setMainImage(colorOptions[color]);
    };

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

    const toggleFavorite = () => setIsFavorite(!isFavorite);

    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row justify-center items-start gap-40 w-full  h-auto p-10 md:p-8 ">
            {/* left side */}
                <div className="flex flex-col w-full md:w-1/3  ml-20 mb-4 md:mb-0 relative">
                    <Link to="/home" className="absolute top-4 left-4">
                        <button className="bg-white rounded-full p-2 shadow-md z-10">
                            <FaArrowLeft />
                        </button>
                    </Link>
                    <Link to="/favorite" className="absolute top-4 right-4">
                        <button
                            className={`bg-white rounded-full p-2 shadow-md z-10 ${isFavorite ? 'text-brown-600' : 'text-black'}`}
                            onClick={toggleFavorite}
                        >
                            <FaHeart />
                        </button>
                    </Link>
                    <img
                        src={mainImage}
                        className="w-auto  h-auto rounded-lg shadow-lg object-cover "
                        alt="Corporate set"
                    />
                    <div className="flex justify-between mt-4 space-x-4 items-center">
                        <button className="bg-amber-900 text-white rounded-full p-4 z-10">
                            <FaArrowLeft />
                        </button>
                        <div className="flex flex-grow justify-center space-x-4">
                            <img
                                src={colorOptions.brown}
                                className="w-1/3 h-auto rounded-lg shadow-md"
                                alt="Thumbnail 1"
                                onClick={() => handleColorChange('brown')}
                            />
                            <img
                                src={colorOptions.grey}
                                className="w-1/3 h-auto rounded-lg shadow-md"
                                alt="Thumbnail 2"
                                onClick={() => handleColorChange('grey')}
                            />
                            <img
                                src={colorOptions.white}
                                className="w-1/3 h-auto rounded-lg shadow-md"
                                alt="Thumbnail 3"
                                onClick={() => handleColorChange('white')}
                            />
                        </div>
                        <button className="bg-amber-900 text-white rounded-full p-4 z-10">
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
                {/* right side */}
                <div className="flex flex-col p-4 md:p-4 w-full md:w-1/2 justify-center items-start">
                    <span className="text-6xl font-semibold mb-2">L-shaped sofa</span>
                    <span className="text-3xl font-semibold text-green-600 mb-4">Rs. 200</span>
                    <div className="flex items-center mb-4">
                        <FaStar className="text-yellow-500 mr-2" />
                        <FaStar className="text-yellow-500 mr-2" />
                        <FaStar className="text-yellow-500 mr-2" />
                        <FaStar className="text-yellow-500 mr-2" />
                        <FaStar className="text-yellow-500" />
                    </div>
                    <hr className="mb-4" />
                    <div className="border-6 border-gray-600 h-full mx-4"></div>
                    <span className="text-gray-600 mb-4">Description</span>
                    <span className="text-gray-600 mb-4">Why settle for one when you can have both? This exclusive package caters to every musical whim, ensuring you're equipped for any genre.</span>
                    <hr className="mb-4" />
                    <div className="flex items-center mb-4">
                        <p className="font-medium uppercase mr-4">Color:</p>
                        <div className="flex space-x-2">
                            {Object.keys(colorOptions).map((clr) => (
                                <button
                                    key={clr}
                                    onClick={() => handleColorChange(clr)}
                                    className={`w-8 h-8 rounded-full border-2 ${color === clr ? 'border-black' : 'border-gray-300'}`}
                                    style={{ backgroundColor: clr }}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center mb-4">
                        <p className="font-medium uppercase mr-4">Quantity:</p>
                        <div className="flex items-center border rounded-lg">
                            <button
                                onClick={decreaseQuantity}
                                className="px-3 py-1 border-r rounded-l-lg"
                            >
                                -
                            </button>
                            <span className="px-4 py-1">{quantity}</span>
                            <button
                                onClick={increaseQuantity}
                                className="px-3 py-1 border-l rounded-r-lg"
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <Link to='/cart'>
                            <button className="bg-amber-900 text-white py-2 px-4 rounded-lg shadow-md hover:bg-amber-700 transition duration-300 z-10">
                                Add to Cart
                            </button>
                        </Link>
                        <Link to='/checkout'>
                            <button className="bg-amber-900 text-white py-2 px-4 rounded-lg shadow-md hover:bg-amber-700 transition duration-300 z-10">
                                Buy Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* recommended bottom side */}
            <div className="p-4 md:p-8 w-full">
                <h2 className="text-2xl font-semibold mb-4">Just For You</h2>
                <div className="relative">
                    <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-amber-900 text-white rounded-full p-4 z-10">
                        <FaArrowLeft />
                    </button>
                    <div className="flex space-x-4 px-12">
                        <img
                            src="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
                            className="w-1/5 h-auto rounded-lg shadow-md"
                            alt="Recommended 1"
                        />
                        <img
                            src="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
                            className="w-1/5 h-auto rounded-lg shadow-md"
                            alt="Recommended 2"
                        />
                        <img
                            src="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
                            className="w-1/5 h-auto rounded-lg shadow-md"
                            alt="Recommended 3"
                        />
                        <img
                            src="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
                            className="w-1/5 h-auto rounded-lg shadow-md"
                            alt="Recommended 4"
                        />
                        <img
                            src="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
                            className="w-1/5 h-auto rounded-lg shadow-md"
                            alt="Recommended 5"
                        />
                    </div>
                    <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-amber-900 text-white rounded-full p-4 z-10">
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductDescriptionPage;
