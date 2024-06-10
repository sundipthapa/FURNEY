// src/pages/LandingPage.js

import React, { useRef } from 'react';
import firsthand from '../assets/images/box.png';
import secondhand from '../assets/images/decor.png';
import heroImage from '../assets/images/hero2.png';
import CategoriesCard from '../components/Common/CategoriesCard';
import ImageCard from '../components/Common/Fistandsecondhand';
import Footer from '../components/Common/Footer';
import HeroImageCard from '../components/Common/Heroimage';
import Navbar from '../components/Common/Navbar';
import ProductCard from '../components/Products/FeaturedProduct';
import TrendingProductCard from '../components/Products/TrendingProduct';

const LandingPage = () => {
  const scrollContainerRef = useRef(null);

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

  return (
    <>
      <Navbar />

      {/* Hero image start */}
      <div className="w-full h-2/3 md:h-128 flex items-center justify-center">
        <HeroImageCard heroImage={heroImage} />
      </div>
      {/* Hero image end */}

      {/* first and second hand collection start*/}
      <section className="py-8">
        <div className="mx-auto px-4">
          <h2 className="text-6xl font-md mb-6 text-center">Collections</h2>
          <div className="w-full h-auto flex flex-wrap justify-center gap-40 mx-2">
            <div className="md:w-1/4 px-2 mb-8 mt-2 flex justify-center">
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
      {/*first and second hand collection ends */}

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
              <ProductCard
                bgColor="bg-white"
                category="Dresses"
                title="Tops"
                price="Rs.366.00"
                imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
              />
              <ProductCard
                bgColor="bg-white"
                category="Men"
                title="Jeans"
                price="Rs.405.00"
                imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
              />
              <ProductCard
                bgColor="bg-white"
                category="Party"
                title="Shirt"
                price="Rs.680.50"
                imageSrc="hhttps://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
              />
              <ProductCard
                bgColor="bg-white"
                category="Party"
                title="Shirt"
                price="Rs.680.50"
                imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
              />
              <ProductCard
                bgColor="bg-white"
                category="Party"
                title="Shirt"
                price="Rs.680.50"
                imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
              />
              <ProductCard
                bgColor="bg-white"
                category="Party"
                title="Shirt"
                price="Rs.680.50"
                imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
              />
              {/* Add more ProductCard components as needed */}
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
          <div className="w-full h-auto flex flex-wrap items-center justify-center gap-10">
            <CategoriesCard
              imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
              subheading="SOFA"
            />
            <CategoriesCard
              imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
              subheading="LIVING"
            />
            <CategoriesCard
              imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
              subheading="BEDROOM"
            />
            <CategoriesCard
              imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
              subheading="DINING"
            />
            <CategoriesCard
              imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
              subheading="OUTDOOR"
            />
            <CategoriesCard
              imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
              subheading="OFFICE"
            />
            <CategoriesCard
              imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
              subheading="KID ROOM"
            />
          </div>
        </div>
      </section>
      {/* Categories ends */}

      {/* Trending products starts */}
      <section className="py-10 bg-amber-900">
        <div className="mx-auto px-4 py-20">
          <h2 className="text-6xl text-white font-md mb-6 text-center">Trending Products</h2>
          <div className="w-full h-auto flex flex-wrap items-center justify-center">
            <TrendingProductCard
              bgColor="bg-white"
              category="Dresses"
              title="Tops"
              price="Rs.366.00"
              imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
            />
            <TrendingProductCard
              bgColor="bg-white"
              category="Men"
              title="Jeans"
              price="Rs.405.00"
              imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
            />
            <TrendingProductCard
              bgColor="bg-white"
              category="Party"
              title="Shirt"
              price="Rs.680.50"
              imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
            />
            <TrendingProductCard
              bgColor="bg-white"
              category="Party"
              title="Shirt"
              price="Rs.680.50"
              imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
            />
            <TrendingProductCard
              bgColor="bg-white"
              category="Party"
              title="Shirt"
              price="Rs.680.50"
              imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
            />
          </div>
        </div>
      </section>
      {/* Trending products ends */}

      {/* Testimonials starts */}
      <section className="py-10 bg-gray-100">
        <div className="mx-auto px-4 py-14">
          <h2 className="text-6xl font-md mb-6 text-center">Testimonials</h2>
          <div className="w-full h-auto flex flex-wrap items-center justify-center gap-10">
            <div className="flex flex-col items-center justify-center px-20 gap-5">
              <h4>"As a user of the product I found it very good, because comparing other similar products it's finishing is very good and product is very light so it helps to reduce dead load of the building. The best part is their work planning because in Nepalese context majority including. Professionals apply trial and error method but they are different. Moreover the product is very cost effective. The only negative side is you can not get their product in different color shades. My best wishes to FURNEY furniture.</h4>

              <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                <img src="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg" alt="" className="w-28 h-28 rounded-full object-cover" />
              </div>
              <p className="text-center text-lg font-semibold">Deepak Thapa</p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials ends */}

      {/* Footer starts */}
      <Footer />
      {/* Footer ends */}
    </>
  );
};

export default LandingPage;
