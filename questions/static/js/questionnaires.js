// LukeI50's Emmet Snippet JS Utility Functions| Repo: LukeI50s-Snippets
class UtilityFunctions{


    cookieGetValue(cookie_name) {
        const value = document.cookie.split("; ")
        .find((row) => row.startsWith(`${cookie_name}=`))
        ?.split("=")[1];
        return value;
    };


    cookieCreateFromObj(Obj_name, key_and_value) {
        let cookieString = "";
        Object.entries(key_and_value).forEach(([key, value]) => {
            cookieString += `${key}`
            cookieString += `,`
            cookieString += `${value}`
            cookieString += `|`;
        });
        document.cookie = `${Obj_name}=${cookieString}` + "; path=/; Secure; SameSite=None;"
        
    };

    parseCookie(cookie_name) {
        let cookie_string = this.cookieGetValue(cookie_name);
        let parsedObj = {};
        let cookie_list = cookie_string.split("|");

        for (let index = 0; index < cookie_list.length; index++) {
            let answer_list = cookie_list[index].split(",");
            if (answer_list[0] != ""){
                parsedObj[answer_list[0]] = [parseInt(answer_list[1])].concat(answer_list.slice(2));
            }
        }

        return parsedObj;
    }

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
            finish_button.addEventListener("click", end_button);

        } else if (carouselsNext.classList.contains('d-none')) {
            utilityFunctions.showElement(carouselsNext);
            finish_button.remove();
        }

        // currentQuestion = event.relatedTarget
        currentQuestion = e.relatedTarget.getAttribute('data-question-id');

        // get answer weighting

    })


    

    // Deal with Cookie Creation and Updating
    const cookieObj = {}

    carouselItems.forEach(function(carouselItem) {
        carouselItem.addEventListener('click', function(e) {
            if (e.target.classList.contains('questionnaire-answer-radio')) {
                let question_id = e.target.getAttribute('data-question-id');
                let answer_weighting = e.target.getAttribute('data-answer-weighting');
                let answer_result = e.target.getAttribute('data-answer-result')
                let answer_advice = e.target.getAttribute('data-answer-advice')

                
                cookieObj[question_id] = [answer_weighting, answer_result, answer_advice];

                utilityFunctions.cookieCreateFromObj("Answers", cookieObj);

                console.log(document.cookie)
                answers = utilityFunctions.cookieGetValue("Answers");
                // updateCarouselControls(currentQuestion, answers)

                // Need to be updated to take accidental selection into account.
                if (answer_weighting == 3) {
                    //window.location.replace(data_home_url);
                }

                console.log(utilityFunctions.cookieGetValue("Answers"));
            }
        });
    });


function end_button(event) {
    let main_area = document.getElementsByTagName("main")
    results_area = document.getElementsByClassName("results-area");
    if(results_area.length === 0) {
        results_area = utilityFunctions.elementCreate(
            "div",
            ["results-area", "container", "wrap"],
            "Results Area",
        )
        main_area[0].appendChild(results_area)    
    } else {
        results_area = results_area[0]
    }
    
    results = utilityFunctions.parseCookie("Answers");
    console.log(results)
    
    let colors = ["white", "#8FD14F", "#FAC710", "#F24726"]

    let htmlString = "<div class='row'>";
    Object.entries(results).forEach(([key, value]) => {
        if (value[0] > 0)
        {
            htmlString += `
            <div class="card col-sm" style="background: ${colors[value[0]]}; padding-inline:10px;">
                <p class="card=text">${value[1]}</p>
                <p class="card=text">${value[2]}</p>
            </div>
            `;
        }
    });
    htmlString += "</div>";

    results_area.innerHTML = htmlString;
}


    // function updateCarouselControls(currentQuestion, cookie_values) {
    //     // get all items and fiter them so item does not include empty string
    //     const list_answers = cookie_values.split('|').filter(item => item !== "");

    //     const parsedAnswers = list_answers.map(answer => {
    //         const [questionId, answerWeighting] = answer.split(":");
    //         return { questionId:parseInt(questionId), answerWeighting: parseInt(answerWeighting) };
    //     })

    //     console.log(currentQuestion - 1);
    //     console.log(list_answers);

    //     const currentAnswer = parsedAnswers.find(answer => answer.questionId === currentQuestion);
    //     console.log(parsedAnswers)

    //     if (currentAnswer) {
    //         console.log(currentAnswer)
    //     } else {
    //         console.error("Invalid question index.")
    //     }
    // }
});
