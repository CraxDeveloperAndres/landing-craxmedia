export const metadata = {
  title: {
    default: 'CRAXMEDIA | Ingeniería de Software y Diseño de Élite',
    template: '%s | CRAXMEDIA' // Por si luego creas subpáginas
  },
  description: 'Arquitectos de experiencias digitales en Cali, Colombia. Especialistas en desarrollo web premium, aplicaciones móviles y soluciones tecnológicas escalables.',
  keywords: ['Craxmedia', 'desarrollo web Cali', 'ingeniería de software', 'diseño UI/UX', 'apps móviles Colombia', 'software a medida'],
  authors: [{ name: 'CRAXMEDIA' }],
  creator: 'CRAXMEDIA',
  publisher: 'CRAXMEDIA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Open Graph para Redes Sociales
  openGraph: {
    title: 'CRAXMEDIA | Ingeniería que eleva tu visión',
    description: 'Transformamos ideas en productos digitales de alto rendimiento.',
    url: 'https://craxmediaco.com',
    siteName: 'CRAXMEDIA',
    images: [
      {
        url: '/craxmedia.png', // Coloca esta imagen en tu carpeta /public
        width: 1200,
        height: 630,
        alt: 'CRAXMEDIA Software Development',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  // Favicon y otros iconos
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased selection:bg-blue-500/30">
        {children}
      </body>
    </html>
  );
}