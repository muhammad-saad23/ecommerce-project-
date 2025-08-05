import { Search, Facebook, Shield, Settings, Send, Instagram, Linkedin, Youtube, Twitter } from "lucide-react"
import Button from "@/components/SecondaryButton"
import Input from "@/components/TextInput"
// import { Card } from "@/components/Card"
import FrontendLayout from "@/Layouts/FrontendLayout"

export default function Home({categories}) {
  const homeOutdoor = 'https://placehold.co/400x400/EAECCC/5C6F4B?text=Home+Outdoor';    

  const regions = [
    { country: 'Arabic Emirates', domain: 'shopname.ae', flag: '🇦🇪' },
    { country: 'Australia', domain: 'shopname.ae', flag: '🇦🇺' },
    { country: 'United States', domain: 'shopname.ae', flag: '🇺🇸' },
    { country: 'Russia', domain: 'shopname.ru', flag: '🇷🇺' },
    { country: 'Italy', domain: 'shopname.it', flag: '🇮🇹' },
    { country: 'Denmark', domain: 'denmark.com.dk', flag: '🇩🇰' },
    { country: 'France', domain: 'shopname.com.fr', flag: '🇫🇷' },
    { country: 'Arabic Emirates', domain: 'shopname.ae', flag: '🇦🇪' }, // Duplicate as per image
    { country: 'China', domain: 'shopname.ae', flag: '🇨🇳' },
    { country: 'Great Britain', domain: 'shopname.co.uk', flag: '🇬🇧' },
  ];

  const services = [
    {
      title: "Source from Industry Hubs",
      icon: <Search className="w-6 h-6 text-white" />,
      image: "/images/industry.jpg", // replace with real image paths
    },
    {
      title: "Customize Your Products",
      icon: <Settings className="w-6 h-6 text-white" />,
      image: "/images/customize.jpg",
    },
    {
      title: "Fast, reliable shipping by ocean or air",
      icon: <Send className="w-6 h-6 text-white" />,
      image: "/images/shipping.jpg",
    },
    {
      title: "Product monitoring and inspection",
      icon: <Shield className="w-6 h-6 text-white" />,
      image: "/images/inspection.jpg",
    },
  ];

  const products = [
    {
      name: 'Smart watches',
      discount: '-25%',
      image: 'https://placehold.co/100x100/E0E0E0/333333?text=Watch', // Placeholder image
    },
    {
      name: 'Laptops',
      discount: '-15%',
      image: 'https://placehold.co/100x100/E0E0E0/333333?text=Laptop', // Placeholder image
    },
    {
      name: 'GoPro cameras',
      discount: '-40%',
      image: 'https://placehold.co/100x100/E0E0E0/333333?text=Camera', // Placeholder image
    },
    {
      name: 'Headphones',
      discount: '-25%',
      image: 'https://placehold.co/100x100/E0E0E0/333333?text=Headphones', // Placeholder image
    },
    {
      name: 'Canon cameras',
      discount: '-25%',
      image: 'https://placehold.co/100x100/E0E0E0/333333?text=Canon', // Placeholder image
    },
  ];

  const social = [
    { icon: <Facebook />, link: 'facebook' },
    { icon: <Twitter />, link: 'twitter' },
    { icon: <Youtube />, link: 'youtube' },
    { icon: <Instagram />, link: 'instagram' },
    { icon: <Linkedin />, link: 'linkedin' }
  ]

  return (
    <FrontendLayout>
    <div className="min-h-screen bg-gray-50">
      {/* <Navbar /> */}
      {/* Hero Section */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row w-full p-2 rounded-md space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="w-full lg:w-1/5 bg-gray-100 p-2 rounded-md hidden md:block">
            <ul className="space-y-2 text-sm">
              <li className="bg-blue-100 p-2 rounded">Automobiles</li>
              <li className="hover:bg-gray-200 p-2 rounded">Clothes and wear</li>
              <li className="hover:bg-gray-200 p-2 rounded">Home interiors</li>
              <li className="hover:bg-gray-200 p-2 rounded">Computer and tech</li>
              <li className="hover:bg-gray-200 p-2 rounded">Tools, equipments</li>
              <li className="hover:bg-gray-200 p-2 rounded">Sports and outdoor</li>
              <li className="hover:bg-gray-200 p-2 rounded">Animal and pets</li>
              <li className="hover:bg-gray-200 p-2 rounded">Machinery tools</li>
              <li className="hover:bg-gray-200 p-2 rounded">More category</li>
            </ul>
          </div>

          {/* Middle Banner */}
          <div
            className="w-full lg:w-3/5 flex items-center justify-center bg-cover bg-center p-8 rounded-md min-h-[200px] lg:min-h-auto"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url("https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="relative text-white text-left bg-opacity-80 p-4 rounded">
              <h2 className="text-xl sm:text-2xl">Latest trending</h2>
              <h1 className="text-3xl sm:text-4xl font-bold mb-3">Electronic items</h1>
              <button className="bg-sky-600 px-4 py-2 rounded shadow transition ease-in-out hover:bg-sky-500">
                Learn more
              </button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-1/5 flex flex-col space-y-2 p-2 rounded-md">
            <div className="bg-white p-3 rounded shadow text-center">
              <p className="text-sm text-gray-600">Hi, user</p>
              <p className="text-xs text-gray-400">let's get started</p>
              <div className="btn flex flex-col mt-2 space-y-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded">Join now</button>
                <button className="border border-blue-500 text-blue-500 px-3 py-1 rounded">Log in</button>
              </div>
            </div>
            <button className="bg-orange-400 text-white p-3 rounded shadow text-sm">
              Get US $10 off<br />with a new supplier
            </button>
            <button className="bg-emerald-500 text-white p-3 rounded shadow text-sm">
              Send quotes with<br />supplier preferences
            </button>
          </div>
        </div>
      </section>

      {/* Deals and Offers Section */}
      <div className="min-h-full bg-gray-100 font-inter p-4 sm:p-8 flex flex-col items-center">
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 border-t border-l border-gray-200">
            <div className="col-span-2 sm:col-span-3 md:col-span-1 p-4 sm:p-6 border-b border-r border-gray-200 flex flex-col justify-center items-center sm:items-start bg-gray-50 text-center sm:text-left">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Deals and offers</h2>
              <p className="text-sm text-gray-600 mb-4">Hygiene equipments</p>
              <div className="flex space-x-1 sm:space-x-2 justify-center">
                <div className="bg-gray-800 text-white p-1 sm:p-2 rounded-md text-center">
                  <span className="block text-base sm:text-lg font-bold">04</span>
                  <span className="block text-xs">Days</span>
                </div>
                <div className="bg-gray-800 text-white p-1 sm:p-2 rounded-md text-center">
                  <span className="block text-base sm:text-lg font-bold">13</span>
                  <span className="block text-xs">Hour</span>
                </div>
                <div className="bg-gray-800 text-white p-1 sm:p-2 rounded-md text-center">
                  <span className="block text-base sm:text-lg font-bold">34</span>
                  <span className="block text-xs">Min</span>
                </div>
                <div className="bg-gray-800 text-white p-1 sm:p-2 rounded-md text-center">
                  <span className="block text-base sm:text-lg font-bold">56</span>
                  <span className="block text-xs">Sec</span>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            {products.map((product, index) => (
              <div
                key={index}
                className="col-span-1 p-3 sm:p-4 border-b border-r border-gray-200 flex flex-col items-center justify-center text-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-3"
                />
                <p className="text-sm font-medium text-gray-800 mb-1">{product.name}</p>
                <span className="text-red-500 text-xs font-semibold bg-red-100 px-2 py-1 rounded-full">
                  {product.discount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Categories Section */}            
      <div class="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-7xl mx-7 mb-4">

        <div class="md:col-span-1 bg-cover bg-center rounded-lg p-6 flex flex-col justify-end"
              style={{ backgroundImage: `url(${homeOutdoor})`, minHeight: '320px' }}>
            <button className="bg-white text-gray-800 px-3 py-2 rounded-md shadow hover:bg-gray-100 transition-colors">
                Source now
            </button>
        </div>

        <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {categories.map((i)=>(
              <div className="bg-white rounded-lg p-4 flex flex-col justify-center items-center shadow-sm lg:flex-col">               
                <img src={`images/${i.category_image}`} alt={i.category_name} className="lg:w-full max-w-[120px] object-contain mb-3"/>
              <h3 className="text-gray-800 font-medium mb-2">{i.category_name}</h3>
            </div>
            ))}          
        </div>
    </div>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-blue-500 to-cyan-400 py-10 sm:py-16"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center"> 
            <div className="text-white text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">An easy way to send requests to all suppliers</h3> 
              <p className="text-blue-100 text-sm sm:text-base mb-4 sm:mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 sm:p-6">
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Send quote to suppliers</h4> 
              <div className="space-y-3 sm:space-y-4"> 
                <input
                  type="text" 
                  placeholder="What item you need?"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 text-sm" 
                />
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 text-sm" 
                  rows={3}
                  placeholder="Type more details"
                ></textarea>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"> 
                  <input
                    type="number" 
                    placeholder="Quantity"
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 text-sm" 
                  />
                  <select className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 text-sm"> 
                    <option>Pcs</option>
                    <option>Kg</option> 
                    <option>Sets</option>
                  </select>
                </div>
                <button className="w-full sm:w-auto px-5 py-2 bg-sky-600 text-white rounded-md transition ease-in-out hover:bg-sky-500 text-base font-semibold">Send inquiry</button> 
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Items */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Recommended Items</h3> 
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {[
            // ... (product data remains the same)
          ].map((product, index) => (
            <div key={index} className="bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"> 
              <img alt={product.name} className="w-full h-24 sm:h-32 object-contain mb-2 sm:mb-3" src={product.image} /> 
              <h4 className="text-gray-900 font-medium text-sm sm:text-base mb-1">{product.name}</h4> 
              <p className="text-blue-600 font-bold text-sm sm:text-base">{product.price}</p> 
            </div>
          ))}
        </div>
      </section>

      {/* More Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"> 
          {[
            
          ].map((product, index) => (
            <div key={index} className="bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <img alt={product.name} className="w-full h-24 sm:h-32 object-contain mb-2 sm:mb-3" src={product.image} /> 
              <h4 className="text-gray-900 font-medium text-sm sm:text-base mb-1">{product.name}</h4> 
              <p className="text-blue-600 font-bold text-sm sm:text-base">{product.price}</p> 
            </div>
          ))}
        </div>
      </section>

      {/* Our extra services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> 
        <div className="border border-blue-300 p-4 rounded-md shadow-sm bg-white">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Our extra services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"> 
            {services.map((service, index) => (
              <div
                key={index}
                className="relative rounded overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-28 sm:h-32 object-cover" 
                />
                <div className="absolute top-2 right-2 bg-black/50 p-2 rounded-full">
                  {service.icon}
                </div>
                <div className="p-2 text-sm font-medium bg-white">{service.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* Suppliers by Region Section */}
      <div className="min-h-full bg-gray-100 font-inter p-4 sm:p-8 flex flex-col items-center">
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-md p-6 sm:p-8 mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">Suppliers by region</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-4 gap-x-4 sm:gap-x-6"> 
            {regions.map((region, index) => (
              <div key={index} className="flex items-center space-x-2 sm:space-x-3"> 
                <span className="text-xl sm:text-2xl">{region.flag}</span>
                <div>
                  <p className="text-sm font-medium text-gray-700">{region.country}</p>
                  <p className="text-xs text-gray-500">{region.domain}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* ... (rest of the content) */}
      </div>

      {/* <Footer /> */}
      {/* <Router/> */}
    </div>
    </FrontendLayout>
  )
}
