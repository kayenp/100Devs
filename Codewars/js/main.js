"use strict";
/*
==========
2025_08_15
==========
*/
//Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. 
// For example:
/*
"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
As usual, your function/method should be pure, i.e. it should not mutate the original string.
*/
/*
STEPS
GOAL - convert every character to it's alternate case without mutating string
- determine case of characters
    - ignore non-alphabetical chars
    - check each individual character
        - determine if character is alphabetical or not
        - for loop and iterate through?
            - needs to output results to new str
        - an array?
    - needs to be pure function, not mutating original str
        - an array?
        - slice()?
*/
String.prototype.toAlternatingCase = function () {
    let arr = this.split("");
    return arr = arr.map((elem) => {
        return (elem === elem.toLowerCase()) ? elem = elem.toUpperCase() : elem = elem.toLowerCase();
     });
};

/*
==========
2025_08_16
==========
*/
//Write a function that always returns 5
//Just bear in mind that you can't use any of the following characters: 0123456789*+-/
function unusualFive() {
    const str = "fixed"
    return str.length;
};

//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
const simpleMultiplication = number => (number % 2 === 0) ? number * 8 : number * 9




