// Footer year, kept accurate automatically.
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth-scroll offset correction for the fixed-ish header, and a small
// "active section" highlight in the nav — purely progressive enhancement.
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
const sections = Array.from(navLinks)
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window && sections.length){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        const id = `#${entry.target.id}`;
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === id ? 'var(--ink)' : '';
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(section => observer.observe(section));
}
