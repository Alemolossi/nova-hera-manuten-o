import React from 'react';
import { Star } from 'lucide-react';

const ReviewCard = ({ name, text, stars = 5 }: { name: string, text: string, stars?: number }) => (
  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 backdrop-blur-sm">
    <div className="flex gap-1 mb-4">
      {[...Array(stars)].map((_, i) => (
        <Star key={i} size={16} className="fill-brand-cta text-brand-cta" />
      ))}
    </div>
    <p className="text-slate-300 mb-6 italic">"{text}"</p>
    <div>
      <p className="font-bold text-white">{name}</p>
      <p className="text-xs text-brand-accent uppercase">Cliente Verificado</p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-brand-primary relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">O que nossos clientes falam</h2>
          <div className="h-1 w-20 bg-brand-cta mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ReviewCard 
            name="Carlos Mendes"
            text="Meu inversor Growatt parou de funcionar e a Nova Hera resolveu em 3 dias. O atendimento pelo WhatsApp foi muito ágil."
          />
          <ReviewCard 
            name="Solar Tech Energia"
            text="Somos integradores e confiamos todos os reparos fora de garantia à Nova Hera. O laudo técnico deles é impecável."
          />
          <ReviewCard 
            name="Roberto A. Silva"
            text="Economizei muito consertando meu equipamento ao invés de comprar um novo. Recomendo pela honestidade e preço justo."
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;