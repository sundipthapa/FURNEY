import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <footer className="bg-amber-900">
      <div className="mx-auto max-w-screen-3xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div
            className="text-white text-6xl font-bold cursor-pointer py-10"
            onClick={handleLogoClick}
          >
            FURNEY
            <div className="mb-6 py-10 text-xl font-medium">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-white mr-2" />
                <div>
                  <p className="text-lg text-white">Address</p>
                  <p className="text-lg text-gray-200">Chappalkarkhana Chowk 04, Maharajgunj, Kathmandu</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="text-white mr-2" />
                <div>
                  <p className="text-lg text-white">Phone</p>
                  <p className="text-lg text-gray-200">9779801881999, 9801881998</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-white mr-2" />
                <div>
                  <p className="text-lg text-white">Email</p>
                  <p className="text-lg text-gray-200">info@furniturehub.studio</p>
                </div>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
  <form className="w-full">
    <div className="relative max-w-lg">
      <label className="sr-only" htmlFor="email">Email</label>
      <input
        className="w-full rounded-full border-gray-200 outline-none bg-gray-100 p-4 pr-32 text-lg font-medium"
        id="email"
        type="email"
        placeholder="furney@gmail.com"
      />
      <button
        type="submit"
        className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full bg-amber-600 px-5 py-3 text-lg font-medium text-white transition hover:bg-amber-700"
        style={{ marginTop: '0.5rem' }} // Adjust margin to fit inside the input field
      >
        Subscribe
      </button>
    </div>
  </form>
</div>


          </div>

          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-10 lg:grid-cols-5 lg:gap-y-16">
            
            <div className="col-span-1 sm:col-span-1">
              <p className="text-lg font-medium text-white">Quick Links</p>
              <ul className="mt-6 space-y-4 text-lg">
                <li>
                  <Link to="/" className="transition hover:opacity-75 text-gray-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/aboutus" className="transition hover:opacity-75 text-gray-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="transition hover:opacity-75 text-gray-200">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="transition hover:opacity-75 text-gray-200">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1 sm:col-span-1">
              <p className="text-lg font-medium text-white">Customer</p>
              <ul className="mt-6 space-y-4 text-lg">
                <li>
                  <Link to="/login" className="transition hover:opacity-75 text-gray-200">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="transition hover:opacity-75 text-gray-200">
                    Register
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="transition hover:opacity-75 text-gray-200">
                    My Account
                  </Link>
                </li>
                <li>
                  <Link to="/favorite" className="transition hover:opacity-75 text-gray-200">
                    My Wishlist
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1 sm:col-span-1">
              <p className="text-lg font-medium text-white">Useful Tools</p>
              <ul className="mt-6 space-y-4 text-lg">
                <li>
                  <Link to="/order" className="transition hover:opacity-75 text-gray-200">
                    Order Tracking
                  </Link>
                </li>
                <li>
                  <Link to="/shipping" className="transition hover:opacity-75 text-gray-200">
                    Shipping and Delivery
                  </Link>
                </li>
                <li>
                  <Link to="/return" className="transition hover:opacity-75 text-gray-200">
                    Return and Exchange
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="transition hover:opacity-75 text-gray-200">
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1 sm:col-span-1">
              <p className="text-lg font-medium text-white">Category</p>
              <ul className="mt-6 space-y-4 text-lg">
                <li>
                  <Link to="/app" className="transition hover:opacity-75 text-gray-200">
                    App
                  </Link>
                </li>
                <li>
                  <Link to="/form" className="transition hover:opacity-75 text-gray-200">
                    Form
                  </Link>
                </li>
                <li>
                  <Link to="/navbar" className="transition hover:opacity-75 text-gray-200">
                    Navbar
                  </Link>
                </li>
                <li>
                  <Link to="/landing-page" className="transition hover:opacity-75 text-gray-200">
                    Landing Page
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="text-lg font-medium text-white">Gallery</p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <img src="https://img.freepik.com/free-photo/living-room-scandinavian-interior-design_53876-146865.jpg?size=626&ext=jpg&ga=GA1.1.785138068.1718180203&semt=sph" className="h-20 w-full rounded-lg object-cover" alt="Gallery Image 1" />
                <img src="https://img.freepik.com/free-photo/living-room-scandinavian-interior-design_53876-146865.jpg?size=626&ext=jpg&ga=GA1.1.785138068.1718180203&semt=sph" className="h-20 w-full rounded-lg object-cover" alt="Gallery Image 2" />
                <img src="https://img.freepik.com/free-photo/living-room-scandinavian-interior-design_53876-146865.jpg?size=626&ext=jpg&ga=GA1.1.785138068.1718180203&semt=sph" className="h-20 w-full rounded-lg object-cover" alt="Gallery Image 3" />
                <img src="https://img.freepik.com/free-photo/living-room-scandinavian-interior-design_53876-146865.jpg?size=626&ext=jpg&ga=GA1.1.785138068.1718180203&semt=sph" className="h-20 w-full rounded-lg object-cover" alt="Gallery Image 4" />
              </div>
            </div>

            <ul className="col-span-2 flex flex-wrap justify-start gap-6 lg:col-span-5 lg:justify-end">
              <li>
                <a href="" rel="" target="_blank" className="transition hover:text-[#1877F2] text-gray-200">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.437 9.878V14.89h-2.54v-2.89h2.54v-2.2c0-2.507 1.492-3.89 3.778-3.89 1.094 0 2.238.196 2.238.196v2.46h-1.26c-1.242 0-1.63.774-1.63 1.567v1.876h2.773l-.443 2.89h-2.33v7.006C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="" rel="" target="_blank" className="transition hover:text-[#1DA1F2] text-gray-200">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 19c7.732 0 11.966-6.375 11.966-11.9 0-.18 0-.355-.012-.532A8.503 8.503 0 0 0 22 4.809a8.19 8.19 0 0 1-2.357.63 4.104 4.104 0 0 0 1.804-2.264 8.16 8.16 0 0 1-2.605.975 4.084 4.084 0 0 0-6.959 3.724 11.578 11.578 0 0 1-8.408-4.244 4.07 4.07 0 0 0 1.265 5.452A4.055 4.055 0 0 1 2.8 8.873v.052a4.084 4.084 0 0 0 3.273 4.003 4.093 4.093 0 0 1-1.078.144c-.264 0-.52-.024-.771-.072a4.082 4.082 0 0 0 3.815 2.835A8.196 8.196 0 0 1 2 17.547 11.55 11.55 0 0 0 8 19" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="" rel="" target="_blank" className="transition hover:text-[#E4405F] text-gray-200">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.33 3.608 1.305.975.975 1.243 2.242 1.305 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.33 2.633-1.305 3.608-.975.975-2.242 1.243-3.608 1.305-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.33-3.608-1.305-.975-.975-1.243-2.242-1.305-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.33-2.633 1.305-3.608.975-.975 2.242-1.243 3.608-1.305C8.416 2.175 8.796 2.163 12 2.163zM12 0C8.736 0 8.332.012 7.052.07 5.773.128 4.654.397 3.765 1.287 2.875 2.177 2.606 3.296 2.548 4.575 2.49 5.855 2.478 6.259 2.478 9.523c0 3.263.012 3.667.07 4.947.058 1.279.327 2.398 1.217 3.287.89.89 2.008 1.159 3.287 1.217 1.28.058 1.684.07 4.947.07 3.264 0 3.668-.012 4.947-.07 1.279-.058 2.398-.327 3.287-1.217.89-.89 1.159-2.008 1.217-3.287.058-1.28.07-1.684.07-4.947 0-3.264-.012-3.668-.07-4.947-.058-1.279-.327-2.398-1.217-3.287-.89-.89-2.008-1.159-3.287-1.217C15.668.012 15.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.998 3.998 0 1 1 0-7.996 3.998 3.998 0 0 1 0 7.996zm7.84-10.785a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="" rel="" target="_blank" className="transition hover:text-[#0077B5] text-gray-200">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M20.447 20.452h-3.555v-5.569c0-1.328-.024-3.038-1.852-3.038-1.852 0-2.136 1.447-2.136 2.942v5.665h-3.555V8.691h3.414v1.605h.048c.476-.9 1.637-1.852 3.369-1.852 3.599 0 4.262 2.367 4.262 5.448v6.56zM4.445 7.084c-1.144 0-2.072-.928-2.072-2.072 0-1.143.928-2.072 2.072-2.072 1.143 0 2.072.929 2.072 2.072 0 1.144-.929 2.072-2.072 2.072zm1.778 13.368H2.668V8.691h3.555v11.761zM22.225 0H1.771C.792 0 0 .774 0 1.723v20.554C0 23.227.792 24 1.771 24h20.451c.98 0 1.778-.773 1.778-1.723V1.723C24 .774 23.204 0 22.225 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-12 text-center text-lg text-gray-200">
          &copy; 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
