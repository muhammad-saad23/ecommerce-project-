import React, { useState } from 'react';
import FrontendLayout from '@/Layouts/FrontendLayout';
import { SlidersHorizontal } from 'lucide-react';
import { usePage } from '@inertiajs/react';

const categories = ['Laptops', 'Electronics', 'Smartphones', 'Modern tech', 'See all'];
const brands = ['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo', 'See all'];
const features = ['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory', 'See all'];
const conditions = ['Any', 'Refurbished', 'Brand new', 'Old items'];


const Search = () => {
    const { products, search, category_id } = usePage().props;

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedFilters, setSelectedFilters] = useState(['Huawei', 'Apple', '64GB']);
    const [sortOption, setSortOption] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Change page
  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    const removeFilter = (filterToRemove) => {
        setSelectedFilters(selectedFilters.filter(filter => filter !== filterToRemove));
    };
    // // Category filter
    // if (selectedCategories.length && !selectedCategories.includes(product.category_name)) return false;

    // // Brand filter
    // if (selectedBrands.length && !selectedBrands.includes(product.brand_name)) return false;

    // // Condition filter
    // if (selectedConditions.length && !selectedConditions.includes(product.condition)) return false;

    // // Ratings filter
    // if (selectedRatings.length) {
    //     const productStars = Math.round(product.rating);
    //     if (!selectedRatings.some(r => productStars >= r)) return false;
    // }

    // return true;
    let filteredProducts = currentItems.filter(product => {
        // Price filter
        if (minPrice && product.product_price < parseFloat(minPrice)) return false;
        if (maxPrice && product.product_price > parseFloat(maxPrice)) return false;

        return true
    });
    if (sortOption === "low-to-high") {
        filteredProducts = [...filteredProducts].sort((a, b) => a.product_price - b.product_price);
    } else if (sortOption === "high-to-low") {
        filteredProducts = [...filteredProducts].sort((a, b) => b.product_price - a.product_price);
    }

    const FilterSection = ({ title, items, type = 'list', children }) => (
        <div className="mb-6 border-b border-gray-200 pb-4">
            <h3 className="font-semibold text-gray-800 mb-3 flex justify-between items-center">
                {title}
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </h3>
            {children || (
                type === 'list' ? (
                    <ul>
                        {items.map((item, index) => (
                            <li key={index} className="mb-2 text-sm text-gray-700">
                                <a href="#" className="hover:text-blue-600">{item}</a>
                            </li>
                        ))}
                    </ul>
                ) : (

                    <div>
                        {items.map((item, index) => (
                            <label key={index} className="flex items-center mb-2 text-sm text-gray-700">
                                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded mr-2" />
                                {item}
                            </label>
                        ))}
                    </div>
                )
            )}
        </div>
    );

    const StarRating = ({ rating }) => {
        const totalStars = 5;
        const filledStars = Math.floor(rating / 2);
        const hasHalfStar = rating % 2 !== 0;

        return (

            <div className="flex items-center">
                {[...Array(totalStars)].map((_, i) => {
                    if (i < filledStars) {
                        return (
                            <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                            </svg>
                        );
                    } else if (i === filledStars && hasHalfStar) {
                        return (
                            <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                <defs>
                                    <linearGradient id={`half-star-${i}`}>
                                        <stop offset="50%" stopColor="currentColor" />
                                        <stop offset="50%" stopColor="transparent" />
                                    </linearGradient>
                                </defs>
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" fill={`url(#half-star-${i})`}></path>
                            </svg>
                        );
                    } else {
                        return (
                            <svg key={i} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                            </svg>
                        );
                    }
                })}
            </div>
        );
    };


    const ProductListItem = ({ product }) => (
        <a href={route('productDetail', product.id)}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex p-4 mb-4 relative hover:shadow-lg transition-shadow duration-300">
                <img src={`/images/${product.product_image}`} alt={product.product_name} className="w-28 h-28 object-contain mr-4 rounded-lg" />
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.product_name}</h3>
                    <div className="flex items-center mb-2">
                        <span className="text-xl font-bold text-gray-900 mr-2">${product.product_price.toFixed(2)}</span>

                    </div>
                    <div className="flex items-center text-sm mb-2">
                        <StarRating rating={8} />
                        {/* <span className="text-gray-600 ml-2">(300 orders)</span> */}
                    </div>
                    <a href="#"><span className=" text-green-600">Free shiping</span></a>

                </div>
                <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </button>
            </div>
        </a>
    );

    return (
        <FrontendLayout>
            <div className="min-h-screen bg-gray-100 font-sans flex flex-col">
                <div className="lg:hidden bg-white shadow-md p-4 flex justify-between items-centerz-30">
                    <div className="flex items-center space-x-2">
                        <span className="text-gray-700 font-semibold">Sort:</span>
                        <select className="form-select border border-gray-300 rounded-md p-1 text-sm text-gray-700" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                            <option value="newest">Newest</option>
                            <option value="featured">Featured</option>
                            <option value="low-to-high">Price: Low to High</option>
                            <option value="high-to-low">Price: High to Low</option>
                        </select>
                    </div>
                    <button
                        onClick={toggleSidebar}
                        className="p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 flex items-center space-x-1"
                        aria-label="Filter products"
                    >
                        <span className="font-semibold">Filter (3)</span>
                        <SlidersHorizontal className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex flex-2 flex-col lg:flex-row">
                    {/* Sidebar */}
                    <aside
                        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg p-6 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                            } lg:relative lg:translate-x-0 lg:w-72 transition-transform duration-300 ease-in-out z-10`}
                    >
                        <div className="flex justify-between items-center mb-6 lg:hidden">
                            <h2 className="text-xl font-bold text-gray-800">Filters</h2>
                            <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-700">
                                <SlidersHorizontal />
                            </button>
                        </div>

                        <FilterSection title="Category" items={categories} />
                        <FilterSection title="Brands" items={brands} type="checkbox" />
                        <FilterSection title="Features" items={features} type="checkbox" />

                        <FilterSection title="Price range">
                            <div className="mb-4">
                                <input type="range" className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                            </div>
                            <div className="flex justify-between items-center mb-3">
                                <input
                                    type="number"
                                    placeholder="Min"
                                    value={minPrice}
                                    onChange={(e) => setMinPrice(e.target.value)}
                                    className="w-24 p-2 border border-gray-300 rounded-md text-sm text-gray-700"
                                />
                                <span className="text-gray-500 mx-2">-</span>
                                <input
                                    type="number"
                                    placeholder="Max"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(e.target.value)}
                                    className="w-24 p-2 border border-gray-300 rounded-md text-sm text-gray-700"
                                />
                            </div>
                            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
                                Apply
                            </button>
                        </FilterSection>

                        <FilterSection title="Condition" items={conditions} type="checkbox" />

                        <FilterSection title="Ratings">
                            <div>
                                {[5, 4, 3, 2, 1].map((starCount) => (
                                    <label key={starCount} className="flex items-center mb-2 text-sm text-gray-700">
                                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded mr-2" />
                                        <StarRating rating={starCount * 2} /> {/* Convert to 1-10 scale for StarRating component */}
                                        <span className="ml-1 text-gray-600">{starCount === 5 ? '' : '& up'}</span>
                                    </label>
                                ))}
                            </div>
                        </FilterSection>
                    </aside>

                    {/* Main Content Area */}
                    <main className="flex-1 p-4 lg:p-8">

                        <div className="bg-white rounded-lg shadow-md p-4 mb-6 hidden lg:flex flex-wrap justify-between items-center">
                            <div className="text-gray-700 text-sm">
                                12,911 items in <span className="font-semibold">Mobile accessory</span>
                            </div>
                            <div className="flex flex-wrap items-center space-x-4">
                                <label className="flex items-center text-gray-700 text-sm">
                                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded mr-1" />
                                    Verified only
                                </label>
                                <select className="form-select border border-gray-300 rounded-md p-2 text-sm text-gray-700" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                                    <option value="newest">Newest</option>
                                    <option value="featured">Featured</option>
                                    <option value="low-to-high">Price: Low to High</option>
                                    <option value="high-to-low">Price: High to Low</option>
                                </select>
                                <div className="flex space-x-1">
                                    <button className="p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
                                        {/* Grid icon */}
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 10a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM13 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2h-2zm0 10a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2z"></path></svg>
                                    </button>
                                    <button className="p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
                                        {/* List icon */}
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Product List */}
                        <div className="space-y-4">
                            {filteredProducts.length ? (
                                filteredProducts.map(product => (
                                    <ProductListItem key={product.pid} product={product} />
                                ))
                            ) : (
                                <p className='text-gray-700 text-3xl text-center md:mt-8 mr-[8rem]'>No Items found.</p>
                            )
                            }
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-end items-center mt-8">
                            <select
                                value={itemsPerPage}
                                onChange={(e) => {
                                    setItemsPerPage(Number(e.target.value));
                                    setCurrentPage(1);
                                }}
                                className="form-select border border-gray-300 rounded-md p-2 text-sm text-gray-700 mr-4"
                            >
                                <option value={10}>Show 10</option>
                                <option value={20}>Show 20</option>
                                <option value={50}>Show 50</option>
                            </select>

                            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                <button
                                    onClick={() => goToPage(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                                >
                                    Prev
                                </button>

                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => goToPage(i + 1)}
                                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${currentPage === i + 1
                                            ? "z-10 bg-blue-50 border-blue-500 text-blue-600"
                                            : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                                            }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}

                                <button
                                    onClick={() => goToPage(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                                >
                                    Next
                                </button>
                            </nav>
                        </div>
                    </main>
                </div>
            </div>
        </FrontendLayout>
    );
};

export default Search;
