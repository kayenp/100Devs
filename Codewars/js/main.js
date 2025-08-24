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

/*
==========
2025_08_17
==========
*/
//Write a program that finds the summation of every number from 1 to num (both inclusive). 
// The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
/*
2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/
const summation = num => {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum += (i + 1);
    }
    return sum;
}

/*
==========
2025_08_20
==========
*/
//Your task is to find the first element of an array that is not consecutive.
//By not consecutive we mean not exactly 1 larger than the previous element of the array.
//E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
//If the whole array is consecutive then return null2.
//The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
const firstNonConsecutive = arr => {
    for (let i = 0; i < (arr.length - 1); i++) {
        let currVal = arr[i];
        let nextVal = arr[i+1];
        if ((nextVal - currVal) !== 1) {
            return nextVal;
        }
    }
    return null;
}

/*
==========
2025_08_21
==========
*/
//Write a function which calculates the average of the numbers in a given array.
const calcAvg = arr => {
    if (arr.length > 0) {
        let reduced = arr.reduce((acc, currVal) => {
            acc =  acc + currVal;
            return acc;
        })
        return reduced/arr.length;
    } else {
        return 0;
    };
}

/*
==========
2025_08_22
==========
*/
//Complete the function which converts hex number (given as a string) to a decimal number.
/*
Pseudo code:
    Requirements
        1. Needs to account for input length
        2. Needs to check if character is hexadecimal
            a. Needs to automatically convert character case if not uppercase
        3. Needs to ignore operator symbols
    Steps:
        1. Set string to all uppercase & split string into array & assign to variable
        2. Get length of array & assign length to variable
        3. Create regex pattern & assign to variable
        4. Use .map() to run expression on each element & assign output results to array variable
            a. Expression will:
                i. Check whether element is alphabetical or numerical character
                ii. Convert numbers to base 16 equivalent; formula is (digit * 16^digitPosition + nextDigit * 16^digitPosition...)
                iii. Convert alphabetical characters to base 16 equivlant
                    a. Convert alphabetical characters to hexadecimal value; (A = 10, B = 11, C = 12, D = 13, E = 14, F = 15)
                        i. Create object array containing values
                            a. Object name should be character (A, B, C...)
                            b. Object .value should be hexadecimal value
                iv. Ignores non-alphanumeric characters and leaves them in place
        5. Return array variable
*/
const hexToDec = str => {
    let strArr = str.toUpperCase().split("");
    let totalDigits = str.length;
    let regPattern = /[A-F]/;
    let letterObj = [
        {
            A: {
                value: 10,
            },
            B: {
                value: 11,
            },
            C: {
                value: 12,
            },
            D: {
                value: 13,
            },
            E: {
                value: 14,
            },
            F: {
                value: 15,
            },
        }
    ]
    let letterVals = letterObj[0];
    let valuesArr = [];
    let symbol = [];
    

    for (let i = 0; i < totalDigits; i++) {
        let digitPos = (totalDigits - i);
        let exponent = (digitPos - 1);
        let currVal = strArr[i];
        let val;
        
       if ((isNaN(currVal) === true) && regPattern.test(currVal) === true)  {
        val = letterVals[currVal].value 
        } else if ((isNaN(currVal) === true)) {
            symbol = currVal;
            val = 0;
        } else {
            val = currVal;
        };

        let hexToDecFormula = (val * 16**exponent);
        (Number.isInteger(Number(val)) === true) ? valuesArr.push(hexToDecFormula) : valuesArr.push(val);

        console.log(valuesArr);
    }
    
    let total = [valuesArr.reduce((acc, currVal) => acc + currVal)];

    total.unshift(symbol);

    return Number(total.join(""));
}

/*
==========
2025_08_23
==========
*/
//Write a function that returns the total surface area and volume of a box.
//The given input will be three positive non-zero integers: width, height, and depth.
const getSize = (w, h, d) => [(2*((w*h) + (h*d) + (w*d))), (w*h*d)]

/*
==========
2025_08_24
==========
*/
//You are given two sorted arrays that contain only integers. These arrays may be sorted in either ascending or descending order. 
//Your task is to merge them into a single array, ensuring that:
//The resulting array is sorted in ascending order.
//Any duplicate values are removed, so each integer appears only once.
//If both input arrays are empty, return an empty array.
//No input validation is needed, as both arrays are guaranteed to contain zero or more integers.
const mergeArrays = (arr1, arr2) => {
    arr1.splice(-1, 0, ...arr2);
    return [...new Set(arr1.sort((a,b) => a - b ))];
}