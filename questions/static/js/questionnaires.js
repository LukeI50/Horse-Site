document.addEventListener("DOMContentLoaded", function() {

    // Check script and dom are loaded
    console.log("Questionnaire Script Loaded")

    // Establish Variables
    const questionCarousel = document.querySelector('#questionCarousel');

    const carousel = new bootstrap.Carousel(questionCarousel, {
        touch: true
    });

    


})