/**
   *logic and structure from:
   *http://davidbau.com/javascript/learn/04-guess.html
   *I did go through entire code and rewrite it. added and subtracted code.
   *Beggining of lab 3.
   */
/**Jennifer Nordell
* Math.random() generates a number
*between 0 and 1 but not including 1. So if we multiply it
*by 10 and then take the floor of it, we will only ever get
*a possible range of 0 to 9.Adding the one not only increases
*the upper bound but also the lower bound. So let's say we
*generated a 0.001. Now when we multiply that by 10 (result: 0.01) and take the floor of
*that we get a 0. But adding the one guarantees that our
*lowest number will never be lower than 1.*/
function questionSix(){
  let randoNum = Math.floor(Math.random() * 20) + 1;
  let opportunities = 10;
  let robotVoice = 'Guess a integer from 1 to 20!';

  /*beggining of while loop checks the condition to see if there are any turns left. */
  while (opportunities > 0) {
    /*Lets the user know to guess an integer and how many chances are left.*/
    let userChoice = prompt(robotVoice + ' You have ' + opportunities + ' try\'s to go.');
    /*Lets the out of the program if they select cancel.*/
    if (!userChoice){
      break;
    }
    //     /**The Number() function converts the object
    //    argument to a number that represents the object's value. */
    userChoice = Number(userChoice);
    console.log('userChoice is ' + userChoice);
    console.log('Random generator number is ' + randoNum);

    //     /**check condition of input to random number selected */
    if (userChoice === randoNum) {
      alert('thats right you guessed the random number way to go!');
      /**I need help with this part I know I need it I just dont know why. */
      opportunities = 0;
      break;
    } else {
      /*Notfies user that they were wrong and take the input decides if
   * it was higher or lower than the random number in the if statements. */
      robotVoice = 'You were close, but no, try again.';
      if (userChoice < randoNum){
        robotVoice += ' Too Low!';
      }
      if (userChoice > randoNum) {
        robotVoice += ' Too High!';
      }
      /*This decrements the opportunities each time the user enters a try. */
      opportunities = opportunities - 1;
      console.log('guessCount is ' + opportunities);

    }
  }
  /*This line of code sits outside the loop so that if the user cancels or fails
* to guess correct, then they are told what the answer is. */
  alert('The Random number Generator choose ' + randoNum + ' as it\'s number .');

}

questionSix();
