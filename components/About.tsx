import React from 'react';
import { MapPin, Map } from 'lucide-react';

const About = () => {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Bores+de+Medeiros,+649,+Jardim+Gisela,+Toledo,+Parana";

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-brand-dark circuit-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className="text-brand-accent font-bold uppercase tracking-wider mb-2">Sobre a Nova Hera Solar</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display leading-tight">
              Excelência Técnica em <br />Eletrônica de Potência
            </h3>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              A <strong>Nova Hera Solar Manutenção</strong> destaca-se no mercado pela alta capacidade técnica em reparos de placas eletrônicas de inversores fotovoltaicos.
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Nosso laboratório em Toledo/PR conta com instrumentação de última geração para simular as condições reais de operação do seu equipamento, garantindo um reparo duradouro e eficiente. Não somos apenas trocadores de peças; somos engenheiros de soluções.
            </p>

            <div className="bg-brand-primary p-6 rounded-xl border border-brand-accent/20 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-cta/20 p-3 rounded-lg text-brand-cta mt-1">
                  <MapPin />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Nossa Unidade</h4>
                  <p className="text-slate-400 mb-4">
                    Rua Bores de Medeiros, 649<br />
                    Jardim Gisela, Toledo - Paraná
                  </p>
                  <a 
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-accent hover:text-cyan-300 font-semibold border-b border-brand-accent/50 hover:border-cyan-300 transition-all pb-0.5"
                  >
                    Ver no Google Maps <Map size={16} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex gap-8 text-center">
              <div>
                <span className="block text-4xl font-bold text-white font-display">+1000</span>
                <span className="text-sm text-slate-500 uppercase tracking-wider">Inversores Reparados</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-white font-display">100%</span>
                <span className="text-sm text-slate-500 uppercase tracking-wider">Satisfação</span>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="lg:w-1/2 relative">
             <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4 translate-y-8">
                  <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" className="rounded-2xl border-2 border-slate-700 hover:border-brand-accent/50 transition-colors shadow-2xl" alt="Técnico trabalhando" />
                  <div className="bg-brand-primary p-4 rounded-2xl border border-slate-700 text-center">
                    <p className="font-display font-bold text-brand-accent text-xl">Diagnóstico</p>
                    <p className="text-slate-400 text-sm">Avançado</p>
                  </div>
               </div>
               <div className="space-y-4">
                  <div className="bg-brand-cta p-4 rounded-2xl text-center shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                    <p className="font-display font-bold text-white text-xl">Rápido</p>
                    <p className="text-white/80 text-sm">Atendimento</p>
                  </div>
                  <img src="https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=800&auto=format&fit=crop" className="rounded-2xl border-2 border-slate-700 hover:border-brand-accent/50 transition-colors shadow-2xl" alt="Placa eletrônica" />
               </div>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-accent/5 blur-3xl rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;