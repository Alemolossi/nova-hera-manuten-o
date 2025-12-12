import React from 'react';

const brands = [
  "GROWATT", "SUNGROW", "FRONIUS", "HUAWEI", "SOLIS", "DEYE", "GOODWE", "SMA", "ABB", "CANADIAN", "PHB"
];

const BrandMarquee = () => {
  return (
    <div className="py-10 bg-brand-primary/30 border-y border-slate-800 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-brand-dark z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 mb-6 text-center">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Trabalhamos com as principais marcas</p>
      </div>

      <div className="flex overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <span 
              key={index} 
              className="mx-8 text-2xl font-display font-bold text-slate-600 hover:text-brand-accent transition-colors cursor-default select-none"
            >
              {brand}
            </span>
          ))}
        </div>
        <div className="flex absolute top-10 animate-marquee2 whitespace-nowrap">
           {[...brands, ...brands, ...brands].map((brand, index) => (
            <span 
              key={`duplicate-${index}`} 
              className="mx-8 text-2xl font-display font-bold text-slate-600 hover:text-brand-accent transition-colors cursor-default select-none"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
      
      <style>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
};

export default BrandMarquee;