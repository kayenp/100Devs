"use strict";

//declared variable and assigned value
const myAge = 46;

//declared variable and assigned value
let earlyYears = 2;

earlyYears *= 10.5;

//declared variable and assigned value
let laterYears = (myAge - 2);

//multiply laterYears by 4 and then assign new value to laterYears
laterYears *= 4;

//declared variable and assigned value "earlyYears + laterYears"
let myAgeInDogYears = earlyYears + laterYears;

//declared variable and assigned string "KEN" calling method "to.LowerCase()"
const myName = "KEN".toLowerCase();

//console logged template string with my name, human age and dog age
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears}.`);

