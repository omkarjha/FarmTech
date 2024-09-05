import React from 'react';
import logo from '../assets/logo.jpeg';
import Modal from './Modal'; // Import the modal component

const NavBar = ({ aboutUsRef, marketplaceRef }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gray-100 shadow p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Krishi Mulya" className="w-10 h-10 mr-2" />
        <h1 className="text-3xl font-bold font-italiano">Krishi मूल्य</h1>
      </div>
      <nav className="space-x-4">
        <a href="" className="text-gray-700 hover:text-gray-900">Home</a>
        <a
          onClick={() => scrollToSection(aboutUsRef)}
          className="cursor-pointer text-gray-700 hover:text-gray-900"
        >
          About Us
        </a>
        <a
          onClick={() => scrollToSection(marketplaceRef)}
          className="cursor-pointer text-gray-700 hover:text-gray-900"
        >
          Buy/Sell
        </a>
      </nav>

      {/* Button to open modal */}
      <button
        onClick={openModal}
        className="text-black bg-gray-200 px-4 py-2 rounded-lg hover:bg-blue-500"
      >
        Sign In/Up
      </button>

      {/* Modal */}
      {isModalOpen && <Modal closeModal={closeModal} />}
    </header>
  );
};

export default NavBar;
