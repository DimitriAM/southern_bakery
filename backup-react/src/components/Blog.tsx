import { Calendar, User, ArrowRight } from 'lucide-react';

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Los Secretos de la Masa Madre',
      excerpt: 'Descubre cómo preparar y mantener tu propia masa madre en casa para hacer pan artesanal auténtico.',
      image: 'https://images.unsplash.com/photo-1627308593341-d886acdc06a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBicmVhZCUyMGFydGlzYW58ZW58MXx8fHwxNzY1NDExNjk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '15 de Noviembre, 2024',
      author: 'María González',
      category: 'Técnicas',
    },
    {
      id: 2,
      title: 'Croissants Perfectos: Guía Completa',
      excerpt: 'Aprende el arte de hacer croissants hojaldrados y crujientes con esta guía paso a paso.',
      image: 'https://images.unsplash.com/photo-1571157577110-493b325fdd3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHBhc3RyaWVzJTIwY3JvaXNzYW50c3xlbnwxfHx8fDE3NjUzNzg3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '8 de Noviembre, 2024',
      author: 'Carlos Méndez',
      category: 'Recetas',
    },
    {
      id: 3,
      title: 'La Historia del Pan Artesanal',
      excerpt: 'Un viaje por la historia de la panadería desde la antigüedad hasta nuestros días.',
      image: 'https://images.unsplash.com/photo-1763440976454-c70c217792bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtpbmclMjBicmVhZCUyMG92ZW58ZW58MXx8fHwxNzY1NDY0ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '1 de Noviembre, 2024',
      author: 'Ana Rodríguez',
      category: 'Historia',
    },
    {
      id: 4,
      title: 'Ingredientes Locales y Sostenibles',
      excerpt: 'Por qué elegimos trabajar con productores locales y cómo esto mejora nuestros productos.',
      image: 'https://images.unsplash.com/photo-1726981897420-0778c14deedf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBpbnRlcmlvciUyMHNob3B8ZW58MXx8fHwxNzY1NDU4Nzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '25 de Octubre, 2024',
      author: 'María González',
      category: 'Sostenibilidad',
    },
    {
      id: 5,
      title: 'Decoración de Tortas: Tips y Trucos',
      excerpt: 'Consejos profesionales para decorar tortas como un experto, desde técnicas básicas hasta avanzadas.',
      image: 'https://images.unsplash.com/photo-1765451490469-099b47124cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYmFrZXIlMjB3b3JraW5nfGVufDF8fHx8MTc2NTQ2NDg5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '18 de Octubre, 2024',
      author: 'Carlos Méndez',
      category: 'Técnicas',
    },
    {
      id: 6,
      title: 'Panes Integrales y Saludables',
      excerpt: 'Beneficios de los granos enteros y cómo incorporar panes saludables en tu dieta diaria.',
      image: 'https://images.unsplash.com/photo-1627308593341-d886acdc06a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBicmVhZCUyMGFydGlzYW58ZW58MXx8fHwxNzY1NDExNjk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '10 de Octubre, 2024',
      author: 'Ana Rodríguez',
      category: 'Salud',
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl mb-4 text-amber-900">Nuestro Blog</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Historias, recetas y consejos del mundo de la panadería artesanal.
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-16 bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <img
            src={blogPosts[0].image}
            alt={blogPosts[0].title}
            className="w-full h-full object-cover min-h-[300px]"
          />
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm mb-4 w-fit">
              Destacado
            </div>
            <h3 className="text-3xl mb-4 text-amber-900">{blogPosts[0].title}</h3>
            <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="flex items-center gap-1">
                <Calendar size={16} />
                {blogPosts[0].date}
              </span>
              <span className="flex items-center gap-1">
                <User size={16} />
                {blogPosts[0].author}
              </span>
            </div>
            <button className="flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors">
              Leer más
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(1).map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm mb-3">
                {post.category}
              </div>
              <h3 className="text-xl mb-3 text-amber-900">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {post.date}
                </span>
              </div>
              <button className="flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors">
                Leer más
                <ArrowRight size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="mt-16 bg-amber-900 text-amber-50 rounded-lg p-8 md:p-12 text-center">
        <h3 className="text-3xl mb-4">Suscríbete a Nuestro Newsletter</h3>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Recibe las últimas recetas, tips y ofertas especiales directamente en tu correo.
        </p>
        <div className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <button className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
            Suscribirse
          </button>
        </div>
      </div>
    </div>
  );
}
