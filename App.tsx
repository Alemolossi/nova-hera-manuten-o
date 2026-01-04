import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BrandMarquee from './components/BrandMarquee';
import CompanyPage from './components/CompanyPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 font-sans selection:bg-brand-accent selection:text-brand-dark">
      <Header onNavigate={handleNavigate} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onNavigate={handleNavigate} />
            <Features />
            <BrandMarquee />
            <About />
            <Testimonials />
          </>
        ) : (
          <CompanyPage onNavigate={handleNavigate} />
        )}
      </main>
      <Footer onNavigate={handleNavigate} />
      <WhatsAppButton />
    </div>
  );
}