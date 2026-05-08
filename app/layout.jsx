import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'CRAXMEDIA | Desarrollo de Software, TI y Aplicaciones Móviles',
    template: '%s | CRAXMEDIA'
  },
  description: 'Arquitectos de experiencias digitales. Especialistas en desarrollo de software, servicios TI, aplicaciones móviles y soluciones tecnológicas multmedia. Basados en Cali, Valle del Cauca para el mundo.',
  keywords: [
    'Craxmedia', 
    'desarrollo de software', 
    'software a medida',
    'TI', 
    'tecnologías de la información', 
    'aplicaciones móviles',
    'multimedia',
    'ingeniería de software', 
    'diseño UI/UX', 
    'desarrollo web Cali', 
    'empresas de software Cali', 
    'servicios TI Valle del Cauca', 
    'creación de apps Colombia'
  ],
  authors: [{ name: 'CRAXMEDIA' }],
  creator: 'CRAXMEDIA',
  publisher: 'CRAXMEDIA',
  
  // CONFIGURACIÓN DEL ICONO
  icons: {
    icon: '/icon.png', // Esto apunta a tu nuevo archivo con fondo blanco
    shortcut: '/icon.png',
    apple: '/icon.png', // Opcional: usa el mismo para dispositivos Apple
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'CRAXMEDIA | Ingeniería de Software y Soluciones TI que elevan tu visión',
    description: 'Transformamos ideas en productos digitales, aplicaciones móviles y software de alto rendimiento.',
    url: 'https://craxmediaco.com',
    siteName: 'CRAXMEDIA',
    images: [
      {
        url: '/craxmedia.png', 
        width: 1200,
        height: 630,
        alt: 'CRAXMEDIA Software Development',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CRAXMEDIA",
    "image": "https://craxmediaco.com/craxmedia.png",
    "description": "Agencia de Desarrollo de Software, TI y Tecnología especializada en crear aplicaciones móviles, sistemas web a medida y soluciones multimedia.",
    "url": "https://craxmediaco.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cali",
      "addressRegion": "Valle del Cauca",
      "addressCountry": "CO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "3.4516", 
      "longitude": "-76.5320"
    }
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-blue-500/30`}>
        {children}
      </body>
    </html>
  );
}