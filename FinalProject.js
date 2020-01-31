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
let subMenuElem = document.getElementById('sub');
let titleElem = menuElem.querySelector('.service');

titleElem.onclick = function () {
    if (window.innerWidth <= 700) {
        subMenuElem.classList.toggle('open');
        menuElem.classList.toggle('open');
        flag = 0;
    }
}