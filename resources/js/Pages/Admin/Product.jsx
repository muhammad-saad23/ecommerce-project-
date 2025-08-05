import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import { Head, useForm } from '@inertiajs/react';


function Product({ categories }) {
    const [imagePreviews, setImagePreviews] = useState([]);

    const { data, reset, setData, post, processing, errors } = useForm({
        product_name: '',
        product_price: '',
        category_name: '',
        product_description: '',
        product_image: null,
        product_stock: '',
    });

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);

        // Save the first file to Inertia form data
        setData('product_image', files[0]);

        // Preview all selected images
        const previewUrls = files.map(file => URL.createObjectURL(file));
        setImagePreviews(previewUrls);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('product.store'), {
            onSuccess: () => {
                reset('category_name', 'product_description', 'product_name', 'product_image', 'product_price', 'product_stock');
                alert('Product created successfully');
            },
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Product
                </h2>
            }
        >
            <Head title="Product" />

            <div className="min-h-screen bg-gradient-to-br relative overflow-hidden">
                <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
                    <div className="w-full max-w-4xl">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-4xl font-bold text-white mb-2">Create Product</h1>
                            <p className="text-white text-opacity-80">Launch your next amazing product with style</p>
                        </div>

                        {/* Main Form */}
                        <form onSubmit={handleSubmit} encType="multipart/form-data">

                            <div className="bg-dark bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-3xl p-8 shadow-2xl">
                                <div className="space-y-8">
                                    {/* Basic Information */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-white mb-2">Product Name</label>
                                            <input
                                                type="text"
                                                name="product_name"
                                                value={data.product_name}
                                                onChange={(e) => setData('product_name', e.target.value)}
                                                placeholder="Enter product name"
                                                className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 transition-all duration-300"
                                            />
                                            {errors.product_name && <InputError message={errors.product_name} className="mt-2">{errors.product_name}</InputError>}

                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-white mb-2">Price</label>
                                            <div className="relative">
                                                <span className="absolute left-3 top-3 text-white text-opacity-60">Rs </span>
                                                <input
                                                    type="number"
                                                    name="product_price"
                                                    value={data.product_price}
                                                    onChange={(e) => setData('product_price', e.target.value)}
                                                    placeholder="0.00"
                                                    className="w-full px-4 py-3 pl-8 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 transition-all duration-300"
                                                />
                                                {errors.product_price && <div className="text-red-500 text-sm">{errors.product_price}</div>}

                                            </div>
                                        </div>
                                    </div>
                                    {/* Category Selection */}
                                    <div className="space-y-4">
                                        <label className="block text-sm font-medium text-white mb-2">Category</label>
                                        <select
                                            name="category_id"
                                            value={data.category_name}
                                            onChange={(e) => setData('category_name', e.target.value)}
                                            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Select a category</option>
                                            {categories.map((category) => (
                                                <option key={category.id} value={category.id}>
                                                    {category.category_name}
                                                </option>
                                            ))}
                                        </select>

                                        {errors.category_name && <InputError message={errors.category_name} className="mt-2">{errors.category_name}</InputError>}
                                    </div>


                                    {/* Description */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-white mb-2">Description</label>
                                        <textarea
                                            name="product_description"
                                            value={data.product_description}
                                            onChange={(e) => setData('product_description', e.target.value)}
                                            rows="4"
                                            placeholder="Tell us about your product..."
                                            className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 transition-all duration-300 resize-none"
                                        />
                                        {errors.product_description && <div className="text-red-500 text-sm">{errors.product_description}</div>}

                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-white">Product Images</label>

                                        <div className="relative border-2 border-dashed border-white border-opacity-20 rounded-xl px-6 py-10 text-center hover:border-opacity-50 transition-all duration-300 bg-white bg-opacity-5">
                                            <input
                                                type="file"
                                                name="product_image"
                                                multiple
                                                accept="image/*"
                                                onChange={handleImageChange}
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            />
                                            <div className="pointer-events-none">
                                                <svg className="mx-auto h-12 w-12 text-white text-opacity-60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16l4-4a3 3 0 014 0l2 2a3 3 0 004 0l4-4m-6 8v2m-4-2v2m-4-2v2" />
                                                </svg>
                                                <p className="text-white text-opacity-80 mt-2">Drag and drop or click to upload</p>
                                                <p className="text-sm text-white text-opacity-50">Only images are supported</p>
                                            </div>
                                        </div>

                                        {imagePreviews.length > 0 && (
                                            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                                {imagePreviews.map((src, index) => (
                                                    <img
                                                        key={index}
                                                        src={src}
                                                        alt={`Preview ${index}`}
                                                        className="w-full h-28 object-cover rounded-lg border border-white border-opacity-20 shadow-md"
                                                    />
                                                ))}
                                            </div>
                                        )}

                                        {errors.product_image && (
                                            <p className="text-red-500 text-sm mt-2">{errors.product_image}</p>
                                        )}
                                    </div>


                                    {/* Image Upload */}
                                    {/* Inventory */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-white mb-2">Stock Quantity</label>
                                            <input
                                                type="number"
                                                name="product_stock"
                                                value={data.product_stock}
                                                onChange={(e) => setData('product_stock', e.target.value)}
                                                placeholder="0"
                                                min="0"
                                                className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 transition-all duration-300"
                                            />
                                            {errors.product_stock && <div className="text-red-500 text-sm">{errors.product_stock}</div>}
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-6">
                                        <button
                                            type="submit"
                                            //   onClick={handleSubmit}
                                            disabled={processing}
                                            className="w-full bg-slate-800 text-white font-semibold py-4 px-6 rounded-xl hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                                />
                                            </svg>
                                            {processing ? 'Saving...' : 'Save Product'}
                                            <span>Launch Product</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Product;