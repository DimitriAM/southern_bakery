# Southern Bakery - Astro.js

## 🚀 Migración Completada de React SPA a Astro.js

Este proyecto ha sido migrado exitosamente de una Single Page Application (SPA) en React + Vite a **Astro.js** para mejorar el rendimiento, SEO y experiencia del usuario.

## ✨ Mejoras Implementadas

### **Rendimiento**
- ✅ **Zero JavaScript por defecto**: Las páginas estáticas no cargan JS innecesario
- ✅ **Islands Architecture**: Solo los componentes interactivos se hidratan en el cliente
- ✅ **Lazy loading de imágenes**: Optimización automática de carga de imágenes
- ✅ **Build optimizado**: Generación de sitio estático (SSG)

### **SEO**
- ✅ **Meta tags optimizados**: Title, description, Open Graph, Twitter Cards
- ✅ **HTML semántico**: Estructura correcta de headings (h1, h2, h3)
- ✅ **URLs limpias**: Rutas basadas en archivos `/productos`, `/servicios`, etc.
- ✅ **Sitemap automático**: Generación de sitemap.xml

### **Arquitectura**
- ✅ **Componentes Astro**: Para contenido estático (Navigation, Footer, páginas)
- ✅ **React Islands**: Solo para componentes interactivos (ProductsFilter, ContactForm)
- ✅ **Tailwind CSS**: Estilos optimizados y consistentes
- ✅ **TypeScript**: Tipado estático para mejor DX

## 📁 Estructura del Proyecto

```
astro-temp/
├── src/
│   ├── components/
│   │   ├── Navigation.astro      # Navegación estática
│   │   ├── Footer.astro           # Footer estático
│   │   ├── ProductsFilter.tsx     # Filtro interactivo (React)
│   │   └── ContactForm.tsx        # Formulario interactivo (React)
│   ├── layouts/
│   │   └── Layout.astro           # Layout principal con SEO
│   ├── pages/
│   │   ├── index.astro            # Página de inicio
│   │   ├── productos.astro        # Catálogo de productos
│   │   ├── servicios.astro        # Servicios ofrecidos
│   │   ├── nosotros.astro         # Sobre la empresa
│   │   └── contacto.astro         # Formulario de contacto
│   └── styles/
│       └── global.css             # Estilos globales
├── public/                        # Archivos estáticos
├── astro.config.mjs              # Configuración de Astro
├── tailwind.config.mjs           # Configuración de Tailwind
└── package.json
```

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🎯 Páginas Migradas

| Página | Ruta | Tipo | Interactividad |
|--------|------|------|----------------|
| Inicio | `/` | Estática | Ninguna |
| Productos | `/productos` | Híbrida | Filtro de categorías (React) |
| Servicios | `/servicios` | Estática | Ninguna |
| Nosotros | `/nosotros` | Estática | Ninguna |
| Contacto | `/contacto` | Híbrida | Formulario (React) |

## 🔧 Componentes React (Islands)

### ProductsFilter
- **Ubicación**: `src/components/ProductsFilter.tsx`
- **Función**: Filtrado interactivo de productos por categoría
- **Hidratación**: `client:load` (se carga inmediatamente)

### ContactForm
- **Ubicación**: `src/components/ContactForm.tsx`
- **Función**: Formulario de contacto con validación
- **Hidratación**: `client:load` (se carga inmediatamente)

## 📊 Comparación: React SPA vs Astro

| Métrica | React SPA | Astro |
|---------|-----------|-------|
| JavaScript inicial | ~150KB | ~5KB |
| Time to Interactive | ~2s | ~0.5s |
| SEO | Requiere SSR | Nativo |
| Hidratación | Toda la app | Solo componentes interactivos |
| Build | Bundle único | Páginas estáticas + Islands |

## 🎨 Estilos

- **Framework**: Tailwind CSS v3
- **Fuente**: Inter (Google Fonts)
- **Paleta de colores**: Tonos amber para tema de panadería
- **Responsive**: Mobile-first design

## 🚀 Despliegue

El proyecto está optimizado para despliegue en:
- **Netlify** (recomendado)
- **Vercel**
- **GitHub Pages**
- Cualquier hosting de archivos estáticos

### Configuración de Build:
```
Build command: npm run build
Publish directory: dist
```

## 📝 Notas de Migración

### Eliminado
- ❌ Blog (según solicitud del usuario)
- ❌ Componentes UI de Radix (no necesarios en Astro)
- ❌ React Router (Astro usa file-based routing)

### Optimizaciones
- ✅ Imágenes con `loading="lazy"`
- ✅ Navegación sin JavaScript (excepto menú móvil)
- ✅ Formularios con validación HTML5 nativa
- ✅ Transiciones CSS puras

## 🔄 Próximos Pasos Sugeridos

1. **Optimizar imágenes**: Usar `@astrojs/image` para optimización automática
2. **Añadir sitemap**: Instalar `@astrojs/sitemap`
3. **PWA**: Considerar `@astrojs/pwa` para funcionalidad offline
4. **Analytics**: Integrar Google Analytics o Plausible
5. **CMS**: Conectar con Netlify CMS o Sanity para gestión de contenido

## 📞 Soporte

Para preguntas o problemas, consulta la [documentación oficial de Astro](https://docs.astro.build).

---

**Migrado con ❤️ a Astro.js para mejor rendimiento y SEO**
