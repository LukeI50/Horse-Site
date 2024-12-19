document.addEventListener("DOMContentLoaded", function() {

    // Check script and dom are loaded
    console.log("Questionnaire Script Loaded")

    // Establish Variables
    const questionCarousel = document.getElementById('questionCarousel');
    const carouselsNext = document.getElementById('questionCarouselNext')
    const carouselPrevious = document.getElementById('questionCarouselPrevious')

    const allAnswers = document.getElementsByClassName('answer-options')
    const carouselItems = document.getElementsByClassName('carousel-item');

    console.log(carouselItems)

    let currentQuestion = 0;

    // Set Current question on load.
    for (let carouselItem of carouselItems) {
        if (carouselItem.classList.contains('active')) {
            let currentQuestion = carouselItem.getAttribute('data-question-id');
        };
    };


    questionCarousel.addEventListener('slide.bs.carousel', (e) => {
        console.log(event.relatedTarget);
        // currentQuestion = event.relatedTarget
        currentQuestion = e.relatedTarget.getAttribute('data-question-id');
        console.log(currentQuestion);
    })

});
