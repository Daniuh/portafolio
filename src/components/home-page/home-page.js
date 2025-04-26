import '../../styles/style.css';

export async function loadHome() {
  const response = await fetch('/src/components/home-page/home-page.html');
  const html = await response.text();
  document.getElementById('container').innerHTML = html;
}