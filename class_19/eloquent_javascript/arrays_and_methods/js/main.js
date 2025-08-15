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
const rangeBetter = (start,end,step = 0) => {
    let difference = (start < end) ? end - start : start - end;
    let newArr = [];
    for (let i = 0; i <= difference; i++) {
        newArr.push((i + 1))
    };
    return newArr;
}
console.log(rangeBetter(5,2));