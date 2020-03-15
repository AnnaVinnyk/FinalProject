//функция для кнопки ВВЕРХ
var goTopBtn = document.querySelector('.on-top');
window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);
//появляется-исчезает кнопка ВВЕРХ
function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;
    if (scrolled > coords) {
        goTopBtn.classList.add('on-top-show');
    }
    if (scrolled < coords) {
        goTopBtn.classList.remove('on-top-show');
    }
}
//скролинг после нажатия на кнопку ВВЕРХ
function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -20);
        setTimeout(backToTop, 0);
    }
}



//функции для всплывающих сообщений popup
let closePopup = document.getElementsByClassName("close-popup");
//всплывает сообщение
function myFunction(Id) {
    document.getElementById('MP-Call').className = 'popuptext';
    document.getElementById('MP-Online').className = 'popuptext';
    let popup = document.getElementById(Id);
    popup.classList.toggle('show');
}
//прячутся сообщения
closePopup[0].onclick = function () {
    document.getElementById('MP-Call').className = 'popuptext';
    /*document.getElementById('MP-Online').className = 'popuptext';*/
}
closePopup[1].onclick = function () {
    /*document.getElementById('MP-Call').className = 'popuptext';*/
    document.getElementById('MP-Online').className = 'popuptext';
}