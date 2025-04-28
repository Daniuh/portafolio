import { loadHome, loadNavigator } from '../components/index.js';
import '../styles/style.css';

document.querySelector('#app').innerHTML = `
  <div id="home"></div>
  <div id="navigator"></div>
`;

const element = document.querySelector('#container');

loadHome();
loadNavigator();