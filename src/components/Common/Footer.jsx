import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-80 flex flex-col md:flex-row justify-between items-center text-sm text-center text-white bg-amber-900">
      <div className="w-full md:w-1/4 h-auto mb-6 md:mb-0 md:mr-6">
        <p className="font-extrabold mb-2 text-xl">FURNEY</p>
        <p className="text-xs">
          Stay in the loop and sign up for the Wardiere newsletter:
        </p>
        <div className="flex mt-5">
          <input
            type="text"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-lg bg-white text-black font-medium text-l outline-none"
          />
          <button className="px-8 py-2 rounded-r-lg bg-white text-black font-medium text-l">
            Subscribe
          </button>
        </div>
      </div>

      <ul className="w-1/2 md:w-1/4 h-auto">
        <li className="font-bold uppercase mb-2">Company</li>
        <li>Home</li>
        <li>About Us</li>
        <li>Buy from us</li>
      </ul>

      <ul className="w-1/2 md:w-1/4 h-auto">
        <li className="font-bold uppercase mb-2">Documentation</li>
        <li>Help Center </li>
        <li>Contact Us </li>
        <li>FAQs </li>
        <li>Privacy</li>
      </ul>
      
      <ul className="w-1/2 md:w-1/4 h-auto">
        <li className="font-bold uppercase mb-2">Social Media</li>
        <li>
          Facebook <FaFacebook className="inline-block ml-1" />
        </li>
        <li>
          Twitter <FaTwitter className="inline-block ml-1" />
        </li>
        <li>
          Instagram <FaInstagram className="inline-block ml-1" />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
