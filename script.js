document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Highlight Active Section in Sidebar
    const sections = document.querySelectorAll("section");
    const observerOptions = { root: null, threshold: 0.3 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll("nav ul li a").forEach(link => {
                    link.classList.remove("active");
                });
                document.querySelector(`nav ul li a[href="#${entry.target.id}"]`).classList.add("active");
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // Fade-In Effect on Scroll
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach(el => observer.observe(el));
});