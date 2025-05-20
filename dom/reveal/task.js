const reveals = document.querySelectorAll('.reveal');
function isVisible(el) {
    const { top, bottom } = el.getBoundingClientRect();
    return bottom > 0 && top < window.innerHeight;
}
function revealOnScroll() {
    reveals.forEach(el => {
        if (isVisible(el)) {
            el.classList.add('reveal_active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

