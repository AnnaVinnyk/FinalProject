//функция для раскрывающегося списка меню
let menuElem = document.getElementById('OurService');
let subMenuElem = document.getElementById('sub');
let titleElem = menuElem.querySelector('.service');
titleElem.onclick = function () {
    if (window.innerWidth <= 700) {
        subMenuElem.classList.toggle('open');
        menuElem.classList.toggle('open');
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
        document.getElementById('MP-Letter').className = 'popuptext';
        document.getElementById('MP-Online').className = 'popuptext';
        sumId = 1;
        LastId = Id;
    };
    if (sumId % 2 == 0) {
        document.getElementById('MP-Call').className = 'popuptext';
        document.getElementById('MP-Letter').className = 'popuptext';
        document.getElementById('MP-Online').className = 'popuptext';
    }
    else {
        var popup = document.getElementById(Id);
        popup.classList.toggle('show');
    }

}