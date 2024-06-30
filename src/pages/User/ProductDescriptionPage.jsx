import React, { useContext, useEffect, useState } from 'react';
import { FaArrowLeft, FaHeart, FaStar } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addToCartApi, addToFavoriteApi, getProductByApi, getFavoritesByIdApi, removeProductFromFavoritesApi } from '../../apis/api';
import Navbar from '../../components/Common/Navbar';
import { toast } from 'react-toastify';
import { CartContext } from '../../contexts/cart/CartContext';

const ProductDescriptionPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext)

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user._id;

  useEffect(() => {
    // Fetch product details
    getProductByApi(productId)
      .then(response => {
        if (response.data.success) {
          setProduct(response.data.product);
          setMainImage(response.data.product.images[0]);
        }
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });

    // Check if the product is in favorites
    getFavoritesByIdApi(userId)
      .then(response => {
        if (response.data.success) {
          const favoriteProducts = response.data.favorites[0]?.products || [];
          const isFavoriteProduct = favoriteProducts.some(fav => fav.product._id === productId);
          setIsFavorite(isFavoriteProduct);
        }
      })
      .catch(error => {
        console.error('Error fetching favorites:', error);
      });
  }, [productId, userId]);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  const toggleFavorite = async () => {
    try {
      if (isFavorite) {
        await removeProductFromFavoritesApi(userId, productId);
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
        await addToFavoriteApi( data);
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };


  if (!product) {
    return <div className='font-bold text-green-700 text-2xl text-center'>Loading...</div>;
  }

  const features = [
    'Ergonomic design for comfort',
    'Durable and high-quality materials',
    'Modern and stylish appearance',
    'Easy to assemble',
    'Eco-friendly manufacturing'
  ];

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 p-4 md:p-8 w-full h-full">
        {/* Left side */}
        <div className="relative flex flex-col w-full md:w-1/2 h-96">
          <Link to="/" className="absolute top-4 left-4">
            <button className="bg-white rounded-full p-2 shadow-md">
              <FaArrowLeft />
            </button>
          </Link>
          <button
            className={`absolute top-4 right-4 bg-white rounded-full p-2 shadow-md ${isFavorite ? 'text-red-600' : 'text-black'}`}
            onClick={toggleFavorite}
          >
            <FaHeart />
          </button>
          <img
            src={mainImage}
            className="w-full h-72 md:h-screen rounded-lg shadow-lg object-cover mb-4"
            alt="Product"
          />
          <div className="flex flex-wrap justify-between gap-4">
            {product.images && product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                className="w-24 h-24 md:w-32 md:h-32 rounded-lg shadow-md object-cover cursor-pointer"
                alt={`Recommended ${index + 1}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col w-full md:w-1/2 h-96 p-4 space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold">{product.title}</h1>
          <span className="text-2xl md:text-3xl font-semibold text-green-600">Rs. {product.price}</span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500 mr-1" />
            ))}
          </div>
          <hr />
          <p className="text-gray-600">{product.name}</p>
          <p className="text-lg md:text-xl text-gray-600">{product.description}</p>
          <hr />
          <ul className="list-disc list-inside space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="text-lg text-gray-700">{feature}</li>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            <p className="font-medium uppercase">Quantity:</p>
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
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button
              onClick={()=> addToCart(product)}
              className="bg-amber-900 w-full md:w-72 h-14 text-xl text-white py-2 px-4 rounded-lg shadow-md hover:bg-amber-700 transition duration-300"
            >
              Add to Cart
            </button>
            <Link to='/checkout' className="w-full md:w-auto">
              <button className="bg-amber-900 w-full md:w-72 h-14 text-xl text-white py-2 px-4 rounded-lg shadow-md hover:bg-amber-700 transition duration-300">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDescriptionPage;
