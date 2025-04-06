// ========== NAV MOBILE ==========
const openButton = document.querySelector("#menu-open");
const closeButton = document.querySelector("#menu-close");
const backdrop = document.querySelector("#backdrop");
const navmobile = document.querySelector(".header__nav-mobile");
const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error-msg-wrapper");
const errorIcon = document.getElementById("error-icon");
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

// ========== FORM ==========
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        errorMsg.classList.remove("hidden");
        errorIcon.classList.remove("hidden");

    } else {
        errorMsg.classList.add("hidden");
        errorIcon.classList.add("hidden");
        form.submit(); // Aquí podrías enviar o mostrar un success modal
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners for each tab
    const tabs = document.querySelectorAll('.tabs a');
    
    tabs.forEach((tab) => {
        tab.addEventListener('click', function (e) {
        e.preventDefault();  // Prevent the default anchor behavior
        setActive(this);     // Trigger the setActive function when a tab is clicked
        });
    });
});

function setActive(link) {
    console.log("setActive function triggered");
    const sections = document.querySelectorAll(".tab-section");
    const tabs = document.querySelectorAll(".tabs li");

    // Hide all sections
    sections.forEach((section) => section.classList.add("hidden"));

    // Remove active styles from all tabs
    tabs.forEach((tab) => {
        const anchor = tab.querySelector("a");
        const span = tab.querySelector("span");
        anchor.classList.remove("active", "text-newred-400");
        span.classList.remove("bg-newred-400");
        span.classList.add("hidden"); // hide the line again
    });

    // Show the selected section
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    targetSection.classList.remove("hidden");
    targetSection.classList.add("flex");

    // Add active styles to the clicked tab
    link.classList.add("active", "text-newred-400");
    const activeSpan = link.parentElement.querySelector("span");
    activeSpan.classList.remove("hidden");
    activeSpan.classList.add("bg-newred-400");
}


