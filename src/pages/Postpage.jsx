import React, { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import Navbar from '../components/Common/Navbar';

const PostProduct = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageDelete = () => {
        setSelectedImage(null);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic to handle form submission (e.g., sending data to server)
        // Reset form fields or redirect to another page after submission
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-start min-h-screen mt-14 w-full">
                <div className="mb-1 text-center">
                    <div className="flex justify-center">
                        {selectedImage ? (
                            <div className="relative">
                                <img src={selectedImage} alt="Product" className="h-24 w-24" />
                                <button
                                    className="absolute top-0 right-0 rounded-full bg-white text-red-500 p-1"
                                    onClick={handleImageDelete}
                                >
                                    <FaTimes />
                                </button>
                            </div>
                        ) : (
                            <img
                                alt=""
                                className="h-24 w-24"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWzDmPysE-K5ZrJD5y6swPf3YAmdol-WSTnw&s"
                            />
                        )}
                    </div>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Post your product</h2>
                </div>
                <form className="mt-8 space-y-6 w-2/3" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4 my-5">
                        <input
                            type="text"
                            required
                            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-amber-700 focus:border-amber-700 focus:z-10 sm:text-sm"
                            placeholder="Product Name"
                        />
                        <input
                            type="email"
                            required
                            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-amber-700 focus:border-amber-700 focus:z-10 sm:text-sm"
                            placeholder="Email"
                        />
                        <textarea
                            required
                            className="col-span-2 rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-amber-700 focus:border-amber-700 focus:z-10 sm:text-sm"
                            placeholder="Product Description"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 my-5">
                        <input
                            type="text"
                            required
                            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-amber-700 focus:border-amber-700 focus:z-10 sm:text-sm"
                            placeholder="Phone"
                        />
                        <input
                            type="text"
                            required
                            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-amber-700 focus:border-amber-700 focus:z-10 sm:text-sm"
                            placeholder="Address"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 my-5">
                        <select
                            required
                            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-amber-700 focus:border-amber-700 focus:z-10 sm:text-sm"
                        >
                            <option value="">Select Category</option>
                            <option value="sofa">Sofa</option>
                            <option value="chair">Chair</option>
                            <option value="bedroom">Bedroom</option>
                        </select>
                        <select
                            required
                            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-amber-700 focus:border-amber-700 focus:z-10 sm:text-sm"
                        >
                            <option value="">Select Product Condition</option>
                            <option value="new">New</option>
                            <option value="old">Old</option>
                            <option value="used">Used</option>
                        </select>
                    </div>
                    <div className="my-5">
                        <input
                            type="text"
                            required
                            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-amber-700 focus:border-amber-700 focus:z-10 sm:text-sm"
                            placeholder="Price"
                        />
                    </div>
                    {selectedImage && (
                        <div className="my-5">
                            <img src={selectedImage} alt="Product" className="max-h-64 mx-auto" />
                        </div>
                    )}
                    <div className="flex justify-between items-center mt-8">
                        <label className="flex flex-col items-center bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 px-4 py-2">
                            <FaPlus className="text-amber-900" size={24} />
                            <span className="mt-2 text-sm text-gray-900">Upload your product image</span>
                            <input type="file" className="hidden" onChange={handleImageUpload} />
                        </label>
                        <button
                            type="submit"
                            className="group relative w-auto h-22 flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-amber-900 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-700"
                        >
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default PostProduct;
