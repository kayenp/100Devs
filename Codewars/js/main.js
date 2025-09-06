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

/*
==========
2025_08_25
==========
*/
//When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be within the range of 0-9.
//If your language supports it, try using a switch statement.
const switchItUp = num => {
    switch(num) {
        case 0:
            return "Zero";
        case 1:
            return "One";
        case 2:
            return "Two";
        case 3:
            return "Three";
        case 4:
            return "Four";
        case 5:
            return "Five";
        case 6:
            return "Six";
        case 7:
            return "Seven";
        case 8:
            return "Eight";
        case 9:
            return "Nine";
        default:
            return "Please enter a single digit number";
    };
}

/*
==========
2025_08_26
==========
*/
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
const sumMix = x => x.map((elem) => Number(elem)).reduce((a,b) => a + b);

/*
==========
2025_08_27
==========
*/
//https://www.codewars.com/kata/577bd026df78c19bca0002c0
//Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
/*
S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/
const correct = string => string.replaceAll("5", "S").replaceAll("0", "O").replaceAll("1", "I")
/*
==========
2025_08_28
==========
*/
//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
const boolToWord = bool => (bool === true) ? "Yes" : "No"

/*
==========
2025_08_29
==========
*/
//Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.
// - filters out NaN values
const parseF = input => {
    return (isNaN(Number(input))) ? null
    : ((`${input}` === "true") || (`${input}` === "false")) ? null : Number.parseFloat(input);
}

/*
==========
2025_08_30
==========
*/
//Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
//Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
const hello = name => name ? `Hello, ${(name[0].toUpperCase().concat(name.slice(1).toLowerCase()))}!` : `Hello, World!`

/*
==========
2025_08_31
==========
*/
//https://www.codewars.com/kata/53d16bd82578b1fb5b00128c
//Create a function that takes a number as an argument and returns a grade based on that number.
const grader = score => (score >= .9 && score <= 1.0) ? "A"
                        : (score >= .8 && score < .9) ? "B"
                        : (score >= .7 && score < .8) ? "C"
                        : (score >= .6 && score < .7) ? "D" : "F"

/*
==========
2025_09_01
==========
*/
//https://www.codewars.com/kata/5865918c6b569962950002a1
//Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
//If no occurrences can be found, a count of 0 should be returned.
/*
PLAN
    I. CONSTRAINTS
        A. Only accepts a string and a single character.
        B. Must return integer count of occurrances second argument is found in the first one.
        C. No occurances can be found, 0 must be returned.
    II. OPERATIONS
        A. Function takes in 1 string and 1 character.
        B. Function returns a positive integer or 0.
        C. Character is compared to string.
            i. Character is looped through to compare against each string char.
        D. Instances of character in string are counted and kept track of.
    III. DIVIDE
        A. Declare function and parameters.
        B. Declare variable for storing character instances.
        C. Determine loop type to use for comparison.
        D. Include increment counter within loop.
        E. Return value after all loops have completed.
    IV. DO WHAT YOU KNOW
        A. Solve most obvious portion
        B. Solve most constrained portion
        C. Use existing tools
        D. Experiment by testing with a hypothesis, not guessing
    V. REDUCE
        A. Break into smaller chunks/components
    
    Possible solutions:
        - Delete all characters except the Character in string, return the length of the string
        - Compare each Str char with Character and count instances, return count
        - Convert all Str chars to array elements and count element instances, return count
        - Delete all instances of Character from string, return difference between input Str and new Str
*/
const strCount = (str, letter) => {  
    let count = 0;
    for (let char of str) {
        if (letter === char) {
            count++;
        };
    };
    return count;
};

/*
==========
2025_09_03
==========
*/
//https://www.codewars.com/kata/573f5c61e7752709df0005d2
//Write a function that merges two sorted arrays into a single one. The arrays only contain integers. 
// Also, the final outcome must be sorted and not have any duplicate.
/*
PLAN
    I. CONSTRAINTS
        A. Input is two sorted arrays.
        B. Inputs contain only integers.
        C. Output must be a single sorted array, no duplicates.
    
    II. OPERATIONS
        A. Merge the two input arrays.
        A. Sorting elements within merged array.
            1. Loop through elements to sort.
        B. Remove duplicates.
            1. Loop through elements to check for duplicates.
        C. Output merged, sorted array with no duplicates.

    III. GOAL
        A. Output merged, sorted array with no duplicates.

    IV. DIVIDE
        A. Steps
            1. Merge input arrays.
            2. Sort arrays.
            3. Remove duplicates.
            4. Output results.

    V. DO WHAT YOU KNOW
        A. Obvious actions
            1. Merge .concat()
            2. Rearrange for order. .sort((a,b) => a - b)
            3. Check for duplicates. Set()
            4. Remove duplicates. Set()
            5. Output results. return
        

    VI. REDUCE


    Possible solutions:
*/
const mergArrays = (a,b) => [...new Set(a.concat(b).sort((a,b) => a - b))]

/*
==========
2025_09_04
==========
*/
//https://www.codewars.com/kata/58bf9bd943fadb2a980000a7
//Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. 
// Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. 
// He begins to solicit his neighbors to petition to get the association to build the wall. 
// Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. 
// As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.
// Your code will show Full name of the neighbor and the truncated version of the name as an array. 
// If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is.
/*
PLAN
    I. CONSTRAINTS
        A. Takes in a string
        B. Returns an array 
            1. Array contains the input string 
            2. Array contains first 2 letters of input string
                i. If characters in name less than or equal to two, returns only input string
    
    II. OPERATIONS  
        A. Checks length of string
            1. If string length <= 2, return array containing string
            2. Otherwise, return array containing string and 1st 2 chars of string (2 elements)

    III. GOAL
        A. Return 2 different types of arrays, depending on inputs

    IV. DIVIDE
        A. PHASE - Plan operations
            1. Methods/properties used
                i. Array.from()
                ii. .length
                iii. .slice()
        B. STEPS
            1. Test to check length
            2. Ternary for conditional
            3. 'true' array containing 2 elements
            4. 'false' array containing 1 element

    V. DO WHAT YOU KNOW

    VI. REDUCE

    Possible solutions:
*/
const whoIsPaying = name => (name.length > 2) ? [name, name.slice(0,2)] : [name]

/*
==========
2025_09_05
==========
*/
//https://www.codewars.com/kata/5866fc43395d9138a7000006
//Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.
/*
PLAN
    I. CONSTRAINTS
        A. Accepts a string
        B. May or may not end with a question mark
        C. Output needs to:
            1. End with question mark if input doesn't have one
            2. OR return original string
    
    II. OPERATIONS
        A. Checks end of string for question mark
            1. Determines end of string by using .length
            2. Selects last character by using .length
            3. Last char is stored for comparison to "?"
        B. Returns string:
            1. With question mark if none on original string
            2. OR original string  

    III. GOAL
        A. Return string with question mark if original doesn't have one
        B. OR return original string

    IV. DIVIDE
        A. PHASES
            1. Variables
                i. Last character for comparison to "?"
            2. Methods/Properties
                i. .length
            3. Conditionals/Loops
                i. IF/ternary for determining output with "?" or without
        B. STEPS
            1. Function expression
            2. Variable to store last char
            3. .length for input last char
            4. Conditional for output
            5. Output

    V. DO WHAT YOU KNOW

    VI. REDUCE

    Possible solutions:
*/
const ensureQuestion = s => (s[s.length-1] === "?") ? s : s + "?"

/*
==========
2025_09_05
==========
*/
//https://www.codewars.com/kata/570597e258b58f6edc00230d
//You are given a string containing a sequence of character sequences separated by commas.
//Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
//If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
/*
PLAN
    I. CONSTRAINTS
        A. Inputs are a sequence of characters separated by commas
            e.g. test('A1,B2');
            e.g. test('1,2,3');
        B. Returns a new string in the same sequence, without first and last characters, space separated
            e.g. "1,2,3"      =>  "2"
            e.g. "1,2,3,4"    =>  "2 3"
            e.g. "1,2,3,4,5"  =>  "2 3 4"
        C. If input is empty or result would be empty, return NULL
    
    II. OPERATIONS
        A. Split each sequence into an element within an array (arr)
        B. Remove first and last elements in arr
        C. Convert arr to str and space separate each former element in new str
        D. Check if string is empty. 
            - If string contains a space (" "), then will return false for null, undefined and 'false' for (" " === false)
            - Need to make sure that array contains no elements with spaces in them
            - Space between sequences need to be added during string conversion, not while input is an array (during .join())
        E. If length is 0, return NULL otherwise return new string

    III. GOAL(S)
        A. Function returns new string where first and and last elements are deleted and new str has all sequences space separated; return NULL if string would be empty

    IV. DIVIDE
        A. PHASES
            1. Variables
                i. Array to mutate
                ii. String to output
            2. Methods/Properties
                i. .length to find end of array/string
                ii. .split() to convert string into array
                iii. .join() to combine array into string
                iv. .slice() to output copy of array minus first and last elements
            3. Conditionals/Loops
                i. IF/ternary to return new string or NULL
        B. STEPS
            1. Convert string into array
            2. Delete last element in array  <-----------
            3. Delete first element in array <----------- Can also use slice to return subsection of array
            4. Convert array to string with " " as the concatenation character
                - Don't need to check if array is empty before .join(" "), will output empty string regardless
            5. Conditional to check .length of returned string, NULL if 0; new str otherwise

    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. PROBLEMS WITH MOST CONSTRAINTS

    VI. REDUCE

    Possible solutions:
*/
function array(string) {
  let arr = string.split(",")
  let copyArr = arr.slice(1,arr.length-1);
  let newStr = copyArr.join(" ");
  if (newStr.length < 1) {
    return null
  } else {
    return newStr;
  }
}

/*
==========
2025_08_XX
==========
*/
//https://www.codewars.com/kata/57096af70dad013aa200007b
//Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.
/*
==============================================================================================
const logicalCalc = (array, op) => {
    let booleanArr = [];
    switch(op) {
        case "AND":
            for (let i = 0; i < array.length - 1; i++) {
                booleanArr.push(array[i] && array[i+1]);
            };
            return booleanArr.every((elem) => elem === true);
        case "OR":
            for (let i = 0; i < array.length - 1; i++) {
                booleanArr.push(array[i] || array[i+1]);
            };
            return booleanArr.some((elem) => elem === true);
        case "XOR":
            for (let i = 0; i < array.length - 1; i++) {
                booleanArr.push(array[i] ^ array[i+1]);
                console.log(booleanArr);
            };
            return booleanArr.every((elem) => ((elem === true) && (elem === false)));
    };
}

console.log(logicalCalc([true, true, true, false], "XOR"), true);
console.log(logicalCalc([true, true, false, false], "XOR"), false);
==============================================================================================
*/