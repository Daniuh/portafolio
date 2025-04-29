import '../../styles/style.css';

export async function loadNavigator() {
  const response = await fetch('/navigator-page/navigator-page.html');
  const html = await response.text();
  document.getElementById('navigator').innerHTML = html;
}

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const links = document.querySelectorAll('.menu-link');

  let currentSectionId = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSectionId = section.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.remove('border-b-2', 'border-yellow-300', 'text-yellow-300');
    if (link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.add('border-b-2', 'border-yellow-300', 'text-yellow-300');
    }
  });
});