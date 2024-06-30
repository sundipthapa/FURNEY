import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const FavoriteItemCard = ({ product,imageSrc, itemName, itemDescription, itemPrice, onAddToCart, onDeleteFavorite }) => {

  const navigate =useNavigate()

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };
  return (
    <div className="favorite-item-card p-4 border rounded-md shadow-sm flex gap-4 items-center">
      <img src={imageSrc} alt={itemName} className="w-32 h-32 object-cover rounded-md" onClick={() => handleProductClick(product._id)} />
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-bold">{itemName}</h3>
          <p className="text-gray-600">{itemDescription}</p>
          <p className="text-sm text-green-600">Rs. {itemPrice}</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <button
            onClick={onAddToCart}
            className="flex items-center gap-1 text-blue-500 hover:text-blue-600"
          >
            <FaShoppingCart />
            <span>Add to Cart</span>
          </button>
          <button
            onClick={onDeleteFavorite}
            className="text-red-500 hover:text-red-600"
          >
            <FaHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteItemCard;
