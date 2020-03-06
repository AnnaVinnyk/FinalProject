let slideIndex = 0,
    buttonIndex = 0;

function Next() {
    let i;
    let NextIndex;
    let slides = document.getElementsByClassName("mySlides-01");
    let buttons = document.getElementsByClassName("karusel-navigator");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0.0";
        buttons[i].className = "karusel-navigator white-on-navy";
    }
    NextIndex = (slideIndex + 1);
    if (NextIndex > slides.length) { slideIndex = 1 }
    else { slideIndex = NextIndex };
    slides[slideIndex - 1].style.opacity = "1.0";
    buttons[slideIndex - 1].className = "karusel-navigator white-on-orange";
    buttonIndex = NextIndex;
}

function Previous() {
    let i;
    let PreviousIndex;
    let slides = document.getElementsByClassName("mySlides-01");
    let buttons = document.getElementsByClassName("karusel-navigator");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0.0";
        buttons[i].className = "karusel-navigator white-on-navy";
    }
    PreviousIndex = (slideIndex - 1);
    if (PreviousIndex == 0) { slideIndex = slides.length }
    else { slideIndex = PreviousIndex };
    slides[slideIndex - 1].style.opacity = "1.0";
    buttons[slideIndex - 1].className = "karusel-navigator white-on-orange";
    buttonIndex = PreviousIndex;
}

function changeIndex(newIndex) {
    let i;
    let slides = document.getElementsByClassName("mySlides-01");
    let buttons = document.getElementsByClassName("karusel-navigator");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0.0";
        buttons[i].className = "karusel-navigator white-on-navy";
    }
    if (newIndex) { slideIndex = newIndex; }
    else { slideIndex++; }
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.opacity = "1.0";
    buttons[slideIndex - 1].className = "karusel-navigator white-on-orange";
    buttonIndex = newIndex;

}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides-01");
    let buttons = document.getElementsByClassName("karusel-navigator");
    //var texts = document.getElementsByClassName("mySlides-02");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0.0";
        buttons[i].className = "karusel-navigator white-on-navy";
        //texts[i].style.opacity = "0.0";
    }
    if (buttonIndex) { slideIndex = buttonIndex; buttonIndex = 0; }
    else { slideIndex++; }
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.opacity = "1.0";
    buttons[slideIndex - 1].className = "karusel-navigator white-on-orange";
    //texts[slideIndex - 1].style.opacity = "1.0";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}

showSlides();
