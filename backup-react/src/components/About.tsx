import { Heart, Award, Leaf, Users } from 'lucide-react';

export function About() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl mb-4 text-amber-900">Sobre Nosotros</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Una historia de pasión, tradición y dedicación al arte de la panadería.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h3 className="text-3xl mb-6 text-amber-900">Nuestra Historia</h3>
          <p className="mb-4 text-gray-700">
            Southern Bakery nació en 2003 del sueño de una familia apasionada por la panadería tradicional. Comenzamos como un pequeño negocio familiar con un horno y mucho corazón.
          </p>
          <p className="mb-4 text-gray-700">
            Con más de 20 años de experiencia, hemos crecido sin perder nuestra esencia: elaborar productos de la más alta calidad utilizando recetas tradicionales y técnicas artesanales transmitidas de generación en generación.
          </p>
          <p className="text-gray-700">
            Cada día nos levantamos antes del amanecer para hornear el pan más fresco para nuestra comunidad. Para nosotros, cada hogaza, cada croissant y cada pastel es una expresión de amor y dedicación.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1765451490469-099b47124cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYmFrZXIlMjB3b3JraW5nfGVufDF8fHx8MTc2NTQ2NDg5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Panadero trabajando"
            className="rounded-lg shadow-xl w-full"
          />
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h3 className="text-3xl text-center mb-12 text-amber-900">Nuestros Valores</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
              <Heart className="text-amber-700" size={32} />
            </div>
            <h4 className="text-xl mb-2 text-amber-900">Pasión</h4>
            <p className="text-gray-600">Amamos lo que hacemos y lo demostramos en cada producto.</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
              <Award className="text-amber-700" size={32} />
            </div>
            <h4 className="text-xl mb-2 text-amber-900">Calidad</h4>
            <p className="text-gray-600">Solo utilizamos los mejores ingredientes y técnicas.</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
              <Leaf className="text-amber-700" size={32} />
            </div>
            <h4 className="text-xl mb-2 text-amber-900">Sostenibilidad</h4>
            <p className="text-gray-600">Comprometidos con el medio ambiente y productos locales.</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
              <Users className="text-amber-700" size={32} />
            </div>
            <h4 className="text-xl mb-2 text-amber-900">Comunidad</h4>
            <p className="text-gray-600">Somos parte activa de nuestra comunidad local.</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-amber-50 rounded-lg p-8 md:p-12">
        <h3 className="text-3xl text-center mb-12 text-amber-900">Nuestro Equipo</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1759521296047-89338c8e083d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cnklMjBjaGVmJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY1NTA5NDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Carlos Méndez"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="text-xl mb-1 text-amber-900">Carlos Méndez</h4>
            <p className="text-amber-700 mb-2">Maestro Pastelero</p>
            <p className="text-gray-600">Con más de 20 años de experiencia, Carlos lidera nuestro equipo de pastelería artesanal.</p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1653552900145-5679d740bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBhc3RyeSUyMGNoZWYlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY1NTA5NDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="María González"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="text-xl mb-1 text-amber-900">María González</h4>
            <p className="text-amber-700 mb-2">Pastelera</p>
            <p className="text-gray-600">María elabora nuestras deliciosas tortas y dulces con dedicación y creatividad.</p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1684132052745-23cd410ecd31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBiYWtlciUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTUwOTQ1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Ana Rodríguez"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="text-xl mb-1 text-amber-900">Ana Rodríguez</h4>
            <p className="text-amber-700 mb-2">Pastelera</p>
            <p className="text-gray-600">Ana especialista en decoración de pasteles y creaciones personalizadas únicas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}