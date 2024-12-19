// LukeI50's Emmet JS Utility Functions
class UtilityFunctions{
    hideElement(targetElement) {
        targetElement.classList.add('d-none');
    }
    showElement(targetElement) {
        targetElement.classList.remove('d-none');
    }
};




document.addEventListener("DOMContentLoaded", function() {





    // Check script and dom are loaded
    console.log("Questionnaire Script Loaded")

    // Establish Variables
    const questionCarousel = document.getElementById('questionCarousel');
    const carouselsNext = document.getElementById('questionCarouselNext')
    const carouselsPrevious = document.getElementById('questionCarouselPrevious')

    const allAnswers = document.getElementsByClassName('answer-options')
    const carouselItems = document.getElementsByClassName('carousel-item');

    const submitButton = document.createElement('button')

    console.log(carouselItems)

    let currentQuestion = 0;

    // Set Current question on load.
    for (let carouselItem of carouselItems) {
        if (carouselItem.classList.contains('active')) {
            currentQuestion = carouselItem.getAttribute('data-question-id');
        };
    };

    // Hide previous button initially
    carouselsPrevious.classList.add('d-none');

    // Create instance of UtilityFunctions class
    const utilityFunctions = new UtilityFunctions(); 


    questionCarousel.addEventListener('slide.bs.carousel', (e) => {
        if (e.to === 0) {
            utilityFunctions.hideElement(carouselsPrevious);
        } else if (carouselsPrevious.classList.contains('d-none')) {
            utilityFunctions.showElement(carouselsPrevious);
        }

        if (e.to === carouselItems.length) {
            utilityFunctions.hideElement(carouselsNext);
        } else if (carouselsNext.classList.contains('d-none')) {
            utilityFunctions.hideElement(carouselsNext);
        }


        // currentQuestion = event.relatedTarget
        currentQuestion = e.relatedTarget.getAttribute('data-question-id');
        console.log(currentQuestion);

        // get answer weighting

    })



});

