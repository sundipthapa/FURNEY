import React, { useState, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { uploadProductApi, deleteProductApi, getAllProductAdminApi } from '../../apis/api';
import SideBar from '../../components/Common/Sidebar';
import { Dialog, Transition } from '@headlessui/react';
import { FaPlus, FaTimes } from 'react-icons/fa';

const AdminDashboard = () => {
  const [title, setProductName] = useState('');
  const [price, setProductPrice] = useState('');
  const [description, setProductDescription] = useState('');
  const [category, setProductCategory] = useState('');
  const [productImages, setProductImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const updatedImages = [...productImages, ...files].slice(0, 3);
    const previewUrls = updatedImages.map((file) => URL.createObjectURL(file));
    setProductImages(updatedImages);
    setPreviewImages(previewUrls);
  };

  const handleImageDelete = (index) => {
    const updatedImages = [...productImages];
    const updatedPreviewImages = [...previewImages];
    updatedImages.splice(index, 1);
    updatedPreviewImages.splice(index, 1);
    setProductImages(updatedImages);
    setPreviewImages(updatedPreviewImages);
  };

  const owner = JSON.parse(localStorage.getItem('user'));
  const ownerId = owner?._id;

  useEffect(() => {
    getAllProductAdminApi()
      .then((res) => {
        setProducts(res.data.products || []); // Provide a default empty array if the response is undefined
      })
      .catch((err) => {
        console.error(err);
        setProducts([]); // Set products to an empty array on error
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('ownerId', ownerId);
    formData.append('title', title);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('category', category);
    productImages.forEach((image) => {
      formData.append('images', image);
    });

    uploadProductApi(formData)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          setOpen(false);
          setProductName('');
          setProductPrice('');
          setProductDescription('');
          setProductCategory('');
          setProductImages([]);
          setPreviewImages([]);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('Internal Server Error!');
      });
  };

  const handleDelete = (id) => {
    const confirm = window.confirm('Are you sure you want to delete this product?');
    if (!confirm) {
      return;
    } else {
      deleteProductApi(id).then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          window.location.reload();
        }
      });
    }
  };

  return (
    <>
      <div className="flex">
        <div className="w-1/5">
          <SideBar />
        </div>
        <div className="flex-grow">
          <div className="container mx-2">
            <div className="flex justify-between">
              <h1 className="text-xl font-semibold">Admin Dashboard</h1>
              <button type="button" className="btn btn-danger" onClick={() => setOpen(true)}>
                Add Product
              </button>
            </div>
            <table className="table-auto mt-2 w-full">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-4 py-2">Product Image</th>
                  <th className="px-4 py-2">Product Name</th>
                  <th className="px-4 py-2">Product Price</th>
                  <th className="px-4 py-2">Product Category</th>
                  <th className="px-4 py-2">Product Description</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 ? (
                  products.map((item) => (
                    <tr key={item._id} className="border-t">
                      <td className="px-4 py-2">
                        <img src={item?.images[0]} height={40} width={40} alt="product" />
                      </td>
                      <td className="px-4 py-2">{item?.title}</td>
                      <td className="px-4 py-2">NPR.{item?.price}</td>
                      <td className="px-4 py-2">{item?.category}</td>
                      <td className="px-4 py-2">{item?.description.slice(0, 10)}</td>
                      <td className="px-4 py-2">
                        <div className="flex space-x-2">
                          <Link to={`/admin/edit/${item._id}`} className="btn btn-success">
                            Edit
                          </Link>
                          <button onClick={() => handleDelete(item._id)} className="btn btn-danger">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-4 py-2 text-center">
                      No products found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                          Create a new product!
                        </Dialog.Title>
                        <div className="mt-2">
                          <label className="block text-sm font-medium text-gray-700">Product Name</label>
                          <input
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Enter product name"
                            value={title}
                            onChange={(e) => setProductName(e.target.value)}
                          />
                        </div>
                        <div className="mt-2">
                          <label className="block text-sm font-medium text-gray-700">Product Description</label>
                          <textarea
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Enter description"
                            cols="4"
                            rows="4"
                            value={description}
                            onChange={(e) => setProductDescription(e.target.value)}
                          />
                        </div>
                        <div className="mt-2">
                          <label className="block text-sm font-medium text-gray-700">Price</label>
                          <input
                            type="number"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Enter your price"
                            value={price}
                            onChange={(e) => setProductPrice(e.target.value)}
                          />
                        </div>
                        <div className="mt-2">
                          <label className="block text-sm font-medium text-gray-700">Select category</label>
                          <select
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            value={category}
                            onChange={(e) => setProductCategory(e.target.value)}
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
                        </div>
                        <div className="mt-2">
                          <label className="block text-sm font-medium text-gray-700">Product Images</label>
                          <input
                            type="file"
                            className="mt-1 block w-full text-sm text-gray-500"
                            onChange={handleImageUpload}
                            multiple
                            accept="image/*"
                          />
                          <div className="flex mt-2">
                            {previewImages.map((url, index) => (
                              <div key={index} className="relative mr-2">
                                <img
                                  src={url}
                                  alt={`Preview ${index}`}
                                  className="h-20 w-20 rounded-md object-cover"
                                />
                                <button
                                  className="absolute top-0 right-0 text-red-500"
                                  onClick={() => handleImageDelete(index)}
                                >
                                  <FaTimes />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default AdminDashboard;
