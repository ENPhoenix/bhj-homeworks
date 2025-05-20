    const fontSizeLinks = document.querySelectorAll('.font-size');
    const book = document.getElementById('book');
    const colorLinks = document.querySelectorAll('.color');

    fontSizeLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            fontSizeLinks.forEach(link => {
                link.classList.remove('font-size_active');
            });
            this.classList.add('font-size_active');
            book.classList.remove('book_fs-big', 'book_fs-small');
            const size = this.getAttribute('data-size');
            if (size === 'big') {
                book.classList.add('book_fs-big');
            } else if (size === 'small') {
                book.classList.add('book_fs-small');
            }
        });


    colorLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            colorLinks.forEach(link => {
                link.classList.remove('color_active');
            });
            this.classList.add('color_active');
            book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
            const textColor = this.getAttribute('data-text-color');
            if (textColor) {
                book.classList.add(`book_color-${textColor}`);
            }
            const bgColor = this.getAttribute('data-bg-color');
            if (bgColor) {
                book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
                book.classList.add(`book_bg-${bgColor}`);
            }
        });
    });
    });