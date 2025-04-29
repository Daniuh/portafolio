import '../../styles/style.css';

export async function loadHome() {
  const response = await fetch('/home-page/home-page.html');
  const html = await response.text();
  document.getElementById('homePage').innerHTML = html;
}