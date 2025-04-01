import React from 'react';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-[#626262]" style={{ fontFamily: 'Public Sans, sans-serif' }}>
      <h1 className="text-3xl font-bold text-[#8E57B2] mb-6">Sign Up for PETMOSPHERE</h1>

      <form className="w-full max-w-sm bg-[#F4F2F2] p-8 rounded-lg shadow-lg space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm text-[#626262]">Full Name</label>
          <input
            id="name"
            type="text"
            required
            className="w-full px-4 py-2 border border-[#8E57B2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F69332]"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm text-[#626262]">Email Address</label>
          <input
            id="email"
            type="email"
            required
            className="w-full px-4 py-2 border border-[#8E57B2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F69332]"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm text-[#626262]">Password</label>
          <input
            id="password"
            type="password"
            required
            className="w-full px-4 py-2 border border-[#8E57B2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F69332]"
          />
        </div>

        <div className="flex justify-center mt-4">
          <button type="submit" className="w-full bg-[#8E57B2] text-white py-2 rounded-md hover:bg-[#F69332] transition duration-300">
            Sign Up
          </button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-[#626262]">Already have an account? <Link to="/login" className="text-[#8E57B2] hover:text-[#F69332]">Login</Link></p>
        <p className="text-sm text-[#626262]">Back to <Link to="/" className="text-[#8E57B2] hover:text-[#F69332]">Landing Page</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
