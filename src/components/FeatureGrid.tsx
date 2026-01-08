import { BarChart3, TrendingUp, Zap, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: BarChart3, command: '/index', title: 'Análisis de Sentimiento', description: 'Métricas de volumen y momentum' },
  { icon: TrendingUp, command: '/rentabilidad', title: 'Sharpe Ratio', description: 'Evaluación de retorno ajustado por riesgo en tiempo real' },
  { icon: Zap, command: '/liquidez', title: 'Métricas de Volumen', description: 'Análisis de liquidez y detección de oportunidades' },
  { icon: Target, command: '/ath', title: 'Arbitraje de Precios', description: 'Identificación de activos cerca de máximos históricos' }
];

export function FeatureGrid() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Monitor de <span className="text-[#24a1de]">Mercado</span>
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Herramientas de análisis financiero mediante comandos simples en Telegram
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glassmorphism rounded-2xl p-6 hover:border-[#24a1de]/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#24a1de]/10 flex items-center justify-center mb-4 group-hover:bg-[#24a1de]/20 transition-colors">
                <feature.icon className="w-6 h-6 text-[#24a1de]" strokeWidth={2} />
              </div>

              <div className="mb-3">
                <span className="text-[#24a1de] text-sm font-bold">{feature.command}</span>
              </div>

              <h4 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h4>

              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
