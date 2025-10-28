"use strict";

/*
Carousel
*/

//Write a program that launches a carousel for 10 turns, showing the turn number each time.
function carousel() {
    for ( let i = 0; i < 10; i++ ) {
        let quantity = "times";
        if (i === 0) { quantity = "time" };
        console.log( `The carousel has turned ${ i + 1 } ${ quantity }!` );
    };
}

//When it's done, improve it so that the number of turns is given by the user.
function userCarousel() {
    let rotations = prompt( "How many times do you want to turn the carousel?" )
    for ( let i = 0; i < rotations; i++ ) {
        let quantity = "times";
        if ( i === 0 ) { quantity = "time" };
        console.log ( `The carousel has turned ${ i + 1 } ${ quantity }!`);
    };
}

/*
Parity
*/

//Check the following program that shows even numbers (divisible by 2) between 1 and 10.
/*
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }
}
*/

//This program uses the modulo operator %, which calculates the remainder after division of one number by another. It's often used to assess number parity.
/*
console.log(10 % 2); // 0 because 10 = 5 * 2 + 0
console.log(11 % 2); // 1 because 11 = 5 * 2 + 1
console.log(18 % 3); // 0 because 18 = 3 * 6 + 0
console.log(19 % 3); // 1 because 19 = 3 * 6 + 1
console.log(20 % 3); // 2 because 20 = 3 * 6 + 2
*/
//Improve the program so that it also shows odd numbers. 

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${ i } is odd`);
  };
};

//Improve it again to replace the initial number 1 by a number given by the user.
//This program must show exactly 10 numbers including the first one, not 11 numbers!
function checkNum() {
    let num = prompt( "Please enter a number" )
    for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${ i } is odd`);
    };
    };
}

/*
Input validation
*/

//Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.
function checkLessOrEqualOneHundred() {
  let num = prompt( "Input a number" );
  while ( num > 100 ) {
    num = prompt( "Input a new number!" );
  };
}

//When you are done with the above, improve the program so that the terminating number is between 50 and 100.
function checkBetweenFiftyAndOneHundred() {
  let num = prompt("Input a number");
  while ((num < 50) || (num > 100)) {
    num = prompt( "Input a new number!");
  };
}

/*
Multiplication table
*/

//Write a program that asks the user for a number, then shows the multiplication table for this number.
function createMultiplicationTable() {
  let num = prompt("Enter a number to see its multiplication table");
  for (let i = 0; i <= 12; i++) {
    console.log(`${num} times ${i} is ${num * i}`);
  };
}

//When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).
function createTableBetweenTwoAndNine() {
  let num = prompt("Enter a number between 2 and 9 to see its multiplication table");
  while ((num < 2) || (num > 9)) {
    num = prompt("Please enter a new number between 2 and 9");
  }
  for (let i = 0; i <= 12; i++) {
    console.log(`${num} times ${i} is ${num * i}`);
  };
}

/*
Neither yes nor no
*/

//Write a program that plays "neither yes, nor no" with the user. Specifically, the program asks the user to enter text until either "yes" or "no" is typed, which ends the game.
function checkYesOrNo() {
  let input = prompt("Input some text (Yes or No will end the game)");
  while ((input.toLowerCase() !== "yes") && (input.toLowerCase() !== "no")) {
    console.log(input.toLowerCase());
    input = prompt("Good one! Try another!");
  };
}

/*
FizzBuzz
*/

//Write a program that shows all numbers between 1 and 100 with the following exceptions:
//It shows "Fizz" instead if the number is divisible by 3.
//It shows "Buzz" instead if the number is divisible by 5 and not by 3.

function runFizzBuzz() {
  for(let i = 1; i < 100; i++) {
    if (i % 3 === 0) {
      console.log(`Fizz!`);
    } else if ((i % 5 === 0) && (i % 3 !== 0)) {
      console.log(`Buzz!`);
    } else {
      console.log(`${i}`);
    };
  };
}

//When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.

function runFizzBuzzImproved() {
    for(let i = 1; i < 100; i++) {
    if ((i % 3 === 0) && (i % 5 !== 0)) {
      console.log(`Fizz!`);
    } else if ((i % 5 === 0) && (i % 3 !== 0)) {
      console.log(`Buzz!`);
    } else if ((i % 5 === 0) && (i % 3 === 0)) {
      console.log(`FizzBuzz!`);
    } else {
      console.log(`${i}`);
    };
  };
}