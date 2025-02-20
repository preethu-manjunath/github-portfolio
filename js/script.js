document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const section = document.querySelector(event.target.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Adding fade-in effect to sections
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.2 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
});
