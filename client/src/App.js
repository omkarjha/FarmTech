import React, { useRef } from 'react';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Marketplace from './components/Marketplace';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // Create refs for the sections
  const aboutUsRef = useRef(null);
  const marketplaceRef = useRef(null);

  return (
    <div>
      <NavBar aboutUsRef={aboutUsRef} marketplaceRef={marketplaceRef} />
      <ToastContainer />
      <HeroSection />
      <AboutUs ref={aboutUsRef} />
      <Marketplace ref={marketplaceRef} />
      <Footer />
    </div>
  );
}

export default App;
