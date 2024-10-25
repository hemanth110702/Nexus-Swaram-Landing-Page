import React from "react";
import MainLogo from "../assets/pixelcut-logo.png";

const Hero = () => {
  return (
    <div className="flex items-center justify-between h-screen bg-gray-100 p-8">
      <div className="w-1/2 pr-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Uniting Talents, Fueling Ideas
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          At NEXUS, we believe in the power of connection. A central point where
          students from all walks of life come together to empower, explore, and
          unite.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300">
          Learn More
        </button>
      </div>
      <div className="w-1/2 flex justify-center">
        <img src={MainLogo} alt="Nexus Swarm" className="w-64 h-auto" />
      </div>
    </div>
  );
};

export default Hero;
