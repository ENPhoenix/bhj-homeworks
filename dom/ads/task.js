const rotators = document.querySelectorAll('.rotator');


rotators.forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');
    let activeIndex = 0;
    
    function changeCase() {
        cases[activeIndex].classList.remove('rotator__case_active');
        activeIndex = (activeIndex + 1) % cases.length; 
        const nextCase = cases[activeIndex];
        const color = nextCase.getAttribute('data-color');
        nextCase.style.color = color;
        nextCase.classList.add('rotator__case_active');
        
        const speed = parseInt(nextCase.getAttribute('data-speed'), 10);
        setTimeout(changeCase, speed);
    }
    const initialColor = cases[activeIndex].getAttribute('data-color');
    cases[activeIndex].style.color = initialColor;
    changeCase();
});