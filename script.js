const darkMode = document.querySelector('.header--dark--btn');
const body = document.querySelector('body')
darkMode.addEventListener('click', function () {
    body.classList.toggle("on");
});

const icon = document.querySelector('.header--toggle--btn');
const header = document.querySelector('#header')
icon.addEventListener('click', function () {
    header.classList.toggle("open");
    
if (header.classList.contains('open')) {
    icon.src = "images/icons/close.png";
} else {
    icon.src = "images/icons/apps.png";
}

});
