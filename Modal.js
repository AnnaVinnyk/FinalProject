let modal = document.getElementById('myModal');
let btn = document.getElementById("myBtn");
let closeModal = document.getElementsByClassName("close-modal")[0];
//открытие модального окна
btn.onclick = function() {
    document.getElementById('MP-Call').className = 'popuptext';
    document.getElementById('MP-Online').className = 'popuptext';
    modal.style.display = "block";
}
//закрытие модального окна кнопкой Х
closeModal.onclick = function() {
    modal.style.display = "none";
}
//закрытие модального окна при нажатии в любом другом месте
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}