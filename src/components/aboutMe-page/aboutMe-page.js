import '../../styles/style.css';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

export async function loadAboutMe() {
  const response = await fetch('/aboutMe-page/aboutMe-page.html');
  const html = await response.text();
  document.getElementById('about').innerHTML = html;
}

