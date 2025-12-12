import React from 'react';
import { Wrench, Settings, Activity, Cpu, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface CompanyPageProps {
  onNavigate: (page: string) => void;
}

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-brand-primary/40 border border-slate-700 p-6 rounded-xl hover:border-brand-accent hover:bg-brand-primary/60 transition-all group">
    <div className="bg-brand-dark w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all border border-slate-800">
      <Icon className="text-brand-accent w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-white mb-2 font-display">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
  </div>
);

const CompanyPage = ({ onNavigate }: CompanyPageProps) => {
  return (
    <div className="pt-24 pb-20 animate-fade-in">
      {/* Header Section of Page */}
      <section className="relative py-16 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-brand-accent hover:text-white mb-8 transition-colors font-medium"
          >
            <ArrowLeft size={20} /> Voltar para Início
          </button>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
            Nova Hera Solar <span className="text-brand-cta">Manutenção</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed border-l-4 border-brand-accent pl-6">
            Especialistas em dar uma nova vida ao seu equipamento fotovoltaico. Somos referência em reparo de inversores solares com laboratório próprio e tecnologia de ponta.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-brand-dark">
        <div className="container mx-auto px-4">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 font-display">Nossa Expertise</h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                A Nova Hera Solar nasceu da necessidade do mercado fotovoltaico em ter um parceiro confiável para manutenção corretiva e preventiva. 
                Entendemos que cada dia com o inversor parado representa prejuízo na geração de energia.
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Nosso laboratório é equipado com osciloscópios de precisão, fontes programáveis e cargas eletrônicas capazes de simular o comportamento real dos painéis solares e da rede elétrica, garantindo que o reparo seja definitivo.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="text-brand-cta w-5 h-5" /> Atendimento Multimarcas
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="text-brand-cta w-5 h-5" /> Peças Originais ou de 1ª Linha
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="text-brand-cta w-5 h-5" /> Equipe de Engenharia Especializada
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-accent to-brand-cta opacity-20 blur-xl rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop" 
                alt="Laboratório de Eletrônica" 
                className="relative rounded-2xl border border-slate-700 shadow-2xl"
              />
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-10 font-display text-center">Nossos Serviços</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard 
                icon={Wrench}
                title="Conserto de Inversores"
                description="Diagnóstico e reparo de falhas em inversores String e Centrais. Substituição de IGBTs, capacitores e reparo de placas de controle."
              />
              <ServiceCard 
                icon={Settings}
                title="Manutenção Preventiva"
                description="Limpeza interna, reaperto de conexões, atualização de firmware e testes de ventilação para evitar paradas inesperadas."
              />
              <ServiceCard 
                icon={Cpu}
                title="Reparo de Placas"
                description="Recuperação de placas eletrônicas danificadas a nível de componente, evitando a troca custosa de placas inteiras."
              />
              <ServiceCard 
                icon={Activity}
                title="Testes de Carga"
                description="Bancada de testes que simula a operação real do inversor em potência, validando o reparo antes da entrega."
              />
            </div>
          </div>

          <div className="bg-brand-primary rounded-2xl p-8 md:p-12 border border-brand-accent/20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-display">Seu Inversor Precisa de Reparo?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              Não deixe sua usina parada. Entre em contato agora mesmo e solicite seu laudo técnico gratuito em até 24 horas.
            </p>
            <a 
              href="https://wa.me/5545998585908?text=Ol%C3%A1%2C%20estou%20na%20p%C3%A1gina%20Sobre%20a%20Empresa%20e%20gostaria%20de%20atendimento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-cta hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/20"
            >
              Falar com Técnico Especialista
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CompanyPage;