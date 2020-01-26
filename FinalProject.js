/*OurService.onclick = function () {
    if (window.innerWidth <= 700) {
        //sub.style.display = "none";
        if (sub.style.display === "block") {
            //sub.style.position = "absolute";
            sub.style.display = "none";
        }
        else {
            sub.style.position = "relative";
            sub.style.display = "block";
        }
    }
    else { sub.style.position = "absolute"; }
}*/


let menuElem = document.getElementById('OurService');
let titleElem = menuElem.querySelector('.service');

titleElem.onclick = function () {
    if (window.innerWidth <= 700) {
        sub.style.position = "relative";
        menuElem.classList.toggle('open');
    }
    else {
        sub.style.position = "absolute";
        menuElem.classList.toggle('');
    }
}