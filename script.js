// JavaScript for fade-in animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
  
    const fadeInOnScroll = () => {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.style.opacity = '1';
          section.style.transform = 'translateY(0)';
        }
      });
    };
  
    // Initial state
    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(50px)';
      section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
  
    // Add event listener
    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Trigger on page load
  });
  