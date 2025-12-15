import { useState } from 'react';
import { User, Mail, Phone, MessageSquare, Send } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-amber-100 space-y-6">
            <div className="space-y-1">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 ml-1">
                    Nombre Completo
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-amber-600">
                        <User size={20} />
                    </div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Juan Pérez"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-200"
                    />
                </div>
            </div>

            <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 ml-1">
                    Email
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-amber-600">
                        <Mail size={20} />
                    </div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="juan@ejemplo.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-200"
                    />
                </div>
            </div>

            <div className="space-y-1">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 ml-1">
                    Teléfono <span className="text-gray-400 font-normal text-xs">(Opcional)</span>
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-amber-600">
                        <Phone size={20} />
                    </div>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+54 11 1234 5678"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-200"
                    />
                </div>
            </div>

            <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 ml-1">
                    Mensaje
                </label>
                <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none text-amber-600">
                        <MessageSquare size={20} />
                    </div>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Escribe tu consulta aquí..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-200 resize-none"
                    ></textarea>
                </div>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-4 rounded-xl transition-all duration-200 font-bold text-lg shadow-lg hover:shadow-amber-900/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    'Enviando...'
                ) : (
                    <>
                        Enviar Mensaje
                        <Send size={20} />
                    </>
                )}
            </button>
        </form>
    );
}
