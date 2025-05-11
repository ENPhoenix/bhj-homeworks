document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const listElement = dropdown.querySelector('.dropdown__list');


        // Сворачивание/разворачивание списка
        valueElement.addEventListener('click', () => {
            listElement.classList.toggle('dropdown__list_active');

        });


        // Замена значения по выбору соответствующего пункта меню
        const items = dropdown.querySelectorAll('.dropdown__item');
        items.forEach(item => {
            item.addEventListener('click', (event) => {
                event.preventDefault(); // Запрет перехода по ссылке
                const selectedValue = item.textContent;
                valueElement.textContent = selectedValue; // Устанавливаем новое значение
                listElement.classList.remove('dropdown__list_active'); // Закрываем список
            });
        });
    });
});