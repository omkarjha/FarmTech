import React from 'react';
// import { Link } from 'react-router-dom';
import krishiLogo from '../assets/logo.jpeg'; // Assuming this is the logo on the left
import hackathonLogo from '../assets/SIH2024-logo.png'; // Assuming this is the hackathon logo on the right

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-12 border-t border-gray-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left: Krishi Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <img src={krishiLogo} alt="Krishi Logo" className="h-12" />
          <span className="ml-2 text-2xl font-semibold">Krishi मूल्य</span>
        </div>

        {/* Right: Hackathon Logo */}
        <div className="flex items-center">
          <img src={hackathonLogo} alt="Smart India Hackathon Logo" className="h-12" />
        </div>
      </div>

      {/* Copyright or any other bottom text */}
      <div className="text-center text-sm text-gray-600 mt-4">
        © 2024 Krishi मूल्य. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
