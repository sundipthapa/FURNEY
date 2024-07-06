// src/pages/ProfilePage.js

import React, { useEffect, useState } from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../components/Common/Navbar';
import { changePasswordApi, getOrdersByUserIdApi, updateUserApi, updateUserBillingAddressApi } from '../../apis/api';
import { toast } from 'react-toastify';

const ProfilePage = () => {
    const navigate = useNavigate();
    const [selectedSection, setSelectedSection] = useState('profile');

    // const { orderId } = useParams();
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user ? user._id : null;

    const [orders, setOrder] = useState([]);  
    const [oldPassword, setoldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [billingAddress, setBillingAddress] = useState('');
  
    const changeOldPassword = (e) => {
      setoldPassword(e.target.value);
    }
  
    const changeNewPassword = (e) => {
      setNewPassword(e.target.value);
    }
  
    const changeConfirmPassword = (e) => {
      setConfirmPassword(e.target.value);
    }
    const changeBillingAddress = (e) => {
      setBillingAddress(e.target.value);
    }

    const [userData, setUserData] = useState({
        name: user.name,
        phoneno: user.phoneno,
        username: user.username,
        email: user.email,
        address: user.address,
        profileImage: user?.profileImage ?? null,
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setUserData((prevData) => ({
          ...prevData,
          profileImage: file,
        }));
      };
    
      const handleUpdateProfileSubmit = (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("name", userData.name);
        formData.append("phoneno", userData.phoneno);
        formData.append("email", userData.email);
        formData.append("username", userData.username);
        formData.append("address", userData.address);
        formData.append("profileImage", userData.profileImage);
    
        updateUserApi(userId, formData)
          .then((res) => {
            if (res.data.success === false) {
              toast.error(res.data.message);
            } else {
              toast.success(res.data.message);
              localStorage.setItem("user", JSON.stringify(res.data.user));
              setUserData(res.data.user);
            }
          })
          .catch((err) => {
            console.log(err);
            toast.error("Internal Server Error!");
          });
      };

      const handleUpdateBillingSubmit = (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("address", billingAddress);
    
        updateUserBillingAddressApi(userId, formData)
          .then((res) => {
            if (res.data.success === false) {
              toast.error(res.data.message);
            } else {
              toast.success(res.data.message);
              localStorage.setItem("user", JSON.stringify(res.data.user));
              setUserData(res.data.user);
            }
          })
          .catch((err) => {
            console.log(err);
            toast.error("Internal Server Error!");
          });
      };
  
    const handleChangePasswordSubmit = (e) => {
      e.preventDefault();
      // Add validation for new and confirm password
      if (newPassword !== confirmPassword) {
        toast.error("New password and confirm password do not match.");
        return;
      }
  
      const data = {
        oldPassword: oldPassword,
        newPassword: newPassword,
        userId: userId
      };
  
      // API call for changing password
      changePasswordApi(data).then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          // Additional logic after successfully changing the password
        }
      }).catch((err) => {
        console.log(err);
        toast.error("Server Error!");
      });
    }
  

  useEffect(() => {
    // Fetch product details
    getOrdersByUserIdApi()
      .then(response => {
          console.log(response.data);
          setOrder(response.data);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
    }, [userId]);





    const renderSection = () => {
        switch (selectedSection) {
            case 'profile':
                return (
                    <div className="flex flex-col h-4/6 p-5 border shadow-lg overflow-auto">
                        <h2 className="text-2xl font-semibold mb-4">Profile</h2>
                        <div className="flex flex-col items-center mb-4">
                            <img
                                src={userData?.profileImage ?? "https://via.placeholder.com/150"}
                                alt="Profile"
                                className="w-32 h-32 object-cover mb-2"
                            />
                            <input type='file' className="bg-amber-900 text-white p-2 rounded-md"   onChange={handleImageUpload}/>
                                
                        </div>
                        <div className="mb-4 flex-grow">
                            <input type="text" name="name" placeholder="Name"  value={userData.name} onChange={handleInputChange} className="w-full p-2 border mb-2" />
                            <input type="text" name="phonenumber" placeholder="Phone Number"  value={userData.phoneno} onChange={handleInputChange} className="w-full p-2 border mb-2" />
                            <input type="email" name="email" placeholder="Email"  value={userData.email} onChange={handleInputChange} className="w-full p-2 border mb-2" />
                            <input type="text" name="username" placeholder="Username"  value={userData.username} onChange={handleInputChange} className="w-full p-2 border mb-2" />
                            <input type="text" name="address" placeholder="Address"  value={userData.address} onChange={handleInputChange} className="w-full p-2 border mb-2" />
                        </div>
                        <button className="bg-amber-900 text-white p-2 rounded-md" onClick={handleUpdateProfileSubmit}>Update</button>
                    </div>
                );
                case 'myOrder':
                    return (
                        <div className="flex flex-col h-4/6 p-5 border shadow-lg overflow-auto">
                            <h2 className="text-2xl font-semibold mb-4">My Order</h2>
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Product Image</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Order Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.length > 0 ? (
                                        orders.map(order => (
                                            order.products.map(product => (
                                                <tr key={order._id + product?._id}>
                                                    <td>{product.product.title}</td>
                                                    <td><img src={product?.product.images[0]} alt={product?.title} className="w-16 h-16 object-cover" /></td>
                                                    <td>{product?.quantity}</td>
                                                    <td>{product?.product?.price}</td>
                                                    <td>{order.status}</td>
                                                </tr>
                                            ))
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="text-center">No orders found</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    );
            case 'changePassword':
                return (
                    <div className="flex flex-col h-4/6 p-5 border shadow-lg overflow-auto">
                        <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
                        <div className="mb-4 flex-grow">
                            <input type="password" name="oldPassword" placeholder="Old Password"  onChange={changeOldPassword} className="w-full p-2 border mb-2" />
                            <input type="password" name="newPassword" placeholder="New Password"  onChange={changeNewPassword} className="w-full p-2 border mb-2" />
                            <input type="password" name="confirmPassword" placeholder="Confirm Password"  onChange={changeConfirmPassword} className="w-full p-2 border mb-2" />
                        </div>
                        <button className="bg-amber-900 text-white p-2 rounded-md" onClick={handleChangePasswordSubmit}>Change</button>
                    </div>
                );
            case 'addBillingAddress':
                return (
                    <div className="flex flex-col h-4/6 p-5 border shadow-lg overflow-auto">
                        <h2 className="text-2xl font-semibold mb-4">Add New Billing Address</h2>
                        <div className="flex-grow">
                            <input type="text" name="billingAddress" placeholder="New Billing Address" className="w-full p-2 border mb-2" onChange={changeBillingAddress}/>
                        </div>
                        <button className="bg-amber-900 text-white p-2 rounded-md" onClick={handleUpdateBillingSubmit}>Add</button>
                    </div>
                );
            case 'addShippingAddress':
                return (
                    <div className="flex flex-col h-4/6 p-5 border shadow-lg overflow-auto">
                        <h2 className="text-2xl font-semibold mb-4">Add New Shipping Address</h2>
                        <div className="flex-grow">
                            <input type="text" name="shippingAddress" placeholder="New Shipping Address" className="w-full p-2 border mb-2" />
                        </div>
                        <button className="bg-amber-900 text-white p-2 rounded-md">Add</button>
                    </div>
                );
            case 'logout':
                navigate('/home');
                return null;
            default:
                return null;
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex h-screen">
                {/* Sidebar */}
                <div className="w-1/4 p-10 bg-white shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Menu</h2>
                    <ul>
                        <li 
                            onClick={() => setSelectedSection('profile')} 
                            className={`cursor-pointer mb-2 flex items-center hover:bg-gray-200 p-2 rounded ${selectedSection === 'profile' ? 'bg-gray-200' : ''}`}
                        >
                            <i className="fas fa-user mr-2"></i>
                            <span className="text-lg">Profile</span>
                        </li>
                        <hr />
                        <li 
                            onClick={() => setSelectedSection('myOrder')} 
                            className={`cursor-pointer mb-2 flex items-center hover:bg-gray-200 p-2 rounded ${selectedSection === 'myOrder' ? 'bg-gray-200' : ''}`}
                        >
                            <i className="fas fa-box mr-2"></i>
                            <span className="text-lg">My Order</span>
                        </li>
                        <hr />
                        <li 
                            onClick={() => setSelectedSection('changePassword')} 
                            className={`cursor-pointer mb-2 flex items-center hover:bg-gray-200 p-2 rounded ${selectedSection === 'changePassword' ? 'bg-gray-200' : ''}`}
                        >
                            <i className="fas fa-lock mr-2"></i>
                            <span className="text-lg">Change Password</span>
                        </li>
                        <hr />
                        <li 
                            onClick={() => setSelectedSection('addBillingAddress')} 
                            className={`cursor-pointer mb-2 flex items-center hover:bg-gray-200 p-2 rounded ${selectedSection === 'addBillingAddress' ? 'bg-gray-200' : ''}`}
                        >
                            <i className="fas fa-address-card mr-2"></i>
                            <span className="text-lg">Add Billing Address</span>
                        </li>
                        <hr />
                        <li 
                            onClick={() => setSelectedSection('addShippingAddress')} 
                            className={`cursor-pointer mb-2 flex items-center hover:bg-gray-200 p-2 rounded ${selectedSection === 'addShippingAddress' ? 'bg-gray-200' : ''}`}
                        >
                            <i className="fas fa-shipping-fast mr-2"></i>
                            <span className="text-lg">Add Shipping Address</span>
                        </li>
                        <hr />
                        <li 
                            onClick={() => setSelectedSection('logout')} 
                            className="cursor-pointer mb-2 flex items-center hover:bg-gray-200 p-2 rounded"
                        >
                            <i className="fas fa-sign-out-alt mr-2"></i>
                            <span className="text-lg">Logout</span>
                        </li>
                    </ul>
                </div>

                {/* Content Section */}
                <div className="w-3/4 p-5 bg-white shadow-lg">
                    {renderSection()}
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
