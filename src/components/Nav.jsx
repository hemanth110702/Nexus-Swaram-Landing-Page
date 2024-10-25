import React from 'react';
import logo from "../assets/logo.png"

const Nav = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="Nexus Swarm Logo" className="w-12 h-auto mr-4" />
        <span className="text-xl font-bold">Nexus Swarm</span>
      </div>

      <ul className="flex space-x-6 text-gray-700">
        <li className="hover:text-gray-900 cursor-pointer">Home</li>
        <li className="hover:text-gray-900 cursor-pointer">About Us</li>
        <li className="hover:text-gray-900 cursor-pointer">Founders</li>
        <li className="hover:text-gray-900 cursor-pointer">Contact</li>
      </ul>
    </div>
  );
}

export default Nav