# 🍳 Buscador de Recetas

Una aplicación web interactiva para buscar recetas por ingredientes. Escribe un ingrediente en español, la aplicación lo traduce al inglés automáticamente y busca recetas que lo contengan.

## ✨ Características

- ✅ Búsqueda de recetas por ingredientes
- 🌐 Traducción automática de español a inglés
- 📋 Lista de ingredientes y medidas
- 📝 Instrucciones detalladas de cada receta
- 🖼️ Imágenes de las recetas
- 📱 Interfaz responsiva y amigable

## 🛠️ Tecnologías Utilizadas

- **React 18** - Librería de interfaz de usuario
- **TypeScript** - Tipado estático
- **Vite** - Herramienta de construcción rápida
- **CSS3** - Estilos personalizados

## 📦 Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn

## 🚀 Instalación

1. Clona o descarga el proyecto:
```bash
# Si usas git
git clone <tu-repositorio>
cd Reactjs-proyecto
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 💻 Cómo Usar

1. **Agregar ingredientes**: Escribe un ingrediente en español en el campo de entrada
2. **Buscar recetas**: Haz clic en "Buscar recetas" o presiona Enter
3. **Ver detalles**: Selecciona "Ver receta" en cualquier tarjeta para ver:
   - Ingredientes con medidas
   - Instrucciones paso a paso (traducidas al español)
   - Imagen de la receta

## 📁 Estructura del Proyecto

```
Reactjs-proyecto/
├── src/
│   ├── components/          # Componentes de React
│   │   ├── IngredientInput.tsx    # Campo para agregar ingredientes
│   │   ├── RecipeList.tsx         # Lista de recetas encontradas
│   │   └── RecipeDetail.tsx       # Detalle de una receta
│   ├── services/
│   │   └── api.ts          # Funciones para llamadas a APIs
│   ├── types/
│   │   ├── recipe.ts       # Tipo para recetas simples
│   │   └── recipeDetail.ts # Tipo para detalles de receta
│   ├── App.tsx             # Componente principal
│   ├── App.css             # Estilos de la aplicación
│   └── main.tsx            # Punto de entrada
├── public/                 # Archivos estáticos
├── index.html              # HTML principal
├── package.json            # Dependencias del proyecto
└── vite.config.ts          # Configuración de Vite
```

## 🔌 APIs Utilizadas

### TheMealDB API
- **Búsqueda de recetas**: `https://www.themealdb.com/api/json/v1/1/filter.php?i={ingrediente}`
- **Detalles de receta**: `https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}`

### Google Translate API
- **Traducción de ingredientes**: `https://translate.googleapis.com/translate_a/single`

## 📝 Scripts Disponibles

```bash
# Inicia el servidor de desarrollo
npm run dev

# Construye la aplicación para producción
npm run build

# Previsualiza la build de producción
npm run preview

# Ejecuta ESLint para verificar la calidad del código
npm run lint
```

## 🎨 Personalización

### Cambiar colores y estilos
Edita los archivos `App.css` e `index.css` para personalizar la apariencia.

### Cambiar imagen de fondo
Reemplaza el archivo en `src/fondos/` y actualiza la ruta en los archivos CSS.

## ⚠️ Notas Importantes

- La aplicación depende de APIs externas (TheMealDB y Google Translate)
- Asegúrate de tener conexión a internet para que funcione correctamente
- Las traducciones se hacen automáticamente al agregar ingredientes

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**¿Encontraste un bug o tienes sugerencias?** ¡Crea un issue o pull request!