import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// Configuration for axios
console.log('Token:', localStorage.getItem('token'));
const config = {
    headers: {
        'authorization': `Bearer ${localStorage.getItem('token')}`
    }
};


// Log config to debug
console.log('Axios Config:', config);

//todo: user api endpoints
// Creating test api
export const testApi = () => Api.get("/test");
// http://localhost:5000//test

//  Creating register api
export const registerApi = (data) => Api.post("/api/user/register", data);

// Create login api
export const loginApi = (data) => Api.post("/api/user/login", data);

//*Change password api
export const changePasswordApi = (data) =>
  Api.post("/api/user/change_password", data);

//* forgot password api
export const forgotPasswordApi = (data) =>
  Api.post("/api/user/forgot_password", data);

//* update user profile
export const updateUserApi = (userId, formData) =>
  Api.put(`/api/user/update_profile/${userId}`, formData);

//* update billing address
export const updateUserBillingAddressApi = (userId, formData) =>
  Api.put(`/api/user/update_billing/${userId}`, formData);


export const getAllUsersApi = () => Api.get("/api/user/get_all_users");


//todo: product api endpoints
// Upload product
export const uploadProductApi = (formData) =>
  Api.post('/api/product/post', formData, config);

// Get all product
export const getAllProductApi = (ownerId) => Api.get(`/api/product/${ownerId}`);
// Get all product in admin
export const getAllProductAdminApi = () => Api.get('api/product/', config);
// Get all product in categories
export const getAllCategoriesApi = () => Api.get('api/product/categories');

// Get specific product by ID
export const getProductByApi = (productId) => Api.get(`/api/product/singleProduct/${productId}`);
// Get specific product by ID
export const getTrendingProductApi = () => Api.get('/api/product/trending_products');
// Get specific product by ID
export const getFeaturedProductByApi = () => Api.get('/api/product/featured_products');

// Update product
export const updateProductApi = (id, formData) => Api.put(`/api/product/update_product/${id}`, formData, config);

// Delete product
export const deleteProductApi = (id) => Api.delete(`/api/product/delete_product/${id}`, config);

// Filter product by category
export const getProductsByCategoryApi = (category) => Api.get(`/api/product/get_product_by_category/${category}`);


// Search product API
export const searchProductsApi = (query) => Api.get(`/api/product/search_products?query=${query}`);



// Add to cart 
export const addToCartApi = (userId, product) => Api.post(`/api/cart/addToCart/${userId}`, {product: product._id}, config);
// Add to cart 
export const createOrUpdateCart = (userId, data) => Api.post(`/api/cart/${userId}`, data, config);
// Get cart by ID 
export const getCartByIdApi = (userId) => Api.get(`/api/cart/${userId}`, config);

// Delete product from cart 
export const deleteProductFromCartApi = ( productId, userId) => Api.delete(`/api/cart/${productId}/${userId}`, config);
export const removeAllCartApi = (uid) => Api.delete(`/api/cart/${uid}`, config);


//todo: add to favorite
// Add to cart 
export const addToFavoriteApi = (data) => Api.post('/api/favorite/', data, config);

// Get favorites by user ID
export const getFavoritesByIdApi = () => Api.get('/api/favorite/', config);

// Remove product from favorites
export const removeProductFromFavoritesApi = (userId, productId) => Api.delete(`/api/favorite/${userId}/${productId}`, config);


export const deleteAllFavoritesByIdApi = (userId) => Api.delete(`/api/favorite/${userId}`, config);



// Create order API
export const createOrderApi = (userId, data) =>
  Api.post(`/api/order/create/${userId}`, { products: data }, config);

// Get all orders API
export const getOrdersByUserIdApi = (userId) =>
  Api.get(`/api/order/${userId}`, config);

// Update order API
export const updateOrderApi = (orderId, userId, data) =>
  Api.put(`/api/order/${orderId}/${userId}`, data, config);

// Delete order API
export const deleteOrderApi = (orderId, userId) =>
  Api.delete(`/api/order/${orderId}/${userId}`, config);

//esewa
export const verifyEsewaApi = (data) => Api.post('/api/esewa/verify-payment', data)

