import React, { useState,useEffect } from 'react';
import { ShoppingCart, Heart, Share2, Star, CheckCircle, Truck, RefreshCw, ShieldCheck, MessageSquare, User, Briefcase, Shirt, Watch, Headphones, HardDrive, Coffee, Wallet, Zap } from 'lucide-react';
import FrontendLayout from '@/Layouts/FrontendLayout';
import { Head, useForm, usePage } from '@inertiajs/react';

// Main App Component
function ProductDetail({ product }) {
  const [selectedImage, setSelectedImage] = useState('https://placehold.co/600x400/E0E0E0/333333?text=Product+Image');

  const { submit, data, post, setData, errors, progress } = useForm({
    product_id: '',
    quantity: 1,
  });

  useEffect(() => {
    if (product.id) {
      setData('product_id', product.id);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('cart.store', product.id), {
    });
    console.log(data)
  }

  const relatedProducts = [
    { name: 'Xiaomi Redmi 8 Original', price: '$32.00 - $40.00', image: 'https://placehold.co/150x150/F0F0F0/333333?text=Product+1' },
    { name: 'Xiaomi Redmi 8 Original', price: '$32.00 - $40.00', image: 'https://placehold.co/150x150/F0F0F0/333333?text=Product+2' },
    { name: 'Xiaomi Redmi 8 Original', price: '$32.00 - $40.00', image: 'https://placehold.co/150x150/F0F0F0/333333?text=Product+3' },
    { name: 'Xiaomi Redmi 8 Original', price: '$32.00 - $40.00', image: 'https://placehold.co/150x150/F0F0F0/333333?text=Product+4' },
    { name: 'Xiaomi Redmi 8 Original', price: '$32.00 - $40.00', image: 'https://placehold.co/150x150/F0F0F0/333333?text=Product+5' },
    { name: 'Xiaomi Redmi 8 Original', price: '$32.00 - $40.00', image: 'https://placehold.co/150x150/F0F0F0/333333?text=Product+6' },
  ];

  const youMayLike = [
    { name: 'Men Blazers Suits Elegant Formal', price: '$7.00 - $99.50', image: 'https://placehold.co/50x50/F0F0F0/333333?text=P1', icon: <Briefcase size={20} className="text-gray-600" /> },
    { name: 'Men Shirt Sleeve Polo Contrast', price: '$7.00 - $99.50', image: 'https://placehold.co/50x50/F0F0F0/333333?text=P2', icon: <Shirt size={20} className="text-gray-600" /> },
    { name: 'Apple Watch Series Space Gray', price: '$7.00 - $99.50', image: 'https://placehold.co/50x50/F0F0F0/333333?text=P3', icon: <Watch size={20} className="text-gray-600" /> },
    { name: 'Basketball Crew Socks Long Stuff', price: '$7.00 - $99.50', image: 'https://placehold.co/50x50/F0F0F0/333333?text=P4', icon: <ShoppingCart size={20} className="text-gray-600" /> },
    { name: 'New Summer Men\'s Casual T-Shirts', price: '$7.00 - $99.50', image: 'https://placehold.co/50x50/F0F0F0/333333?text=P5', icon: <Shirt size={20} className="text-gray-600" /> },
  ];

  return (
    <>
      <Head title='Product'/>
    
    <FrontendLayout>
      <div className="min-h-screen bg-gray-100 font-inter">

        <div className="container mx-auto p-6" key={product.id}>

          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col lg:flex-row gap-6 mb-6">

            <div className="w-full lg:w-2/5 flex flex-col items-center">
              <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                <img src={`/images/${product.product_image}`} alt={product.product_name} className="object-cover w-full h-full" />
              </div>
            </div>


            <div className="w-full lg:w-3/5">
              <div className="flex items-center text-green-600 text-sm mb-2">
                <CheckCircle size={16} className="mr-1" /> In stock
              </div>
              <h1 className="text-2xl font-semibold text-gray-800 mb-2">{product.product_name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" stroke="none" />
                  ))}
                </div>
                <span className="text-gray-600 text-sm mr-2">9.3</span>
                <span className="text-gray-500 text-sm">32 reviews</span>
                <span className="mx-2 text-gray-300">|</span>
                <span className="text-gray-500 text-sm">154 sold</span>
              </div>

              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-3xl font-bold text-gray-900">Rs {product.product_price}</span>
                <span className="text-gray-500 text-sm">90-100 pcs</span>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  Rs {product.product_price} <span className="text-xs">100+ pcs</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-2 text-gray-700 text-sm mb-6">
                <div>Price: <span className="font-medium">Negotiable</span></div>
                <div>Type: <span className="font-medium">Classic shoes</span></div>
                <div>Material: <span className="font-medium">Plastic material</span></div>
                <div>Design: <span className="font-medium">Modern nice</span></div>
                <div>Customization: <span className="font-medium">Customized logo and graphic carton packages</span></div>
                <div>Protection: <span className="font-medium">Refund Policy</span></div>
                <div>Warranty: <span className="font-medium">2 years full warranty</span></div>
              </div>

              {/*cart store form  */}
              <div className="flex flex-col gap-4 md:flex-row">
                <form onSubmit={handleSubmit}>
                  <button type='submit' className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md flex items-center justify-center transition duration-300">
                    <ShoppingCart size={20} className="mr-2" /> Add to cart
                  </button>
                </form>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-md flex items-center justify-center transition duration-300 md:flex">
                  <Share2 size={20} className="mr-2" /> Share
                </button>
              </div>
              <button className="mt-3 w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg shadow-md flex items-center justify-center transition duration-300 md:hidden">
                <Heart size={20} className="mr-2" /> Save for later
              </button>
            </div>

            {/* Supplier Info */}
            <div className="w-full lg:w-1/4 bg-gray-50 rounded-lg p-4 shadow-inner">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-bold mr-3">R</div>
                <div>
                  <p className="font-semibold text-gray-800">Supplier</p>
                  <p className="text-blue-600 font-medium">Guangji Trading LLC</p>
                </div>
              </div>
              <div className="text-gray-700 text-sm mb-2 flex items-center">
                <img src="https://flagcdn.com/w20/de.png" alt="Germany Flag" className="w-4 h-auto mr-2" />
                Germany, Berlin
              </div>
              <div className="text-green-600 text-sm mb-2 flex items-center">
                <CheckCircle size={16} className="mr-2" /> Verified Seller
              </div>
              <div className="text-gray-700 text-sm mb-4 flex items-center">
                <Truck size={16} className="mr-2" /> Worldwide shipping
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md mb-2 transition duration-300">
                Send inquiry
              </button>
              <button className="w-full bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold py-2 rounded-md transition duration-300">
                Seller's profile
              </button>
              <button className="mt-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg shadow-md hidden items-center justify-center transition duration-300 md:flex ">
                <Heart size={20} className="mr-2" /> Save for later
              </button>
            </div>
          </div>


          {/* Description Section */}
          <div className="hidden lg:flex-row gap-6 mb-6 md:flex">
            <div className="w-full lg:w-3/4 bg-white rounded-lg shadow-md p-6">
              <div className="border-b border-gray-200 mb-4">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  <button className="whitespace-nowrap py-4 px-1 border-b-2 border-blue-500 text-blue-600 font-medium text-sm">Description</button>
                  <button className="whitespace-nowrap py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm">Reviews</button>
                  <button className="whitespace-nowrap py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm">Shipping</button>
                  <button className="whitespace-nowrap py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm">About seller</button>
                </nav>
              </div>

              <div className="text-gray-700 text-sm leading-relaxed mb-6">
                <p className="mb-4">
                  {product.product_description}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Product Specifications:</h3>
                <div className="grid grid-cols-2 gap-y-2 text-gray-700 text-sm">
                  <div>Model: <span className="font-medium">#8785657</span></div>
                  <div>Style: <span className="font-medium">Classic style</span></div>
                  <div>Certificate: <span className="font-medium">ISO-898821212</span></div>
                  <div>Size: <span className="font-medium">34mm x 450mm x 19mm</span></div>
                  <div>Memory: <span className="font-medium">36GB RAM</span></div>
                </div>
              </div>

              <ul className="text-gray-700 text-sm space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Some great feature name here
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Duis aute irure dolor in reprehenderit
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Some great feature name here
                </li>
              </ul>
            </div>


            <div className="w-full lg:w-1/4 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">You may like</h2>
              <div className="space-y-4">
                {youMayLike.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-12 h-12 flex-shrink-0 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                      {item.icon ? item.icon : <img src={item.image} alt={item.name} className="object-cover w-full h-full" onError={(e) => e.target.src = 'https://placehold.co/50x50/E0E0E0/333333?text=Img'} />}
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm font-medium">{item.name}</p>
                      <p className="text-gray-500 text-xs">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Related products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {relatedProducts.map((product, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-full h-32 bg-gray-100 rounded-lg overflow-hidden mb-2 flex items-center justify-center">
                    <img src={product.image} alt={product.name} className="object-cover w-full h-full" onError={(e) => e.target.src = 'https://placehold.co/150x150/E0E0E0/333333?text=Product'} />
                  </div>
                  <p className="text-gray-700 text-sm font-medium mb-1">{product.name}</p>
                  <p className="text-gray-500 text-xs">{product.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Banner */}
          <div className="relative bg-blue-600 text-white rounded-lg p-6 flex flex-col md:flex-row items-center justify-between overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-700 rounded-full opacity-20"></div>
            <div className="absolute -left-10 -top-10 w-32 h-32 bg-blue-700 rounded-full opacity-20"></div>
            <div className="z-10 text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-xl font-bold mb-1">Super discount on more than 100 USD</h2>
              <p className="text-sm opacity-90">Have you ever really just write quantity info</p>
            </div>
            <button className="z-10 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md shadow-lg transition duration-300">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </FrontendLayout>
    </>
  );
}

export default ProductDetail;
