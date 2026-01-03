export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 p-6 glassmorphism rounded-xl border border-yellow-400/20 bg-yellow-400/5">
          <h4 className="text-slate-200 font-bold text-sm mb-3 uppercase tracking-wide">Aviso Legal</h4>
          <p className="text-slate-400 text-xs leading-relaxed">
            Al usar este bot aceptas que la información aquí es estrictamente informativa y no constituye asesoramiento financiero.
            Las inversiones en mercados bursátiles conllevan riesgos significativos. El rendimiento pasado no garantiza resultados futuros.
            Realiza tus propias investigaciones y consulta con un asesor financiero certificado antes de tomar decisiones de inversión.
            Usa esta plataforma responsablemente.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-slate-500 text-xs">
            © 2026 Alfa Bursátil. Todos los derechos reservados.
          </div>

          <a
            href="https://wa.me/message/FON2A6ZNZI2OK1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#24a1de] hover:text-[#2dd4bf] transition-colors text-xs font-medium"
          >
            Contacto WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
