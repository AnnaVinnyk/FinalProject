let posterIndex = 1;
//функция для автоматического листания постеров (рекурсия)  
function showPoster() {
    let i;
    let poster = document.getElementsByClassName("myPosterShow");
    //проверка, чтобы не выйти за общее количество постеров
    if (posterIndex < poster.length) {
        //задаёт прозрачность 1.0 видимому постеру 
        //изначально все постеры (кроме первого) имеют прозрачность 0.0
        poster[posterIndex].style.opacity = "1.0";
        posterIndex++;
        //рекурсия для закливания постеров
        setTimeout(showPoster, 1000);
    }
}

setTimeout(showPoster, 1000);