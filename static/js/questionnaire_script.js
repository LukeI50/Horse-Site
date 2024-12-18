addEventListener("DOMContentLoaded", (event) => {
    let answer_buttons = document.getElementsByClassName("answer");
    for (button of answer_buttons) {
        button.addEventListener("click", result)
    }
});

function result(event) {
    resultsText = document.getElementById("results").innerHTML
    if(resultsText.length > 0) {
        results = JSON.parse(resultsText);
    }
    let weight = event.target.getAttribute("data-weight");
    let question_id = event.target.getAttribute("data-question-id");
    results[question_id] = weight;
    document.getElementById("results").innerHTML = JSON.stringify(results)
}