import { useState } from 'react';
import { Cake, Croissant, UtensilsCrossed, Coffee, Sparkles } from 'lucide-react';

type Category = 'all' | 'panaderia' | 'pasteleria' | 'catering' | 'desayunos' | 'temporada';

interface Product {
    id: number;
    name: string;
    category: Category;
    description: string;
    image: string;
}

const products: Product[] = [
    {
        id: 1,
        name: 'Pan de Masa Madre',
        category: 'panaderia',
        description: 'Pan artesanal con fermentación lenta de 24 horas',
        image: '/images/productos/pan_madre.avif',

    },
    {
        id: 2,
        name: 'Baguette Tradicional',
        category: 'panaderia',
        description: 'Baguette francesa crujiente horneada diariamente',
        image: '/images/productos/pan_baguette.webp',

    },
    {
        id: 3,
        name: 'Croissants de Mantequilla',
        category: 'pasteleria',
        description: 'Croissants hojaldrados con mantequilla francesa',
        image: '/images/productos/croissant.avif',

    },
    {
        id: 4,
        name: 'Torta de Chocolate',
        category: 'pasteleria',
        description: 'Torta de chocolate belga con ganache',
        image: '/images/productos/tortas.avif',

    },
    {
        id: 5,
        name: 'Torta de Bodas',
        category: 'pasteleria',
        description: 'Tortas personalizadas para bodas y eventos especiales',
        image: '/images/productos/tortas_boda.webp',

    },
    {
        id: 6,
        name: 'Catering para Eventos',
        category: 'catering',
        description: 'Bandejas surtidas de panes y pasteles para eventos',
        image: '/images/productos/catering_eventos.avif',

    },
    {
        id: 7,
        name: 'Desayuno Completo',
        category: 'desayunos',
        description: 'Pan fresco, pasteles y café recién hecho',
        image: '/images/productos/desayunos.avif',

    },
    {
        id: 8,
        name: 'Galletas de Navidad',
        category: 'temporada',
        description: 'Galletas decoradas artesanalmente para Navidad',
        image: '/images/productos/galletas_navidad.webp',

    },
    {
        id: 9,
        name: 'Pan de Pascua',
        category: 'temporada',
        description: 'Pan tradicional de Pascua con pasas y especias',
        image: '/images/productos/rosca_pascua.avif',

    },
    {
        id: 10,
        name: 'Pie de Calabaza',
        category: 'temporada',
        description: 'Delicioso pie de calabaza especiado para Halloween',
        image: '/images/productos/pie_calabaza.avif',

    },
];

const categories = [
    { id: 'all', name: 'Todos', icon: Sparkles },
    { id: 'panaderia', name: 'Panadería', icon: Croissant },
    { id: 'pasteleria', name: 'Pastelería', icon: Cake },
    { id: 'catering', name: 'Catering', icon: UtensilsCrossed },
    { id: 'desayunos', name: 'Desayunos', icon: Coffee },
    { id: 'temporada', name: 'De Temporada', icon: Sparkles },
];

export default function ProductsFilter() {
    const [selectedCategory, setSelectedCategory] = useState<Category>('all');

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <div>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id as Category)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${selectedCategory === category.id
                                ? 'bg-amber-600 text-white shadow-lg'
                                : 'bg-white text-amber-900 hover:bg-amber-100'
                                }`}
                        >
                            <Icon size={20} />
                            {category.name}
                        </button>
                    );
                })}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-cover"
                            loading="lazy"
                        />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl mb-2 text-amber-900 font-semibold">{product.name}</h3>
                            <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>
                            <a
                                href="/contacto"
                                className="block w-full text-center bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 rounded-lg transition-colors mt-auto"
                            >
                                Hacé tu pedido
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-xl text-gray-600">No hay productos en esta categoría</p>
                </div>
            )}
        </div>
    );
}
