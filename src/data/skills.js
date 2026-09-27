// Stack técnico y habilidades blandas de la sección "Sobre mí".
//   icon  -> nombre Iconify; astro-icon lo dibuja como SVG en el build (sin imágenes).
//   color -> color de marca oficial (Simple Icons) cuando el logo es de un solo
//            color. Los que en realidad son multicolor o casi negros (Linux/Tux,
//            Figma, GitHub, Apple) van en gris claro para que se lea la silueta.

export const techs = [
  { name: 'JavaScript', icon: 'simple-icons:javascript', color: '#f7df1e' },
  { name: 'React', icon: 'simple-icons:react', color: '#61dafb' },
  { name: 'CSS', icon: 'simple-icons:css3', color: '#1572b6' },
  { name: 'HTML', icon: 'simple-icons:html5', color: '#e34f26' },
  { name: 'Tailwind', icon: 'simple-icons:tailwindcss', color: '#06b6d4' },
  { name: 'Git', icon: 'simple-icons:git', color: '#f05032' },
  { name: 'GitHub', icon: 'simple-icons:github', color: '#f5f5f5' },
  { name: 'Figma', icon: 'simple-icons:figma', color: '#f5f5f5' },
  { name: 'Office', icon: 'simple-icons:microsoftoffice', color: '#d83b01' },
  { name: 'Canva', icon: 'simple-icons:canva', color: '#00c4cc' },
  { name: 'Linux', icon: 'simple-icons:linux', color: '#f5f5f5' },
  { name: 'Mac-OS', icon: 'simple-icons:apple', color: '#f5f5f5' },
  { name: 'Windows', icon: 'simple-icons:windows', color: '#0078d4' },
  { name: 'Azure', icon: 'simple-icons:microsoftazure', color: '#008ad7' },
  { name: 'Zoho Analytics', icon: 'zoho-color', color: '#049949' },
  { name: 'Meta', icon: 'simple-icons:meta', color: '#0081fb' },
];

export const softSkills = [
  { label: 'Trabajo en equipo', icon: 'lucide:users', href: 'https://es.wikipedia.org/wiki/Trabajo_en_equipo' },
  { label: 'Comunicación', icon: 'lucide:message-circle', href: 'https://es.wikipedia.org/wiki/Comunicaci%C3%B3n' },
  { label: 'Pensamiento creativo', icon: 'lucide:lightbulb', href: 'https://es.wikipedia.org/wiki/Pensamiento_creativo' },
  { label: 'Resolución de problemas', icon: 'lucide:puzzle', href: 'https://es.wikipedia.org/wiki/Resoluci%C3%B3n_de_problemas' },
  { label: 'Comunicación efectiva', icon: 'lucide:megaphone', href: 'https://www.iepp.es/comunicacion-efectiva/' },
  { label: 'Escucha activa', icon: 'lucide:ear', href: 'https://es.wikipedia.org/wiki/Escucha_activa' },
  { label: 'Pensamiento crítico', icon: 'lucide:brain', href: 'https://es.wikipedia.org/wiki/Pensamiento_cr%C3%ADtico' },
  { label: 'Creatividad', icon: 'lucide:sparkles', href: 'https://es.wikipedia.org/wiki/Creatividad' },
  { label: 'Gestión de tiempo', icon: 'lucide:clock', href: 'https://es.wikipedia.org/wiki/Gesti%C3%B3n_del_tiempo' },
  { label: 'Responsabilidad', icon: 'lucide:shield-check', href: 'https://es.wikipedia.org/wiki/Responsabilidad' },
];
