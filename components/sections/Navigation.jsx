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

  // CRUCIAL: Bloquear scroll y resetear posición al abrir
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

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR PRINCIPAL */}
      <nav 
        className={`fixed top-0 left-0 w-full transition-all duration-500 z-[200] ${
          scrolled || isMenuOpen
            ? 'py-3 bg-[#020617]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* LOGO - Siempre visible y clickeable */}
            <div 
              className="flex items-center gap-3 group cursor-pointer relative z-[210]"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <img 
                  src="/craxmedia.png"
                  alt="Logo" 
                  className="w-full h-full object-contain"
                  style={{ filter: (scrolled || isMenuOpen) ? 'none' : 'brightness(0) invert(1)' }}
                />
              </div>
              <span className="text-xl font-black tracking-tighter text-white">
                CRAX<span className="text-blue-500">MEDIA</span>
              </span>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-6">
              <div className={`flex items-center gap-8 px-6 py-2 rounded-full border border-white/10 ${scrolled ? 'bg-white/5' : 'bg-transparent'}`}>
                {navLinks.map((item) => (
                  <a key={item.name} href={item.href} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </a>
                ))}
              </div>
              <a href="#contacto" className="px-5 py-2.5 bg-blue-600 text-white text-[10px] font-black uppercase rounded-full">
                Hablemos!
              </a>
            </div>

            {/* MOBILE BUTTON - Forzado arriba de todo */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-[210] p-2 text-white bg-white/10 rounded-lg border border-white/20 active:scale-90 transition-transform"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY - Independiente del Nav para evitar herencia de z-index */}
      <div 
        className={`fixed inset-0 w-full h-screen bg-[#020617] transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen 
            ? 'translate-y-0 opacity-100 visible' 
            : '-translate-y-full opacity-0 invisible'
        }`}
        style={{ zIndex: 190 }} // Justo debajo del navbar pero arriba de las secciones
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleLinkClick}
              className={`text-4xl font-black text-white hover:text-blue-500 transition-all duration-500 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms' }}
            >
              {item.name}
            </a>
          ))}
          
          <div className={`pt-8 transition-all duration-700 ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
            <a 
              href="#contacto"
              onClick={handleLinkClick}
              className="px-8 py-4 bg-blue-600 text-white font-black uppercase tracking-widest rounded-xl shadow-2xl shadow-blue-500/20"
            >
              INICIAR PROYECTO
            </a>
          </div>
        </div>
      </div>
    </>
  );
};