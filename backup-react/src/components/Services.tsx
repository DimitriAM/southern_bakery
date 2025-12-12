import { Cake, Cookie, ShoppingBag, Truck, Users, Clock } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <ShoppingBag size={48} />,
      title: 'Panadería Diaria',
      description: 'Pan fresco horneado varias veces al día. Contamos con una gran variedad de panes artesanales, integrales y especiales.',
    },
    {
      icon: <Cake size={48} />,
      title: 'Tortas Personalizadas',
      description: 'Creamos tortas únicas para cumpleaños, bodas y eventos especiales. Diseños personalizados según tus necesidades.',
    },
    {
      icon: <Cookie size={48} />,
      title: 'Pastelería',
      description: 'Amplia variedad de pasteles, tartas y dulces elaborados artesanalmente con ingredientes de primera calidad.',
    },
    {
      icon: <Truck size={48} />,
      title: 'Entregas a Domicilio',
      description: 'Llevamos nuestros productos frescos directamente a tu hogar o evento. Pedidos con anticipación.',
    },
    {
      icon: <Users size={48} />,
      title: 'Catering para Eventos',
      description: 'Servicio completo de catering para reuniones, conferencias y celebraciones con menús personalizados.',
    },
    {
      icon: <Clock size={48} />,
      title: 'Pedidos Anticipados',
      description: 'Realiza tu pedido con anticipación y garantiza la disponibilidad de tus productos favoritos.',
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl mb-4 text-amber-900">Nuestros Servicios</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          En Southern Bakery ofrecemos una amplia gama de servicios para satisfacer todas tus necesidades de panadería y pastelería.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
          >
            <div className="text-amber-700 mb-4">{service.icon}</div>
            <h3 className="text-2xl mb-3 text-amber-900">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Special Offer Section */}
      <div className="bg-amber-100 rounded-lg p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://images.unsplash.com/photo-1726981897420-0778c14deedf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBpbnRlcmlvciUyMHNob3B8ZW58MXx8fHwxNzY1NDU4Nzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Interior de la panadería"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="flex-1">
            <h3 className="text-3xl mb-4 text-amber-900">¿Por Qué Elegirnos?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-amber-700 mt-1">✓</span>
                <span>Más de 20 años de experiencia en panadería artesanal</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-700 mt-1">✓</span>
                <span>Ingredientes 100% naturales y de la más alta calidad</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-700 mt-1">✓</span>
                <span>Procesos tradicionales combinados con innovación</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-700 mt-1">✓</span>
                <span>Atención personalizada y dedicada a cada cliente</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-700 mt-1">✓</span>
                <span>Compromiso con la comunidad y el medio ambiente</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}