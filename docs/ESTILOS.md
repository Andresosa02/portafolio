# Sistema de Estilos y Diseño

El proyecto utiliza un sistema de estilos CSS moderno y modular, basado en variables CSS para facilitar cambios globales.

## 🎨 Variables Globales

Ubicación: `src/styles/base/variables.css`

Aquí es donde defines la "personalidad" de tu sitio. Cambiando estos valores, todo el sitio se actualiza automáticamente.

### Colores Principales

```css
:root {
  --primary: #4169ff; /* Color principal (botones, enlaces) */
  --primary-dark: #2d4dd4; /* Versión oscura para hover */
  --secondary: #00d4ff; /* Color secundario */
  --accent: #ff6b6b; /* Color de acento */
  --bg-primary: #0a0e27; /* Fondo principal de la página */
}
```

### Espaciado y Medidas

Controlamos el espacio entre elementos con variables como `--spacing-md` o `--container-max`.

---

## 📂 Organización de Estilos

Los estilos CSS están divididos para ser más manejables:

1. **`styles/base/`**: Estilos globales.

   - `variables.css`: Colores, fuentes, medidas.
   - `reset.css`: Normalización de estilos entre navegadores.
   - `typography.css`: Estilos de texto (h1-h6, p, enlaces).
   - `ui.css`: Botones, tarjetas, formularios y barras de habilidades.
   - `layout.css`: Contenedores, grillas y diseño responsivo.
   - `animations.css`: Keyframes y clases de animación.

2. **`styles/components/`**: Estilos específicos.

   - Cada componente tiene su propio archivo CSS (ej. `Navbar.css`, `Hero.css`).
   - Estos estilos solo deberían afectar a ese componente específico.

3. **`styles/index.css`**: Archivo maestro.
   - Importa todos los archivos base.
   - Es el punto de entrada de los estilos en la aplicación.

## ✏️ Cómo hacer cambios comunes

### Cambiar la fuente

1. Busca una fuente en [Google Fonts](https://fonts.google.com).
2. Copia el enlace `@import` proporcionado.
3. Pégalo en la primera línea de `src/styles/base/typography.css`.
4. Actualiza la variable `font-family` en `src/styles/base/reset.css`.

### Cambiar el color de fondo

Edita `--bg-primary` en `src/styles/base/variables.css`.

### Modificar botones

Los estilos de los botones (`.btn`, `.btn-primary`, `.btn-outline`) se encuentran en `src/styles/base/ui.css`.
