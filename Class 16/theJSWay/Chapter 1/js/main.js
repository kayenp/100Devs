"use strict";

/*
Presentation
*/

//Write a program that displays your name and age.
function ageAndName() {
    const user = {
        name: prompt("What is your name?"),
        age: prompt("What is your age?"),
    };

    console.log(Object.values(user));
    
    const body = document.querySelector("body");
    const script = document.querySelector("script"); 
    const h2 = document.createElement("h2");
    body.insertBefore(h2, script);
    h2.textContent = `Your name is ${user.name} and you are ${user.age} years old`;
}

/*
Minimalistic Calculator
*/

//Write a program that displays the results of adding, subtracting, multiplying and dividing 6 by 3.
function sixAndThree() {
    const body = document.querySelector("body");
    const script = document.querySelector("script"); 
    const h2 = document.createElement("h2");
    body.insertBefore(h2, script);
    h2.textContent = `6 + 3 = ${6 + 3}, 6 - 3 = ${6 - 3}, 6 * 3 = ${6 * 3}, 6 / 3 = ${6 / 3}`;
}

sixAndThree();