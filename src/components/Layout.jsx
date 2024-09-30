import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  console.log('Current Path:', location.pathname); // Debugging log

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPath={location.pathname} />
      <main className="flex-grow pt-32 sm:pt-40 lg:pt-24 pb-16 container mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
