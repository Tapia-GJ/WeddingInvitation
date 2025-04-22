# 💒 Invitación de Boda Personalizable

Este es un proyecto web desarrollado con [Astro](https://astro.build/), que representa una **invitación de boda digital** moderna, elegante y personalizable.

## ✨ Características

- ⏳ **Contador regresivo** al gran día.
- 📅 **Detalles del evento** (fecha, hora, ubicación).
- 🗓️ **Programa de actividades** para que los invitados estén informados.
- 👗 **Código de vestimenta** para mantener la elegancia del evento.
- 📍 **Ubicación** con enlace a Google Maps.
- 🖼️ Imágenes personalizadas de la pareja.

## 📁 Estructura del proyecto

```
WEDDINGINVITE/
├── public/                # Imágenes y archivos públicos (accesibles desde el navegador)
│   ├── pareja.jpg
│   └── favicon.svg
├── src/
│   ├── components/        # Componentes reutilizables (contador, héroe, etc.)
│   │   ├── Contador.jsx
│   │   └── Hero.astro
│   ├── layouts/           # Layout base de la página
│   │   └── Layout.astro
│   ├── pages/             # Páginas del sitio
│   │   └── index.astro
│   └── styles/            # Estilos personalizados (si aplica)
├── astro.config.mjs       # Configuración del proyecto Astro
├── package.json           # Dependencias y scripts del proyecto
└── README.md              # Este archivo
```

## 🚀 Cómo usar este proyecto

1. **Clona el repositorio:**

```bash
git clone https://github.com/tuusuario/weddinginvite.git
cd weddinginvite
```

2. **Instala las dependencias:**

```bash
npm install
```

3. **Inicia el servidor de desarrollo:**

```bash
npm run dev
```

4. **Abre en tu navegador:**

```
http://localhost:4321
```

## 🛠️ Personalización

Puedes personalizar las secciones editando los siguientes archivos:

- `Contador.jsx`: ajusta la fecha de la boda.
- `Hero.astro`: agrega un mensaje inicial e imágenes.
- `index.astro`: ordena o agrega secciones como vestimenta, actividades o ubicación.
- `Layout.astro`: estructura general de la página.

## 🎯 Tecnologías utilizadas

- Astro
- JavaScript / JSX
- HTML
- CSS

## ❤️ Contribuciones

Si deseas mejorar el proyecto, ¡las contribuciones son bienvenidas! Puedes hacer un fork, realizar tus cambios y abrir un pull request.

---

> Este proyecto puede ser desplegado fácilmente en plataformas como Vercel, Netlify o GitHub Pages.

## 📸 Vista previa

(Agrega aquí una imagen de muestra del sitio si gustas)