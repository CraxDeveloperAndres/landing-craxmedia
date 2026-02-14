import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Send, MessageSquare, CheckCircle2, AlertCircle, Tag } from 'lucide-react';
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '', // Agregado al estado inicial
    message: ''
  });

  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const SERVICE_ID = "service_04r1mye";
    const TEMPLATE_ID = "template_986y4zo";
    const PUBLIC_KEY = "jrHDIxrJl9dhF6s0M";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', subject: '', message: '' }); // Reset completo
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getButtonContent = () => {
    switch (status) {
      case 'sending':
        return { 
          text: 'SINCRONIZANDO...', 
          icon: <Send size={20} className="animate-pulse" />, 
          styles: 'bg-blue-600 opacity-70 cursor-not-allowed' 
        };
      case 'success':
        return { 
          text: '¡MENSAJE DESPLEGADO!', 
          icon: <CheckCircle2 size={20} />, 
          styles: 'bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.4)]' 
        };
      case 'error':
        return { 
          text: 'ERROR DE ENLACE', 
          icon: <AlertCircle size={20} />, 
          styles: 'bg-red-500' 
        };
      default:
        return { 
          text: 'DESPLEGAR MENSAJE', 
          icon: <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />, 
          styles: 'bg-blue-600 hover:bg-blue-500 shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)]' 
        };
    }
  };

  const btn = getButtonContent();

  return (
    <section id="contacto" className="relative py-24 bg-[#020617] overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">
            <MessageSquare size={14} />
            <span>Canal de Comunicación</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            ¿LISTO PARA EL <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">SIGUIENTE NIVEL?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LADO IZQUIERDO: INFO */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                Información de Enlace
                <div className="h-px flex-1 bg-white/10" />
              </h3>
              <div className="space-y-6">
                {[
                  { icon: <Mail />, text: "craxmediaco@gmail.com", label: "Email" },
                  { icon: <Phone />, text: "+57 301 3145204", label: "Teléfono" },
                  { icon: <MapPin />, text: "Cali, Valle del Cauca, Colombia", label: "Ubicación" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-5 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{item.label}</p>
                      <p className="text-white font-medium">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* LADO DERECHO: FORMULARIO */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-3xl" />
            <form 
              ref={form} 
              onSubmit={handleSubmit}
              className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                    placeholder="john@empresa.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Empresa</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  placeholder="Craxmedia Corp"
                />
              </div>

              {/* NUEVO CAMPO: ASUNTO */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Asunto</label>
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                    placeholder="Ej: Desarrollo Web / App Móvil"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Mensaje</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className={`w-full text-white font-black py-5 rounded-2xl transition-all flex items-center justify-center gap-3 group active:scale-[0.98] ${btn.styles}`}
              >
                {btn.text}
                {btn.icon}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};