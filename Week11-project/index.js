// image slider

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

//initializeSlider();

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }

}
function showSlide(index){
    
    if(index >= slides.length){
        slideIndex = 0;
    } else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
    resetInterval();
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
    resetInterval();
}
function resetInterval(){
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 5000);
}

const spinner = document.getElementsByClassName(".spinner")

function spin() {
    spinner.addEventListener('mouseover', function(){
        spinner.classList.add('spin');
    });
    spinner.addEventListener('mouseleave', function(){
        spinner.classList.remove('spin');
    });
}