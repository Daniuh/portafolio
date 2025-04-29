import { loadAboutMe, loadHome, loadNavigator, loadProyectos } from '../components/index.js';
import '../styles/style.css';

document.querySelector('#app').innerHTML = `
<div id="navigator"></div>
<main>
  <section id="home" class="w-full min-h-screen">
    <div id="homePage"></div>
  </section>

  <section id="about" class="w-full min-h-screen">
    <div id="aboutPage" class="w-full min-h-screen"></div>
  </section>

  <section id="projects" class="w-full min-h-screen">
    <div id="projectsPage" class="w-full min-h-screen"></div>
  </section>

  <section id="contact" class="w-full min-h-screen"></section>
</main>
`;

loadHome();
loadNavigator();
loadAboutMe();
loadProyectos();