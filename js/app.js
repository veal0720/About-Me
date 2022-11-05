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

//lab 4 requ
function question1(){
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
}
question1();

function question2(){
let questionTwo = prompt('Do I like pets? Please answer with Yes or No or y or n').toLowerCase();
console.log('Q 2, questionTwo');
if(questionTwo === 'yes' || questionTwo === 'y'){
    // correct
    alert('Thats right, I do like pets);
} else if{ (questionTwo === 'no' || questionTwo === 'n'){
    // incorrect
    alert('That is not correct, I do like pets. Better luck next time.');
} else {
alert('Doesnt look like you know...');
}
question3();

function question3(){
    Let questionThree = prompt('Do I like sports? Please answer with Yes or No y or no').toLowerCase();
    console.log('Q 3, questionThree');
    if(questionThree === 'yes' || questionThree === 'y'){
        // correct
        alert('Thats right, I do like sports');
    }else if{(questionThree === 'no' || questionThree === 'n'){
        // incorrect
        alert('That is not correct, I do like sports. Better luck next time');
    } else{
        alert('Doesnt look like you know...');
    }
    
    function question4(){
        let questionFour = prompt('Do I like soulfood? Please answer with Yes or No y or no').toLowerCase();
        console.log('Q 4, questionFour');
        if(questionFour === 'yes' || questionFour === 'y'){
            // correct
            alert('Thats right, I do like soulfood');
        }else if{(questionFour === 'no' || questionFour === 'n'){
            // incorrect
            alert('Doesnt look like you know...');
        }
    
        function question5(){
            let questionFive = prompt('Is my favorite soulfood Gumbo? Please answer with Yes or No y or no').toLowerCase();
            console.log ('Q 5, questionFive');
            if (questionFive === 'yes' || questionFive === 'y'){
                // correct
                alert('Thats right, Gumbo is my favorit soulfood');
            }else if{(questionFive === 'no' || questionFive === 'n'){
                // incorrect
                alert('Doesnt look like you know...');
            }

            }
            }
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


