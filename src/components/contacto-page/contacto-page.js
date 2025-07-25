import '../../styles/style.css';

export async function loadContact() {
  const response = await fetch('/contacto-page/contacto-page.html');
  const html = await response.text();
  document.getElementById('contactoPage').innerHTML = html;
}