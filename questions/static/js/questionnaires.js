// LukeI50's Emmet Snippet JS Utility Functions| Repo: LukeI50s-Snippets
class UtilityFunctions{

    elementCreate(element_name, class_list=[], text="", action="", method="", href="", attributes_obj={}) {
        const newElement = document.createElement(element_name);

        // Unpack class_list or use Default empty list
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
        document.cookie = `${cookie_name}=${cookie_value}` + "; path=/; Secure; SameSite=None;"
    };


    cookieCreateFromObj(Obj_name, key_and_value) {
        let cookieString = "";
        Object.entries(key_and_value).forEach(([key, value]) => {
            cookieString += `${key}:${value}| `;
        });
        document.cookie = `${Obj_name}=${cookieString}` + "; path=/; Secure; SameSite=None;"
        
    };

    hideElement(targetElement) {
        targetElement.classList.add('d-none');
    };

    showElement(targetElement) {
        targetElement.classList.remove('d-none');
    };

};


document.addEventListener("DOMContentLoaded", function() {

    // Check script and dom are loaded
    console.log("Questionnaire Script Loaded")

    // Establish Variables
    const questionCarousel = document.getElementById('questionCarousel');
    const carouselsNext = document.getElementById('questionCarouselNext');
    const carouselsPrevious = document.getElementById('questionCarouselPrevious');

    const allAnswers = document.getElementsByClassName('form-check-input');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const carouselControlsContainer = document.getElementById('question-carousel-controls');

    let currentQuestion = 0;

    // Create instance of UtilityFunctions class
    const utilityFunctions = new UtilityFunctions();

    utilityFunctions.cookieCreateFromObj("Answers", "");

    console.log(carouselItems);


    // Set Current question on load.
    carouselItems.forEach((carouselItem) => {
        if (carouselItem.classList.contains('active')) {
            currentQuestion = carouselItem.getAttribute('data-question-id');
        };
    });

    console.log(currentQuestion)

    // Hide previous button initially
    utilityFunctions.hideElement(carouselsPrevious);



    questionCarousel.addEventListener('slide.bs.carousel', function(e) {
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
                "Get Results",
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


    
    const cookieObj = {}

    carouselItems.forEach((carouselItem) => {
        carouselItem.addEventListener('click', function(e) {
            if (e.target.classList.contains('questionnaire-answer-radio')) {
                let question_id = e.target.getAttribute('data-question-id');
                let answer_Weighting = e.target.getAttribute('data-answer-weighting');
                
                cookieObj[question_id] = answer_Weighting;



                utilityFunctions.cookieCreateFromObj("Answers", cookieObj);

                console.log(document.cookie)
                if (answer_Weighting == 3) {
                    window.location.replace(data_home_url);
                }

                console.log(cookieObj)
            }
        })   
    })



});

