import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import { Head,useForm } from '@inertiajs/react';


function Category({status}) {
    const { data, setData, post, processing, errors,reset } = useForm({
        category_name: '',
        category_description: '',
        category_image: null,             
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        post(route('category.store')); 
        reset();
        alert('Category created successfully!');
      };

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Category
        </h2>
      }
    >
      <Head title="Category" />

      <div className="min-h-screen bg-gradient-to-br relative overflow-hidden">
        <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
          <div className="w-full max-w-4xl">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white mb-2">Create Categories</h1>
            </div>

            {/* Main Form */}
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                
              <div className="bg-dark bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-8">
                  {/* Basic Information */}
                  <div className="gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-white mb-2">Category Name</label>
                      <input
                        type="text"
                        name="category_name"
                        value={data.category_name}
                        onChange={(e)=>setData('category_name',e.target.value)}
                        placeholder="Enter category name"
                        className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 transition-all duration-300"
                      />
                         <InputError message={errors.category_name} className="mt-2"></InputError>

                    </div>
                    
                  </div>

                  {/* Category Selection */}
                  {/* <div className="space-y-4">
                    <label className="block text-sm font-medium text-white mb-4">Category</label>
                    Add your category select input here
                  </div> */}

                  {/* Description */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white mb-2">Description</label>
                    <textarea
                      name="category_description"
                      value={data.category_description}
                      onChange={(e)=>setData('category_description',e.target.value)}
                      rows="4"
                      placeholder="Tell us about your category..."
                      className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 transition-all duration-300 resize-none"
                    />
                    <InputError message={errors.category_description} className="mt-2"></InputError>

                  </div>

                  {/* Image Upload */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white mb-2">Category Image</label>
                    <div className="border-2 border-dashed border-white border-opacity-30 rounded-xl p-8 text-center hover:border-opacity-50 transition-all duration-300">
                      <p className="text-white text-opacity-80 mb-2">Drag and drop your images here</p>
                      <p className="text-white text-opacity-60 text-sm">or click to browse</p>
                      <input
                        type="file"    
                        name='category_image'                    
                        multiple
                        accept="image/*"
                        onChange={(e)=>setData('category_image', e.target.files[0])}
                        className="text-white mt-4"
                      />
                      <InputError message={errors.category_image} className="mt-2"></InputError>
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
                      {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg> */}
                      {processing ? 'creating...' : 'Create Category'}
                      {/* <span>Launch Product</span> */}
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

export default Category;