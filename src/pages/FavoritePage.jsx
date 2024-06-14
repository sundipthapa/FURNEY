import React from 'react';
import FavoriteItemCard from "../components/Cart/Favoritem";
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../components/Common/Navbar';

const FavoritePage = () => {
  const history = useNavigate();

  const handleAddToCart = () => {
    history.push('/cart');
  };

  const handleDeleteFavorite = (itemId) => {
    // Function to delete the favorite item by itemId
  };

  const handleDeleteAllFavorites = () => {
    // Function to delete all favorite items
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-3 px-4">
        <div className="flex justify-between items-center mt-10 mb-4">
          <h1 className="text-2xl font-bold">Your Favorite Items</h1>
          <button
            onClick={handleDeleteAllFavorites}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Delete All
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {[1, 2, 3].map((item, index) => (
            <React.Fragment key={index}>
              <FavoriteItemCard
                imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
                itemName="Corporate suit"
                itemDescription="100% silk, 100% office-ready"
                itemPrice="2002"
                onAddToCart={handleAddToCart}
                onDeleteFavorite={() => handleDeleteFavorite(item.id)}
              />
              {index < 2 && <hr className="my-4" />} {/* Divider between items */}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default FavoritePage;
