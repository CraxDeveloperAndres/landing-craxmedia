import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Control del scroll para el diseño de la barra
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear el scroll del cuerpo cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Nosotros', href: '#sobrenosotros' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-[#020617]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          <div 
            className="flex items-center gap-3 group cursor-pointer relative z-[110]"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <img 
                src="/craxmedia.png"
                alt="Craxmedia Logo" 
                className="w-full h-full object-contain"
                style={{ filter: (scrolled || isMenuOpen) ? 'none' : 'brightness(0) invert(1)' }}
              />
            </div>
            
            <div className="flex flex-col -space-y-1">
              <span className="text-xl font-black tracking-tighter text-white">
                CRAX<span className="text-blue-500 group-hover:text-blue-400">MEDIA</span>
              </span>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-2">
            <div className={`flex items-center gap-8 px-8 py-2.5 rounded-full border transition-all duration-500 ${
              scrolled ? 'bg-white/5 border-white/10 backdrop-blur-md' : 'bg-transparent border-transparent'
            }`}>
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-blue-400 transition-all relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
            <a href="#contacto" className="ml-4 px-6 py-2.5 bg-blue-600 hover:bg-white hover:text-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-full transition-all duration-300 border border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              Hablemos!
            </a>
          </div>

          {/* MOBILE BUTTON (Z-index alto para estar sobre el overlay) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-[110] p-2 text-white bg-white/5 rounded-xl border border-white/10"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div 
        className={`fixed inset-0 bg-[#020617] transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 105 }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6 text-center">
          {navLinks.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-4xl font-black text-white hover:text-blue-500 transition-all transform duration-500 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.name}
            </a>
          ))}
          
          <div className={`pt-4 transition-all duration-700 delay-500 transform ${
            isMenuOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}>
            <a 
              href="#contacto"
              onClick={() => setIsMenuOpen(false)}
              className="inline-block px-10 py-4 bg-blue-600 text-white font-black uppercase tracking-tighter rounded-2xl shadow-[0_0_30px_rgba(37,99,235,0.4)]"
            >
              INICIAR PROYECTO
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};