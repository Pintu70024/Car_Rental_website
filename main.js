// Select DOM elements
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// Toggle mobile menu
menu.addEventListener('click', () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

// Close menu on scroll
window.addEventListener('scroll', () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
});

// Initialize ScrollReveal
const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true // Set to false if you want animations to happen only once
});

// Apply ScrollReveal animations
sr.reveal('.text', { delay: 200, origin: 'top' });
sr.reveal('.form-container form', { delay: 800, origin: 'left' });
sr.reveal('.heading', { delay: 800, origin: 'top' });
sr.reveal('.ride-container .box', { delay: 600, origin: 'top' });
sr.reveal('.services-container .box', { delay: 600, origin: 'top' });
sr.reveal('.about-container .box', { delay: 600, origin: 'top' });
sr.reveal('.reviews-container .box', { delay: 600, origin: 'top' });
sr.reveal('.newsletter .box', { delay: 400, origin: 'bottom' });
