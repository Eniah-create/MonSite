const images = document.querySelectorAll(".photos-chantier img");

images.forEach(image => {
    image.addEventListener("click", () => {
        const overlay = document.createElement("div");
        overlay.classList.add("lightbox");

        overlay.innerHTML = `
            <img src="${image.src}">
        `;

        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {
            overlay.remove();
        });
    });
});
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.2
});

sections.forEach((section) => {
    observer.observe(section);
});