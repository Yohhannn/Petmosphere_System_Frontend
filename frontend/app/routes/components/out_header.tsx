import React from 'react';
import { Link } from 'react-router-dom';

const Out_Header = () => {
  return (
    <header className="bg-[#8E57B2] text-[#F4F2F2] py-4">
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <h1 className="py-2 px-4 text-2xl font-bold cursor-pointer hover:text-[#F69332]">
              <img src="/main_assets/logo/logo_light.png" alt="PETMOSPHERE Logo" width={180} height={120} />
            </h1>
          </Link>
          {/* Navigation Menu */}
          <ul className="flex items-center space-x-6">

            {/* Team */}
            <li className="flex flex-col items-center text-sm hover:text-[#F69332] transition">
              <Link to="/aboutUs" className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full mb-1">
                  <img src="/main_assets/icons/icon_group.png" alt="about us" />
                </div>
                Team
              </Link>
            </li>

            {/* About */}
            <li className="flex flex-col items-center text-sm hover:text-[#F69332] transition">
              <Link to="/cuisine" className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full mb-1">
                  <img src="/main_assets/icons/icon_about.png" alt="cuisine" />
                </div>
                About
              </Link>
            </li>

            {/* Contact */}
            <li className="flex flex-col items-center text-sm hover:text-[#F69332] transition">
              <Link to="/contacts" className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full mb-1">
                  <img src="/main_assets/icons/icon_contact.png" alt="contact" />
                </div>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Out_Header;
