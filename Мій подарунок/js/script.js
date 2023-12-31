let img = document.querySelector('.rule-words__block-img');


img.addEventListener('click', function () {
    img.classList.toggle('active');
    let text = document.querySelector('.rule-words__block-text');
    text.classList.toggle('active');
});

let image = document.querySelector('.right-words__img-open');


image.addEventListener('click', function () {
    image.classList.toggle('active');
});