// DONE: Change the "display" div to "00:00."
    // $("#display").text("00:30");
// list the global variables
var startTimer = false;
var timeRemaining = 30;
var guesses = [];
var answers = ["Ratchett", "Debora", "Pandora"];
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0; 

function startGame() {
  var timer = setInterval(function() {
      // This won't work = need to set function with time remaining
      // count: function() {
      // decrease timeRemaining variable
      timeRemaining--;
      // https://www.w3schools.com/howto/howto_js_countdown.asp
      document.getElementById("time-remaining").textContent = timeRemaining;
      // Use document.getElementById("myDIV").style.display = "none"; 
      document.getElementById("questions").style.display = "block";
        // if(timeRemaining <= 0) {
          if(timeRemaining <= 0 || on.click(submitAnswer)) {
          clearInterval(timer);
          endGame();}
        },1000);
        
  };

// DONE: Get the current time, pass that into the stopwatch.timeConverter function,
//       and save the result in a variable.
//     var converted = stopwatch.timeConverter(stopwatch.time);
//     console.log(converted);
// // DONE: Use the variable we just created to show the converted time in the "display" div.
//     $("#display").text(converted);
//   // },
  function timeConverted(t) {

    var seconds = t - (minutes * 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  };
// };

// game answers
// Question 1
function submitAnswer() {
  var i = 0;
  for( ; i < answers.length; i++) {
    var radios = document.getElementsByName("choiceq" + i );
    var j = 0, len = radios.length;
    var checked = false;
    var userAnswer;
    
    for( ; j < len; j++ ) {
       if(radios[j].checked) {
         checked = true;
         userAnswer = radios[j].value;
       }
    } 
    console.log(userAnswer);
    if(!checked) {
      unanswered++;

    }

    // Correct answer
    else if(userAnswer === answers[i]) {
       // alert("Answer is correct!");
       correctAnswers++;
    }
    // incorrect answer
    else {
      incorrectAnswers++;
       // alert("Answer is wrong!");
    }

  }
  // if user click submit button without selecting any option, alert box should be say "please select choice answer".
  
  // answers printed
  document.getElementById("correct-answers").textContent = ("Correct Answers: ") + correctAnswers;
  document.getElementById("incorrect-answers").textContent = ("Incorrect Answers: ") + incorrectAnswers;
  document.getElementById("unanswered").textContent = ("Unanswered: ") + unanswered;

  document.getElementById("results").style.display = "block";
}


function endGame() {
  // timeRemaining = 0;
  submitAnswer();
}

// // Question 2
// function submitAnswer() {
//   var radios = document.getElementsByName("choiceq2");
//   var i = 0, len = radios.length;
//   var checked = false;
//   var userAnswer;
  
//   for( ; i < len; i++ ) {
//      if(radios[i].checked) {
//        checked = true;
//        userAnswer = radios[i].value;
//      }
//   } 
//   // if user click submit button without selecting any option, alert box should be say "please select choice answer".
//   if(!checked) {
//     alert("please select choice answer");
//     return;
//   }
//   // Correct answer
//   if(userAnswer === "Debora") {
//      // alert("Answer is correct!");
//   }
//   // incorrect answer
//   else {
//      // alert("Answer is wrong!");
//   }
  
// }

// // Question 3
// function submitAnswer() {
//   var radios = document.getElementsByName("choiceq3");
//   var i = 0, len = radios.length;
//   var checked = false;
//   var userAnswer;
  
//   for( ; i < len; i++ ) {
//      if(radios[i].checked) {
//        checked = true;
//        userAnswer = radios[i].value;
//        console.log ("choiceq2");
//      }
//   } 
//   // if user click submit button without selecting any option, alert box should be say "please select choice answer".
//   if(!checked) {
//     alert("please select choice answer");
//     return;
//   }
//   // Correct answer
//   if(userAnswer === "Pandora") {
//      // alert("Answer is correct!");
//   }
//   // incorrect answer
//   else {
//      // alert("Answer is wrong!");
//   }
  
// }
