//функция для кнопки ВВЕРХ
var goTopBtn = document.querySelector('.on-top');
window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);

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
function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -20);
        setTimeout(backToTop, 0);
    }
}



//функция для всплывающих окон сервиса
let Id = '';
let LastId = '';
let sumId = 1;
function myFunction(Id) {
    if (LastId == Id) { sumId += 1 }
    else {
        document.getElementById('MP-Call').className = 'popuptext';
        /*document.getElementById('MP-Letter').className = 'popuptext';*/
        document.getElementById('MP-Online').className = 'popuptext';
        sumId = 1;
        LastId = Id;
    };
    if (sumId % 2 == 0) {
        document.getElementById('MP-Call').className = 'popuptext';
        /*document.getElementById('MP-Letter').className = 'popuptext';*/
        document.getElementById('MP-Online').className = 'popuptext';
    }
    else {
        var popup = document.getElementById(Id);
        popup.classList.toggle('show');
    }
}