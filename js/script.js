/* Yash Kalbhor Portfolio — navigation and interaction */
console.log("Yash Kalbhor Portfolio Loaded");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");
const navbar = document.querySelector(".navbar");
function updateActiveNavigation() {
    let currentSection = "";
    sections.forEach(section => {
        const top = section.offsetTop - 180;
        if (window.scrollY >= top && window.scrollY < top + section.offsetHeight) {
            currentSection = section.getAttribute("id") || "";
        }
    });
    navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + currentSection);
    });
}
function updateNavbar() {
    if (navbar) navbar.style.boxShadow = window.scrollY > 20 ? "0 8px 30px rgba(0, 0, 0, 0.25)" : "none";
}
window.addEventListener("scroll", updateActiveNavigation, { passive: true });
window.addEventListener("scroll", updateNavbar, { passive: true });
updateActiveNavigation();
updateNavbar();
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
        const targetId = link.getAttribute("href");
        if (!targetId || targetId === "#") return;
        const target = document.getElementById(targetId.slice(1));
        if (!target) return;
        event.preventDefault();
        window.scrollTo({ top: target.offsetTop - (navbar ? navbar.offsetHeight : 0), behavior: "smooth" });
    });
});
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transition = "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease";
    });
});
window.addEventListener("load", () => document.body.classList.add("page-loaded"));
