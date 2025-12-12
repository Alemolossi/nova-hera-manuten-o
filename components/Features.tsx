import React from 'react';
import { ShieldCheck, Truck, FileSearch, Wrench } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-brand-primary/50 border border-slate-700/50 p-8 rounded-2xl hover:border-brand-accent/50 hover:bg-brand-primary transition-all group relative overflow-hidden">
    {/* Hover Glow Effect */}
    <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-accent/10 rounded-full blur-2xl group-hover:bg-brand-accent/20 transition-all"></div>
    
    <div className="bg-brand-dark w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-slate-700 group-hover:border-brand-accent/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
      <Icon className="text-brand-accent w-7 h-7" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3 font-display">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section className="py-20 bg-brand-dark relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">Por que escolher a Nova Hera Solar?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Utilizamos tecnologia de ponta para recuperar seu equipamento com a máxima eficiência e transparência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={ShieldCheck}
            title="Garantia de 6 Meses"
            description="Todos os reparos acompanham uma garantia estendida de 180 dias para sua total tranquilidade."
          />
          <FeatureCard 
            icon={Truck}
            title="Coleta e Instalação"
            description="Realizamos a coleta e instalação do seu equipamento com equipe especializada, garantindo total segurança."
          />
          <FeatureCard 
            icon={FileSearch}
            title="Laudo Técnico"
            description="Diagnóstico preciso e transparente, sem custos ocultos. Você só paga se aprovar o reparo."
          />
          <FeatureCard 
            icon={Wrench}
            title="Todas as Marcas"
            description="Laboratório multimarca equipado para atender Growatt, Sungrow, Fronius, Huawei e muitas outras."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;