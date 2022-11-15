'use strict';
console.log('app js connected');

//global variables




// let userName = prompt('Welcome to my guessing game. Whats your name?');
// while(!userName){
//   userName = prompt('No, really. I need a name, thanks.');
//   // console.log(userName);
// }
// alert('Welcome to my About Me web site, ' + userName);

// 5 yes or no questions


function question1(){
  let questionOne = prompt('Do I work at amazon? Please answer with Yes or No or y or n').toLowerCase();
  // console.log('Q 1 ', questionOne);
  if(questionOne === 'yes' || questionOne === 'y'){
    //correct
    alert('Thats right, I do work there');
  } else if(questionOne === 'no' || questionOne === 'n'){
    //incorrect
    alert('That is not correct, I do work there. Better luck next time.');
  } else {
    alert('Doesnt look like you know....');
  }
}
// question1();
////////////////////////////////////////

function question2(){
  let questionTwo = prompt('Do I like pets? Please answer with Yes or No or y or n').toLowerCase();
  console.log('Q 2', questionTwo);
  if(questionTwo === 'yes' || questionTwo === 'y'){
    alert('Thats right, I do like pets');
  } else if(questionTwo === 'no' || questionTwo === 'n'){
    alert('That is not correct, I do like pets. Better luck next time.');
  } else {
    alert('Doesnt look like you know...');
  }
}
// question2();
////////////////////////////////////////

function question3(){
  let questionThree = prompt('Do I like sports? Please answer with Yes or No y or no').toLowerCase();
  console.log('Q 3', questionThree);
  if(questionThree === 'yes' || questionThree === 'y'){
    alert('Thats right, I do like sports');
  }else if(questionThree === 'no' || questionThree === 'n'){
    alert('That is not correct, I do like sports. Better luck next time');
  } else{
    alert('Doesnt look like you know...');
  }
}
// question3();
////////////////////////////////////////


function question4(){
  let questionFour = prompt('Do I like soulfood? Please answer with Yes or No y or no').toLowerCase();
  console.log('Q 4, questionFour');
  if(questionFour === 'yes' || questionFour === 'y'){
    alert('Thats right, I do like soulfood');
  }else if(questionFour === 'no' || questionFour === 'n'){
    alert('That is not correct, I do like soul food. Better luck next time');
  } else{
    alert('Doesnt look like you know...');
  }
}
// question4();

////////////////////////////////////////

function question5(){
  let questionFive = prompt('Is my favorite soulfood Gumbo? Please answer with Yes or No y or no').toLowerCase();
  console.log ('Q 5', questionFive);
  if (questionFive === 'yes' || questionFive === 'y'){
    alert('Thats right, Gumbo is my favorite soulfood');
  } else if(questionFive === 'no' || questionFive === 'n'){
    alert('Your wrong, I like soulfood, better luck next time.');
  } else {
    alert('Doesnt look like you know...');
  }
}
// question5();

////////////////////////////////////////



function question6(){
  // console.log('we made it to q 6.');

  //see js file for q-6.js
  //  Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
  //  if the guess is “too high” or “too low”.
  //  It should give the user exactly four opportunities
  //  After all attempts have been exhausted, tell the user the correct answer.
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log('do we get a random num: ',randomNumber);
  let opportunities = 4;
  console.log(opportunities);


  //right here.
























}

question6();


function question7(){
  // console.log('we made it to q 7.');
  //  https://github.com/DeltaVCode/cedarrapids-code-201n4/blob/main/class-05/demo/js/demo-Monday.js
  //multiple possible correct answers that are stored in an array.
  //Give the user 6 attempts to guess the correct answer.
  // end once the user guesses a correct answer or they run out of attempts.
  // Display all the possible correct answers to the user.
  // As a user, I would like to know my final score so that I can know how well I did.
  // At the end tell them how many they got correct out of the 7 questions asked.


}

question7();
