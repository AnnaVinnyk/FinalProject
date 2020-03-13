let slideIndex = 0,
    buttonIndex = 0;
//функция задаёт прозрачность 0.0 для всех картинок карусели     
//и выделяет белым цветом все кружки в навигации карусели
function zeroOpacity(xSlides, xButtons) {
    for (let i = 0; i < xSlides.length - 1; i++) {
        if (window.innerWidth > 700) {xSlides[i].className = "mySlideShow image-00 image-02 cursor";}
        else { xSlides[i].className = "myLittleSlideShow image-00 image-02 cursor"; }
        xButtons[i].className = "karusel-navigator white-border-and-color";
    }
}

//функция задаёт прозрачность 1.0 для видимой картинки карусели
//и выделяет оранжевым цветом кружок с номером видимой картинки
function noOpacity(xSlides, xButtons, xSlideIndex) {
    if (window.innerWidth > 700) {xSlides[xSlideIndex - 1].className = "mySlideShow image-00 image-01 cursor";}
    else { xSlides[xSlideIndex - 1].className = "myLittleSlideShow image-00 image-01 cursor"; }
    xButtons[xSlideIndex - 1].className = "karusel-navigator orange-border-and-color";
}

//функция для листания картинок карусели вперёд  
function Next() {
    let i;
    let NextIndex;
    let className;
    if (window.innerWidth > 700) { className = "mySlideShow"; }
    else { className = "myLittleSlideShow"; }
    let slides = document.getElementsByClassName(className);
    let buttons = document.getElementsByClassName("karusel-navigator");
    zeroOpacity(slides, buttons);
    NextIndex = (slideIndex + 1);
    //проверка, чтобы не выйти за общее количество слайдов
    if (NextIndex > slides.length - 1) { slideIndex = 1 }
    else { slideIndex = NextIndex };
    noOpacity(slides, buttons, slideIndex);
    //передаётся значение buttonIndex, тем самым указывая, что было изменение индекса с помощью навигации
    buttonIndex = NextIndex;
}

//функция для листания картинок карусели назад  
function Previous() {
    let i;
    let PreviousIndex;
    let className;
    if (window.innerWidth > 700) { className = "mySlideShow"; }
    else { className = "myLittleSlideShow"; }
    let slides = document.getElementsByClassName(className);
    let buttons = document.getElementsByClassName("karusel-navigator");
    zeroOpacity(slides, buttons);
    PreviousIndex = (slideIndex - 1);
    //проверка, чтобы не выйти за ноль
    if (PreviousIndex == 0) { slideIndex = slides.length - 1 }
    else { slideIndex = PreviousIndex };
    noOpacity(slides, buttons, slideIndex);
    //передаётся значение buttonIndex, тем самым указывая, что было изменение индекса с помощью навигации
    buttonIndex = PreviousIndex;
}

//функция для листания картинок карусели по номерам 
function changeIndex(newIndex) {
    let i;
    let className;
    if (window.innerWidth > 700) { className = "mySlideShow"; }
    else { className = "myLittleSlideShow"; }
    let slides = document.getElementsByClassName(className);
    let buttons = document.getElementsByClassName("karusel-navigator");
    zeroOpacity(slides, buttons);
    slideIndex = newIndex;
    noOpacity(slides, buttons, slideIndex);
    //передаётся значение buttonIndex, тем самым указывая, что было изменение индекса с помощью навигации
    buttonIndex = newIndex;
}

//функция для автоматического листания картинок карусели (рекурсия)  
function showSlides() {
    let i;
    let className;
    if (window.innerWidth > 700) {className = "mySlideShow";}
    else { className = "myLittleSlideShow"; }
    let slides = document.getElementsByClassName(className);
    let buttons = document.getElementsByClassName("karusel-navigator");
    zeroOpacity(slides, buttons);
    //если было изменение индекса с помощью навигации, то buttonIndex не нулевое значение
    //и значение из buttonIndex передаётся в slideIndex, а buttonIndex обнуляется
    //в противном случае навигация не была исользована и slideIndex просто увеличивается на 1  
    if (buttonIndex) { slideIndex = buttonIndex; buttonIndex = 0; }
    else { slideIndex++; }
    //проверка, чтобы не выйти за общее количество слайдов
    if (slideIndex > slides.length - 1) { slideIndex = 1 }
    noOpacity(slides, buttons, slideIndex);
    //рекурсия для закливания каруселии
    setTimeout(showSlides, 4000);
}

showSlides();
