import { projects } from "../../utils/constants";
import { ExternalLink, Code2, Layers } from 'lucide-react';

export const Portafolio = () => {
  return (
    <section id="portafolio" className="relative py-24 bg-[#020617] overflow-hidden">
      {/* Luces de fondo sutiles */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-400 font-bold tracking-widest uppercase text-xs">
              <Layers size={14} />
              <span>Casos de Éxito</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              PROYECTOS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                DESTACADOS
              </span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-lg leading-relaxed">
            Soluciones robustas diseñadas con precisión técnica y enfoque en la experiencia del usuario final.
          </p>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_20px_50px_-20px_rgba(37,99,235,0.3)]"
            >
              {/* Contenedor de Imagen con Overlay */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Overlay Glassmorphism */}
                <div 
                  className="absolute inset-0 bg-blue-900/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center cursor-pointer"
                  onClick={() => window.open(project.externalUrl, '_blank')}
                >
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-blue-600 transform scale-50 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                    <ExternalLink size={24} />
                  </div>
                  <span className="mt-3 text-white font-bold text-sm tracking-widest uppercase">Ver Proyecto</span>
                </div>

                {/* Badge de Categoría */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded-lg">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="p-8 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                {/* Tecnologías con estilo de "Tags de Código" */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/5 rounded-md group-hover:border-blue-500/20 transition-colors"
                    >
                      <Code2 size={10} className="text-gray-500 group-hover:text-blue-400" />
                      <span className="text-[11px] font-mono text-gray-400 group-hover:text-gray-200">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Línea decorativa inferior que se "carga" al hover */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 transition-all duration-700 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};