'use strict';
console.log('app js connected');

//global variables




let userName = prompt('Welcome to my guessing game. Whats your name?');

while(!userName){
  userName = prompt('No, really. I need a name, thanks.');
  console.log(userName);
}
alert('Welcome to my About Me web site, ' + userName);

// 5 yes or no questions



let questionOne = prompt('Do I work at amazon? Please answer with Yes or No or y or n').toLowerCase();
console.log('Q 1 ', questionOne);
if(questionOne === 'yes' || questionOne === 'y'){
//correct
  alert('Thats right, I do work there');
} else if(questionOne === 'no' || questionOne === 'n'){
//incorrect
  alert('That is not correct, I do work there. Better luck next time.');
} else {
  alert('Doesnt look like you know....');
}




// questionTwo = crtl + /

// questionThree

// questionFour

// questionFive



//questionSix

// let attempts = 4;
// while(attempts > 0){
//   console.log('in the while loop, attempts', attempts);
//   answer6 = parseInt(prompt('Guess a number between 1-10'));
//   if(answer6 === 7){
//     alert('You\'re right!');
//     // add points
//     userPoints++;
//     attempts = 0;
//     break;
//   } else if(answer6 > 7 ){
//     alert ('Too high');
//     //count attempt
//     attempts--;
//     alert('you have ' + attempts + ' attempts left!');
//   } else if(answer6 < 7 ){
//     alert ('Too low');
//     //count attempt
//     attempts--;
//     alert('you have ' + attempts + ' attempts left!');
//   }
//   else {
//     alert('Try again');
//   }





//questionSeven
// correct answers that are stored in an array.
// Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.


