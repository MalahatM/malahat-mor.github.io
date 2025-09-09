const navLinks = document.querySelectorAll('nav a');// Select all navigation links
const header = document.querySelector('header')!;// Select the header
const darkModeToggle = document.getElementById('dark-mode-toggle')!;// Select the dark mode toggle button
const body = document.body;// Select the body element

// Smooth scroll
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {// Add click event listener to each link
    e.preventDefault();
    const targetId = link.getAttribute('href')?.substring(1);
    const targetSection = document.getElementById(targetId!);// Get the target
    targetSection?.scrollIntoView({ behavior: 'smooth' });// Smooth scroll to the target section
  });
});

// Scroll shadow
window.addEventListener('scroll', () => {// Add scroll event listener
  if (window.scrollY > 50) {// If scrolled more than 50px
    header.classList.add('scrolled');// Add shadow class
  } else {
    header.classList.remove('scrolled');// Remove shadow class
  }
});

// Dark mode toggle
darkModeToggle.addEventListener('click', () => {// Add click event listener to the toggle button
  body.classList.toggle('dark-mode');// Toggle dark mode class on body
});
