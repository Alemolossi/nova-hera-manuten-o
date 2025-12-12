import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/5545998585908?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20meu%20inversor.";

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-dark/90 backdrop-blur-md border-b border-brand-accent/20 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="bg-brand-accent/10 p-2 rounded-full border border-brand-accent/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all">
            <Zap className="text-brand-accent h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-wider text-white leading-none">NOVA HERA SOLAR</span>
            <span className="text-xs text-brand-accent uppercase tracking-[0.2em] font-bold">Manutenção</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#hero" className="text-sm font-medium hover:text-brand-accent transition-colors">Início</a>
          <a href="#about" className="text-sm font-medium hover:text-brand-accent transition-colors">Sobre</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-brand-accent transition-colors">Clientes</a>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-cta hover:bg-orange-600 text-white px-6 py-2.5 rounded-md font-bold text-sm transition-all transform hover:-translate-y-0.5 hover:shadow-lg flex items-center gap-2"
          >
            Solicitar Orçamento
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-brand-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark border-b border-brand-accent/20 p-4 flex flex-col gap-4 shadow-2xl">
          <a href="#hero" className="text-center py-2 hover:text-brand-accent" onClick={() => setIsMobileMenuOpen(false)}>Início</a>
          <a href="#about" className="text-center py-2 hover:text-brand-accent" onClick={() => setIsMobileMenuOpen(false)}>Sobre</a>
          <a href="#testimonials" className="text-center py-2 hover:text-brand-accent" onClick={() => setIsMobileMenuOpen(false)}>Clientes</a>
          <a 
            href={whatsappLink}
            className="bg-brand-cta text-white py-3 rounded text-center font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Solicitar Orçamento
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;