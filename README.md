# Portafolio — Daniel Naranjo

Portafolio personal construido con **Astro** y **Tailwind CSS v4**.
Los logos de tecnologías y los iconos de habilidades son SVG vectoriales
(`astro-icon` + Iconify: `simple-icons` y `lucide`), no imágenes.

- Producción: **https://daniuh.dev**

## Comandos

| Comando           | Acción                                         |
| ----------------- | ---------------------------------------------- |
| `npm install`     | Instala las dependencias                       |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`     |
| `npm run build`   | Genera el sitio estático en `dist/`            |
| `npm run preview` | Sirve `dist/` localmente para revisar el build |

## Estructura

```
src/
  layouts/BaseLayout.astro   # <head>, SEO/OpenGraph, JSON-LD
  pages/index.astro          # página única con las 4 secciones + scroll-spy
  components/                # Navigator, Home, AboutMe, Projects, Contact (solo maquetado)
  data/                      # site, navigation, home, about, contact, projects, skills (todo el contenido)
  styles/global.css          # tokens de diseño (@theme) + animaciones + marquesinas
public/assets/               # imágenes, iconos y CV
```

## Estilo

Colores, radios, sombras y duraciones se definen una sola vez como tokens en
`@theme` (ver `src/styles/global.css`) y se usan con utilidades semánticas
(`bg-surface`, `text-accent`, `rounded-photo`…). Los componentes no llevan
colores ni textos sueltos: el contenido vive en `src/data`.
