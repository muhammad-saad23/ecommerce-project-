import React from 'react';
import { Head, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from 'react-dom';

function CategoryList({ category =[] }) {
//   console.log("Fetched Products:", products);

  const handleDelete=(id)=>{
    if(confirm('Are you sure you want to delete this category?')){
      router.delete(route('category.delete',id));
    }
  }

//   const handleUpdate=(id)=>{
//     router.put(route('product.edit',id));
//   }

  // const handleUpdate=(id)=>{

  // }

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Category List
        </h2>
      }
    >
      <Head title="Category List" />

      <div className="overflow-x-auto p-4">
        <table className="min-w-full bg-dark rounded-2xl shadow-md overflow-hidden">
          <thead className="bg-dark text-white uppercase text-sm leading-normal">
            <tr>
              
              <th className="py-3 px-6 text-left">Name</th>                            
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-left">Image</th>
              {/* <th className="py-3 px-6 text-center">Status</th> */}
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="text-gray-700 text-sm font-light">
            {category.length > 0 ? (
              category.map((i) => (
                <tr
                  key={i.id}
                  className="border-b text-white hover:bg-gray-800 transition"
                >
                  
                  <td className="py-3 px-6">{i.category_name}</td>
                  <td className="py-3 px-6">{i.category_description}</td>
                  <td className="py-3 px-6">
                    <img
                      src={`/images/${i.category_image}`}
                      alt={i.category_name}
                      className="object-cover rounded-md"
                      width={120}
                    />
                  </td>
                  {/* <td className="py-3 px-6 text-center">
                    <span className="bg-green-100 text-green-600 py-1 px-3 rounded-full text-xs">
                      Active
                    </span>
                  </td> */}
                  <td className="py-3 px-6 text-center">
                    <a href="" className='bg-red-700 px-3 py-2 mx-4 text-base rounded-md transition ease-in-out hover:bg-red-600'><button onClick={()=>handleDelete(i.id)}>
                      Delete
                    </button></a>
                   <a href={route('category.edit',i.id)} className='bg-green-700 px-3 py-2 text-base rounded-md transition ease-in-out hover:bg-green-600'><button>
                      Edit
                    </button></a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center text-white py-6">
                  No categories available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AuthenticatedLayout>
  );
}

export default CategoryList;