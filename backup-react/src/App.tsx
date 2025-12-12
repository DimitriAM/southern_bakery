import { useState } from 'react';
import { Home } from './components/Home';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Blog } from './components/Blog';
import { Products } from './components/Products';
import { Navigation } from './components/Navigation';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

export type Section = 'home' | 'services' | 'about' | 'contact' | 'blog' | 'products';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home setActiveSection={setActiveSection} />;
      case 'services':
        return <Services />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'blog':
        return <Blog />;
      case 'products':
        return <Products />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {renderSection()}
      </main>
      <footer className="bg-amber-900 text-amber-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-center">&copy; 2025 Southern Bakery. Todos los derechos reservados.</p>

            {/* WhatsApp Chatbot */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}