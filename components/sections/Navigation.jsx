import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          
          {/* LOGO ADAPTADO */}
          <div 
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative">
              {/* Resplandor detrás del logo */}
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              
              <div className="relative w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <img 
                  src="/craxmedia.png"
                  alt="Craxmedia Logo" 
                  className="w-full h-full object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-500"
                  style={{ filter: scrolled ? 'none' : 'brightness(0) invert(1)' }}
                />
              </div>
            </div>
            
            <div className="flex flex-col -space-y-1">
              <span className="text-xl font-black tracking-tighter text-white">
                CRAX<span className="text-blue-500 transition-colors duration-300 group-hover:text-white">MEDIA</span>
              </span>
              <span className="text-[8px] font-bold tracking-[0.3em] text-blue-400 uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-1 group-hover:translate-y-0">
                Tech Studio
              </span>
            </div>
          </div>

          {/* DESKTOP MENU (Capsule Style) */}
          <div className="hidden md:flex items-center gap-2">
            <div className={`flex items-center gap-8 px-8 py-2.5 rounded-full border transition-all duration-500 ${
              scrolled 
                ? 'bg-white/5 border-white/10 backdrop-blur-md' 
                : 'bg-transparent border-transparent'
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
            
            <a href="#contacto" className="ml-4 px-6 py-2.5 bg-blue-600 hover:bg-white hover:text-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-full transition-all duration-300 border border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] active:scale-95">
              Hablemos!
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white bg-white/5 rounded-xl border border-white/10"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div 
        className={`fixed inset-0 bg-[#020617] z-[-1] transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10">
          {navLinks.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-4xl font-black text-white hover:text-blue-500 transition-all transform ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.name}
            </a>
          ))}
          <button className="px-10 py-4 bg-blue-600 text-white font-black uppercase tracking-tighter rounded-2xl shadow-lg">
            INICIAR PROYECTO
          </button>
        </div>
      </div>
    </nav>
  );
};