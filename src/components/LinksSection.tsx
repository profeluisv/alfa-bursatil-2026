import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const links = [
  {
    title: 'Bolsa de Valores de Caracas',
    url: 'https://www.bolsadecaracas.com'
  },
  {
    title: 'Caja Venezolana de Valores',
    url: 'https://www.cajavenezolana.com/cvvweb/'
  },
  {
    title: 'Superintendencia Nacional de Valores',
    url: 'https://www.sunaval.gob.ve'
  },
  {
    title: 'Banco Central de Venezuela',
    url: 'https://www.bcv.org.ve'
  }
];

export function LinksSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Sitios de <span className="text-[#24a1de]">Interés</span>
          </h3>
          <p className="text-slate-400">Recursos oficiales del mercado financiero venezolano</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glassmorphism rounded-xl p-4 hover:border-[#24a1de]/50 transition-all duration-300 group flex items-center justify-between"
            >
              <span className="text-slate-200 font-medium text-sm md:text-base">{link.title}</span>
              <ExternalLink className="w-5 h-5 text-[#24a1de] group-hover:translate-x-1 transition-transform" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
