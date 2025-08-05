import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

function ProductEdit({ product, categories }) {
    const { data, setData, post, errors, reset } = useForm({
        product_name: product.product_name,
        product_price: product.product_price,
        product_description: product.product_description,
        category_name: product.category_id,
        product_stock: product.product_stock,
        product_image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('product.update', product.id), {
            method: 'put',
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                console.log("Product updated successfully!");
                reset();
            },
            onError: (error) => {
                console.error("Validation errors:", error);
            },
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Update
                </h2>
            }
        >
            <Head title="Update Product" />

            <div className="min-h-screen bg-gradient-to-br relative overflow-hidden">
                <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
                    <div className="w-full max-w-4xl">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-4xl font-bold text-white mb-2">Edit Product</h1>
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
                                            {errors.product_name && <div className="text-red-500 text-sm">{errors.product_name}</div>}
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-white mb-2">Price</label>
                                            <div className="relative">
                                                <span className="absolute left-3 top-3 text-white text-opacity-60">Rs</span>
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
                                            onChange={(e) => setData('category_id', e.target.value)}
                                            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Select a category</option>
                                            {categories.map((category) => (
                                                <option key={category.id} value={category.id}>
                                                    {category.category_name}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.category_name && <div className="text-red-500 text-sm">{errors.category_name}</div>}
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

                                    {/* Image Upload */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-white mb-2">Product Image</label>
                                        {product.product_image && (
                                            <img
                                                src={`/storage/product/${product.product_image}`}
                                                alt="Current"
                                                className="mb-4 max-h-40 rounded"
                                            />
                                        )}
                                        <div className="border-2 border-dashed border-white border-opacity-30 rounded-xl p-8 text-center hover:border-opacity-50 transition-all duration-300">
                                            <p className="text-white text-opacity-80 mb-2">Drag and drop your images here</p>
                                            <p className="text-white text-opacity-60 text-sm">or click to browse</p>
                                            <input
                                                type="file"
                                                name="product_image"
                                                accept="image/*"
                                                onChange={(e) => setData('product_image', e.target.files[0])}
                                                className="text-white mt-4"
                                            />
                                            {errors.product_image && <div className="text-red-500 text-sm">{errors.product_image}</div>}
                                        </div>
                                    </div>

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
                                            <span>Update Product</span>
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

export default ProductEdit;
