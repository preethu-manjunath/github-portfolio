document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          entry.target.style.animationDelay = `${index * 0.2}s`;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  });