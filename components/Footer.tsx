import React from 'react';
import { Phone, Mail, MapPin, Smartphone, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Bores+de+Medeiros,+649,+Jardim+Gisela,+Toledo,+Parana";
  
  return (
    <footer className="bg-black text-slate-400 pt-16 border-t border-slate-800">
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">NOVA HERA SOLAR</h3>
            <p className="mb-6 text-sm">
              Especialistas em eletrônica de potência e energia solar. Trazendo vida nova ao seu equipamento fotovoltaico com tecnologia e precisão.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-cta transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-brand-cta transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#hero" className="hover:text-brand-accent transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-brand-accent transition-colors">Sobre Nós</a></li>
              <li><a href="#services" className="hover:text-brand-accent transition-colors">Serviços</a></li>
              <li><a href="#contact" className="hover:text-brand-accent transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact - Specific Data from prompt */}
          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-cta" />
                <span>(45) 3020-1034</span>
              </li>
              <li className="flex items-center gap-3">
                <Smartphone size={16} className="text-brand-cta" />
                <span>(45) 99858-5908</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-cta mt-1" />
                <span>
                  Rua Bores de Medeiros, 649<br />
                  Jardim Gisela, Toledo - PR
                </span>
              </li>
            </ul>
          </div>

          {/* Maps CTA */}
          <div>
            <h4 className="text-white font-bold mb-6">Localização</h4>
            <div className="rounded-lg overflow-hidden border border-slate-700 bg-slate-800 p-1">
               {/* Static map placeholder since we don't have an API key, button functionality is key */}
               <div className="h-24 bg-slate-700 w-full flex items-center justify-center mb-2">
                 <MapPin className="text-slate-500" />
               </div>
               <a 
                 href={mapUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="block w-full bg-slate-700 hover:bg-brand-accent hover:text-brand-dark text-white text-center py-2 text-sm font-bold transition-colors rounded"
               >
                 Abrir no Google Maps
               </a>
            </div>
          </div>

        </div>
      </div>
      
      <div className="border-t border-slate-800 bg-black py-6">
        <div className="container mx-auto px-4 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} Nova Hera Solar Manutenção. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;