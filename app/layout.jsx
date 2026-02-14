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
    default: 'CRAXMEDIA | Ingeniería de Software y Diseño de Élite',
    template: '%s | CRAXMEDIA'
  },
  description: 'Arquitectos de experiencias digitales en Cali, Colombia. Especialistas en desarrollo web premium, aplicaciones móviles y soluciones tecnológicas escalables.',
  keywords: ['Craxmedia', 'desarrollo web Cali', 'ingeniería de software', 'diseño UI/UX', 'apps móviles Colombia', 'software a medida'],
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
    title: 'CRAXMEDIA | Ingeniería que eleva tu visión',
    description: 'Transformamos ideas en productos digitales de alto rendimiento.',
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
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-blue-500/30`}>
        {children}
      </body>
    </html>
  );
}