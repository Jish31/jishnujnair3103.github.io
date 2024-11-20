// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const sectionId = link.getAttribute('href');
    document.querySelector(sectionId).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Reveal sections on scroll
const sections = document.querySelectorAll('.section, .hero, .portfolio-item');

const revealOnScroll = () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.75) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);

// Add CSS for animation
// .section, .hero, .portfolio-item {
//   opacity: 0;
//   transform: translateY(20px);
//   transition: all 0.5s ease-out;
// }
// .section.visible, .hero.visible, .portfolio-item.visible {
//   opacity: 1;
//   transform: translateY(0);
// }


// Dynamic typing effect for the hero section
const dynamicText = "Business Analytics Enthusiast | AI Innovator | Problem Solver";
let index = 0;

const typeEffect = () => {
  const heroHeading = document.querySelector('.hero-text h2');
  if (index < dynamicText.length) {
    heroHeading.textContent += dynamicText.charAt(index);
    index++;
    setTimeout(typeEffect, 100); // Adjust typing speed here
  }
};

document.addEventListener('DOMContentLoaded', typeEffect);

// Highlight active navigation link
const navLinks = document.querySelectorAll('nav a');

const highlightNav = () => {
  let currentSectionId = '';
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= -50 && rect.top < window.innerHeight / 2) {
      currentSectionId = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.add('active');
    }
  });
};

window.addEventListener('scroll', highlightNav);

// Add CSS for active link
// nav a.active {
//   color: #00bcd4;
//   font-weight: bold;
//   border-bottom: 2px solid #00bcd4;
// }

const form = document.querySelector('#contact form');

form.addEventListener('submit', event => {
  const name = form.querySelector('[name="name"]').value.trim();
  const email = form.querySelector('[name="email"]').value.trim();
  const message = form.querySelector('[name="message"]').value.trim();

  if (!name || !email || !message) {
    event.preventDefault();
    alert('Please fill in all fields before submitting.');
  }
});

