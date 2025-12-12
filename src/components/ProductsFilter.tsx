import { useState } from 'react';
import { Cake, Croissant, UtensilsCrossed, Coffee, Sparkles } from 'lucide-react';

type Category = 'all' | 'panaderia' | 'pasteleria' | 'catering' | 'desayunos' | 'temporada';

interface Product {
    id: number;
    name: string;
    category: Category;
    description: string;
    image: string;
    price?: string;
}

const products: Product[] = [
    {
        id: 1,
        name: 'Pan de Masa Madre',
        category: 'panaderia',
        description: 'Pan artesanal con fermentación lenta de 24 horas',
        image: 'https://images.unsplash.com/photo-1612136435571-c97705feadfa?w=400',
        price: '$4.50',
    },
    {
        id: 2,
        name: 'Baguette Tradicional',
        category: 'panaderia',
        description: 'Baguette francesa crujiente horneada diariamente',
        image: 'https://images.unsplash.com/photo-1627308593341-d886acdc06a2?w=400',
        price: '$3.00',
    },
    {
        id: 3,
        name: 'Croissants de Mantequilla',
        category: 'pasteleria',
        description: 'Croissants hojaldrados con mantequilla francesa',
        image: 'https://images.unsplash.com/photo-1679449223735-444c4f71f0dd?w=400',
        price: '$2.75',
    },
    {
        id: 4,
        name: 'Torta de Chocolate',
        category: 'pasteleria',
        description: 'Torta de chocolate belga con ganache',
        image: 'https://images.unsplash.com/photo-1566760375903-061dfd31c175?w=400',
        price: '$35.00',
    },
    {
        id: 5,
        name: 'Torta de Bodas',
        category: 'pasteleria',
        description: 'Tortas personalizadas para bodas y eventos especiales',
        image: 'https://images.unsplash.com/photo-1584158531321-2a1fefff2e51?w=400',
        price: 'Desde $150.00',
    },
    {
        id: 6,
        name: 'Catering para Eventos',
        category: 'catering',
        description: 'Bandejas surtidas de panes y pasteles para eventos',
        image: 'https://images.unsplash.com/photo-1567496295302-b8dbcd2913b6?w=400',
        price: 'Consultar',
    },
    {
        id: 7,
        name: 'Desayuno Completo',
        category: 'desayunos',
        description: 'Pan fresco, pasteles y café recién hecho',
        image: 'https://images.unsplash.com/photo-1675125530909-15213f01a9e1?w=400',
        price: '$8.50',
    },
    {
        id: 8,
        name: 'Galletas de Navidad',
        category: 'temporada',
        description: 'Galletas decoradas artesanalmente para Navidad',
        image: 'https://images.unsplash.com/photo-1509708837446-e3df1a500241?w=400',
        price: '$12.00 docena',
    },
    {
        id: 9,
        name: 'Pan de Pascua',
        category: 'temporada',
        description: 'Pan tradicional de Pascua con pasas y especias',
        image: 'https://images.unsplash.com/photo-1617489673659-21e995ce1bd0?w=400',
        price: '$18.00',
    },
    {
        id: 10,
        name: 'Pie de Calabaza',
        category: 'temporada',
        description: 'Delicioso pie de calabaza especiado para Halloween',
        image: 'https://images.unsplash.com/photo-1655718859903-c45c1be8754f?w=400',
        price: '$22.00',
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
                    <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-cover"
                            loading="lazy"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl mb-2 text-amber-900 font-semibold">{product.name}</h3>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            {product.price && (
                                <p className="text-amber-700 font-semibold">{product.price}</p>
                            )}
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
