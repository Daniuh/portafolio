import { loadHome, loadNavigator } from '../components/index.js';
import '../styles/style.css';

document.querySelector('#app').innerHTML = `
<div id="navigator"></div>
<main>
  <section id="home" class="w-full min-h-screen">
    <div id="home"></div>
  </section>

  <section id="about" class="w-full min-h-screen">
    <!-- contenido de Sobre mí -->
  </section>

  <section id="projects" class="w-full min-h-screen">
    <!-- contenido de Proyectos -->
  </section>

  <section id="contact" class="w-full min-h-screen">
    <!-- contenido de Contacto -->
  </section>
</main>
`;

const element = document.querySelector('#container');

loadHome();
loadNavigator();