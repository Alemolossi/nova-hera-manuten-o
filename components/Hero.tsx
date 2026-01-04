import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const whatsappLink = "https://wa.me/5545998585908?text=Ol%C3%A1%2C%20gostaria%20do%20meu%20diagn%C3%B3stico%20gratuito.";

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
          alt="Eletrônica Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/50 to-transparent"></div>
        
        {/* Animated Grid Overlay for futuristic effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
            Tecnologia Avançada
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight font-display">
            Reparo Especializado em <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-500">Inversor Solar</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl border-l-4 border-brand-cta pl-4">
            Diagnóstico Gratuito com <strong>Laudo Técnico em 24h</strong>. 
            Garantia de 180 Dias. Realizamos a coleta e instalação dos equipamentos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-brand-cta hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] flex items-center justify-center gap-3"
            >
              QUERO MEU DIAGNÓSTICO GRATUITO
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#about"
              className="px-8 py-4 rounded-lg font-bold text-lg text-white border border-slate-600 hover:border-brand-accent hover:bg-brand-accent/5 transition-all flex items-center justify-center"
            >
              Conhecer a Empresa
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-medium text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-brand-accent" /> Garantia de 6 Meses
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-brand-accent" /> Coleta e Instalação
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-brand-accent" /> Laudo 100% Gratuito
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;