"use strict";

/*
Arrays
*/

//Musketeers
/*
Write a program that:

Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
Shows each array element using a for loop.
Adds the "D'Artagnan" value to the array.
Shows each array element using the forEach() method.
Remove poor Aramis.
Shows each array element using a for-of loop.
*/
const createMusketeersArr = () => {
    let musketeersArr = [];
    for(let i = 0; i < 3; i++){
        switch(i){
            case 0: 
                musketeersArr.push("Athos");
                break;
            case 1:
                musketeersArr.push("Porthos");
                break;
            case 2:
                musketeersArr.push("Aramis");
                break;
        }
        console.log(musketeersArr[i]);
    }
    musketeersArr.push("D'Artagnan");
    musketeersArr.forEach(elem => console.log(elem));
    console.log(musketeersArr.splice(2,1));
    for(let elem of musketeersArr){
        console.log(elem);
    }
}

/*
Sum of values
*/
//Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
const values = [3, 11, 7, 2, 9, 10];
const sum = (param) => {
    const sumVal = param.reduce((acc,currVal) => acc + currVal);
    console.log(sumVal);
}

/*
Array maximum
*/
//Write a program that creates the following array, then calculates and shows the array's maximum value.
const values2 = [3, 11, 7, 2, 9, 10];
const max = (param) => {
    const maxVal = param.toSorted((a,b) => b - a)[0];
    console.log(maxVal);
}

/*
List of words
*/
//Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".
const askWord = () => {
    let wordsArr = [];
    let word = prompt("Enter a word. 'Stop' will end the program).")
    while(word.toLowerCase() !== "stop"){
        wordsArr.push(word);
        word = prompt("Enter another word. 'Stop' will end the program).");
    };
    console.log(wordsArr);
}
