"use strict";

/*
===============
Function Basics
===============
*/

/*
Is "else" required?
*/

//Q: Will the function work differently if else is removed?
//A: No

//Q: Is there any difference in the behavior of these two variants?
//A: No

/*
Rewrite the function using '?' or '||'
*/

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

//Make two variants of checkAge:
//Using a question mark operator ?

function checkAge(age) {
    return (age > 18) ? true : confirm("Did your parents let you?");
};

//Using OR ||

function checkAge(age) {
    return age || confirm("Did your parents let you?");
};

/*
Function min(a, b)
*/

//Write a function min(a,b) which returns the least of two numbers a and b

function min(a,b) {
    return (a > b) ? a
        : (b > a) ? b
        : "a is equal to b";
};

/*
Function pow(x,n)
*/

//Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result

function pow(x, n) {
    return alert(`${(x || base)**(n || exp)}`);
};

//Create a web-page that prompts for x and n, and then shows the result of pow(x,n)

let base = prompt("Enter the base number");
let exp = prompt("Enter the exponent");

pow();