import { ChevronRight, Code2, Rocket, Laptop, Globe, Sparkles, Share2 } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#020617] text-white font-sans">
      
      {/* BACKGROUND: Luces y atmósfera */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[-5%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[35%] h-[35%] bg-purple-600/15 rounded-full blur-[120px]" />
        {/* Grid de fondo */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
        
        {/* LADO IZQUIERDO: TEXTO Y ACCIONES */}
        <div className="text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200/70">Software de élite para empresas audaces</span>
          </div>

          <div className="relative">
             <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
              Ingeniería que <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-indigo-400">
                eleva tu visión
              </span>
            </h1>
            {/* Línea decorativa curva sutil */}
            <div className="absolute -bottom-4 left-0 w-24 h-1.5 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
          </div>

          <p className="text-gray-400 text-lg max-w-lg leading-relaxed pt-4">
            En <span className="text-white font-medium text-blue-100">CRAXMEDIA</span> no solo escribimos código; construimos los cimientos digitales que escalan tu negocio al siguiente nivel.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#contacto" className="px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all flex items-center gap-2 group shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)]">
              Iniciar tu proyecto
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#portafolio" className="px-7 py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md text-white rounded-xl font-bold transition-all">
              Explorar portafolio
            </a>
          </div>

          {/* STATS (Como en la imagen) */}
          <div className="flex items-center gap-12 pt-10 border-t border-white/5">
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Escalabilidad</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <p className="text-3xl font-bold">+50</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Sistemas Desplegados</p>
            </div>
          </div>
        </div>

        {/* LADO DERECHO: VISUAL COMPOSITION */}
        <div className="relative h-[500px] flex items-center justify-center">
          
          {/* Geometría central (La red de nodos) */}
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />
            
            {/* Forma Hexagonal/Diamante Glassmorphism */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-2xl border border-white/20 rounded-[4rem] rotate-12 flex items-center justify-center">
              <div className="rotate-[-12deg] relative">
                {/* Ícono de Red de Nodos (Representando la ingeniería) */}
                <Share2 size={120} className="text-blue-300 opacity-80" strokeWidth={1} />
                <div className="absolute inset-0 animate-ping opacity-20 bg-blue-400 rounded-full" />
              </div>
            </div>

            {/* TARJETAS ISOMÉTRICAS (Fieles a la imagen) */}
            
            {/* Tarjeta Code2 (Arriba Derecha) */}
            <div className="absolute -top-10 -right-4 p-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-transform duration-500 rotate-[-10deg]">
              <div className="flex items-center gap-3">
                <Code2 className="text-blue-400" size={24} />
                <span className="text-[10px] font-mono text-blue-200 opacity-70">{"<Code2 />"}</span>
              </div>
              <div className="mt-2 h-1 w-12 bg-blue-500/40 rounded shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
            </div>

            {/* Tarjeta Rocket (Abajo Izquierda) */}
            <div className="absolute -bottom-6 -left-8 p-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl rotate-[15deg] animate-bounce-slow">
              <Rocket className="text-purple-400" size={24} />
            </div>

            {/* Tarjeta Laptop (Arriba Izquierda) */}
            <div className="absolute top-10 -left-16 p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl">
              <Globe className="text-blue-300 opacity-60" size={20} />
            </div>

            {/* Tarjeta de Datos (Abajo Derecha) */}
            <div className="absolute bottom-10 -right-20 p-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl rotate-[-5deg]">
              <Laptop size={20} className="text-cyan-400" />
            </div>

          </div>

          {/* Pequeños orbes flotantes decorativos de la imagen */}
          <div className="absolute top-20 right-10 w-4 h-4 bg-blue-400 rounded-full blur-sm opacity-50 animate-pulse" />
          <div className="absolute bottom-40 left-0 w-3 h-3 bg-purple-400 rounded-full blur-sm opacity-40" />
        </div>

      </div>
    </section>
  );
};