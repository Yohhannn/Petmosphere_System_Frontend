import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css'; 

export function meta() {
  return [
    { title: "( ✦ ) PETMOSPHERE - LOGIN" },
    { name: "description", content: "Find your perfect pet at PETMOSPHERE!" },
  ];
}

const Login: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/main_assets/images/bg_landing_phone.svg')] sm:bg-[url('/main_assets/images/bg_landing.svg')] animate__animated animate__fadeIn"
    >
      <div className="w-full max-w-sm p-8 bg-white bg-opacity-90 rounded-lg shadow-lg space-y-6 mt-16 animate__animated animate__fadeIn">
        <Link
          to="/"
          className="w-12 h-12 flex items-center justify-center bg-[#8E57B2] text-white rounded-full shadow-md hover:bg-[#F69332] transition duration-300 animate__animated animate__rotateIn"
        >
          {/* Image as the icon */}
          <img
            src="/main_assets/icons/icon_return.svg"  // Replace with the actual path to your SVG or image file
            alt="Back"
            className="w-6 h-6"
          />
        </Link>

        <h1 className="text-3xl font-bold text-[#8E57B2] mb-6 text-center animate__animated animate__wobble">Login</h1>
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm text-[#626262]">Email Address</label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-2 border border-[#8E57B2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F69332] animate__animated animate__slideInRight"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm text-[#626262]">Password</label>
            <input
              id="password"
              type="password"
              required
              className="w-full px-4 py-2 border border-[#8E57B2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F69332] animate__animated animate__slideInRight"
            />
          </div>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="w-full bg-[#8E57B2] text-white py-2 rounded-md hover:bg-[#F69332] transition duration-300 animate__animated animate__zoomIn"
            >
              Login
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-[#626262]">Don't have an account? <Link to="/signup" className="text-[#8E57B2] hover:text-[#F69332]">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
