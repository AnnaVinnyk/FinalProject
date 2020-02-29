let menuElem = document.getElementById('OurService');
let subMenuElem = document.getElementById('sub');
let titleElem = menuElem.querySelector('.service');

titleElem.onclick = function () {
    if (window.innerWidth <= 700) {
        subMenuElem.classList.toggle('open');
        menuElem.classList.toggle('open');
    }
}