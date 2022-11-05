'use strict';
console.log('app js connected');

//global variables




let userName = prompt('Welcome to my guessing game. Whats your name?');

while(!userName){
  userName = prompt('No, really. I need a name, thanks.');
  console.log(userName);
}
