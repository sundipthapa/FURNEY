import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCategoriesApi, getAllProductApi, getProductsByCategoryApi, searchProductsApi } from "../../apis/api";
import Navbar from "../../components/Common/Navbar";
import SingleProductCard from "../../components/Products/SingleProduct";

const ProductCollectionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [conditionOpen, setConditionOpen] = useState(true);
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [conditionFilters, setConditionFilters] = useState({
    all: true,
    old: false,
    new: false,
  });
  const [allCategories, setAllCategories] = useState([]);
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [priceFilters, setPriceFilters] = useState({
    min: 0,
    max: 10000,
  });

  const owner = JSON.parse(localStorage.getItem("user"));
  const ownerId = owner ? owner._id : null;

  useEffect(() => {
    const fetchProducts = async () => {
      const queryParams = new URLSearchParams(location.search);
      const category = queryParams.get('category');

      let response;
      if (category) {
        response = await getProductsByCategoryApi(category);
      } else {
        response = await getAllProductApi(ownerId);
      }

      if (response.data.success) {
        const fetchedProducts = response.data.products;
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);

        fetchCategory(category);
      }
    };

    fetchProducts();
  }, [location, ownerId]);

  const handleSearch = async (query) => {
    console.log(query);
    try {
      if (query.trim() === '') {
        const res = await getAllProductApi(ownerId);
        setProducts(res.data.products);
      } else {
        const res = await searchProductsApi(query);
        setProducts(res.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategory = async (category) => {
    try {
      const res = await getAllCategoriesApi();
      const uniqueCategories = res.data?.categories;

      setAllCategories(uniqueCategories);
      setCategoryFilters(
        uniqueCategories.map((cat) => ({
          name: cat,
          checked: category ? category === cat : true,
        }))
      );
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const toggleCondition = () => setConditionOpen(!conditionOpen);
  const toggleCategories = () => setCategoriesOpen(!categoriesOpen);
  const togglePrice = () => setPriceOpen(!priceOpen);

  const handleClearAll = () => {
    setConditionFilters({ all: false, old: false, new: false });
    setCategoryFilters(
      categoryFilters.map((category) => ({ ...category, checked: false }))
    );
    setPriceFilters({ min: 0, max: 10000 });
    setFilteredProducts(products);
    console.log("Filters cleared. Products reset to:", products);
  };

  const handleConditionChange = (event) => {
    const { name, checked } = event.target;
    setConditionFilters((prevState) => ({ ...prevState, [name]: checked }));
    console.log("Condition filter changed:", { ...conditionFilters, [name]: checked });
  };

  const handleCategoryChange = (event) => {
    const { name, checked } = event.target;
    const updatedCategoryFilters = categoryFilters.map((category) =>
      category.name === name ? { ...category, checked } : category
    );
    setCategoryFilters(updatedCategoryFilters);
    console.log("Category filter changed:", updatedCategoryFilters);
  };

  const handlePriceChange = (value) => {
    setPriceFilters({ min: value[0], max: value[1] });
    console.log("Price filter changed:", value);
  };

  useEffect(() => {
    let filtered = products;
    console.log("Applying condition filter on products:", products);

    if (!conditionFilters.all) {
      filtered = filtered.filter((product) => {
        if (conditionFilters.old && product.condition === "old") return true;
        if (conditionFilters.new && product.condition === "new") return true;
        return false;
      });
      console.log("After applying condition filter:", filtered);
    }

    setFilteredProducts(filtered);
  }, [conditionFilters, products]);

  useEffect(() => {
    let filtered = products;
    console.log("Applying category filter on products:", products);

    const selectedCategories = categoryFilters
      .filter((category) => category.checked)
      .map((category) => category.name);
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
      console.log("After applying category filter:", filtered);
    }

    setFilteredProducts(filtered);
  }, [categoryFilters, products]);

  useEffect(() => {
    let filtered = products;
    console.log("Applying price filter on products:", products);

    const { min, max } = priceFilters;
    filtered = filtered.filter((product) => {
      const price = parseFloat(product.price);
      return price >= min && price <= max;
    });
    console.log("After applying price filter:", filtered);

    setFilteredProducts(filtered);
  }, [priceFilters, products]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <Navbar handleSearchChange={handleSearch} />
      <div className="flex md:flex-row flex-col gap-10 p-4 bg-slate-50">
        <div className="w-full h-1/5 md:w-1/3 md:h-screen p-4 rounded-lg shadow-sm aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
          <div className="flex justify-between items-center mb-4">
            <p className="text-xl font-bold uppercase">Filters</p>
            <p
              className="text-xl font-bold uppercase text-red-500 cursor-pointer"
              onClick={handleClearAll}
            >
              Clear all
            </p>
          </div>
          <div className="mb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={toggleCondition}
            >
              <p className="text-xl font-bold uppercase">Condition</p>
              <span>{conditionOpen ? "-" : "+"}</span>
            </div>
            {conditionOpen && (
              <ul className="pl-4 mt-2 space-y-4">
                <li className="flex items-center mb-2">
                  <label htmlFor="condition-all" className="flex items-center w-full">
                    <input
                      id="condition-all"
                      type="checkbox"
                      name="all"
                      checked={conditionFilters.all}
                      onChange={handleConditionChange}
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0 mr-2"
                    />
                    
                    <span className="block font-sans text-lg font-medium leading-relaxed text-blue-gray-900">All</span>
                  </label>
                </li>
                <li className="flex items-center mb-2">
                  <label htmlFor="condition-old" className="flex items-center w-full">
                    <input
                      id="condition-old"
                      type="checkbox"
                      name="old"
                      checked={conditionFilters.old}
                      onChange={handleConditionChange}
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0 mr-2"
                    />
                    <span className="block font-sans text-lg font-medium leading-relaxed text-blue-gray-900">Old</span>
                  </label>
                </li>
                <li className="flex items-center mb-2">
                  <label htmlFor="condition-new" className="flex items-center w-full">
                    <input
                      id="condition-new"
                      type="checkbox"
                      name="new"
                      checked={conditionFilters.new}
                      onChange={handleConditionChange}
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0 mr-2"
                    />
                    <span className="block font-sans text-lg font-medium leading-relaxed text-blue-gray-900">New</span>
                  </label>
                </li>
              </ul>
            )}
          </div>
          <div className="mb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={toggleCategories}
            >
              <p className="text-xl font-bold uppercase">Categories</p>
              <span>{categoriesOpen ? "-" : "+"}</span>
            </div>
            {categoriesOpen && (
              <ul className="pl-4 mt-2 space-y-4">
                {categoryFilters.map((category, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <label htmlFor={`category-${category.name}`} className="flex items-center w-full">
                      <input
                        id={`category-${category.name}`}
                        type="checkbox"
                        name={category.name}
                        checked={category.checked}
                        onChange={handleCategoryChange}
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-100 checked:bg-amber-900 checked:before:bg-gray-400 hover:before:opacity-0 mr-2"
                      />
                      {/* Pseudo-element for tick mark */}
                      <style jsx>{`
            input[type="checkbox"]:checked::after {
              content: '✓';
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              color: white;
              font-size: 1rem;
            }
          `}</style>
                      <span className="block font-sans text-lg font-medium leading-relaxed text-blue-gray-900">{category.name}</span>
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="mb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={togglePrice}
            >

              <p className="text-xl font-bold uppercase">Price</p>
              <span>{priceOpen ? "-" : "+"}</span>
            </div>
            {priceOpen && (
              <div className="pl-4 mt-2 space-y-4">
                <Slider
                  range
                  min={0}
                  max={10000}
                  step={100}
                  value={[priceFilters.min, priceFilters.max]}
                  onChange={handlePriceChange}
                  tipFormatter={(value) => `$${value}`}
                  className="mb-4"
                />
                <div className="flex justify-between text-lg font-medium text-blue-gray-900">
                  <span>${priceFilters.min}</span>
                  <span>${priceFilters.max}</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full md:w-2/3 p-4 aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {filteredProducts.map((product) => (
              <SingleProductCard
                key={product._id}
                product={product}
                onClick={() => handleProductClick(product._id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCollectionPage;
