

import React, { useState, useContext, useEffect } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart/CartContext";
import { addToFavoriteApi, removeProductFromFavoritesApi, getFavoritesByIdApi } from "../../apis/api";
import { toast } from "react-toastify";

const TrendingProductCard= ({ product,onClick, bgColor }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);


  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user._id;

  useEffect(() => {
    // Check if the product is in the user's favorites
    if (user) {
      getFavoritesByIdApi(userId)
        .then(response => {
          if (response.data.success) {
            const favoriteProducts = response.data.favorites[0]?.products || [];
            const isFavoriteProduct = favoriteProducts.some(fav => fav.product._id === product._id);
            setIsFavorite(isFavoriteProduct);
          }
        })
        .catch(error => {
          console.error('Error fetching favorites:', error);
        });
    }
  }, [user, product._id]);

  const handleFavoriteClick = async () => {
    try {
      if (isFavorite) {
        await removeProductFromFavoritesApi(userId, product._id);
      } else {
        const data = {
          user: userId,
          products: [
            {
              product: product._id,
              isFavorite: true
            }
          ]
        };
        await addToFavoriteApi(data);
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  const handleBuyNowClick = () => {
    navigate("/checkout");
  };

  return (
    <div className={`w-72 flex-shrink-0 m-2 relative overflow-hidden ${bgColor} rounded-lg max-w-sm shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl`}>
      <div className="relative w-full flex items-center justify-center h-64 overflow-hidden" >
        <img className="relative z-0 w-full h-full object-cover object-center" src={product?.images[0]} alt={product?.title} onClick={onClick} />
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
        <span className="block opacity-75 -mb-1">{product?.category}</span>
        <div className="flex justify-between items-center">
          <span className="block font-semibold text-xl">{product?.title}</span>
        </div>
        <span className="block font-bold text-lg mt-2">{product?.price}</span>
        <div className="flex justify-between items-center mt-4">
          <button className="w-72 h-14 bg-amber-900 text-white px-6 py-2 rounded-lg" onClick={handleBuyNowClick}>
            Buy Now
          </button>
          <div className="bg-amber-900 rounded-full p-2 cursor-pointer" onClick={() => addToCart(product)}>
            <FaShoppingCart className="text-white" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProductCard;
