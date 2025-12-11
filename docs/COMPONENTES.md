# Guía de Componentes

Esta guía detalla cada componente del proyecto, dónde encontrarlo y cómo funciona.

## Componentes de Estructura (Layout)

Ubicación: `src/components/layout/`

### 1. Navbar (Barra de Navegación)

- **Archivo**: `Navbar.jsx`
- **Estilos**: `src/styles/components/Navbar.css`
- **Función**: Menú principal que permite navegar entre secciones mediante scroll suave.
- **Características**:
  - Cambia de estilo al hacer scroll (fondo sólido).
  - Incluye selector de idioma (ES/EN) - _Actualmente visual_.
  - Logo personalizable.

### 2. Footer (Pie de Página)

- **Archivo**: `Footer.jsx`
- **Estilos**: `src/styles/components/Footer.css`
- **Función**: Muestra información de copyright y enlaces sociales al final de la página.
- **Contenido**:
  - Año actual (se actualiza automáticamente).
  - Enlaces a redes sociales (GitHub, LinkedIn).

---

## Secciones de Contenido (Sections)

Ubicación: `src/components/sections/`

### 1. Hero (Sección de Inicio)

- **Archivo**: `Hero.jsx`
- **Estilos**: `src/styles/components/Hero.css`
- **Descripción**: La primera impresión del sitio. Incluye tu nombre, rol, breve descripción y una imagen tuya.
- **Personalizar**:
  - Título y subtítulo en las etiquetas `<h1>` y `<h2>`.
  - Imagen de perfil en `src/assets/profile.png` (o cambiar la ruta en el código).

### 2. About (Sobre Mí)

- **Archivo**: `About.jsx`
- **Estilos**: `src/styles/components/About.css`
- **Descripción**: Información detallada sobre tu experiencia y habilidades.
- **Habilidades (Skills)**:
  - Definidas en el array `skills` dentro del componente.
  - Puedes ajustar el nombre y el porcentaje de cada habilidad fácilmente.

### 3. Services (Servicios)

- **Archivo**: `Services.jsx`
- **Estilos**: `src/styles/components/Services.css`
- **Descripción**: Lista de servicios que ofreces.
- **Personalizar**:
  - Los servicios están en un array llamado `services`.
  - Cada servicio tiene un icono (SVG), título, descripción y etiquetas.

### 4. Portfolio (Proyectos)

- **Archivo**: `Portfolio.jsx`
- **Estilos**: `src/styles/components/Portfolio.css`
- **Descripción**: Galería de tus trabajos destacados con filtros por categoría.
- **Personalizar**:
  - Modifica el array `projects` para añadir tus propios trabajos.
  - Cada proyecto incluye imagen, título, descripción, tecnologías y enlaces.

### 5. Contact (Contacto)

- **Archivo**: `Contact.jsx`
- **Estilos**: `src/styles/components/Contact.css`
- **Descripción**: Formulario para que los visitantes te envíen mensajes.
- **Nota**: Actualmente es solo visual. Para recibir correos reales, necesitarás integrar un servicio como EmailJS o un backend.
