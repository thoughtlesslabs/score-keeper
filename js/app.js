// Actions for Each Button
// Add one to score
// Change to color when play to nuber is met
// Reset options zeros things out
// Optional: Allow subtraction of points with keypress
// 

const p1Button = document.querySelector("#p1-button");
const p2Button = document.querySelector("#p2-button");
const resetButton = document.querySelector("#reset-button");
const p1Score = document.querySelector("#p1-score");
const p2Score = document.querySelector("#p2-score");
const totalScore = document.querySelector("#play-to");
let removePoint = false;

p1Button.addEventListener("click", addOne);
p2Button.addEventListener("click", addOne);
resetButton.addEventListener("click", reset);
window.addEventListener("keydown", function (e) {
    if ( e.key === 'Shift' ) {
        removePoint = true;
    }
});

window.addEventListener("keyup", function (e) {
    if ( e.key === 'Shift' ) {
        removePoint = false;
    }
});


// Add one to score
function addOne(e) { 
    let amount = 0
    if ( removePoint ) {
        amount = -1;
    } else {
        amount = 1;
    }

    if ( e.target.id === "p1-button" ) {
        p1Score.innerText = parseInt(p1Score.innerText) + amount;
    } else if ( e.target.id === "p2-button" ) {
        p2Score.innerText = parseInt(p2Score.innerText) + amount;
    }
    checkWin()   
}

// Set gameover and corresponding values
function checkWin() {
    const p1Total = parseInt(p1Score.innerText);
    const p2Total = parseInt(p2Score.innerText);
    if ( p1Total === parseInt(totalScore.value) || p2Total === parseInt(totalScore.value)  ) {
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
}


// Reset Scores
function reset() {
    p1Score.innerText = "0";
    p2Score.innerText = "0";
    totalScore.value = 1;
    p1Button.disabled = false;
    p2Button.disabled = false;
}