# Guía de Personalización Paso a Paso

Sigue estos pasos para transformar esta plantilla en tu portafolio personal único.

## Pasa 1: Información Básica

Abre `src/components/sections/Hero.jsx` y edita:

1. **Tu Nombre**: Busca `<span className="gradient-text">Andrés Boada</span>` y pon tu nombre.
2. **Tu Título**: Cambia "Desarrollador Full Stack" por tu profesión.
3. **Descripción**: Edita el párrafo `<p>` con tu breve biografía profesional.
4. **Redes Sociales**: Actualiza los enlaces `href` de los iconos de GitHub y LinkedIn.

## Paso 2: Tu Foto

1. Consigue una foto tuya profesional, preferiblemente con fondo transparente (PNG).
2. Nómbrala `profile.png`.
3. Reemplaza el archivo existente en la carpeta `public/` (en la raíz del proyecto).
   - _Nota: Si tu imagen tiene otro nombre, actualiza la etiqueta `<img>` en `Hero.jsx`_.

## Paso 3: Sobre Ti y Habilidades

Abre `src/components/sections/About.jsx`:

1. **Biografía**: Edita el texto principal.
2. **Información de Contacto**: Actualiza tu email, teléfono y ubicación en los items de contacto.
3. **Habilidades**: Busca el array `const skills = [...]`.
   ```javascript
   const skills = [
     { name: "Tu Habilidad", level: 90 }, // level es el porcentaje (0-100)
     // ... agrega o quita las que quieras
   ];
   ```

## Paso 4: Tus Servicios

Abre `src/components/sections/Services.jsx`:

1. Localiza el array `const services`.
2. Modifica cada objeto para reflejar lo que ofreces.
3. Puedes cambiar el título, descripción y etiquetas.
4. Si quieres cambiar los iconos, puedes usar SVGs de sitios como `feathericons.com` o `heroicons.com` y reemplazar el código `<svg>...</svg>`.

## Paso 5: Portafolio de Proyectos

Abre `src/components/sections/Portfolio.jsx`:

1. Encuentra `const projects`.
2. Añade tus propios proyectos siguiendo este formato:
   ```javascript
   {
     id: 1,
     title: "Nombre del Proyecto",
     category: "Categoría (ej. Web, Móvil)", // Debe coincidir con uno de los filtros
     image: "/ruta-a-tu-imagen-de-proyecto.jpg", // Pon las imágenes en la carpeta public/
     description: "Breve descripción...",
     stack: ["React", "Node.js"], // Tecnologías usadas
     links: {
       demo: "https://tu-demo.com",
       code: "https://github.com/tu-repo"
     }
   }
   ```
3. Asegúrate de añadir las imágenes de tus proyectos en la carpeta `public/`.

## Paso 6: Colores y Estilo

Si quieres cambiar los colores para que coincidan con tu marca personal:

1. Abre `src/styles/base/variables.css`.
2. Cambia los valores HEX de `--primary`, `--secondary`, etc.
3. Guarda y verás los cambios instantáneamente.

---

¡Disfruta de tu nuevo portafolio profesional! 🚀
