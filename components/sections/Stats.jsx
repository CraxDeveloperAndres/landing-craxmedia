import { stats } from "../../utils/constants";

export const Stats = () => {
  return (
    <section className="relative py-20 bg-[#020617] overflow-hidden">
      {/* Línea divisoria sutil con degradado */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`relative group px-8 py-10 transition-all duration-500 hover:bg-white/[0.02] ${
                index !== stats.length - 1 ? "md:border-r border-white/5" : ""
              }`}
            >
              {/* Efecto de brillo al hacer hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
              
              <div className="relative z-10 space-y-3">
                <div className="flex justify-center md:justify-start">
                  <span className="text-5xl lg:text-6xl font-black tracking-tighter text-white group-hover:text-blue-400 transition-colors duration-300">
                    {stat.number}
                  </span>
                  <span className="text-blue-500 font-bold text-2xl ml-1 group-hover:animate-pulse">+</span>
                </div>
                
                <div className="flex flex-col items-center md:items-start">
                  <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-gray-500 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </p>
                  {/* Pequeña barra decorativa debajo de cada stat */}
                  <div className="mt-2 w-8 h-1 bg-blue-600/30 group-hover:w-16 group-hover:bg-blue-500 transition-all duration-500 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Línea divisoria inferior */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
    </section>
  );
};