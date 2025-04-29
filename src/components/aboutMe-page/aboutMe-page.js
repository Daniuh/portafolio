import '../../styles/style.css';

export async function loadAboutMe() {
  const response = await fetch('/aboutMe-page/aboutMe-page.html');
  const html = await response.text();
  document.getElementById('about').innerHTML = html;
}

