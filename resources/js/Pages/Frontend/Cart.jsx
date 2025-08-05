import React, { useState } from 'react';
import { ShoppingCart, Tag, CreditCard, Lock, MessageSquare, Truck, ArrowLeft, XCircle, ChevronDown, Plus, Minus, MoreVertical, Router } from 'lucide-react';
import FrontendLayout from '@/Layouts/FrontendLayout';
import { Head, router } from '@inertiajs/react';

function App({cart}) {
  
  const [savedItems, setSavedItems] = useState([
    {
      id: 4,
      name: 'Regular Fit Resort Shirt',
      price: 57.70,
      image: 'https://placehold.co/150x150/F0F0F0/333333?text=Headphones',
    },
    {
      id: 5,
      name: 'Regular Fit Resort Shirt',
      price: 57.70,
      image: 'https://placehold.co/150x150/E0E0E0/333333?text=Tablet',
    },
    {
      id: 6,
      name: 'Regular Fit Resort Shirt',
      price: 57.70,
      image: 'https://placehold.co/150x150/D0D0D0/333333?text=Watch',
    },
    {
      id: 7,
      name: 'Regular Fit Resort Shirt',
      price: 57.70,
      image: 'https://placehold.co/150x150/C0C0C0/333333?text=Laptop',
    },
  ]);
  const [cartItems, setCartItems] = useState(
    cart.map(item => ({ ...item, quantity: item.quantity || 1 }))
  );
  // Function to handle quantity change for a cart item
  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product_id === id ? { ...item, quantity: parseInt(newQuantity) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    // setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    if (window.confirm('Are you sure you want to remove this item from your cart?')) {
      router.visit(route('cart.delete',id), {
        method: 'delete', 
        preserveScroll: true,
      });
    }
  };
  
  const handleRemoveAll = () => {
    if (window.confirm('Are you sure you want to remove all items from your cart?')) {
      router.visit(route('cart.clear'), {
        method: 'delete',
        preserveScroll: true,
      });
    }
  };
  
  const handleSaveForLater = (itemToSave) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemToSave.id));
    setSavedItems((prevItems) => [...prevItems, itemToSave]);
  };
 

  // Calculate subtotal
  const itemsCount = cartItems.length;
  const subtotal = cartItems.reduce((sum, item) => sum + item.product_price * item.quantity, 0);
  const shipping = itemsCount> 0 ? 10.00:0 ; 
  const tax = itemsCount >0 ? 7.00: 0; 
  const total = subtotal + shipping + tax; 

  return (
    <FrontendLayout>
      <Head title='Cart'/>
    <div className="min-h-screen bg-gray-100 font-inter py-4 sm:py-8">
      <div className="container mx-auto px-2 sm:px-4 lg:px-8">
        {/* Header */}
        <div className="flex items-center mb-4 px-2 sm:px-0">
          <button className="lg:hidden text-gray-600 mr-3">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Shopping cart</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column: Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
              {cartItems.length === 0 ? (
                <p className="text-gray-600 text-center py-8">Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row items-start border-b border-gray-200 py-4 last:border-b-0">
                    <img
                      src={`images/${item.product_image}`}
                      alt={item.product_name}
                      className="w-20 h-20 rounded-lg object-cover mb-4 sm:mb-0 sm:mr-4 flex-shrink-0"
                    />
                    <div className="flex-1 flex flex-col sm:flex-row justify-between w-full">
                      <div className="flex-1 text-left pr-4">
                        <h2 className="text-base font-semibold text-gray-800">{item.product_name}</h2>
                        <p className="text-gray-600 text-sm mb-1">{item.product_description.slice(0,80)}...</p>
                        {/* {item.seller && <p className="text-gray-600 text-sm mb-2">Seller: <span className="font-medium">{item.seller}</span></p>} */}
                        <div className="flex gap-5 text-sm mt-2 "> 
                          <button
                            onClick={()=>handleRemoveItem(item.id)}
                            className="text-red-500 hover:text-red-700 font-medium"
                          >
                            Remove
                          </button>
                          <button
                            onClick={() => handleSaveForLater(item)}
                            className="text-blue-500 hover:text-blue-700 font-medium"
                          >
                            Save for later
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between w-full sm:w-auto mt-4 sm:mt-0 sm:ml-auto">
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button
                            onClick={() => handleQuantityChange(item.product_id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="p-2 text-gray-600 hover:bg-gray-100 rounded-l-md disabled:opacity-50"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-3 py-1 text-gray-800 font-medium">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.product_id, item.quantity + 1)}
                            disabled={item.quantity>=10}
                            className="p-2 text-gray-600 hover:bg-gray-100 rounded-r-md disabled:opacity-50"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <span className="text-lg font-bold text-gray-900 ml-4">Rs{item.product_price}</span>
                        <button className="ml-4 text-gray-400 hover:text-gray-600 hidden sm:block"> {/* Desktop more options */}
                          <MoreVertical size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          
            <div className="hidden sm:flex justify-between items-center mb-6">
              <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
                <ArrowLeft size={18} className="mr-2" /> Back to shop
              </button>
              <div className="actions flex gap-3">
              <button className="text-green-600 hover:text-green-700 font-medium" onClick={() => setCartItems([])}>
                Update all
              </button>
              <button className="text-red-500 hover:text-red-700 font-medium" onClick={handleRemoveAll}>
                Remove all
              </button>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Have a coupon?</h2>
              <div className="flex mb-4">
                <input
                  type="text"
                  placeholder="Add coupon code"
                  className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-r-md transition duration-300">
                  Apply
                </button>
              </div>

              <div className="space-y-2 mb-6 text-gray-700 text-sm"> {/* Adjusted text size */}
                <div className="flex justify-between">
                  <span>Items ({itemsCount}):</span>
                  <span className="font-medium">Rs {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span className="font-medium">Rs {shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax:</span>
                  <span className="font-medium">Rs {tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-3 mt-3">
                  <span className="text-xl font-bold">Total:</span>
                  <span className="text-xl font-bold">Rs {total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md flex items-center justify-center transition duration-300">
                Checkout ({itemsCount} items)
              </button>
              <div className="flex justify-center items-center mt-4 space-x-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Visa-logo.svg" alt="Visa" className="h-5" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="MasterCard" className="h-5" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_Pay_logo.png" alt="Apple Pay" className="h-5" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Google_Pay_Logo.svg" alt="Google Pay" className="h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Secure Payment, Customer Support, Free Delivery - Hidden on mobile as per new image */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <Lock size={32} className="text-blue-500 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1">Secure payment</h3>
            <p className="text-gray-600 text-sm">Have you ever finally just</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <MessageSquare size={32} className="text-blue-500 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1">Customer support</h3>
            <p className="text-gray-600 text-sm">Have you ever finally just</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <Truck size={32} className="text-blue-500 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1">Free delivery</h3>
            <p className="text-gray-600 text-sm">Have you ever finally just</p>
          </div>
        </div>

        {/* Saved for later section */}
        {/* <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Saved for later</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"> 
            {savedItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 border border-gray-200 rounded-lg p-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  onError={(e) => e.target.src = 'https://placehold.co/80x80/E0E0E0/333333?text=Item'}
                />
                <div className="flex-1">
                  <p className="text-gray-700 font-medium text-sm mb-1">{item.name}</p>
                  <p className="text-gray-900 font-bold text-base mb-2">${item.price.toFixed(2)}</p>
                  <div className="flex gap-2 text-sm">
                    <button
                      onClick={() => handleMoveToCart(item)}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-md text-xs transition duration-300"
                    >
                      Move to cart
                    </button>
                    <button
                      onClick={() => handleRemoveSavedItem(item.id)}
                      className="text-red-500 hover:text-red-700 font-medium text-xs"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
    </FrontendLayout>
  );
}

export default App;
