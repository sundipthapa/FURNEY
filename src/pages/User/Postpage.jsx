import React, { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadProductApi } from '../../apis/api'; // Import your API function
import Navbar from '../../components/Common/Navbar';

const PostProduct = () => {
    const [selectedImages, setSelectedImages] = useState([]);
    const [formData, setFormData] = useState({
        productName: '',
        email: '',
        productDescription: '',
        phone: '',
        address: '',
        category: '',
        productCondition: '',
        price: '',
        images: [],
        previewUrls: [],
    });

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        const updatedImages = [...formData.images, ...files];
        const previewUrls = updatedImages.map(file => URL.createObjectURL(file));

        setFormData({
            ...formData,
            images: updatedImages, // Limit to 3 images
            previewUrls: previewUrls, // Limit to 3 preview URLs
        });
    };

    const handleImageDelete = (index) => {
        const updatedImages = [...formData.images];
        const updatedPreviewUrls = [...formData.previewUrls];

        updatedImages.splice(index, 1);
        updatedPreviewUrls.splice(index, 1);

        setFormData({
            ...formData,
            images: updatedImages,
            previewUrls: updatedPreviewUrls,
        });
    };

    const owner = JSON.parse(localStorage.getItem('user'));
    const ownerId = owner._id;
    // console.log(ownerId);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Prepare form data for API request
        const form = new FormData();
        form.append("ownerId", ownerId)
        form.append('title', formData.productName);
        form.append('email', formData.email);
        form.append('description', formData.productDescription);
        form.append('phoneno', formData.phone);
        form.append('address', formData.address);
        form.append('category', formData.category);
        form.append('condition', formData.productCondition);
        form.append('price', formData.price);
        formData.images.forEach(image => {
            form.append('images', image);
        });

        try {
            // Call the API function to upload product
            const response = await uploadProductApi(form);
            if (response.data.success) {
                toast.success(response.data.message);
                // Optionally: Reset form fields or redirect to another page after successful submission
                setFormData({
                    productName: '',
                    email: '',
                    productDescription: '',
                    phone: '',
                    address: '',
                    category: '',
                    productCondition: '',
                    price: '',
                    images: [],
                    previewUrls: [],
                });
            } else {
                toast.error('Error uploading product: ' + response.data.message);
            }
        } catch (error) {
            console.error('Error uploading product:', error);
            toast.error('Error uploading product: ' + error.message);
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-start min-h-screen mt-14 w-full">
                <div className="mb-1 text-center">
                    <div className="flex justify-center space-x-2">
                        {formData.previewUrls.length > 0 ? (
                            formData.previewUrls.map((imageUrl, index) => (
                                <div key={index} className="relative">
                                    <img src={imageUrl} alt={`Product ${index + 1}`} className="h-24 w-24" />
                                    <button
                                        className="absolute top-0 right-0 rounded-full bg-white text-red-500 p-1"
                                        onClick={() => handleImageDelete(index)}
                                    >
                                        <FaTimes />
                                    </button>
                                </div>
                            ))
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
                            value={formData.productName}
                            onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-amber-700 focus:border-amber-700 focus:z-10 sm:text-sm"
                            placeholder="Product Name"
                        />
                        <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-amber-700 focus:border-amber-700 focus:z-10 sm:text-sm"
                            placeholder="Email"
                        />
                        <textarea
                            required
                            value={formData.productDescription}
                            onChange={(e) => setFormData({ ...formData, productDescription: e.target.value })}
                            className="col-span-2 rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-amber-700 focus:border-amber-700 focus:z-10 sm:text-sm"
                            placeholder="Product Description"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 my-5">
                        <input
                            type="text"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-amber-700 focus:border-amber-700 focus:z-10 sm:text-sm"
                            placeholder="Phone"
                        />
                        <input
                            type="text"
                            required
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-amber-700 focus:border-amber-700 focus:z-10 sm:text-sm"
                            placeholder="Address"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 my-5">
                        <select
                            required
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-amber-700 focus:border-amber-700 focus:z-10 sm:text-sm"
                        >
                            <option value="">Select Category</option>
                            <option value="Sofa">Sofa</option>
                            <option value="Living">Living</option>
                            <option value="Bedroom">Bedroom</option>
                            <option value="Dining">Dining</option>
                            <option value="OutDoor">OutDoor</option>
                            <option value="Office">Office</option>
                            <option value="KidRoom">KidRoom</option>
                        </select>
                        <select
                            required
                            value={formData.productCondition}
                            onChange={(e) => setFormData({ ...formData, productCondition: e.target.value })}
                            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-amber-700 focus:border-amber-700 focus:z-10 sm:text-sm"
                        >
                            <option value="">Select Product Condition</option>
                            <option value="new">New</option>
                            <option value="old">Old</option>

                        </select>
                    </div>
                    <div className="my-5">
                        <input
                            type="text"
                            required
                            value={formData.price}
                            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-amber-700 focus:border-amber-700 focus:z-10 sm:text-sm"
                            placeholder="Price"
                        />
                    </div>
                    <div className="flex justify-between items-center mt-8">
                        <label className="flex flex-col items-center bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 px-4 py-2">
                            <FaPlus className="text-amber-900" size={24} />
                            <span className="mt-2 text-sm text-gray-900">Upload your product image</span>
                            <input type="file" className="hidden" onChange={handleImageUpload} />
                        </label>
                        <button


                            type="submit"
                            className="group relative w-auto h-22 flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-amber-900 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-900"
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
