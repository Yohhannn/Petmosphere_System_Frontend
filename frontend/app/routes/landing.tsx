import React from "react";
import Out_Footer from "./components/out_footer";
import Out_Header from "./components/out_header";
import { Link } from "react-router-dom";

export function meta() {
  return [
    { title: "( ✦ ) PETMOSPHERE" },
    { name: "description", content: "Find your perfect pet at PETMOSPHERE!" },
  ];
}

const Landing: React.FC = () => {
  return (
    <>
      <Out_Header />
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-white text-[#626262] px-4 md:px-10"
        style={{ fontFamily: 'Public Sans, sans-serif' }}
      >
        {/* Hero Section with Text on Left and Image on Right */}
        <div className="hero min-h-screen w-full flex flex-row items-center">
          {/* Left Text Section */}
          <div className="text-container w-full md:w-1/2 flex flex-col items-start justify-center p-6 space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold text-[#626262]">
              Where Every Pet <br />
              Finds a <br />
              Loving Home
            </h1>
            <p className="text-lg md:text-xl font-Quicksand text-[#626262]">
              Your journey to finding your perfect pet starts here. Browse, adopt, and make a difference today!
            </p>
            <div className="mt-8">
              <Link
                to="/login"
                className="btn btn-primary px-8 py-3 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105 bg-[#F69332] text-[#F4F2F2]"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Right Image Section with Gradient Fade */}
          <div className="image-container w-full md:w-1/2 bg-cover bg-center h-full" style={{ backgroundImage: "url('main_assets/images/image_landing.png')" }}>
            <div className="gradient-overlay w-full h-full bg-gradient-to-l from-white via-white to-transparent"></div>
          </div>
        </div>
      </div>

      <Out_Footer />
    </>
  );
};

export default Landing;
