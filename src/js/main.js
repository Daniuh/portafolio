import { loadHome } from '../components/home-page/home-page';
import '../styles/style.css';

document.querySelector('#app').innerHTML = `
  <div id="container">
  </div>
`;

const element = document.querySelector('#container');

loadHome();