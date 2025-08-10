"use strict";

/*
Minimum
*/
//The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.
/*
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
*/
const min = (num1,num2) => {
    let arr = Number([num1,num2].sort((a,b) => a - b).slice(0,1));
    console.log(arr);
}

/*
Recursion
*/
/*
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.
One is odd.
For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. 
*/
/*
1
// Your code here.
2
​
3
console.log(isEven(50));
4
// → true
5
console.log(isEven(75));
6
// → false
7
console.log(isEven(-1));
8
// → ??
*/
const isEven = n => {
    let result;
    (n === 0) ? result = true
    : (n === 1) ? result = false
    : isEvenLoop(n);
    
    console.log(result);

    function isEvenLoop(n) {
        let o = n;
        while (o >= 2) {
            o = o - 2;
        };
        (o === 0) ? result = true : result = false;
    };
}

//See how it behaves on -1. Why? Can you think of a way to fix this?
const isEvenBetter = n => {
    let o = 0;
    let result;
    (n < 0) ? o = -n : o = n;
    
    (o === 0) ? result = true
    : (o === 1) ? result = false
    : isEvenLoop(o);

    console.log(result);

    function isEvenLoop(o) {
        while (o >= 2) {
            o = o - 2;
        };
        (o === 0) ? result = true : result = false;
    };
}

/*
Bean counting
*/
//Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
const countinBs = string => {
    let totalBs = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "B") { totalBs++ };  
    };
    console.log(totalBs);
}

//Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
const countChar = (string,char) => {
    let totalChars = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) { totalChars++ };  
    };
    console.log(`${totalChars} "${char}" in "${string}"`);
}

