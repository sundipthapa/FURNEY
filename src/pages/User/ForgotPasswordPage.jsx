
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { forgotPasswordApi } from '../../apis/api';

const ForgotPasswordReset = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    forgotPasswordApi({ email })
      .then((res) => {
        toast.success('Check your email for password reset link');
      })
      .catch((err) => {
        console.log(err);
        toast.error('An error occurred. Please try again later.');
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover"
      style={{ backgroundImage: "url('/images/eee.png')" }}
    >
      <div className="w-full max-w-sm mt-8">
        <div className="bg-white shadow-md rounded px-8 py-6">
          <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              >
                Send password reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordReset;
