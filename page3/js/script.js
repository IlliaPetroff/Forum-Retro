// Елементи
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');

// Зміна теми
// Чорна
button1.addEventListener('click', () => {
    document.body.style.backgroundColor = '#262626';
});
// Біла
button2.addEventListener('click', () => {
    document.body.style.backgroundColor = '#e8e8e8';
});

// КОМЕНТАРІ
const comwindow = document.querySelector('.comment-window');
const comment = document.querySelector('.comment');

comment.addEventListener('click', () => {
    comwindow.classList.toggle('show');
});

const commentBox = document.querySelector('#comment-box');
const addCommentBtn = document.querySelector('#add-comment-btn');
const commentsContainer = document.querySelector('#comments');

// Обробник кліку на кнопку
addCommentBtn.addEventListener('click', () => {
const commentText = commentBox.value.trim();
if (commentText !== '') {
    addComment(commentText);
    commentBox.value = '';
} else {
    alert('The comment field cannot be empty!');
}
});

// Функція додавання коментаря
function addComment(text) {
    const comment = document.createElement('div');
    comment.classList.add('com2');
    comment.textContent = text;
    commentsContainer.appendChild(comment);
}