import { TrendingUp } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-14 left-0 right-0 z-50 px-6 py-4 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Logo aumentado a w-12 h-12 para mejor visibilidad */}
          <img 
            src="/logo-alfa.png" 
            alt="Alfa Bursátil Logo" 
            className="w-12 h-12 object-contain drop-shadow-[0_0_8px_rgba(36,161,222,0.4)]" 
          />
          <h1 className="text-2xl font-bold text-white brand-shadow tracking-tight">
            Alfa Bursátil
          </h1>
        </div>

        <a
          href="https://t.me/AlfaBursatilBot"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 bg-[#24a1de] hover:bg-[#1a8bc9] text-white font-semibold rounded-lg transition-all duration-300 glow-telegram text-sm tracking-wide"
        >
          Iniciar Terminal
        </a>
      </div>
    </nav>
  );
}
