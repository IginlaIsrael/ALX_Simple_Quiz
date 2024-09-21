function checkAnswer(){
    const correctAnswer = "4";
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
const result = document.querySelector('#feedback');
    if (userAnswer === correctAnswer){
        result.textContent ="Correct! Well done.";
    } else {
        result.textContent = "That's incorrect. Try again!";
    }
    
}
const btn = document.getElementById("submit-answer")
btn.addEventListener("click",checkAnswer);