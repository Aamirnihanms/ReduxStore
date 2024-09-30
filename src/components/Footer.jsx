import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-lavender text-white py-8 mt-8 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">E-Cart</h2>
            <p className="text-white">Your one-stop shop for all your needs.</p>
          </div>
          {/* Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul>
              <li><a href="#" className="text-white hover:text-mint">Home</a></li>
              <li><a href="#" className="text-white hover:text-mint">Shop</a></li>
              <li><a href="#" className="text-white hover:text-mint">About Us</a></li>
              <li><a href="#" className="text-white hover:text-mint">Contact</a></li>
            </ul>
          </div>
          {/* Social Media */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-mint"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white hover:text-mint"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-mint"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white hover:text-mint"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-white">© 2024 E-Cart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
