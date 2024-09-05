import React from 'react';
import farmer from '../assets/farm.png'

const HeroSection = () => {
  return (
    <section id='Home' className="bg-gray-200 py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-start">
        <img src= {farmer} alt="Farmer" className="w-1/4 md:w-1/4"/>
        <div className="text-center md:text-left pl-12">
          <h2 className="text-4xl font-bold">Krishi मूल्य</h2>
          <p className="mt-2 text-xl">Empowering Farmers, Elevating Markets</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
