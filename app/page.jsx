'use client';

import { Navigation } from '../components/sections/Navigation';
import { Hero } from '../components/sections/Hero';
import { Stats } from '../components/sections/Stats';
import { Services } from '../components/sections/Services';
import { Portafolio } from '../components/sections/Portafolio';
import { About } from '../components/sections/About';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/sections/Footer';
import {WhatsAppBubble} from '../components/sections/WhatsappBurble';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Stats />
      <Services />
      <Portafolio />
      <About />
      <Contact />
      <Footer />
      <WhatsAppBubble />
    </div>
  );
}
