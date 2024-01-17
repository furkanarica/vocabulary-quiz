const ui = new UI();
const quiz = new Quiz(questions);


ui.btnStart.addEventListener("click",function() {
    ui.questionCard.classList.add("active");
    ui.showQuestion(quiz.getQuestion());
})

ui.btnNext.addEventListener("click", function () {
    var question = quiz.getQuestion();
    this.disabled = true;
    ui.showQuestion(question)
})

function selectOption(optionDiv, isAnswerCorrect, correctAnswer) {
    var classList = optionDiv.classList;
    (isAnswerCorrect) ? classList.add("correct") : classList.add("incorrect");
    classList.contains("correct") ? quiz.correctAnswersNumber += 1 : '';
    ui.btnNext.disabled = false;

    document.querySelectorAll('.option').forEach(option => {
        option.style.pointerEvents = "none";
        let optionText = option.querySelector("span").innerText;
        if(!isAnswerCorrect && (optionText == correctAnswer) ) {
            option.classList.add("correct");
        }
    });
}

ui.btnTry.addEventListener("click", function () {
    quiz.questionIndex = 0;
    quiz.correctAnswersNumber = 0;
    ui.resultCard.classList.remove("active");
    ui.btnStart.click();
})

ui.btnFinish.addEventListener("click", function () {
    window.location.reload();
})