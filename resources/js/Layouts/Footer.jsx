import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, Linkedin, ShoppingBag } from 'lucide-react';

function Footer() {
  const social = [
    { icon: <Facebook size={20} />, link: 'facebook' },
    { icon: <Twitter size={20} />, link: 'twitter' },
    { icon: <Youtube size={20} />, link: 'youtube' },
    { icon: <Instagram size={20} />, link: 'instagram' },
    { icon: <Linkedin size={20} />, link: 'linkedin' }
  ];

  return (
    // Main footer container with border-top for separation
    <footer className="bg-white border-t border-gray-200 font-inter">
      {/* Max width container for content centering and padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Grid layout for main footer sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand Information Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">

            <a href={route('home')} className='flex items-center'>
              <div className="icon bg-sky-600 text-white p-[7px] mr-2 rounded-md">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold text-blue-500">Brand</div>
            </a>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Discover the best information about our company, products, and services. We are committed to excellence and innovation.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {social.map((socialItem, index) => (
                <a
                  key={index}
                  href={`https://www.${socialItem.link}.com/`}
                  className="cursor-pointer text-white p-2 rounded-full bg-sky-600 transition-all duration-300 ease-in-out hover:bg-sky-700 hover:scale-110 shadow-md"
                  target="_blank"
                  rel="noopener noreferrer" // Security best practice for target="_blank"
                  aria-label={`Link to our ${socialItem.link} page`}
                >
                  {socialItem.icon}
                </a>
              ))}
            </div>
          </div>

          {/* About Section */}
          <div>
            <h4 className="font-bold text-gray-800 text-lg mb-4">About</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Find Store</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Categories</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Blogs</a></li>
            </ul>
          </div>

          {/* Partnership Section */}
          <div>
            <h4 className="font-bold text-gray-800 text-lg mb-4">Partnership</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Become a Partner</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Developer API</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Brand Collaborations</a></li>
            </ul>
          </div>

          {/* Information Section */}
          <div>
            <h4 className="font-bold text-gray-800 text-lg mb-4">Information</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Money Refund</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Shipping</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>

          {/* For Users Section */}
          <div>
            <h4 className="font-bold text-gray-800 text-lg mb-4">For Users</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Login</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Register</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Settings</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">My Orders</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright and App Download Section */}
        <div className="border-t border-gray-200 mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">© {new Date().getFullYear()} Ecommerce. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <span className="text-sm text-gray-600">Get the app</span>
            <div className="flex space-x-3">
              {/* Placeholder images for app store badges */}
              <img
                src="https://placehold.co/120x40/000000/FFFFFF?text=App+Store"
                alt="App Store"
                className="h-10 rounded-md shadow-sm"
              />
              <img
                src="https://placehold.co/120x40/000000/FFFFFF?text=Google+Play"
                alt="Google Play"
                className="h-10 rounded-md shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
