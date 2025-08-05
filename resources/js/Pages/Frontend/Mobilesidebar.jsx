// components/MobileSidebar.jsx
import React from "react";
import {
    Home,
    Menu,
    Heart,
    Plus ,
    ShoppingCart,
    Globe,
    MessageSquareText,
    Info
} from "lucide-react";

const MobileSidebar = ({ isOpen, onClose }) => {
    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={onClose}
                />
            )}

            <aside className={`fixed top-0 left-0 w-72 h-full bg-white z-50 shadow transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
            }`}>
                <div className="p-4 border-b flex items-center space-x-3">
                    <div className="h-10 w-10 bg-gray-300 rounded-full" />
                    <div>
                        <p className="font-semibold text-gray-800">Sign in | Register</p>
                    </div>
                    <div className="icon relative left-10">
                       <button type="button"  
                       onClick={onClose}
                        aria-label="Toggle mobile menu">
                       <Plus className="rotate-45 scale-[-1.2]"/>
                        </button> 
                    </div>
                </div>

                <div className="p-4 space-y-4 text-sm">
                    {/* Primary nav */}
                    <div className="space-y-3">
                        <div className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer">
                            <Home className="w-5 h-5" /><span>Home</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer">
                            <Menu className="w-5 h-5" /><span>Categories</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer">
                            <Heart className="w-5 h-5" /><span>Favorites</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer">
                            <ShoppingCart className="w-5 h-5" /><span>My orders</span>
                        </div>
                    </div>

                    <div className="border-t pt-4 space-y-3">
                        <div className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer">
                            <Globe className="w-5 h-5" /><span>English | USD</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer">
                            <MessageSquareText className="w-5 h-5" /><span>Contact us</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer">
                            <Info className="w-5 h-5" /><span>About</span>
                        </div>
                    </div>

                    <div className="border-t pt-4 space-y-2 text-gray-600 text-sm">
                        <div className="hover:text-blue-600 cursor-pointer">User agreement</div>
                        <div className="hover:text-blue-600 cursor-pointer">Partnership</div>
                        <div className="hover:text-blue-600 cursor-pointer">Privacy policy</div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default MobileSidebar;
