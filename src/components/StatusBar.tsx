export function StatusBar() {
  return (
    <div className="w-full px-6 py-3 bg-black/50 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-center space-x-2">
        <span className="text-slate-400 text-xs font-medium">
          Estatus del Sistema: <span className="text-emerald-400 font-bold">Activo</span>
        </span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="text-slate-500 text-xs">| Versión: 0.0.1</span>
      </div>
    </div>
  );
}
