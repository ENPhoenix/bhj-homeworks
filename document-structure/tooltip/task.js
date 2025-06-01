window.addEventListener('load', function() {
const tooltips = document.querySelectorAll('.has-tooltip');
const tooltipElement = document.querySelector('.tooltip');

 tooltips.forEach(tooltip => {
        tooltip.addEventListener('click', function(event) {
            event.preventDefault(); 
            document.querySelectorAll('.tooltip_active').forEach(t => {
                t.classList.remove('tooltip_active');
                t.style.display = 'none';
            });

            const tooltipText = this.getAttribute('title');
            tooltipElement.textContent = tooltipText;
           
            tooltipElement.classList.add('tooltip_active');
            tooltipElement.style.display = 'block';
        });
    });
});