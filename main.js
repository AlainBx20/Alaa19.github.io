const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu ul');
const menuLinks = document.querySelectorAll('.menu ul li a');

// Show/hide menu
menuToggle.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Smooth scroll and section navigation
menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    // Scroll to the section smoothly
    targetSection.scrollIntoView({ behavior: 'smooth' });

    // Close the menu
    menu.style.display = 'none';
  });
});


// JavaScript to enable smooth scrolling between sections
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  let isScrolling = false;

  document.addEventListener('wheel', (event) => {
    if (isScrolling) return; // Prevent multiple scrolls at once
    isScrolling = true;

    const direction = event.deltaY > 0 ? 1 : -1; // Determine scroll direction
    const currentSection = document.querySelector('.section.active') || sections[0];
    let nextSection;

    // Find the next or previous section
    if (direction === 1) {
      nextSection = currentSection.nextElementSibling;
    } else {
      nextSection = currentSection.previousElementSibling;
    }

    if (nextSection && nextSection.classList.contains('section')) {
      // Scroll to the next section
      nextSection.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(nextSection);
    }

    // Prevent rapid scrolling
    setTimeout(() => {
      isScrolling = false;
    }, 1000);
  });

  // Set the active section for styling or functionality
  function setActiveSection(section) {
    sections.forEach((sec) => sec.classList.remove('active'));
    section.classList.add('active');
  }

  // Initialize the first section as active
  setActiveSection(sections[0]);
});
