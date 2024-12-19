// Змінні
const burgerMenu = document.querySelector('#burgerMenu');
const menuList = document.querySelector('#menuList');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');

// Бургер меню
burgerMenu.addEventListener('click', () => {
    menuList.classList.toggle('show');
    burgerMenu.classList.toggle('rotate');
});

// Зміна теми
// Чорна
button1.addEventListener('click', () => {
    document.body.style.backgroundColor = '#262626';
});
// Біла
button2.addEventListener('click', () => {
    document.body.style.backgroundColor = '#e8e8e8';
});