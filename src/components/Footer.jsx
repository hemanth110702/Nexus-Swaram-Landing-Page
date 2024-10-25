import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa"; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h4 className="text-lg font-bold">Connect with Us</h4>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://facebook.com/nexus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-white hover:text-blue-600" />
              </a>
              <a
                href="https://twitter.com/nexus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-white hover:text-blue-400" />
              </a>
              <a
                href="https://linkedin.com/company/nexus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-white hover:text-blue-700" />
              </a>
              <a
                href="https://instagram.com/nexus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-white hover:text-pink-600" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold">Contact Us</h4>
            <form className="flex flex-col mt-2">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded-md mb-2 text-gray-800"
                required
              />
              <textarea
                rows="3"
                placeholder="Your Message"
                className="px-4 py-2 rounded-md mb-2 text-gray-800"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Nexus Swarm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
