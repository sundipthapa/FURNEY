import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getProductByApi, updateProductApi } from '../../apis/api';
import SideBar from '../../components/Common/Sidebar';


const AdminEditProduct = () => {
  // Receive product id from URL
  const { id } = useParams();

  // Load product data
  useEffect(() => {
    getProductByApi(id).then((res) => {
      console.log(res.data);
      setProductName(res.data?.product?.productName);
      setProductPrice(res.data?.product?.productPrice);
      setProductDescription(res.data?.product?.productDescription);
      setProductCategory(res.data?.product?.productCategory);
      setOldImage(res.data?.product?.productImageUrl);
    });
  }, [id]);

  // useState hooks
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [oldImage, setOldImage] = useState('');

  // useState for image
  const [productImage, setProductImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  // Image upload function
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setProductImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  // Handle submit function
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('productPrice', productPrice);
    formData.append('productDescription', productDescription);
    formData.append('productCategory', productCategory);
    formData.append('productImage', productImage);

    // Make an API call
    updateProductApi(id, formData).then((res) => {
      if (res.data.success === false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);
        navigate('/admin/dashboard');
      }
    }).catch((err) => {
      console.log(err);
      toast.error('Internal Server Error!');
    });
  };

  return (
    <div className="flex">
      <div className="w-1/5">
        <SideBar />
      </div>
      <div className="flex-grow">
        <div className='container mx-auto p-4'>
          <h3 className="text-2xl font-semibold">Editing product - <span className='text-red-500'>{productName}</span></h3>

          <div className='flex gap-4'>
            <form className="w-1/2" onSubmit={handleSubmit}>
              <label className="block text-gray-700">Product Name</label>
              <input value={productName} onChange={(e) => setProductName(e.target.value)} className='form-control mb-2' type="text" placeholder='Enter product name' />

              <label className="block text-gray-700">Product Description</label>
              <textarea value={productDescription} onChange={(e) => setProductDescription(e.target.value)} className='form-control mb-2' placeholder={"Enter description"} cols="4" rows="4"></textarea>

              <label className="block text-gray-700">Price</label>
              <input value={productPrice} onChange={(e) => setProductPrice(e.target.value)} type="number" className='form-control mb-2' placeholder='Enter your price' />

              <label className="block text-gray-700">Select category</label>
              <select value={productCategory} onChange={(e) => setProductCategory(e.target.value)} className='form-control mb-2'>
                <option value="Sofa">Sofa</option>
                <option value="Living">Living</option>
                <option value="Bedroom">Bedroom</option>
                <option value="Dining">Dining</option>
                <option value="OutDoor">OutDoor</option>
                <option value="Office">Office</option>
                <option value="KidRoom">KidRoom</option>
              </select>

              <label className="block text-gray-700">Product Image</label>
              <input onChange={handleImageUpload} type="file" className='form-control' />

              <button type="submit" className='btn btn-primary w-full mt-2'>Update product</button>
            </form>

            <div className="w-1/2">
              <h6 className="text-lg font-semibold">Old Image Preview</h6>
              <img className='img-fluid rounded-lg object-cover' width={300} height={300} src={oldImage} alt="" />

              <h6 className='mt-4 text-lg font-semibold'>New Image</h6>
              {
                previewImage ? <img src={previewImage} alt="product Image" className='img-fluid rounded-lg object-cover' width={300} height={300} />
                  : <p>No image selected!</p>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminEditProduct
