import '../../styles/style.css';

export async function loadNavigator() {
  const response = await fetch('/navigator-page/navigator-page.html');
  const html = await response.text();
  document.getElementById('navigator').innerHTML = html;
}