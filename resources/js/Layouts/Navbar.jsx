
import React, { useState } from 'react';
import {
    Search,
    ChevronDown,
    MessageSquareText,
    ShoppingCart,
    Heart,
    ShoppingBag,
    Menu,
    X,
    CircleUser
} from "lucide-react";
import MobileSidebar from '@/Pages/Frontend/Mobilesidebar';
import { usePage, Link,router } from '@inertiajs/react';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [search, setSearch] = useState();

    const { auth,products } = usePage().props;

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(route('search'), { search }, { preserveState: true });
    };

    const icons = {
        Heart,
        ShoppingCart,
        CircleUser,
        MessageSquareText,
    };

    const buttons = [
        { icon: "Heart", label: "Favorites", link: '' },
        { icon: "ShoppingCart", label: "Shopping Cart", link: route('cart') },
        { icon: "MessageSquareText", label: "Messages", link: '' },
        // { icon: "User", label: "User Profile" ,link:route('login.user')},
    ];

    const links = [
        { name: 'All category', href: '#' },
        { name: 'Gadgets', href: '#' },
        { name: 'Clothes', href: '#' },
        { name: 'Accessories', href: '#' },
    ];

    const mobileIcons = [
        // { icon: <User /> },
        { icon: <ShoppingCart /> },
    ]

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            <header className="bg-white shadow-sm relative z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center flex-shrink-0">
                            <button
                                className="md:hidden text-gray-600 px-3 rounded-md"
                                onClick={toggleMobileMenu}
                                aria-label="Toggle mobile menu"
                            >
                                <Menu className="h-6 w-6" />
                            </button>
                            <a href={route('home')} className='flex items-center'>
                                <div className="icon bg-sky-600 text-white p-[7px] mr-2 rounded-md">
                                    <ShoppingBag className="h-6 w-6" />
                                </div>
                                <div className="text-2xl font-bold text-blue-500">Brand</div>
                            </a>
                        </div>

                        <div className="flex-1 mx-4 hidden md:block">
                            <div className="relative hidden md:block">
                                <form onSubmit={handleSearch}>
                                <input
                                    type="search"
                                    placeholder="Search"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full pl-4 pr-28 py-2 rounded-md border border-gray-300 focus:ring-sky-500 focus:border-sky-500 text-gray-900 placeholder-gray-500"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-0 top-0 bottom-0 px-4 rounded-e-md text-white bg-sky-600 hover:bg-sky-700"
                                >
                                    Search
                                </button>
                                </form>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">

                            {buttons.map((btn, index) => {
                                const Icon = icons[btn.icon];
                                return (
                                    <a
                                        key={index}
                                        href={btn.link}
                                        type="button"
                                        aria-label={btn.label}
                                        className="text-gray-600 hover:bg-gray-100 p-1 rounded-md"
                                    >
                                        <Icon className="hidden h-5 w-5 md:block" />
                                    </a>
                                );
                            })}

                            {auth.user ? (
                                <Link
                                    href={route('logout.user')}
                                    method="post"
                                    as="button"
                                    className="text-gray-600 flex flex-col items-center"
                                >
                                    <CircleUser className="h-5 w-5" />
                                    <span>{auth.user.name}</span>
                                </Link>
                            ) : (
                                <a href={route('login.user')} className="text-gray-600 flex flex-col items-center">
                                    <CircleUser className="h-5 w-5" />
                                    <span>Guest</span>
                                </a>
                            )}


                            {mobileIcons.map((item) => (
                                <button className='md:hidden text-gray-600'>
                                    {item.icon}
                                </button>
                            ))}

                        </div>
                    </div>
                </div>
                    <form onSubmit={handleSearch}>
                <div className="mobile-search flex items-center rounded-md border-2 mx-5 focus:ring-sky-500 focus:border-sky-500">
                    <Search className='text-gray-500 cursor-pointer md:hidden' />
                    <input
                        type="search"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="max-w-full pl-4 pr-28 py-2 border-0 outline-0 bg-transparent md:hidden text-gray-900 placeholder-gray-500 focus:ring-0"
                    />
                </div>
                    </form>
                <nav className="bg-gray-100 border-t hidden md:block">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between text-sm">
                        <div className="flex space-x-6">
                            {links.map(link => (
                                <a key={link.name} href={link.href} className="text-gray-700 hover:text-blue-600 font-medium">
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        <div className="flex space-x-4 text-gray-700 font-medium">
                            <span className="flex items-center cursor-pointer hover:text-blue-600">
                                English, USD <ChevronDown className="ml-1 h-4 w-4" />
                            </span>
                            <span className="flex items-center cursor-pointer hover:text-blue-600">
                                Ship to <span className="ml-1">🇩🇪</span> <ChevronDown className="ml-1 h-4 w-4" />
                            </span>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Mobile Sidebar */}
            <MobileSidebar isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
        </div>
    );
}

export default Navbar;
