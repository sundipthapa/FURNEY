// src/pages/CheckoutPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Common/Navbar';
import { default as esewaImage, default as khaltiImage } from '../../assets/images/hero1.png'; // Ensure correct image import

const CheckoutPage = () => {
    const [billingDetails, setBillingDetails] = useState({
        name: '',
        phone: '',
        email: '',
        city: '',
        address: '',
    });

    const [shippingDetails, setShippingDetails] = useState({
        name: '',
        phone: '',
        email: '',
        city: '',
        address: '',
    });

    const [useBillingAsShipping, setUseBillingAsShipping] = useState(false);

    const handleInputChange = (e, isBilling) => {
        const { name, value } = e.target;
        if (isBilling) {
            setBillingDetails({
                ...billingDetails,
                [name]: value,
            });
            if (useBillingAsShipping) {
                setShippingDetails({
                    ...shippingDetails,
                    [name]: value,
                });
            }
        } else {
            setShippingDetails({
                ...shippingDetails,
                [name]: value,
            });
        }
    };

    const handleCheckboxChange = () => {
        setUseBillingAsShipping(!useBillingAsShipping);
        if (!useBillingAsShipping) {
            setShippingDetails(billingDetails);
        } else {
            setShippingDetails({
                name: '',
                phone: '',
                email: '',
                city: '',
                address: '',
            });
        }
    };

    return (
        <>
            <Navbar />
            <div className="w-full h-screen flex justify-center p-10 gap-20">
                {/* Left section */}
                <div className="w-2/3 p-5 h-full bg-white shadow-lg">
                    {/* Billing Details */}
                    <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
                    <div className="flex gap-4 mb-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={billingDetails.name}
                            onChange={(e) => handleInputChange(e, true)}
                            className="w-1/2 p-2 border"
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            value={billingDetails.phone}
                            onChange={(e) => handleInputChange(e, true)}
                            className="w-1/2 p-2 border"
                        />
                    </div>
                    <div className="flex gap-4 mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={billingDetails.email}
                            onChange={(e) => handleInputChange(e, true)}
                            className="w-1/2 p-2 border"
                        />
                        <select
                            name="city"
                            value={billingDetails.city}
                            onChange={(e) => handleInputChange(e, true)}
                            className="w-1/2 p-2 border"
                        >
                            <option value="">Select City</option>
                            <option value="Kathmandu">Outside Kathmandu</option>
                            <option value="Pokhara">Within Kathmandu</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={billingDetails.address}
                            onChange={(e) => handleInputChange(e, true)}
                            className="w-full p-2 border"
                        />
                    </div>

                    {/* Shipping Details */}
                    <h2 className="text-2xl font-semibold mb-4">Shipping Details</h2>
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            checked={useBillingAsShipping}
                            onChange={handleCheckboxChange}
                            className="mr-2"
                        />
                        <label>Set as default</label>
                    </div>
                    <div className="flex gap-4 mb-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={shippingDetails.name}
                            onChange={(e) => handleInputChange(e, false)}
                            className="w-1/2 p-2 border"
                            disabled={useBillingAsShipping}
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            value={shippingDetails.phone}
                            onChange={(e) => handleInputChange(e, false)}
                            className="w-1/2 p-2 border"
                            disabled={useBillingAsShipping}
                        />
                    </div>
                    <div className="flex gap-4 mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={shippingDetails.email}
                            onChange={(e) => handleInputChange(e, false)}
                            className="w-1/2 p-2 border"
                            disabled={useBillingAsShipping}
                        />
                        <select
                            name="city"
                            value={shippingDetails.city}
                            onChange={(e) => handleInputChange(e, false)}
                            className="w-1/2 p-2 border"
                            disabled={useBillingAsShipping}
                        >
                            <option value="">Select City</option>
                            <option value="Kathmandu">Kathmandu</option>
                            <option value="Pokhara">Pokhara</option>
                            <option value="Biratnagar">Biratnagar</option>
                        </select>
                    </div>
                   
                    <div className="mb-4">
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={shippingDetails.address}
                            onChange={(e) => handleInputChange(e, false)}
                            className="w-full p-2 border"
                            disabled={useBillingAsShipping}
                        />
                    </div>
                    <button className="w-full bg-amber-900 text-white p-3 rounded-md">
                                Save
                            </button>
                </div>

                {/* Right section */}
                <div className="w-1/3 h-full p-5 bg-white shadow-lg border border-light-brown flex flex-col justify-start gap-20">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Your Order</h2>
                        <div className="flex items-center mb-4">
                            <img
                                src="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
                                alt="Product"
                                className="w-20 h-20 object-cover mr-4"
                            />
                            <div>
                                <h4 className="text-lg">Product Name</h4>
                                <p>Price: Rs.1000</p>
                                <p>Quantity: 1</p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
                        <div className="mb-4">
                            <p>Total items: 1</p>
                            <p>Subtotal: Rs.1000</p>
                            <p>Delivery Fee: Rs.0</p>
                            <p>Delivery Discount: Rs.20</p>
                            <p>Total Amount: Rs.980</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between mb-4">
                            <img src={esewaImage} alt="Esewa" className="w-1/2 h-20 object-cover" />
                            <img src={khaltiImage} alt="Khalti" className="w-1/2 h-20 object-cover" />
                        </div>

                        <Link to="/payment">
                            <button className="w-full bg-amber-900 text-white p-3 rounded-md">
                                Checkout
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckoutPage;
