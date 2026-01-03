import { Check } from 'lucide-react';

export function PremiumSection() {
  const benefits = [
    'Sesión de implementación de 1 hora',
    'Entrega de asignación de activos óptima',
    'Rebalanceo trimestral incluido',
    'Acceso exclusivo a Alfa Bursátil Pro: Canal de alertas tempranas'
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="glassmorphism rounded-3xl p-10 md:p-16">
          <div className="text-center mb-10">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Consultoría Premium
            </h3>
            <p className="text-slate-400 text-lg mb-8">
              Portafolio Óptimo Alfa
            </p>

            <div className="inline-flex items-baseline space-x-1 mb-8">
              <span className="text-5xl font-black text-[#24a1de]">$100</span>
              <span className="text-slate-400">USD</span>
            </div>
          </div>

          <div className="space-y-4 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-200 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/message/FON2A6ZNZI2OK1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block py-4 bg-[#24a1de] hover:bg-[#1a8bc9] text-white font-bold rounded-lg transition-all duration-300 glow-telegram text-center"
          >
            Solicitar Consultoría Ahora
          </a>
        </div>
      </div>
    </section>
  );
}
