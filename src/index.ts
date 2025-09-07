const navLinks = document.querySelectorAll('nav a');
const header = document.querySelector('header')!;
const darkModeToggle = document.getElementById('dark-mode-toggle')!;
const body = document.body;

// Smooth scroll
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href')?.substring(1);
    const targetSection = document.getElementById(targetId!);
    targetSection?.scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll shadow
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Dark mode toggle
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
