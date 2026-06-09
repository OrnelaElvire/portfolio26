document.addEventListener("DOMContentLoaded", function () {

    // 🔹 1. Scroll fluide pour les ancres (si tu as #accueil etc.)
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // 🔹 2. Animation simple au scroll (apparition des sections)
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.classList.add("hidden");
        observer.observe(section);
    });

});