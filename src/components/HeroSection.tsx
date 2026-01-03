import { ArrowUpRight, Zap } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-8 bg-emerald-400/10 px-4 py-2 rounded-full border border-emerald-400/30 animate-pulse">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-xs font-bold tracking-wide">+499.3% Retorno en USD (Anual)</span>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
            Información en Tiempo Real del <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#24a1de] via-[#2dd4bf] to-[#10b981]">Mercado de Valores</span> de Venezuela
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            Métricas precisas y análisis estratégico directamente en Telegram.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="https://t.me/AlfaBursatilBot"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-[#24a1de] hover:bg-[#1a8bc9] text-white font-bold rounded-lg transition-all duration-300 glow-telegram text-center"
          >
            Iniciar Terminal @AlfaBursatilBot
          </a>
          <a
            href="https://wa.me/message/FON2A6ZNZI2OK1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 glassmorphism text-white font-bold rounded-lg transition-all duration-300 hover:border-[#24a1de]/50 text-center"
          >
            Agendar Consultoría
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="glassmorphism rounded-2xl p-8 hover:border-[#24a1de]/50 transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-2">Retorno Anual</p>
                <h3 className="text-5xl font-black text-white">+499.3%</h3>
              </div>
              <ArrowUpRight className="w-6 h-6 text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <p className="text-slate-400 text-sm">En USD</p>
          </div>

          <div className="glassmorphism rounded-2xl p-8 hover:border-[#24a1de]/50 transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-2">Sobre el Índice BVC</p>
                <h3 className="text-5xl font-black text-white">+226%</h3>
              </div>
              <ArrowUpRight className="w-6 h-6 text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <p className="text-slate-400 text-sm">Bolsa de Valores de Caracas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
