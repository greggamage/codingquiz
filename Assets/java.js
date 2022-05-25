let questionCounter = 0; //This is variable for which question you are one, after hitting start button it goes to question 1.
const startMinutes = 2; //This is how many minutes are allowed for the quiz
let time = startMinutes * 60; // taking the minutes multiplied by 60 to get seconds.
let done = false; // boolean variable to determine if the quiz is done, if not done then keep going


const countdown = document.getElementById('timeLeft');



function countdownTimer(){ // TIME FUNCTION
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    time = Math.max(time, 0); // makes the lowest number 0 seconds so that it cant go negative or below.
    countdown.innerHTML = `Time left ${minutes}:${seconds}`
    time--



}



startBtn.addEventListener('click', event =>{ // after clicking start, the function for the timer starts
    document.getElementById('startBtn').style.display = 'none';
    setInterval(countdownTimer, 1000);
    questionCounter++;

    if (questionCounter == 1){ // if the question is = to 1 after hitting start, display the question information and the answers.
        document.getElementById('question').innerHTML = `
        <h1>Question: ${questionCounter}</h1>
        <h2>What does CSS stand for?</h2>
    
    `
    
    document.getElementById('answer1').innerText = `Cascading Style Sheets` //These are the first 4 answer options.
    document.getElementById('answer2').innerText = `Chicken Super Sauce`
    document.getElementById('answer3').innerText = `Counting Super Slow`
    document.getElementById('answer4').innerText = `Click Secret Sources`
    
    
    answer1.addEventListener('click', event =>{
        document.getElementById('answer1').style.background = `green` //if the button clicked is the correct answer, it changed the background to green and increases the question counter to go to next question.
        questionCounter++;

    })
    answer2.addEventListener('click', event =>{ // if wrong answer, displays response on the page to say that it is wrong and then changes to red so that its unavailable.
        time -= 15;
        document.getElementById('response').innerHTML = 
        `<h1">${answer2.innerText} is not the correct answer!</h1>`
        document.getElementById('answer2').style.background = `red`
        
    
    })
    answer3.addEventListener('click', event =>{ // if wrong answer, displays response on the page to say that it is wrong and then changes to red so that its unavailable.
        time -= 15;
        document.getElementById('response').innerHTML = 
        `<h1">${answer3.innerText} is not the correct answer!</h1>`
        document.getElementById('answer3').style.background = `red`
    })
    answer4.addEventListener('click', event =>{// if wrong answer, displays response on the page to say that it is wrong and then changes to red so that its unavailable.
        time -= 15;
        document.getElementById('response').innerHTML = 
        `<h1">${answer4.innerText} is not the correct answer!</h1>`
        document.getElementById('answer4').style.background = `red`
    
    })
    
    }
    })














