import React, { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SingleProductCard = ({ bgColor, category, title, price, imageSrc }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const history = useNavigate();

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    const handleBuyNowClick = () => {
        history.push("/checkout");
    };

    const handleCartClick = () => {
        history.push("/cart");
    };

    return (
        <div className={`w-96 flex-shrink-0 m-6 relative overflow-hidden ${bgColor} rounded-lg max-w-sm shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl`}>
            <div className="relative w-full flex items-center justify-center">
                <img className="relative z-0 w-full" src={imageSrc} alt={title} />
                <div className="absolute top-2 z-10 right-2 rounded-full p-2 cursor-pointer" onClick={handleFavoriteClick}>
                    {isFavorite ? (
                        <div className="bg-white rounded-full p-2">
                            <FaHeart className="text-amber-900" size={20} />
                        </div>
                    ) : (
                        <div className="bg-amber-900 rounded-full p-2">
                            <FaHeart className="text-white" size={20} />
                        </div>
                    )}
                </div>
            </div>
            <div className="relative text-black px-6 pb-6 mt-6">
                <span className="block opacity-75 -mb-1">{category}</span>
                <div className="flex justify-between items-center">
                    <span className="block font-semibold text-xl">{title}</span>
                </div>
                <span className="block font-bold text-lg mt-2">{price}</span>
                <div className="flex justify-between items-center mt-4">
                    <button className="w-72 h-14 bg-amber-900 text-white px-6 py-2 rounded-lg" onClick={handleBuyNowClick}>
                        Buy Now
                    </button>
                    <div className="bg-amber-900 rounded-full p-2 cursor-pointer" onClick={handleCartClick}>
                        <FaShoppingCart className="text-white" size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductCard;
