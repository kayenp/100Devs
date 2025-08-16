"use strict";

/*
Sum of a Range
*/
//Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.
const range = (start,end) => {
    let newArr = [];
    for (let i = (start - 1); i < end; i++) {
        newArr.push(i+1);
    };
    return newArr;
}
console.log(range(32,50));

//Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
const sum = (arr) => arr.reduce((acc,currVal) => acc + currVal);
console.log(sum(range(1,10)));

//As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements should go up by increments of one, corresponding to the old behavior. 
// The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure this also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
/*
GOAL - adds all numbers to array from start to end. adds array values in increments set by step value. needs to add values in either direction. needs to take into account step value for incrementing.
*/
//==================================================

//===================================================

/*
Reversing an array
*/
//Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
// The first, reverseArray, should take an array as its argument and produce a new array that has the same elements in the inverse order. 
//==================================================

//===================================================

// The second, reverseArrayInPlace, should do what the reverse method does: modify the array given as its argument by reversing its elements. 
const reverseArrayInPlace = arr => {
    let val = arr.length;
    console.log(val);
    for (let i = 0; i < (val - 1) ; i++){
        arr.splice(0,0,arr[i+1]);
        arr.splice([i+2], 1);
    }
    return (arr);
}
let arrVal = [1,2,3,4,5];
console.log(reverseArrayInPlace(arrVal));

// Neither may use the standard reverse method.
//Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?