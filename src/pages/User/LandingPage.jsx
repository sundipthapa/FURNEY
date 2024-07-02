

import React, { useEffect, useRef, useState} from 'react';
import { getFeaturedProductByApi, getTrendingProductApi ,getAllCategoriesApi} from '../../apis/api';
import firsthand from '../../assets/images/box.png';
import secondhand from '../../assets/images/decor.png';
import heroImage from '../../assets/images/hero2.png';
import CategoriesCard from '../../components/Common/CategoriesCard';
import ImageCard from '../../components/Common/Fistandsecondhand';
import Footer from '../../components/Common/Footer';
import HeroImageCard from '../../components/Common/Heroimage';
import Navbar from '../../components/Common/Navbar';
import ProductCard from '../../components/Products/FeaturedProduct';
import TrendingProductCard from '../../components/Products/TrendingProduct';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
  const scrollContainerRef = useRef(null);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const navigate = useNavigate();
  const [navItems , setCategories] = useState([])

  const scrollLeft = (ref) => {
    ref.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      let response = await getTrendingProductApi();
      if (response.data.success) {
        const fetchedProducts = response.data.products;
        setTrendingProducts(fetchedProducts);
      }
    };

    fetchProducts();
  }, []);
  useEffect(() => {
    const fetchProducts = async () => {
      let response = await getFeaturedProductByApi();
      if (response.data.success) {
        const fetchedProducts = response.data.products;
        setFeaturedProducts(fetchedProducts);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    getAllCategoriesApi().then((res) => {
        console.log(res.data?.categories)
        setCategories(res.data?.categories)
    })
}, [])

const handleCategoryClick = (category) => {
    navigate(`/productcollection?category=${category}`);
};
const handleProductClick = (productId) => {
  navigate(`/product/${productId}`);
};

  return (
    <>
      <Navbar />

      {/* Hero image start */}
      <div className="w-full h-2/3 md:h-128 flex items-center justify-center">
        <HeroImageCard heroImage={heroImage} />
      </div>
      {/* Hero image end */}

      {/* First and second hand collection start */}
      <section className="py-8">
        <div className="mx-auto px-4">
          <h2 className="text-6xl font-md mb-6 text-center">Collections</h2>
          <div className="w-full h-auto flex flex-wrap justify-center gap-40 mx-2">
            <div className="md:w-1/4 px-2 mb-8 mt-2 flex justify-center ">
              <div className="w-full h-full flex items-center justify-center">
                <ImageCard imageSrc={firsthand} title="FIRST HAND" />
              </div>
            </div>
            <div className="md:w-1/4 px-2 mb-8 mt-2 flex justify-center">
              <div className="w-full h-full flex items-center justify-center">
                <ImageCard imageSrc={secondhand} title="SECOND HAND" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* First and second hand collection ends */}

      {/* Featured products start */}
      <section className="py-10 bg-amber-900">
        <div className="mx-auto px-4 py-20">
          <h2 className="text-6xl text-white font-md mb-6 text-center">
            Featured Products
          </h2>
          <div className="relative">
            <button
              onClick={() => scrollLeft(scrollContainerRef)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full z-20"
            >
              &#9664;
            </button>
            <div
              className="w-full h-auto overflow-x-auto hide-scrollbar flex space-x-4 px-2"
              ref={scrollContainerRef}
            >
              {featuredProducts.map(product => (
                <ProductCard
                    key={product._id}
              bgColor="bg-white"
              product={product}
              onClick={() => handleProductClick(product._id)}
                />
              ))}
            </div>
            <button
              onClick={() => scrollRight(scrollContainerRef)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full z-20"
            >
              &#9654;
            </button>
          </div>
        </div>
      </section>
      {/* Featured products end */}

      {/* Categories starts */}
      <section className="py-10 bg-gray-100">
        <div className="mx-auto px-4 py-24">
          <h2 className="text-6xl font-md mb-6 text-center">Categories</h2>
          
          <div className="w-full h-auto flex flex-wrap items-center justify-center gap-20">
            <CategoriesCard
              imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"

            />
            <CategoriesCard
              imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
        
            />
            <CategoriesCard
              imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
      
            />
            <CategoriesCard
              imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
  
            />
            <CategoriesCard
              imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
   
            />
            <CategoriesCard
              imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
        
            />
            <CategoriesCard
              imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
            />
          </div>
          <ul className="flex space-x-12 font-semibold text-black justify-center items-center">
                    {navItems.map((item, index) => (
                        <li key={index} className="cursor-pointer px-12 py-4  hover:text-black h-16 text-xl" onClick={() => handleCategoryClick(item)}>{item}</li>
                    ))}
                </ul>
        </div>
      </section>
      {/* Categories ends */}

      {/* Trending products starts */}
      <section className="py-10 bg-amber-900">
        <div className="mx-auto px-4 py-20">
          <h2 className="text-6xl text-white font-md mb-6 text-center">Trending Products</h2>
          <div className="w-full h-auto flex flex-wrap items-center justify-center">
            {trendingProducts.map(product => (
              <TrendingProductCard
               key={product._id}
              bgColor="bg-white"
              product={product}
              onClick={() => handleProductClick(product._id)}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Trending products ends */}

      {/* Testimonials starts */}
      
        <div class="py-10 text-gray-600 dark:text-gray-300 pt-8 dark:bg-gray-900" id="reviews">
          <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <div class="mb-10 space-y-4 px-6 md:px-0">
              <h2 class="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                Our Customers Love Us
              </h2>
            </div>

            <div class="md:columns-2 lg:columns-3 gap-8 space-y-8">
              <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div class="flex gap-4">
                  <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/12.jpg" alt="user avatar" width="400" height="400" loading="lazy"/>
                    <div>
                      <h6 class="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h6>
                      <p class="text-sm text-gray-500 dark:text-gray-300">Interior Designer</p>
                    </div>
                </div>
                <p class="mt-8">The furniture from this shop is amazing! The quality and craftsmanship are top-notch, and it fits perfectly with my design style. Highly recommend!</p>
              </div>

              <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div class="flex gap-4">
                  <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/14.jpg" alt="user avatar" width="200" height="200" loading="lazy"/>
                    <div>
                      <h6 class="text-lg font-medium text-gray-700 dark:text-white">Jane Doe</h6>
                      <p class="text-sm text-gray-500 dark:text-gray-300">Homeowner</p>
                    </div>
                </div>
                <p class="mt-8">I furnished my entire living room with pieces from this store, and I couldn't be happier. The prices were reasonable, and the furniture looks stunning.</p>
              </div>

              <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div class="flex gap-4">
                  <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/18.jpg" alt="user avatar" width="200" height="200" loading="lazy"/>
                    <div>
                      <h6 class="text-lg font-medium text-gray-700 dark:text-white">Yanick Doe</h6>
                      <p class="text-sm text-gray-500 dark:text-gray-300">Apartment Renter</p>
                    </div>
                </div>
                <p class="mt-8">This shop has a fantastic selection of modern and stylish furniture. The customer service was excellent, and the delivery was prompt. Love my new sofa!</p>
              </div>

              <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div class="flex gap-4">
                  <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/2.jpg" alt="user avatar" width="200" height="200" loading="lazy"/>
                    <div>
                      <h6 class="text-lg font-medium text-gray-700 dark:text-white">Jane Doe</h6>
                      <p class="text-sm text-gray-500 dark:text-gray-300">Small Business Owner</p>
                    </div>
                </div>
                <p class="mt-8">The office furniture I bought from here has transformed my workspace. It's comfortable, stylish, and has received many compliments from clients.</p>
              </div>

              <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div class="flex gap-4">
                  <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/62.jpg" alt="user avatar" width="200" height="200" loading="lazy"/>
                    <div>
                      <h6 class="text-lg font-medium text-gray-700 dark:text-white">Andy Doe</h6>
                      <p class="text-sm text-gray-500 dark:text-gray-300">Real Estate Agent</p>
                    </div>
                </div>
                <p class="mt-8">I often recommend this furniture shop to my clients. The variety and quality are impressive, and it helps make homes look more appealing for showings.</p>
              </div>

              <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div class="flex gap-4">
                  <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/19.jpg" alt="user avatar" width="400" height="400" loading="lazy"/>
                    <div>
                      <h6 class="text-lg font-medium text-gray-700 dark:text-white">Yanndy Doe</h6>
                      <p class="text-sm text-gray-500 dark:text-gray-300">Interior Designer</p>
                    </div>
                 </div>
                <p class="mt-8">The furniture here is simply beautiful. The pieces I bought are both functional and aesthetically pleasing. I will definitely be returning for more.</p>
              </div>

            </div>
          </div>
        </div>

      {/* Testimonials ends */}

      {/* Footer starts */}
      <Footer />
      {/* Footer ends */}
    </>
  );
};

export default LandingPage;
