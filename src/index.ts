const navLinks = document.querySelectorAll('nav a');//select all anchor tags inside nav

navLinks.forEach(link => {//iterate through each link
  link.addEventListener('click', (e) => {
    e.preventDefault(); 

    
    const targetId = link.getAttribute('href')?.substring(1);//remove '#' from href
    const targetSection = document.getElementById(targetId!);//for safety add

   
    targetSection?.scrollIntoView({ behavior: 'smooth' });//smooth scroll
  });
});

const header = document.querySelector('header')!;//non-null assertion
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {//if scrolled more than 50px
    header.classList.add('scrolled');//add class
  } else {
    header.classList.remove('scrolled');//remove class
  }
});
