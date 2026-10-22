import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from '../common/ScrollToTop';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-graphite-950 text-graphite-100 selection:bg-emerald-500/20 selection:text-emerald-300">
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="flex-1 focus:outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
