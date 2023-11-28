const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_buttonR');
const prevButton =document.querySelector('.carousel_buttonL');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

// const slideSize = slides[0].getBoundingClientRect();
// const slideWith = slideSize.width;
const slideWidth = slides[0].getBoundingClientRect().width;


// // //arange the slides next to one another
// slides[0].style.left = slideWidth + 0 + 'px';
// slides[1].style.left = slideWidth + 1 + 'px';
// slides[2].style.left = slideWidth + 2 + 'px';
const setSlidePos = (slide,index) =>{
    slide.style.left = slideWidth * index + 'px';
};
// slides.forEach((slide, index) =>{
//     slide.style.left = slideWidth + index + 'px';
// })
slides.forEach(setSlidePos);

const moveToSlide = (track, currentSlide, targetSlide) =>{
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots =(currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');

}
 const hideShowArrows = (slides, prevButton, nextButton, targetIndex) =>{
     if(targetIndex === 0){
         prevButton.classList.add('is-hidden');
         nextButton.classList.remove('is-hidden');
     }else if (targetIndex === slides.length -1){
         prevButton.classList.remove('is-hidden');
         nextButton.classList.add('is-hidden');
     }else {
         prevButton.classList.remove('is-hidden');
         nextButton.classList.remove('is-hidden');
     }
 }

// // when i click right, move slides to right
prevButton.addEventListener('click', e=>{
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;

    const prevIndex =slides.findIndex(slide=> slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
});
nextButton.addEventListener('click', e=>{
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
//     const amountToMove = nextSlide.style.left;
//     // move to next slide
//     track.style.transform = 'translateX(-' + amountToMove + ')';
//     currentSlide.classList.remove('current-slide');
//     nextSlide.classList.add('current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;

    const nextIndex =slides.findIndex(slide=> slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

//when i click the nav indicator, move to that slide
    dotsNav.addEventListener('click', e =>{
    //what indicator was click on
    const targetDot = e.target.closest('button');
    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const  targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
})


function taal(){
        document.getElementById("Ne").style.display = "none"
    document.getElementById("En").style.display = "block"
}

function NL(){
    document.getElementById("Ne").style.display = "block"
    document.getElementById("En").style.display = "none"
}