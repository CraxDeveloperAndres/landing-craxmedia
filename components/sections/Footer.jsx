import { Instagram, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020617] pt-20 pb-10 overflow-hidden">
      {/* Línea divisoria superior con brillo */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMNA 1: BRANDING ADAPTADO */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <img 
                    src="/craxmedia.png" 
                    alt="Craxmedia Logo" 
                    className="w-full h-full object-contain brightness-0 invert" 
                  />
                </div>
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-2xl font-black tracking-tighter text-white">
                  CRAX<span className="text-blue-500">MEDIA</span>
                </span>
                <span className="text-[10px] font-bold tracking-[0.3em] text-blue-400 uppercase opacity-60">
                  Tech Studio
                </span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Arquitectos de experiencias digitales de alto rendimiento. Transformando el panorama tecnológico con precisión y diseño disruptivo.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/craxmediaco?igsh=MTd0ZGphNDU4anp0OQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300 group"
              >
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* COLUMNA 2: SERVICIOS */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em]">Servicios Core</h4>
            <ul className="space-y-4">
              {['Desarrollo Web Pro', 'Apps Ecosistema', 'Arquitectura UI/UX', 'Consultoría Tech'].map((item) => (
                <li key={item}>
                  <a href="#servicios" className="text-gray-500 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 3: NAVEGACIÓN */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em]">Explorar</h4>
            <ul className="space-y-4">
              {['Sobre Nosotros', 'Portafolio', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-gray-500 hover:text-white text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 4: CONTACTO RÁPIDO */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em]">Contacto Directo</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm group cursor-pointer">
                <Mail size={18} className="text-blue-500" />
                <span className="text-gray-500 group-hover:text-gray-300 transition-colors">craxmediaco@gmail.com</span>
              </div>
              <div className="flex items-start gap-3 text-sm group cursor-pointer">
                <Phone size={18} className="text-blue-500" />
                <span className="text-gray-500 group-hover:text-gray-300 transition-colors">+57 301 3145204</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-blue-500" />
                <span className="text-gray-500 leading-tight text-balance">Cali, Valle del Cauca, Colombia</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 rounded-2xl bg-blue-600/5 border border-blue-500/10">
              <p className="text-[10px] text-blue-400 font-bold uppercase mb-2">Status del Sistema</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs text-emerald-500/80 font-mono">Ready to Build_</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs">
            © {currentYear} <span className="text-gray-400">CRAXMEDIA</span>. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Privacidad</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Términos</a>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-blue-400 transition-colors"
          >
            VOLVER AL TOP
            <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center group-hover:border-blue-500/30 transition-all">
              <ArrowUpRight size={14} className="-rotate-45" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};