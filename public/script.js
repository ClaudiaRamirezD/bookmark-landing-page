// ========== NAV MOBILE ==========
const openButton = document.querySelector("#menu-open");
const closeButton = document.querySelector("#menu-close");
const backdrop = document.querySelector("#backdrop");
const navmobile = document.querySelector(".header__nav-mobile");

function toggleScrollLock(lock) {
    document.body.style.overflow = lock ? "hidden" : "";
}

openButton.addEventListener("click", () => {
    backdrop.classList.remove("hidden");
    backdrop.classList.add("flex");
    navmobile.classList.add("hidden");
    openButton.setAttribute("aria-expanded", "true");
    toggleScrollLock(true);
});

closeButton.addEventListener("click", () => {
    backdrop.classList.remove("flex");
    backdrop.classList.add("hidden");
    navmobile.classList.remove("hidden");
    openButton.setAttribute("aria-expanded", "false");
    toggleScrollLock(false);
});

// ========== FAQ ACCORDION ==========
document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach((faq) => {
        faq.addEventListener("click", () => {
        const isOpen = faq.getAttribute("aria-expanded") === "true";

        // Cierra todos
        faqs.forEach((item) => {
            const answer = item.querySelector(".answer");
            const icon = item.querySelector(".faq-icon");
            item.setAttribute("aria-expanded", "false");
            answer.classList.add("hidden");
            answer.setAttribute("aria-hidden", "true");
            icon.classList.remove("icon-active");
        });

        // Si estaba cerrado, lo abre
        if (!isOpen) {
            const answer = faq.querySelector(".answer");
            const icon = faq.querySelector(".faq-icon");

            faq.setAttribute("aria-expanded", "true");
            answer.classList.remove("hidden");
            answer.setAttribute("aria-hidden", "false");
            icon.classList.add("icon-active");
        }
        });
    });
});
