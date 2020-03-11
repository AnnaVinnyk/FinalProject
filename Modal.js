let modal = document.getElementById('myModal');
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
//открытие модального окна
btn.onclick = function() {
    modal.style.display = "block";
}
//закрытие модального окна кнопкой Х
span.onclick = function() {
    modal.style.display = "none";
}
//закрытие модального окна при нажатии в любом другом месте
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}