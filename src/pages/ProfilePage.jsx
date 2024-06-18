// src/pages/ProfilePage.js

import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import Navbar from '../components/Common/Navbar';

const ProfilePage = () => {
    const navigate = useNavigate();
    const [selectedSection, setSelectedSection] = useState('profile');

    const renderSection = () => {
        switch (selectedSection) {
            case 'profile':
                return (
                    <div className="flex flex-col h-4/6 p-5 border shadow-lg overflow-auto">
                        <h2 className="text-2xl font-semibold mb-4">Profile</h2>
                        <div className="flex flex-col items-center mb-4">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Profile"
                                className="w-32 h-32 object-cover mb-2"
                            />
                            <button className="bg-amber-900 text-white p-2 rounded-md">
                                Upload Image
                            </button>
                        </div>
                        <div className="mb-4 flex-grow">
                            <input type="text" name="name" placeholder="Name" className="w-full p-2 border mb-2" />
                            <input type="text" name="phonenumber" placeholder="Phone Number" className="w-full p-2 border mb-2" />
                            <input type="email" name="email" placeholder="Email" className="w-full p-2 border mb-2" />
                            <input type="text" name="username" placeholder="Username" className="w-full p-2 border mb-2" />
                            <input type="text" name="address" placeholder="Address" className="w-full p-2 border mb-2" />
                        </div>
                        <button className="bg-amber-900 text-white p-2 rounded-md">Update</button>
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
                                    <th>All</th>
                                    <th>Pending</th>
                                    <th>Delivered</th>
                                    <th>Shipped</th>
                                    <th>Canceled</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Sample row */}
                                <tr>
                                    <td>Sample Product</td>
                                    <td><img src="https://via.placeholder.com/50" alt="Product" /></td>
                                    <td>All</td>
                                    <td>Pending</td>
                                    <td>Delivered</td>
                                    <td>Shipped</td>
                                    <td>Canceled</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
            case 'changePassword':
                return (
                    <div className="flex flex-col h-4/6 p-5 border shadow-lg overflow-auto">
                        <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
                        <div className="mb-4 flex-grow">
                            <input type="password" name="oldPassword" placeholder="Old Password" className="w-full p-2 border mb-2" />
                            <input type="password" name="newPassword" placeholder="New Password" className="w-full p-2 border mb-2" />
                            <input type="password" name="confirmPassword" placeholder="Confirm Password" className="w-full p-2 border mb-2" />
                        </div>
                        <button className="bg-amber-900 text-white p-2 rounded-md">Change</button>
                    </div>
                );
            case 'addBillingAddress':
                return (
                    <div className="flex flex-col h-4/6 p-5 border shadow-lg overflow-auto">
                        <h2 className="text-2xl font-semibold mb-4">Add New Billing Address</h2>
                        <div className="flex-grow">
                            <input type="text" name="billingAddress" placeholder="New Billing Address" className="w-full p-2 border mb-2" />
                        </div>
                        <button className="bg-amber-900 text-white p-2 rounded-md">Add</button>
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
