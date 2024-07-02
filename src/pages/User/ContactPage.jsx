import React from 'react';
import Footer from '../../components/Common/Footer';
import Navbar from '../../components/Common/Navbar';

// Import icons (Assuming you have FontAwesome or any other icon library installed)
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

// Import a sample Google Map image (Replace with your actual image or map embed)
import mapImage from '../../assets/images/map.png'; // Ensure you have this image in your assets folder

const ContactPage = () => {
    return (
        <>
            <Navbar />

            <div className="max-w-screen-xl mx-auto mt-24 mb-24 px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-10 my-10">
                    {/* Contact Information */}
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <div className="mb-6">
                            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Let’s stay connected</h2>
                            <div className="flex items-center mb-4">
                                <FaMapMarkerAlt className="text-gray-700 mr-2" />
                                <div>
                                    <p className="text-lg text-gray-700">Address</p>
                                    <p className="text-lg text-gray-600">Chappalkarkhana Chowk 04, Maharajgunj, Kathmandu</p>
                                </div>
                            </div>
                            <div className="flex items-center mb-4">
                                <FaPhoneAlt className="text-gray-700 mr-2" />
                                <div>
                                    <p className="text-lg text-gray-700">Phone</p>
                                    <p className="text-lg text-gray-600">9779801881999, 9801881998</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="text-gray-700 mr-2" />
                                <div>
                                    <p className="text-lg text-gray-700">Email</p>
                                    <p className="text-lg text-gray-600">info@furniturehub.studio</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Map Image */}
                        <div className="mt-6">
                            <img src={mapImage} alt="Google Map Location" className="w-full rounded-md shadow-md" />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full md:w-2/3">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <label htmlFor="fullname" className="block text-lg font-medium text-gray-700">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fullname"
                                        name="fullname"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-700 focus:border-amber-700 sm:text-base"
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-700 focus:border-amber-700 sm:text-base"
                                        placeholder="Enter your phone number"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-700 focus:border-amber-700 sm:text-base"
                                        placeholder="Enter your email address"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        className="mt-1 block w-full h-72 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-700 focus:border-amber-700 sm:text-base"
                                        placeholder="Enter your message"
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amber-900 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-700"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ContactPage;
