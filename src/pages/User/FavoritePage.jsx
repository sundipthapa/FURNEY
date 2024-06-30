import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FavoriteItemCard from '../../components/Cart/Favoritem';
import Navbar from '../../components/Common/Navbar';
import { deleteAllFavoritesByIdApi, getFavoritesByIdApi, removeProductFromFavoritesApi } from '../../apis/api';

const FavoritePage = () => {
  const [favorites, setFavorites] = useState([]);
  const history = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user._id : null;

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const response = await getFavoritesByIdApi(); // Adjust this to pass user ID if needed
      setFavorites(response.data.favorites);
    } catch (error) {
      console.error('Error fetching favorites', error);
    }
  };

  const handleAddToCart = () => {
    history.push('/cart');
  };

  const handleDeleteFavorite = async (productId) => {
    try {
      await removeProductFromFavoritesApi(userId, productId); // Adjust API call based on your implementation
      fetchFavorites(); // Refresh favorites after deletion
    } catch (error) {
      console.error('Error deleting favorite', error);
    }
  };

  const handleDeleteAllFavorites = async () => {
    try {
      await deleteAllFavoritesByIdApi(userId);
      fetchFavorites();
    } catch (error) {
      console.error('Error deleting all favorites', error);
    }
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
          {favorites.length === 0 ? (
            <p className="text-center text-gray-600 mt-8">No favorites in your cart.</p>
          ) : (
            favorites.map((favorite, index) => (
              <React.Fragment key={index}>
                {favorite.products.map((item) => (
                  <FavoriteItemCard
                    key={item._id}
                    product={item.product}
                    imageSrc={item.product.images[0]} // Adjust image source based on your API response
                    itemName={item.product.title}
                    itemDescription={item.product.description}
                    itemPrice={item.product.price}
                    onAddToCart={handleAddToCart}
                    onDeleteFavorite={() => handleDeleteFavorite(item.product._id)}
              
                  />
                ))}
                {index < favorites.length - 1 && <hr className="my-4" />} {/* Divider between favorite sets */}
              </React.Fragment>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default FavoritePage;
