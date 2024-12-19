// LukeI50's Emmet JS Utility Functions
class UtilityFunctions{
    elementCreate(element_name, class_list=[], text="", action="", method="", href="", attributes_obj={}) {
        const newElement = document.createElement(element_name);

        if (Array.isArray(class_list)) {
            newElement.classList.add(...class_list);
        } else {
            newElement.classList.add(class_list);
        }

        newElement.innerText = text;

        if (attributes_obj && Object.keys(attributes_obj).length > 0) {
            Object.entries(attributes_obj).forEach(([key, value]) => {
                newElement.setAttribute(key, value);
            });
        }

        return newElement
    };


    cookieCreate(cookie_name, cookie_value) {
        document.cookie = `${cookie_name}=` + `${cookie_value}` + "; path=/; Secure; SameSite=None;"
    };


    cookieCreateFromObj(name_and_value) {
        let cookieString = "";
        Object.entries(name_and_value).forEach(([key, value]) => {
            cookieString += `${key}=${value}; `;
        });
        document.cookie = `${cookieString}` + "path=/; Secure; SameSite=None;"
        
    }
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
    const carouselsNext = document.getElementById('questionCarouselNext');
    const carouselsPrevious = document.getElementById('questionCarouselPrevious');

    const allAnswers = document.getElementsByClassName('answer-options');
    const carouselItems = document.getElementsByClassName('carousel-item');
    const carouselControlsContainer = document.getElementById('question-carousel-controls');


    // Create instance of UtilityFunctions class
    const utilityFunctions = new UtilityFunctions(); 

    console.log(carouselItems)

    let currentQuestion = 0;

    // Set Current question on load.
    for (let carouselItem of carouselItems) {
        if (carouselItem.classList.contains('active')) {
            currentQuestion = carouselItem.getAttribute('data-question-id');
        };
    };

    // Hide previous button initially
    utilityFunctions.hideElement(carouselsPrevious);



    questionCarousel.addEventListener('slide.bs.carousel', (e) => {
        if (e.to === 0) {
            utilityFunctions.hideElement(carouselsPrevious);
        } else if (carouselsPrevious.classList.contains('d-none')) {
            utilityFunctions.showElement(carouselsPrevious);
        }

        if (e.to === carouselItems.length - 1) {
            utilityFunctions.hideElement(carouselsNext);
            finish_button = utilityFunctions.elementCreate(
                "button",
                ["btn", "btn-primary"],
                "Get Restults",
            )
            carouselControlsContainer.appendChild(finish_button);

        } else if (carouselsNext.classList.contains('d-none')) {
            utilityFunctions.showElement(carouselsNext);
            finish_button.remove();
        }


        // currentQuestion = event.relatedTarget
        currentQuestion = e.relatedTarget.getAttribute('data-question-id');

        // get answer weighting

    })



});

