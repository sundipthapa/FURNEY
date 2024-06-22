import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you use react-router for navigation
import {toast} from 'react-toastify';
import { registerApi } from '../../apis/api'; // Import your register API function
import Navbar from '../Common/Navbar';

const SignUp = () => {
    const [name, setName] = useState('');
    const [phoneno, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            console.error('Passwords do not match');
            toast.error('Passwords do not match'); // Display error message
            return;
        }

        const formData = {
            name: name,
            phoneno: phoneno,
            email: email,
            username: username,
            address: address,
            password: password
        };

        try {
            const response = await registerApi(formData);
            const { data } = response;
            console.log(data);

            if (data.success) {
                toast.success('Registration successful!'); // Display success message
                // Redirect to login page or another page upon successful registration
                navigate('/login');
            } else {
                toast.error(data.message || 'Failed to register. Please try again.');
            }
        } catch (error) {
            console.error('Error signing up:', error);
            toast.error('Failed to register. Please try again.');
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-start min-h-screen mt-14 w-full">
                <div className="mb-1 text-center">
                    <div className="flex justify-center">
                        <img
                            alt=""
                            className="h-24 w-24"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWzDmPysE-K5ZrJD5y6swPf3YAmdol-WSTnw&s"
                        />
                    </div>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign up for an account</h2>
                </div>
                <form className="mt-8 space-y-6 w-1/3" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4 my-5">
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-amber-700 focus:border-amber-700 focus:z-10 sm:text-sm"
                            placeholder="Name"
                        />
                        <input
                            type="text"
                            required
                            value={phoneno}
                            onChange={(e) => setPhone(e.target.value)}
                            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-amber-700 focus:border-amber-700 focus:z-10 sm:text-sm"
                            placeholder="Phone"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 my-5">
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-amber-700 focus:border-amber-700 focus:z-10 sm:text-sm"
                            placeholder="Email address"
                        />
                        <input
                            type="text"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-amber-700 focus:border-amber-700 focus:z-10 sm:text-sm"
                            placeholder="Username"
                        />
                    </div>
                    <div className="my-5">
                        <input
                            type="text"
                            required
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-amber-700 focus:border-amber-700 focus:z-10 sm:text-sm"
                            placeholder="Address"
                        />
                    </div>
                    <div className="my-5">
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 focus:outline-none focus:
outline-none focus:ring-amber-700 focus:border-amber-700 focus:z-10 sm:text-sm"
                            placeholder="Password"
                        />
                    </div>
                    <div className="my-5">
                        <input
                            type="password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-amber-700 focus:border-amber-700 focus:z-10 sm:text-sm"
                            placeholder="Confirm Password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="group relative w-full h-22 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-900 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-700 mt-10"
                    >
                        Sign Up
                    </button>

                    <p className="mt-2 text-xl text-gray-900 text-center">
                        Already have an account? {' '}
                        <a href="/login" className="font-medium text-amber-900 hover:text-amber-700">
                            Sign in
                        </a>
                    </p>
                </form>
            </div>
        </>
    );
};

export default SignUp;
