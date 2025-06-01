// Функция для обновления видимости корзины
function updateCartVisibility() {
    const cartProductsContainer = document.querySelector('.cart__products');
    const cart = document.querySelector('.cart');
    const cartTitle = document.querySelector('.cart__title');
    if (cartProductsContainer.children.length > 0) {
        cart.style.display = 'block';
        cartTitle.style.display = 'block'; 
    } else {
        cart.style.display = 'none';
        cartTitle.style.display = 'none'; 
    }
}

// Функция для сохранения корзины в localStorage
function saveCartToLocalStorage() {
    const cartProducts = [];
    const cartProductsContainer = document.querySelectorAll('.cart__product');

    cartProductsContainer.forEach(product => {
        const productId = product.getAttribute('data-id');
        const productCount = parseInt(product.querySelector('.cart__product-count').textContent);
        cartProducts.push({ id: productId, count: productCount });
    });

    localStorage.setItem('cart', JSON.stringify(cartProducts));
}

// Функция для загрузки корзины из localStorage
function loadCartFromLocalStorage() {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
        const cartProducts = JSON.parse(cartData);
        cartProducts.forEach(product => {
            const productElement = document.querySelector(`.product[data-id="${product.id}"]`);
            const productImage = productElement.querySelector('.product__image').src;

            const newCartProduct = document.createElement('div');
            newCartProduct.classList.add('cart__product');
            newCartProduct.setAttribute('data-id', product.id);
            newCartProduct.innerHTML = `
                <img class="cart__product-image" src="${productImage}">
                <div class="cart__product-count">${product.count}</div>
                <div class="cart__product-remove">Удалить</div>
            `;
            document.querySelector('.cart__products').appendChild(newCartProduct);
        });
    }
}

// Получаем все элементы с классом product__add
const addButtons = document.querySelectorAll('.product__add');

// Обработчик события для каждой кнопки добавления
addButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.closest('.product');
        const productId = productElement.getAttribute('data-id');
        const productImage = productElement.querySelector('.product__image').src;
        const productCount = parseInt(productElement.querySelector('.product__quantity-value').textContent);

        // Проверяем, есть ли товар уже в корзине
        const cartProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);

        if (cartProduct) {
            // Если товар уже есть, увеличиваем количество
            const currentCount = parseInt(cartProduct.querySelector('.cart__product-count').textContent);
            cartProduct.querySelector('.cart__product-count').textContent = currentCount + productCount;
        } else {
            // Если товара нет, добавляем его в корзину
            const cartProductsContainer = document.querySelector('.cart__products');
            const newCartProduct = document.createElement('div');
            newCartProduct.classList.add('cart__product');
            newCartProduct.setAttribute('data-id', productId);
            newCartProduct.innerHTML = `
                <img class="cart__product-image" src="${productImage}">
                <div class="cart__product-count">${productCount}</div>
                <div class="cart__product-remove">Удалить</div>
            `;
            cartProductsContainer.appendChild(newCartProduct);
        }

        // Сохраняем корзину в localStorage
        saveCartToLocalStorage();
        // Обновляем видимость корзины
        updateCartVisibility();
    });
});

// Обработчики для кнопок увеличения и уменьшения количества
const quantityControls = document.querySelectorAll('.product__quantity-control');

quantityControls.forEach(control => {
    control.addEventListener('click', () => {
        const quantityValue = control.closest('.product__quantity-controls').querySelector('.product__quantity-value');
        let currentValue = parseInt(quantityValue.textContent);

        if (control.classList.contains('product__quantity-control_inc')) {
            currentValue++;
        } else if (control.classList.contains('product__quantity-control_dec') && currentValue > 1) {
            currentValue--;
        }

        quantityValue.textContent = currentValue;
    });
});

// Обработчик события для кнопок удаления
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('cart__product-remove')) {
        const cartProduct = event.target.closest('.cart__product');
        cartProduct.remove(); // Удаляем товар из корзины
        saveCartToLocalStorage(); // Обновляем localStorage
        updateCartVisibility(); // Обновляем видимость корзины
    }
});

// Загружаем корзину из localStorage при загрузке страницы
loadCartFromLocalStorage();

// Обновляем видимость корзины
updateCartVisibility();




