import { ArrowUpRight, ShieldCheck, Zap, Wallet, Bell, BarChart3, FileSearch } from "lucide-react";

export const DomuPlus = () => {
  return (
    <section id="domu-plus" className="relative py-24 bg-[#020617] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Zap size={14} className="text-blue-400" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300">Ecosistema Residencial Integral</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">
              DOMU <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">PLUS+</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Transformamos la administración de copropiedades en una experiencia digital transparente. 
              Control financiero, comunicación asertiva y gestión documental en una sola plataforma de alta disponibilidad.
            </p>

            {/* Métrica de éxito */}
            <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 w-fit">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#020617] bg-gradient-to-br from-blue-600 to-indigo-800" />
                ))}
              </div>
              <div>
                <p className="text-2xl font-black text-white">+10 Unidades</p>
                <p className="text-sm text-blue-400 font-medium">Liderando la transformación digital</p>
              </div>
            </div>
          </div>

          {/* Grid de Beneficios Clave extraídos de tu info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureCard 
              icon={<Wallet size={20} />}
              title="Finanzas en Vivo"
              desc="Estado de cuenta en tiempo real y pagos integrados sin transferencias manuales."
            />
            <FeatureCard 
              icon={<FileSearch size={20} />}
              title="Transparencia Total"
              desc="Rendición de cuentas, proyectos y actas disponibles para cada copropietario."
            />
            <FeatureCard 
              icon={<Bell size={20} />}
              title="Notificación Multicanal"
              desc="Alertas críticas vía WhatsApp, Email y App para una comunicación efectiva."
            />
            <FeatureCard 
              icon={<BarChart3 size={20} />}
              title="Panel Administrativo"
              desc="Métricas de recaudo y gestión de PQRS centralizada con trazabilidad legal."
            />
            
            <div className="sm:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-tight">Gestión Proactiva</h4>
                  <p className="text-gray-400 text-sm italic">"Menos burocracia, más comunidad."</p>
                </div>
                <ShieldCheck className="text-blue-500" size={32} />
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Desde la gestión documental en la nube hasta el seguimiento de PQRS con radicado único. 
                Optimiza el tiempo del consejo y la administración.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-blue-500/50 transition-all duration-500 group">
    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
    <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
  </div>
);