"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Kaitlyn Kelly
      Date:   9/27/25

      Filename: project05-01.js
*/

"use strict";

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions

let timeID; // Declare timeID without initializing
let questionList = document.querySelectorAll("div#quiz input"); // Declare questionList and store it in the node list
// When startQuiz is clicked, run a function to remove the overlay and run the countdown function on repeat every 1 second
startQuiz.onclick = function() {
  overlay.className = "showquiz";
  timeID = window.setInterval(countdown, 1000);
}

// Function to stop the function from repeating & check for correct answers when timeLeft equal zero
function countdown() {
  if (timeLeft === 0) {
    window.clearInterval(timeID);
    let totalCorrect = checkAnswers();
      if (totalCorrect === correctAnswers.length) {
        window.alert("Congratulations! You got 100% correct!") // Display a congratulatory message if all answers are correct
      } else {
        window.alert("You got " + totalCorrect + " right out of " + questionList.length) // Display numbers of answers correct out of total answers if any are wrong
        timeLeft = quizTime; // Reset time allotment to 20
        quizClock.value = timeLeft;
        overlay.className = "hidequiz"; // Overlay to hide the quiz
      }
  } else {
    timeLeft-- // Reduce time allotment by one
    quizClock.value = timeLeft;
  }
}



















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;

   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }
   }
   return correctCount;
}

