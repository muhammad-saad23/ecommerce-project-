import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { useForm, usePage,Link } from '@inertiajs/react';
import InputError from '@/Components/InputError';

const LoginForm = ({ user }) => {
  const { data, setData, errors, post, processing } = useForm({
    email: '',
    password: '',
  });

  const { flash = {} } = usePage().props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit login logic here
    post(route('login.store'));
    console.log(data);
    console.log(flash)
  };

  return (

    <div className=" max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg shadow-gray-700 my-32 space-y-6">
      {/* Logo */}
      <div className="flex justify-center items-center">
        <div className="icon bg-sky-600 text-white p-[7px] mr-2 rounded-md">
          <ShoppingBag className="h-6 w-6" />
        </div>
        <div className="text-3xl font-bold text-blue-500">Brand</div>
      </div>

      <h2 className="text-2xl font-bold text-center">Login an Account</h2>
      <Link href={route('register.user')}><p className="text-blue-700 text-center">Don't have an account? Register</p></Link>
      {/* alert */}
      {(flash.message || flash.error) && (
        <div
          className={`flex items-center text-white text-sm font-bold px-4 py-3 rounded ${flash.message ? 'bg-blue-500' : 'bg-red-500'
            }`}
          role="alert"
        >
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957...Z" />
          </svg>
          <p>{flash.message || flash.error}</p>
        </div>
      )}




      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="mt-1 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <InputError message={errors.email} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="mt-1 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <InputError message={errors.password} />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          {processing ? 'Loging...' : 'Login'}
        </button>
      </form>

      <hr />

      <div className="flex items-center justify-center space-x-4">
        <button
          type="button"
          className="flex items-center justify-center gap-2 w-full border rounded-lg py-2 hover:bg-gray-100 transition"
        >
          <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="h-5 w-5" />
          <span>Login with Google</span>
        </button>

        <button
          type="button"
          className="flex items-center justify-center gap-2 w-full border rounded-lg py-2 hover:bg-blue-700 transition bg-blue-600 text-white"
        >
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.876v-6.987H7.898v-2.889h2.54V9.797c0-2.507 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.889h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
          </svg>
          <span>Facebook</span>
        </button>
      </div>
    </div>

  );
};

export default LoginForm;
