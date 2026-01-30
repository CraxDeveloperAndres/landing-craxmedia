import { services } from "../../utils/constants";
import { ArrowUpRight, Sparkles } from "lucide-react";

export const Services = () => {
  return (
    <section id="servicios" className="relative py-24 bg-[#020617] overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Cabecera de Sección */}
        <div className="mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300">Ecosistema de Soluciones</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            SOLUCIONES <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">SIN LÍMITES</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Fusionamos diseño disruptivo con arquitectura de software de alta disponibilidad para crear productos que dominan el mercado.
          </p>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
            >
              {/* Efecto de fondo al hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icono con resplandor */}
              <div className="relative z-10 mb-6 flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500 border border-white/5 group-hover:border-blue-500/30 shadow-inner">
                  {service.icon}
                </div>
                <button className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 p-2 text-blue-400">
                  <ArrowUpRight size={24} />
                </button>
              </div>

              {/* Contenido */}
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Decoración inferior: Línea de progreso sutil */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 w-0 group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>

        {/* Call to Action Secundario */}
        <div className="mt-20 p-10 rounded-[3rem] bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/5 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-2xl font-bold text-white mb-2">¿Necesitas algo a medida?</h4>
            <p className="text-gray-400">Desarrollamos algoritmos y sistemas específicos según tus requerimientos técnicos.</p>
          </div>
          <a href="#contacto" className="whitespace-nowrap px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-blue-500 hover:text-white transition-all transform active:scale-95">
            Consultoría Gratuita
          </a>
        </div>
      </div>
    </section>
  );
};