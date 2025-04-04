//Get Elements
const openButton = document.querySelector('#menu-open');
const closeButton = document.querySelector('#menu-close');
const backdrop = document.querySelector('#backdrop');
const navmobile = document.querySelector(".header__nav-mobile");

// Avoid scrolling
function toggleScrollLock(lock) {
    document.body.style.overflow = lock ? 'hidden' : '';
}


openButton.addEventListener('click', () => {
    backdrop.classList.remove('hidden');
    backdrop.classList.add("flex");
    navmobile.classList.add("hidden")
    openBtn.setAttribute("aria-expanded", "true");
    toggleScrollLock(true);
});

closeButton.addEventListener("click", () => {
    backdrop.classList.remove("flex");
    backdrop.classList.add("hidden");
    navmobile.classList.remove("hidden");
    openBtn.setAttribute("aria-expanded", "false");
    toggleScrollLock(false);
});