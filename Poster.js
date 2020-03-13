let posterIndex = 0;
//функция задаёт прозрачность 0.0 для всех картинок карусели     
//и выделяет белым цветом все кружки в навигации карусели
function zeroOpacity(xPoster) {
    for (let i = 0; i < xPoster.length-1; i++) {
        xPoster[i].className = "myPosterShow image-00 image-02";
    }
}

//функция задаёт прозрачность 1.0 для видимой картинки карусели
//и выделяет оранжевым цветом кружок с номером видимой картинки
function noOpacity(xPoster, xPosterIndex) {
    xPoster[xPosterIndex - 1].className = "myPosterShow image-00 image-01";
}

//функция для автоматического листания картинок карусели (рекурсия)  
function showPoster() {
    let i;
    let poster = document.getElementsByClassName("myPosterShow");
    zeroOpacity(poster);
    //если было изменение индекса с помощью навигации, то buttonIndex не нулевое значение
    //и значение из buttonIndex передаётся в slideIndex, а buttonIndex обнуляется
    //в противном случае навигация не была исользована и slideIndex просто увеличивается на 1  
    posterIndex++;
    //проверка, чтобы не выйти за общее количество слайдов
    if (posterIndex > poster.length-1) { posterIndex = 1 }
    noOpacity(poster, posterIndex);
    //рекурсия для закливания каруселии
    setTimeout(showPoster, 1000);
}

showPoster();