function UI () {
    this.btnStart = document.querySelector('#btnStart');
    this.btnNext = document.querySelector('#btnNext');
    this.questionText = document.querySelector('.question_text');
    this.optionGroup = document.querySelector('.option_group');
    this.questionCard = document.querySelector(".question_card .card");
    this.resultCard = document.querySelector(".result_card .card");
    this.btnTry = document.querySelector("#btnTry");
    this.btnFinish = document.querySelector("#btnFinish");
}

UI.prototype.showQuestion = function (question) {
    if(quiz.questions.length != quiz.questionIndex) {
                
        let headerAndText = `
            <h6 class="card-subtitle mb-2 text-muted">Word ${quiz.questionIndex + 1} / ${quiz.questions.length} </h6>
            <p class="card-text"> "${question.word}" </p>
        `;
        
        this.questionText.innerHTML = headerAndText;
        this.optionGroup.innerHTML = "";   
        
        for (let key in question.options) {
            let option = question.options[key];
            
            let optionDiv = `
                <div class="option" onclick ="selectOption(this, ${question.isAnswerCorrect(option)}, '${question.correctAnswer}')">
                    <span> ${option} </span>
                </div>
            `;
    
            this.optionGroup.insertAdjacentHTML("beforeend", optionDiv);
        }
        
        quiz.questionIndex += 1; 
    
    } else {
        this.questionCard.classList.remove("active");
        this.showResults();
        this.resultCard.classList.add("active");
    }    
}

UI.prototype.showResults = function () {
    var resultText = `
        <p class="card-text"> 
            You answered ${quiz.correctAnswersNumber} out of ${quiz.questions.length} questions correctly.
        </p>
    `;

    this.resultCard.querySelector(".result_text").innerHTML = resultText;

}
    
