import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React, { useState } from 'react';
import Navbar from '../components/Common/Navbar';
import SingleProductCard from '../components/Products/SingleProduct';



const ProductCollection = () => {
  const [genderOpen, setGenderOpen] = useState(true);
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);

  const [genderFilters, setGenderFilters] = useState({
    all: false,
    old: false,
    new: false,
  });

  const [categoryFilters, setCategoryFilters] = useState({
    all: false,
    sofa: false,
    bedroom: false,
    dining: false,
    living: false,
    outdoor: false,
    office: false,
    kid: false,
  });

  const [priceFilters, setPriceFilters] = useState([0, 50000]);

  const toggleGender = () => setGenderOpen(!genderOpen);
  const toggleCategories = () => setCategoriesOpen(!categoriesOpen);
  const togglePrice = () => setPriceOpen(!priceOpen);

  const handleClearAll = () => {
    setGenderFilters({ all: false, old: false, new: false });
    setCategoryFilters({ all: false, sofa: false, bedroom: false, dining: false, living: false, outdoor: false, office: false, kid: false });
    setPriceFilters([0, 50000]);
  };

  const handleGenderChange = (event) => {
    const { name, checked } = event.target;
    setGenderFilters((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handleCategoryChange = (event) => {
    const { name, checked } = event.target;
    setCategoryFilters((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handlePriceChange = (values) => {
    setPriceFilters(values);
  };

  return (
    <>
      <Navbar />
      <div className="flex md:flex-row flex-col gap-4 m-4">
        <div className="w-full h-1/5 bg-slate-200 md:w-1/3 md:h-screen p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <p className="font-medium uppercase text-lg">Filters</p>
            <p className="font-medium uppercase text-red-500 cursor-pointer text-lg" onClick={handleClearAll}>
              Clear all
            </p>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleGender}>
              <p className="font-medium uppercase text-lg">Collection</p>
              <span>{genderOpen ? '-' : '+'}</span>
            </div>
            {genderOpen && (
              <ul className="pl-4 mt-2">
                <li className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="all"
                    checked={genderFilters.all}
                    onChange={handleGenderChange}
                    className="form-checkbox text-blue-500 mr-2"
                  />
                  <label className="text-lg">All</label>
                </li>
                <li className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="old"
                    checked={genderFilters.old}
                    onChange={handleGenderChange}
                    className="form-checkbox text-blue-500 mr-2"
                  />
                  <label className="text-lg">Old</label>
                </li>
                <li className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="new"
                    checked={genderFilters.new}
                    onChange={handleGenderChange}
                    className="form-checkbox text-blue-500 mr-2"
                  />
                  <label className="text-lg">New</label>
                </li>
              </ul>
            )}
          </div>
          <hr className="mb-4" />
          <div className="mb-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleCategories}>
              <p className="font-medium uppercase text-lg">Categories</p>
              <span>{categoriesOpen ? '-' : '+'}</span>
            </div>
            {categoriesOpen && (
              <ul className="pl-4 mt-2">
                <li className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="all"
                    checked={categoryFilters.all}
                    onChange={handleCategoryChange}
                    className="form-checkbox text-blue-500 mr-2"
                  />
                  <label className="text-lg">All</label>
                </li>
                <li className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="sofa"
                    checked={categoryFilters.sofa}
                    onChange={handleCategoryChange}
                    className="form-checkbox text-blue-500 mr-2"
                  />
                  <label className="text-lg">Sofa</label>
                </li>
                <li className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="bedroom"
                    checked={categoryFilters.bedroom}
                    onChange={handleCategoryChange}
                    className="form-checkbox text-blue-500 mr-2"
                  />
                  <label className="text-lg">Bedroom</label>
                </li>
                <li className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="dining"
                    checked={categoryFilters.dining}
                    onChange={handleCategoryChange}
                    className="form-checkbox text-blue-500 mr-2"
                  />
                  <label className="text-lg">Dining</label>
                </li>
                <li className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="living"
                    checked={categoryFilters.living}
                    onChange={handleCategoryChange}
                    className="form-checkbox text-blue-500 mr-2"
                  />
                  <label className="text-lg">Living</label>
                </li>
                <li className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="outdoor"
                    checked={categoryFilters.outdoor}
                    onChange={handleCategoryChange}
                    className="form-checkbox text-blue-500 mr-2"
                  />
                  <label className="text-lg">Outdoor</label>
                </li>
                <li className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="office"
                    checked={categoryFilters.office}
                    onChange={handleCategoryChange}
                    className="form-checkbox text-blue-500 mr-2"
                  />
                  <label className="text-lg">Office</label>
                </li>
                <li className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="kid"
                    checked={categoryFilters.kid}
                    onChange={handleCategoryChange}
                    className="form-checkbox text-blue-500 mr-2"
                  />
                  <label className="text-lg">Kid Room</label>
                </li>
              </ul>
            )}
          </div>
          <hr className="mb-4" />
          <div className="mb-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={togglePrice}>
              <p className="font-medium uppercase text-lg">Price</p>
              <span>{priceOpen ? '-' : '+'}</span>
            </div>
            {priceOpen && (
              <div className="pl-4 mt-2">
                <Slider
                  min={0}
                  max={50000}
                  value={priceFilters}
                  onChange={handlePriceChange}
                  className="w-full"
                />
                <div className="flex justify-between mt-2">
                  <span>Rs {priceFilters[0]}</span>
                  <span>Rs {priceFilters[1]}</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="h-auto bg-slate-200 w-full flex flex-wrap justify-center p-4 rounded-lg shadow-md">
          <SingleProductCard
            bgColor="bg-white"
            category="Sofa"
            title="Classic Sofa"
            price="Rs.680.50"
            imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
         
          />
          <SingleProductCard
            bgColor="bg-white"
            category="Sofa"
            title="Classic Sofa"
            price="Rs.680.50"
            imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
         
          />
          <SingleProductCard
            bgColor="bg-white"
            category="Sofa"
            title="Classic Sofa"
            price="Rs.680.50"
            imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
         
          />
          <SingleProductCard
            bgColor="bg-white"
            category="Sofa"
            title="Classic Sofa"
            price="Rs.680.50"
            imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
         
          />
          <SingleProductCard
            bgColor="bg-white"
            category="Sofa"
            title="Classic Sofa"
            price="Rs.680.50"
            imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
         
          />
          <SingleProductCard
            bgColor="bg-white"
            category="Sofa"
            title="Classic Sofa"
            price="Rs.680.50"
            imageSrc="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
         
          />
        </div>
      </div>
    </>
  );
};

export default ProductCollection;
