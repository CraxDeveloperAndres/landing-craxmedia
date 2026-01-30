import { Award, Users, Target, Zap, ShieldCheck } from 'lucide-react';

export const About = () => {
  return (
    <section id="sobrenosotros" className="relative py-24 bg-[#020617] overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LADO IZQUIERDO: CONTENIDO */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
              <Target size={14} />
              <span>Nuestra Identidad</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">
              MÁS QUE CÓDIGO,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                PASIÓN POR LA PRECISIÓN
              </span>
            </h2>

            <div className="space-y-6">
              <p className="text-gray-400 text-lg leading-relaxed">
                En <span className="text-white font-bold">CRAXMEDIA</span>, fusionamos la disciplina de la ingeniería con la creatividad disruptiva. No somos una agencia tradicional; somos tu brazo tecnológico de élite.
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                Con más de 5 años desafiando los límites de lo posible, hemos perfeccionado un flujo de trabajo que garantiza que cada pixel y cada línea de código tengan un propósito comercial claro: **hacerte crecer**.
              </p>
            </div>

            {/* Grid de Valores/Diferenciadores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-4 group hover:bg-blue-600/10 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Calidad Premium</h4>
                  <p className="text-gray-500 text-xs text-balance">Estándares internacionales de desarrollo.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-4 group hover:bg-indigo-600/10 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Equipo Experto</h4>
                  <p className="text-gray-500 text-xs text-balance">Mentes brillantes enfocadas en resultados.</p>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DERECHO: VISUAL DINÁMICO */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[450px] aspect-square">
              
              {/* Tarjeta de cristal principal */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent rounded-[3rem] rotate-3 blur-2xl" />
              
              <div className="relative z-20 w-full h-full bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[3rem] p-12 flex flex-col items-center justify-center overflow-hidden group shadow-2xl">
                {/* Ícono central animado */}
                <div className="relative z-10 w-32 h-32 bg-blue-600 rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.4)] transform group-hover:rotate-12 transition-transform duration-700">
                  <Zap size={60} className="text-white" fill="white" />
                </div>
                
                <div className="mt-10 text-center space-y-2">
                  <span className="block text-4xl font-black text-white">5+ AÑOS</span>
                  <span className="text-blue-400 font-bold tracking-widest uppercase text-xs">Hackeando el status quo</span>
                </div>

                {/* Elementos decorativos internos */}
                <div className="absolute top-[-10%] right-[-10%] w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
              </div>

              {/* Mini tarjeta flotante 1: Seguridad */}
              <div className="absolute -top-6 -left-6 z-30 p-5 bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl animate-bounce-slow">
                <ShieldCheck className="text-emerald-400" size={32} />
              </div>

              {/* Mini tarjeta flotante 2: Performance */}
              <div className="absolute -bottom-6 right-10 z-30 px-6 py-4 bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                <span className="text-xs font-mono text-blue-200">System.Optimized()</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};