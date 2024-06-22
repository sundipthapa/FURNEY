import React, { useState } from 'react';
import {  Navigate, useNavigate } from 'react-router-dom'; // Assuming you use react-router for navigation
import Navbar from '../Common/Navbar';
import { loginApi } from '../../apis/api'; // Import your login API function
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = {
            email: email,
            password: password
        };

        try {
            const response = await loginApi(formData);
            const { data } = response;
            console.log(data.success); 
            
            if (data.success) {
                toast.success(data.success.message); 
                // Display success message
                localStorage.setItem("token", response.data.token);
                const convertedJson = JSON.stringify(response.data.userData);
                localStorage.setItem("user", convertedJson);

                console.log(data.userData.isAdmin)

                if(data.userData.isAdmin){
                    history('/admin/dashboard')
                }else{
                    history('/');
                }
                // Redirect to home or another page upon successful login
              
            } else {
                toast.error(data.message || 'Failed to login. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            toast.error('Failed to login. Please check your credentials.');
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
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Login to your account</h2>

                </div>
                <form className="mt-8 space-y-6 w-1/3" onSubmit={handleSubmit}>
                    <div className="my-5">
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-amber-700 focus:border-amber-700 focus:z-10 sm:text-sm"
                            placeholder="Email address"
                        />
                    </div>
                    <div className="my-5">
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-amber-700 focus:border-amber-700 focus:z-10 sm:text-sm"
                            placeholder="Password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-amber-900 focus:ring-amber-700 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>
                        <div className="text-sm">
                            <a href="/forgot" className="font-medium text-amber-900 hover:text-amber-700">
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="group relative w-full h-22 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-900 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-700 mt-10"
                    >
                        Login
                    </button>

                    <p className="mt-2 text-xl text-gray-900 text-center">
                        Don't have an account yet? {' '}
                        <a href="/signup" className="font-medium text-amber-900 hover:text-amber-700">
                            Signup
                        </a>
                    </p>
                </form>
            </div>
        </>
    );
};

export default Login;
