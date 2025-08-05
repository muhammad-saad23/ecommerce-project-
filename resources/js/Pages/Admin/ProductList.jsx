import React from 'react';
import { Head, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Pencil, Trash2, Plus } from 'lucide-react';

function ProductList({ products = [] }) {
  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this product?')) {
      router.delete(route('product.delete', id));
    }
  };

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Product List
        </h2>
      }
    >
      <Head title="Product List" />

      <div className="p-4">
        {/* Add Product Button */}
        <div className="flex justify-end mb-4">
          <a
            href={route('product.store')}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 transition"
          >
            <Plus size={18} className="mr-2" />
            Add Product
          </a>
        </div>

        <div className="overflow-x-auto shadow rounded-lg bg-white dark:bg-gray-900">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm uppercase">
              <tr>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Category</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-left">Quantity</th>
                <th className="py-3 px-6 text-left">Image</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 dark:text-gray-100 text-sm">
              {products.length > 0 ? (
                products.map((i) => (
                  <tr
                    key={i.id}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                  >
                    <td className="py-4 px-6">{i.product_name}</td>
                    <td className="py-4 px-6">{i.category_name}</td>
                    <td className="py-4 px-6">Rs {i.product_price}</td>
                    <td className="py-4 px-6">{i.product_stock}</td>
                    <td className="py-4 px-6">
                      <img
                        src={`/images/${i.product_image}`}
                        alt={i.product_name}
                        className="w-32 h-24 object-cover rounded-md"
                      />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleDelete(i.id)}
                          className="inline-flex items-center px-3 py-1.5 bg-red-600 text-white text-sm rounded hover:bg-red-500 transition"
                        >
                          <Trash2 size={16} className="mr-1" />
                          Delete
                        </button>
                        <a
                          href={route('product.edit', i.id)}
                          className="inline-flex items-center px-3 py-1.5 bg-green-600 text-white text-sm rounded hover:bg-green-500 transition"
                        >
                          <Pencil size={16} className="mr-1" />
                          Edit
                        </a>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-gray-500">
                    No products available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

export default ProductList;
