import { ShoppingBag } from 'lucide-react';
import React from 'react';
import InputError from '@/Components/InputError';
import { useForm,Link } from '@inertiajs/react';

const RegisterForm = () => {
    const { data, setData, post, errors, processing } = useForm({
        name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
        agree: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setData(name, type === 'checkbox' ? checked : value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();        
        
        post(route('register.store'));
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg shadow-gray-700 my-10 space-y-6">
    
            <div className="flex justify-center items-center">
                <div className="icon bg-sky-600 text-white p-[7px] mr-2 rounded-md">
                    <ShoppingBag className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-blue-500">Brand</div>
            </div>

            <h2 className="text-2xl font-bold text-center">Create an Account</h2>
            <Link href={route('login.user')}>
                <p className="text-blue-700 text-center">Already Have Account?</p>
            </Link>

            <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="mt-1 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <InputError message={errors.name} />
                </div>

                {/* Email */}
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

                {/* Phone */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={data.phone}
                        onChange={handleChange}
                        placeholder="+9234567890"
                        className="mt-1 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <InputError message={errors.phone} />
                </div>

                {/* Password */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        className="mt-1 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <InputError message={errors.password} />
                </div>

                {/* Confirm Password */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        onChange={handleChange}
                        className="mt-1 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <InputError message={errors.password_confirmation} />
                </div>

                {/* Terms & Conditions */}
                <div className="flex items-center">
                    <input
                        id="terms"
                        type="checkbox"
                        name="agree"
                        checked={data.agree}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                        I agree to the{' '}
                        <a href="#" className="text-blue-600 hover:underline">
                            Terms and Conditions
                        </a>
                    </label>
                    <InputError message={errors.agree} />
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                >
                    {processing ? 'Registering...' : 'Register'}
                </button>
            </form>

            <hr />

            {/* Social Buttons */}
            <div className="flex items-center justify-center space-x-4">
                <button
                    type="button"
                    className="flex items-center justify-center gap-2 w-full border rounded-lg py-2 hover:bg-gray-100 transition"
                >
                    <img
                        src="https://www.svgrepo.com/show/355037/google.svg"
                        alt="Google"
                        className="h-5 w-5"
                    />
                    <span>Sign up with Google</span>
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

export default RegisterForm;
