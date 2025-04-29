import '../../styles/style.css';

export async function loadProyectos() {
  const response = await fetch('/proyectos-page/proyectos-page.html');
  const html = await response.text();
  document.getElementById('projectsPage').innerHTML = html;
}
