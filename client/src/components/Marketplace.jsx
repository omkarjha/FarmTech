import React, { useState } from 'react';
import { forwardRef } from 'react'
import img1 from '../assets/market/rice.jpg';
import img2 from '../assets/market/wheat.jpg';
import img3 from '../assets/market/caroot.jpg';
import img4 from '../assets/market/tomato.jpg';
import img5 from '../assets/market/potatp.jpg';
import img6 from '../assets/market/onion.jpg';
import img7 from '../assets/market/mango.jpg';
import img8 from '../assets/market/banana.jpg';
import img9 from '../assets/market/Orange.jpg';
import img10 from '../assets/market/grape.jpg';
import img11 from '../assets/market/apple.jpg';
import img12 from '../assets/market/pineapple.jpg';

// Sample product data
const products = [
  { id: 1, name: 'Rice', price: 'Rs.xxx/kg', image: img1, seller: "Farmer's Name" },
  { id: 2, name: 'Wheat', price: 'Rs.xxx/kg', image: img2, seller: "Farmer's Name" },
  { id: 3, name: 'Carrot', price: 'Rs.xxx/kg', image: img3, seller: "Farmer's Name" },
  { id: 4, name: 'Tomato', price: 'Rs.xxx/kg', image: img4, seller: "Farmer's Name" },
  { id: 5, name: 'Potato', price: 'Rs.xxx/kg', image: img5, seller: "Farmer's Name" },
  { id: 6, name: 'Onion', price: 'Rs.xxx/kg', image: img6, seller: "Farmer's Name" },
  { id: 7, name: 'Mango', price: 'Rs.xxx/kg', image: img7, seller: "Farmer's Name" },
  { id: 8, name: 'Banana', price: 'Rs.xxx/kg', image: img8, seller: "Farmer's Name" },
  { id: 9, name: 'Orange', price: 'Rs.xxx/kg', image: img9, seller: "Farmer's Name" },
  { id: 10, name: 'Grapes', price: 'Rs.xxx/kg', image: img10, seller: "Farmer's Name" },
  { id: 11, name: 'Apple', price: 'Rs.xxx/kg', image: img11, seller: "Farmer's Name" },
  { id: 12, name: 'Pineapple', price: 'Rs.xxx/kg', image: img12, seller: "Farmer's Name" },
];

const Marketplace = forwardRef((props, ref) => {
  // Pagination control for displaying 6 items per page
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate total number of pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Get current items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section id='Marketplace' ref={ref} className="bg-gray-200 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Market Place</h2>

        {/* Card List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((product) => (
            <div key={product.id} className="border p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover rounded-lg mb-4 hover:opacity-90 transition-opacity duration-300" 
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p>Seller: {product.seller}</p>
              <p>Price: {product.price}</p>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-8 flex justify-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-4 py-2 rounded-lg ${
                currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Marketplace;
