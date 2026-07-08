// Hardcoded Secret Number
const secretNumber = 50;
document.getElementById("guessBtn").addEventListener("click", checkGuess);
document.getElementById("resetBtn").addEventListener("click", resetGame);

function checkGuess(){
    let guessInput = document.getElementById("guess");
    let result = document.getElementById("result");
    let guess = Number(guessInput.value);
    // Validation
    if(guessInput.value === ""){
        alert("Please enter a number.");
        return;
    }
    if(guess < 1 || guess > 100){
        alert("Number must be between 1 and 100.");
        return;
    }
    // Game Logic
    if(guess === secretNumber){
        result.innerHTML="🎉 Correct! You guessed the number.";
    }
    else if(guess < secretNumber){
        result.innerHTML="📉 Too Low! Try Again.";
    }
    else{
        result.innerHTML="📈 Too High! Try Again.";
    }
    guessInput.value="";
    guessInput.focus();
}

function resetGame(){
    document.getElementById("guess").value="";
    document.getElementById("result").innerHTML="";
    document.getElementById("guess").focus();
}