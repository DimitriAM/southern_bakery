import { ChevronRight } from 'lucide-react';
import { Section } from '../App';

interface HomeProps {
  setActiveSection: (section: Section) => void;
}

export function Home({ setActiveSection }: HomeProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1627308593341-d886acdc06a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBicmVhZCUyMGFydGlzYW58ZW58MXx8fHwxNzY1NDExNjk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Pan artesanal"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-5xl md:text-6xl mb-4">Bienvenidos a Southern Bakery</h2>
          <p className="text-xl md:text-2xl mb-8">Pan artesanal horneado con amor cada día</p>
          <button 
            onClick={() => setActiveSection('products')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg transition-colors flex items-center gap-2 mx-auto"
          >
            Descubre Nuestros Productos
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h3 className="text-4xl text-center mb-12 text-amber-900">Nuestros Productos Destacados</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1627308593341-d886acdc06a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBicmVhZCUyMGFydGlzYW58ZW58MXx8fHwxNzY1NDExNjk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Panes Artesanales"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h4 className="text-2xl mb-2 text-amber-900">Panes Artesanales</h4>
              <p className="text-gray-600">Horneados frescos cada mañana con ingredientes naturales y masa madre tradicional.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1571157577110-493b325fdd3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHBhc3RyaWVzJTIwY3JvaXNzYW50c3xlbnwxfHx8fDE3NjUzNzg3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Pastelería Fina"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h4 className="text-2xl mb-2 text-amber-900">Pastelería Fina</h4>
              <p className="text-gray-600">Croissants, pasteles y dulces elaborados con mantequilla de primera calidad.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1763440976454-c70c217792bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtpbmclMjBicmVhZCUyMG92ZW58ZW58MXx8fHwxNzY1NDY0ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Productos Especiales"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h4 className="text-2xl mb-2 text-amber-900">Productos Especiales</h4>
              <p className="text-gray-600">Tortas personalizadas y productos de temporada para ocasiones especiales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-amber-900 text-amber-50 py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-amber-700">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl mb-4">Visítanos Hoy</h3>
          <p className="text-xl mb-8">Descubre el sabor de la tradición en cada bocado</p>
          <p className="text-lg">Abierto de Lunes a Sábado: 7:00 AM - 7:00 PM</p>
          <p className="text-lg">Domingos: 8:00 AM - 2:00 PM</p>
        </div>
      </section>
    </div>
  );
}