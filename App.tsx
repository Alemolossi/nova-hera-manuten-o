import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BrandMarquee from './components/BrandMarquee';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 font-sans selection:bg-brand-accent selection:text-brand-dark">
      <Header />
      <main>
        <Hero />
        <Features />
        <BrandMarquee />
        <About />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}