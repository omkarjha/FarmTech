import React from 'react';
import { forwardRef } from 'react';

const AboutUs =  forwardRef((props, ref)  => {
  return (
    <section id='About' ref={ref} className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-4">About Us</h3>
        <p className="text-lg">
          At Krishi मूल्य, we are committed to connecting farmers directly with consumers,
          ensuring access to the freshest, high-quality produce at fair prices. Our mission is to empower
          local farmers by giving them a platform to sell their goods directly to you, bypassing traditional
          middlemen and reducing food miles.
        </p>
        <div className="mt-8 text-left space-y-2">
          <h4 className="font-bold">At Krishi मूल्य, we pride ourselves on:</h4>
          <ul className="list-disc pl-8">
            <li>Quality: Only the finest produce makes its way from farm to your table.</li>
            <li>Sustainability: We are passionate about reducing waste and encouraging eco-friendly farming.</li>
            <li>Community: By shopping with us, you are directly supporting local farmers and their families.</li>
          </ul>
        </div>
      </div>
    </section>
  );
});

export default AboutUs;
