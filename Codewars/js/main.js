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
2025_09_07
==========
*/
//https://www.codewars.com/kata/5583090cbe83f4fd8c000051
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
/*
PLAN
    I. CONSTRAINTS
        A. Will be given random non-negative number
        B. Must return the digits of number in reverse order
        C. Each individual number is an element within an array
    
    II. OPERATIONS
        A. Convert input to array
        B. Split array element into multiple elements
        C. Reverse order of array elements
        D. Return reversed array

    III. GOAL(S)
       A. Return number as reversed array

    IV. DIVIDE
        A. PHASES
            1. Variables
                i. Array
            2. Methods/Properties
                i. Array.from()
                ii. 
            3. Conditionals/Loops
                i. n/a 

        B. STEPS
            1. Convert number to string
            2. String to individual array elements
            3. Array elements to numbers
            4. Reverse elements
            5. Return result

    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. PROBLEMS WITH MOST CONSTRAINTS

    VI. REDUCE

    Possible solutions:
*/
const digitize = n => Array.from(n.toString()).map((elem) => Number(elem)).reverse();

/*
==========
2025_09_08
==========
*/
//Remove String Spaces
//https://www.codewars.com/kata/57eae20f5500ad98e50002c5
//Write a function that removes the spaces from the string, then return the resultant string.
/*
PLAN
    I. CONSTRAINTS
        A. Must remove all spaces from string
        B. Returns the string with all spaces removed       

    II. OPERATIONS
       A. Convert string to array
       B. Delete empty array elements
       C. Join array
       D. Output result

    III. GOAL(S)

    IV. DIVIDE
        A. PHASES
            1. Variables
                i.n/a
            2. Methods/Properties
                i.split()
                ii.join()
                iii.filter()
            3. Conditionals/Loops
                i.filter()

        B. STEPS
            1. Convert string to array with .split("")
            2. .filter() elements that are " "
            3. .join() filtered array
            4. Return result
        
    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. PROBLEMS WITH MOST CONSTRAINTS

    VI. REDUCE

    Possible solutions:

    Thoughts: 
        - Will .join(",") concatenate array elements that contain a space?
            ^ leaves empty space
*/
const noSpace = x => x.split("").filter((elem) => (elem !== " ")).join("");

/*
==========
2025_09_09
==========
*/
//Total amount of points
//https://www.codewars.com/kata/5bb904724c47249b10000131
//Our team's match results are recorded in a collection of strings. 
// Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
//For example: ["3:1", "2:2", "0:1", ...]
//Points are awarded for each match as follows:
//if x > y: 3 points (win)
//if x < y: 0 points (loss)
//if x = y: 1 point (tie)
//We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
/*
PLAN
    I. CONSTRAINTS  
        A. Input is an array containing strings in X:Y format
        B. Fn returns accumulated value of all elements in string
        C. Element values are based on X > Y  = 3, X < Y = 0 & X = Y = 1

    II. OPERATIONS
        A. MAYBE convert each string element to sub-array element
        A. Callback function on each element:
            1. Comparison between X & Y values
        B. Stores points in variable based on X & Y values
        C. Returns value of variable based on X

    III. GOAL(S)

    IV. DIVIDE
        A. PHASES
            1. Variables
                i. value based on accumulated X & Y ratios (maybe?)

            2. Methods/Properties
                i. Array.from()

            3. Conditionals/Loops
                i. iterate through each element string and convert to value OR 
                ii. iterate through each 

        B. STEPS

        
    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. PROBLEMS WITH MOST CONSTRAINTS

    VI. REDUCE

    Possible solutions:

    Thoughts: 
    
*/
function points(games) {
    let newArr = [];
    for (let score of games){
        newArr.push(Array.from(score));
    }
    return newArr.map((elem) => (elem[0] > elem[2] ? 3
                            : (elem[0] < elem[2]) ? 0
                            : 1                    
        )
    ).reduce((acc,currVal) => acc + currVal);
}

/*
==========
2025_09_10
==========
*/
//Double Char
//https://www.codewars.com/kata/56b1f01c247c01db92000076
//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
/*
PLAN
    I. CONSTRAINTS  
        A. Input is a string
        B. Output is a string
        C. Characters in output have to be repeated 1 time

    II. OPERATIONS
        A. Loop through string
        B. Output copy of each character in string

    III. GOAL(S)

    IV. DIVIDE
        A. PHASES
            1. Variables
                i. output string

            2. Methods/Properties
                

            3. Conditionals/Loops
                i. for...of

        B. STEPS
            1. for...of iterates through each character in string
                i. copies char twice to new str
            2. returns new str
        
    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. PROBLEMS WITH MOST CONSTRAINTS

    VI. REDUCE

    Possible solutions:

    Thoughts: 
    
*/
function doubleChar(str) {
    let newStr = "";
  	for(let char of str){
		newStr += char+char;
  	}
	return newStr;
}

/*
==========
2025_09_11
==========
*/
//Count by X
//https://www.codewars.com/kata/5513795bd3fafb56c200049e
//Create a function with two arguments that will return an array of the first n multiples of x.
//Assume both the given number and the number of times to count will be positive numbers greater than 0.
//Return the results as an array or list ( depending on language ).
/*
PLAN
    I. CONSTRAINTS  
        A. Two values input
        B. Output is an array
        C. Maximum value is xn
        D. Step count is x

    II. OPERATIONS
        A. Find range (x * n)
        B. Increase step count by x until x * n is reached
        C. Output result as array

    III. GOAL(S)
        A. Given 2 numbers, output an array that contains 2n at a step count of x

    IV. DIVIDE
        A. PHASES
            1. Variables


            2. Methods/Properties
                i. 


            3. Conditionals/Loops
                i. iterate x n times as steps

        B. STEPS
            1. 
        
    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. PROBLEMS WITH MOST CONSTRAINTS

    VI. REDUCE

    Possible solutions:

    Thoughts: 
        - can use .push to an empty array, must create empty array
        - can wrap results in [], avoids creating separate empty array
        - can't use map, creating array from inputs (no source array)
*/
function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++){
        z.push(x * i)    
    }
    return z;
}

/*
==========
2025_09_12
==========
*/
//Convert a string to an array
//https://www.codewars.com/kata/57e76bc428d6fbc2d500036d
//Write a function to split a string and convert it into an array of words.
/*
PLAN
    I. CONSTRAINTS  
        A. Input is a string
        B. Output is an array
        C. Individual string words should be separate elements

    II. OPERATIONS
        A. Check string for spaces
        B. Split each word at the space into an element
        C. Output the resulting element

    III. GOAL(S)
        A. Split an input string into an array containing each separate word as an element

    IV. DIVIDE
        A. PHASES
            1. Variables
                i. not necessary

            2. Methods/Properties
                i. .split()

            3. Conditionals/Loops
                i. n/a

        B. STEPS
            1. use .split() on input string
            2. output resulting array
        
    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. PROBLEMS WITH MOST CONSTRAINTS

    VI. REDUCE

    Possible solutions:

    Thoughts: 

*/
const stringToArray = string => string.split(" ");

/*
==========
2025_09_13
==========
*/
//If you can't sleep, just count sheep!!
//https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
//Given a non-negative integer, 3 for example, return a string with a murmur:
//"1 sheep...2 sheep...3 sheep..."
// Input will always be valid, i.e. no negative integers.
/*
PLAN
    I. CONSTRAINTS  
        A. Input will be non-negative integer
        B. Output will count from 1 to input in "n sheep...n+1 sheep...n+2 sheep..." format
        C. Output is a single string with above concatenated

    II. OPERATIONS
        A. Count from 1 to n
        B. Return template literal "n sheep...n+1 sheep..."

    III. GOAL(S)
      

    IV. DIVIDE
        A. PHASES
            1. Variables

            2. Operations
                A. += 

            3. Methods/Properties

            4. Conditionals/Loops
                A. Loop from 1 to n


        B. STEPS
            
        
    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. PROBLEMS WITH MOST CONSTRAINTS

    VI. REDUCE

    Possible solutions:

    Thoughts: 
        -Uses concatenation
*/
const countSheep = num => Array.from({length: num}, ((k,v) => (`${v+1} sheep...`))).join("");

/*
==========
2025_09_14
==========
*/
//DNA to RNA Conversion
//https://www.codewars.com/kata/5556282156230d0e5e000089
//Create a function which translates a given DNA string into RNA.
/*
PLAN
    I. CONSTRAINTS  
        A. Input will be arbitrary length or even empty
        B. All input is valid (G, C, A and/or T)    

    II. OPERATIONS
        A. Check string for "T"
        B. Replace "T" with "U"
        C. Output replaced string
        
    III. GOAL(S)
      A. Convert all Ts in string to U and output result

    IV. DIVIDE
        A. PHASES
            1. Variables
                i. Output string

            2. Operators

            3. Methods/Properties
                .replaceAll()

            4. Conditionals/Loops

        B. STEPS
            1. Use replaceAll() method on input and output result            
        
    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. PROBLEMS WITH MOST CONSTRAINTS

    VI. REDUCE

    Possible solutions:

    Thoughts: 
*/
const DNAtoRNA = dna => dna.replaceAll("T", "U")

/*
==========
2025_09_15
==========
*/
//Capitals first!
//https://www.codewars.com/kata/55c353487fe3cc80660001d4
//Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. 
//The order of the uppercase and lowercase words should be the order in which they occur.
//If a word starts with a number or special character, skip the word and leave it out of the result.
//Input String will not be empty.
//For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"
/*
PLAN
    I. CONSTRAINTS  
        A. Input is a string, will not be empty
        B. Output is a string
        C. Output has all uppercase words at front
        D. Output has all lowercase words at back
        E. Uppercase/lowercase words output respects input string order
        F. Word starts with number or special character, skip and omit from output

    II. OPERATIONS
        A. Create copy of original string for output string
        B. Split string into array elements
        C. Checks first character of word in element if capital, number/symbol
        D. Passes through input string and copies all capital words to new str first
        E. Passes through input string and copies all lowercase words to new str second
        F. Outputs new string.
        
    III. GOAL(S)


    IV. DIVIDE
        A. PHASES
            1. Variables
                i. Array for manipulation
                i. Output string

            2. Operators

            3. Methods/Properties
                .split(" ") to split input into array
                .filter for filtering uppercase, lowercase, number/symbol
                .join(" ") for string output
                .length for # of iterations???
                .push() to add to array???

            4. Conditionals/Loops
                i. Loops through first character in each array element
                ii. IF for skipping number/symbol first char
                iii. IF for checking uppercase

        B. STEPS
            1. Input to array
            2. Filter inputs

        
    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. PROBLEMS WITH MOST CONSTRAINTS

    VI. REDUCE PROBLEM

    Possible solutions:

    Thoughts:
        -single pattern leaves behind capital and lower unsorted
            -need way to move all 
        
*/
const capitalsFirst = str => {
    const arr = str.split(" ");
    const pattern = /[A-Z]/;
    const pattern2 = /[a-z]/;
    let filtered = arr.filter((elem) => (pattern.test(elem[0])));
    arr.forEach((elem) => {
        if (pattern2.test(elem[0])){
            filtered.push(elem);
        }
    });
    return filtered.join(" ");
};

/*
==========
2025_09_16
==========
*/
//Sum of two lowest positive integers
//https://www.codewars.com/kata/558fc85d8fd1938afb000014
//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
//No floats or non-positive integers will be passed.
/*
PLAN
    I. CONSTRAINTS  
        A. Input is an array
        B. Inputs are not floats/non-positive integers
        C. Output is sum of two lowest positive numbers
        D. Output is a number, not array

    II. OPERATIONS
        A. Sort array in ascending order of value
        B. Add 2 lowest values
        C. Output result as a single number
        
    III. GOAL(S)
        A. Output sum of two lowest numbers of input array

    IV. DIVIDE
        A. PHASES
            1. Variables
                A. none

            2. Operators


            3. Methods/Properties
                A. .sort()


            4. Conditionals/Loops
                A. .sort() callback fn

        B. STEPS


        
    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. PROBLEMS WITH MOST CONSTRAINTS

    VI. REDUCE PROBLEM

    Possible solutions:

    Thoughts:
*/
const sumTwoSmallestNumbers = num => num.sort((a,b) => a - b).reduce((acc,cVal,cInd) => (cInd < 2) ? acc = acc + cVal : acc)

/*
==========
2025_09_17
==========
*/
//Previous multiple of three
//https://www.codewars.com/kata/61123a6f2446320021db987d
//Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.
//Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.
/*
PLAN
    I. CONSTRAINTS  
        A. Input is > 0
        B. Input is < 1,000,000 (1e6)
        C. May only remove last digit per iteration
        D. Must return number that is a multiple of 3
            1. If no such number exists, return null, empty or -1
            2. If number is already multiple of 3, return n

    II. OPERATIONS
        A. Create variable to store value
        B. Assign input to variable
        B. Check variable with % 3
            1. IF result === 0 
                i. return variable
            2. ELSE remove last digit of variable
            3. LOOP through 1 & 2 until length of 0
                i. When 0, return null, empty or -1

        
    III. GOAL(S)


    IV. DIVIDE
        A. PHASES
            1. Variables
                i. Store input as a string

            2. Operators


            3. Methods/Properties
                i. Convert input to string .toString()
                ii. .slice(0,string.length-2) to return string without last digit removal
                iii. Number(string) to return value as number

            4. Conditionals/Loops
                i. Recursion with % 3 and last digit removal
                ii. IF ELSE for last digit removal, recursion

        B. STEPS


        
    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. PROBLEMS WITH MOST CONSTRAINTS

    VI. REDUCE PROBLEM

    Possible solutions:

    Thoughts:
*/
const prevMultOfThree = n => {
  let str = n.toString();
  for (let i = str.length-1; i >= 0; i--){
    if(str % 3 !== 0){
        if(i === 0){
            return null;
        }
        str = str.slice(0,str.length-1);
    } else {
        return Number(str);
    }
  }
}

/*
==========
2025_09_18
==========
*/
//String ends with?
//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
/*
PLAN
    I. CONSTRAINTS  
        A. Both inputs are strings
        B. Returns true if 1st arg ends with 2nd arg

    II. OPERATIONS
        A. Checks 2nd arg against the end of the 1st arg
        B. Returns true if so
        C. Returns false if not
        
    III. GOAL(S)


    IV. DIVIDE
        A. PHASES
            1. Variables
        

            2. Operators


            3. Methods/Properties
                i. .endsWith()

            4. Conditionals/Loops
                i. ternary for true/false

        B. STEPS


        
    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. PROBLEMS WITH MOST CONSTRAINTS

    VI. REDUCE PROBLEM

    Possible solutions:

    Thoughts:
*/
const solution = (str, ending) => str.endsWith(ending)

/*
==========
2025_09_19
==========
*/
//RaNDoM CAsE
//https://www.codewars.com/kata/57073869924f34185100036d
//Write a function that will randomly upper and lower characters in a string
/*
PLAN
    I. CONSTRAINTS  
        A. Input is a string
		B. Letters must be randomly chosen to be uppercase
		C. Output new string

    II. OPERATIONS
        A. Use Math.random() to select a value
		B. IF statement to choose whether or not to set the letter to uppercase based on Math.random result
		C. Output new string
        
    III. GOAL(S)


    IV. DIVIDE
        A. PHASES
            1. Variables

            2. Operators

            3. Methods/Properties
                i. Math.random()

            4. Conditionals
				i. IF to return uppercase or not

			5. Loops
				i. loop to go through each character in input string

        B. STEPS

        
    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. PROBLEMS WITH MOST CONSTRAINTS

    VI. REDUCE PROBLEM

    Possible solutions:

    Thoughts:    
*/
function randomCase(x) {
	let str = "";
  	for(let char of x){
		(Math.random() > .49) ? str += char.toUpperCase() : str += char.toLowerCase();
	}
	return str;
}

/*
==========
2025_09_20
==========
*/
//Name Array Capping
//https://www.codewars.com/kata/5356ad2cbb858025d800111d
//Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.
/*
PLAN
    I. CONSTRAINTS  
        A. Input is an array
		B. Names within the array need to start with a capital letter
		C. Letters after the first letter need to be lowercase
        D. Output result as an array

    II. OPERATIONS
        A. Create a new array to store the results
		B. Select each element of the array
		C. Select the first character of each element and capitalize it
        D. Select each remaining character and set them to lowercase
        E. Return result as an array
        
    III. GOAL(S)

    IV. DIVIDE
        A. PHASES
            1. Variables

            2. Operators

            3. Methods/Properties
                i. .map() for outputting new array with operation performed on elements
                ii. .toLowerCase() to change all characters in element to lowercase
                iii. 

            4. Conditionals
				i. 

			5. Loops
				i. loop through each element in the array
                ii. loop through the first character of each element

        B. STEPS
            1. .map() to loop through and output results
            2. set elem to lowercase
            3. select first char of elem and set to uppercase
            4. return elem

    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. SOLVE MOST CONSTRAINED

    VI. REDUCE PROBLEM

    Possible solutions:

    Thoughts:    
*/
const capMe = names => {
    return names.map(((elem) => {
        elem = elem.toLowerCase();
        elem = elem.replace(elem[0], elem[0].toUpperCase());
        return elem;
    }))
}

/*
==========
2025_09_21
==========
*/
//Flatten
//https://www.codewars.com/kata/5250a89b1625e5decd000413
//Write a function that flattens an Array of Array objects into a flat Array. 
// Your function must only do one level of flattening.
/*
PLAN
    I. CONSTRAINTS  
        A. Input is an array.
        B. Must only flatten 1 level.

    II. OPERATIONS
        A. Flatten by one level
        B. Return result.
        
    III. GOAL(S)

    IV. DIVIDE
        A. PHASES
            1. Variables

            2. Operators

            3. Methods/Properties
                i. .flat() 

            4. Conditionals
				i. 

			5. Loops
				

        B. STEPS
            1. .flat() on input
            2. return result

    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. SOLVE MOST CONSTRAINED

    VI. REDUCE PROBLEM

    Possible solutions:

    Thoughts:    
*/
const flatten = array => array.flat(1)

/*
==========
2025_09_22
==========
*/
//You Can't Code Under Pressure #1 
//https://www.codewars.com/kata/53ee5429ba190077850011d4 8kyu
//Double the integer and return it
/*
PLAN
    I. CONSTRAINTS  
        
    II. OPERATIONS
        
    III. GOAL(S)

    IV. DIVIDE
        A. PHASES
            1. Variables

            2. Operators

            3. Methods/Properties
                

            4. Conditionals
				 

			5. Loops
				

        B. STEPS

    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. SOLVE MOST CONSTRAINED

    VI. REDUCE PROBLEM

    Possible solutions:

    Thoughts:    
*/
const doubleInteger = i => i+i

/*
==========
2025_09_22
==========
*/
//Most digits
//https://www.codewars.com/kata/58daa7617332e59593000006 7kyu
//Find the number with the most digits.
//If two numbers in the argument array have the same number of digits, return the first one in the array.
/*
PLAN
    I. CONSTRAINTS  
        A. Input is an array
        B. Output is number with most digits
        C. If tied for most digits, return first encountered element

    II. OPERATIONS
        A. Checks the .length of each element in the array
        B. IF statement to break ties between 2 or more highest .length values
        C. Return element

    III. GOAL(S)

    IV. DIVIDE
        A. PHASES
            1. Variables

            2. Operators

            3. Methods/Properties
                i. .length to determine most digits
                ii. .sort() to sort array by length?
                    - if using .sort(), will alter original array index values

            4. Conditionals
				 i. IF to handle multiple elements with highest length

			5. Loops
				i. loop through each element

        B. STEPS
            1. Create for loop that goes through each element in array.
            2. Loop body contains ex

    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. SOLVE MOST CONSTRAINED

    VI. REDUCE PROBLEM

    Possible solutions:

    Thoughts:
        - How to keep track of element with longest length?
            - Could use reduce to compare and reassign acc once longer length has been found
            - Doesn't switch if new length isn't longer
            - Can return that element    
*/
const findLongest = array => array.reduce((acc,currVal) => (acc.toString().length < currVal.toString().length) ? acc = currVal : acc)

/*
==========
2025_09_22
==========
*/
//Who likes it?
//https://www.codewars.com/kata/5266876b8f4bf2da9b000362 6kyu
//Implement the function which takes an array containing the names of people that like an item. 
//It must return the display text as shown in the examples:
//[]                                -->  "no one likes this"
//["Peter"]                         -->  "Peter likes this"
//["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
//["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
//["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
/*
PLAN
    I. CONSTRAINTS  
        A. Input is an array of names
        B. Output must be a string in the example format
        C. Output text "and N others like this" must be accounted for

    II. OPERATIONS
        A. Count array length
        B. Output string as a template literal

    III. GOAL(S)

    IV. DIVIDE
        A. PHASES
            1. Variables
                

            2. Operators


            3. Methods/Properties
                i. .length

            4. Conditionals
                i. IF empty array

			5. Loops 
                

        B. STEPS
            1. Count array length
            2. IF/ternary for empty array
            3. Output text as string literal

    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. SOLVE MOST CONSTRAINED

    VI. REDUCE PROBLEM

    Possible solutions:

    Thoughts:
       
*/
const likes = (names) => 
         names.length === 0 ? 'no one likes this' :
         names.length === 1 ? `${names[0]} likes this` :
         names.length === 2 ? `${names[0]} and ${names[1]} like this` :
         names.length === 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this` :
         `${names[0]}, ${names[1]} and ${names.length-2} others like this`;

/*
==========
2025_09_22
==========
*/
//Sort the odd 6kyu
//You will be given an array of numbers. 
//You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
/*
PLAN
    I. CONSTRAINTS  

    II. OPERATIONS
        
    III. GOAL(S)

    IV. DIVIDE
        A. PHASES
            1. Variables

            2. Operators


            3. Methods/Properties

            4. Conditionals

			5. Loops

        B. STEPS


    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. SOLVE MOST CONSTRAINED

    VI. REDUCE PROBLEM

    Possible solutions:

    Thoughts:
       
*/
function sortArray(array) {
    let newArr = array.map((elem) => {
        if (elem % 2 !== 0) {
            return elem;
        };
    }).sort((a,b) => a - b);

    let index = 0;
 
    for (let i = 0; i < array.length; i++) {
        if ( array[i] % 2 !== 0) {
            array[i] = newArr[index];
            index++;
        };
    };
    return array;
}
/*
==========
2025_09_22
==========
*/
//Filter Coffee 7kyu
//The first argument to your search function will be a number which represents your budget.
//The second argument will be an array of coffee bean prices.
//Your 'search' function should return the stores that sell coffee within your budget.
//The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.
/*
PLAN
    I. CONSTRAINTS  

    II. OPERATIONS
        
    III. GOAL(S)

    IV. DIVIDE
        A. PHASES
            1. Variables

            2. Operators


            3. Methods/Properties

            4. Conditionals

			5. Loops

        B. STEPS


    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. SOLVE MOST CONSTRAINED

    VI. REDUCE PROBLEM

    Possible solutions:

    Thoughts:
       
*/
const search = (budget, prices) => prices.filter((price) => price <= budget).sort((a,b) => a - b).join()

/*
==========
2025_09_22
==========
*/
//We Have Liftoff 7kyu
//You have an array of numbers 1 through n (where 1 <= n <= 10). The array needs to be formatted correctly for the person reading the countdown of a spaceship launch.
//Unfortunately, the person reading the countdown only knows how to read strings. After the array is sorted correctly make sure it's in a format he can understand.
//Between each number should be a space and after the final number (n) should be the word 'liftoff!'
/*
PLAN
    I. CONSTRAINTS  

    II. OPERATIONS
        
    III. GOAL(S)

    IV. DIVIDE
        A. PHASES
            1. Variables

            2. Operators


            3. Methods/Properties

            4. Conditionals

			5. Loops

        B. STEPS


    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. SOLVE MOST CONSTRAINED

    VI. REDUCE PROBLEM

    Possible solutions:

    Thoughts:
       
*/
function liftoff(instructions){
  return instructions.sort((a,b) => b - a)
              .join(" ") + " liftoff!"
}

/*
==========
2025_09_22
==========
*/
//Beginner - Reduce but Grow 8kyu
//Given a non-empty array of integers, return the result of multiplying the values together in order. 
/*
PLAN
    I. CONSTRAINTS  

    II. OPERATIONS
        
    III. GOAL(S)

    IV. DIVIDE
        A. PHASES
            1. Variables

            2. Operators


            3. Methods/Properties

            4. Conditionals

			5. Loops

        B. STEPS


    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. SOLVE MOST CONSTRAINED

    VI. REDUCE PROBLEM

    Possible solutions:

    Thoughts:
       
*/
const grow = x => x.reduce((acc,currVal) => {
    return acc = acc * currVal;
}, 1)

/*
==========
2025_09_22
==========
*/
//Sentence Smash 8kyu
//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. 
// Be careful, there shouldn't be a space at the beginning or the end of the sentence!
/*
PLAN
    I. CONSTRAINTS  

    II. OPERATIONS
        
    III. GOAL(S)

    IV. DIVIDE
        A. PHASES
            1. Variables

            2. Operators


            3. Methods/Properties

            4. Conditionals

			5. Loops

        B. STEPS


    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. SOLVE MOST CONSTRAINED

    VI. REDUCE PROBLEM

    Possible solutions:

    Thoughts:
       
*/
const smash = words => words.join(" ");

/*
==========
2025_09_23
==========
*/
//Mexican Wave 6kyu
//create a function that turns a string into a Mexican Wave. 
//You will be passed a string and you must return an array of strings where an uppercase letter is a person standing up.
//The input string will always consist of lowercase letters and spaces, but may be empty, in which case you must return an empty array. 
//If the character in the string is whitespace then pass over it as if it was an empty seat
/*
PLAN
    I. CONSTRAINTS  
        A. Input is string
            1. If input is composed of multiple words, words are remain a single element in output
        B. Output is array of strings
            1. Array of strings consists of 1st character capitalized, all else lowercase
            2. Each subsequent element becomes the new capitalized character, all else lowecase
            3. Repeat until last character is capital
            4. White space is skipped over
        C. Empty strings must return empty array

    II. OPERATIONS
        A. Loop through string
        B. First encountered letter is capitalized
        C. Characters before capital + capital + characters after capital pushed to new array
        D. Repeat until whole length of string has been looped
        E. Output array

    III. GOAL(S)

    IV. DIVIDE
        A. PHASES
            1. Variables
                i. newStr for adding letters
                ii. newArr for pushing completed words
                iii. interimArr if splitting newStr into array

            2. Operators
                i. "+" for concatenating string chars

            3. Methods/Properties
                i. .push() for pushing newStr to array
                ii. .map() if splitting input string into array
                    a. .join() if above
                    b. 
                iii. .slice() if using string
                

            4. Conditionals
                i. IF for white space    

			5. Loops
                i. loop for each individual string char

        B. STEPS
            1. Split string into array of characters

    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. SOLVE MOST CONSTRAINED

    VI. REDUCE PROBLEM

    Possible solutions:

    Thoughts:

*/
function wave(str){
  let output = [];
  let i = 0;
  capitalize();

  function capitalize() {
    let strArr = str.split("")
    if (i > (strArr.length-1)) {
        return;
    } else {
      if (!(strArr[i] === " ")) {
        strArr[i] = strArr[i].toUpperCase();
        output.push(strArr.join(""));
      }
      i++;
      capitalize();
    }
  }
  return output;
};

/*
==========
2025_09_23
==========
*/
//Alphabetical Sequence 7kyu
//In this kata you will be given a random string of letters and tasked with returning them as a string of 
//comma-separated sequences sorted alphabetically, with each sequence starting with an uppercase character followed 
//by n-1 lowercase characters, where n is the letter's alphabet position 1-26.
/*
PLAN
    I. CONSTRAINTS  
        A. Input is a string with only letters
        B. Output should be first letter capitalized followed by n-1 lowercase that is the letter's alphabet position
        C. Output sequences are comma separated
        D. Output is a string

    II. OPERATIONS
        A. Use character codes to determine distance between characters
        B. Convert input string to array of characters
        C. Set character to uppercase
        D. Append n-1 lowercase characters based on character position in alphabet

    III. GOAL(S)

    IV. DIVIDE
        A. PHASES
            1. Variables
                i. array to store string chars
                ii. working array to add 

            2. Operators
                i. + to append characters

            3. Methods/Properties
                i. .repeat() to append n characters
                ii. split() to split input into array
                iii. .join() if split is used 
                iv. .charCodeAt() to find character's code and difference in alphabet position
                v. toUpperCase() to set chars to uppercase
                vi. toLowerCase() to set chars to lowercase
                vii. .map() go through all elements
                
            4. Conditionals
                i. 

			5. Loops
                i. loop through all characters within input string 

        B. STEPS
            1. Set string to uppercase
            2. Split string into array
            3. 

    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. SOLVE MOST CONSTRAINED

    VI. REDUCE PROBLEM

    Possible solutions:

    Thoughts:

*/
function alphaSeq (str) {
    let newArr = str.toUpperCase().split("");
    let mapped = newArr.map((elem) => {
        elem = elem + elem.toLowerCase().repeat(elem.charCodeAt(elem) - 65)
        return elem;
    })
    return mapped.sort().join()
}

/*
==========
2025_09_24
==========
*/
//Jenny the youngest detective 7kyu
//https://www.codewars.com/kata/58b972cae826b960a300003e
//Each of the numbers in the array refers to the position of a letter in the string, in increasing order.
//Spaces are not places, you need the actual letters. No spaces.
//The returned word should be all lowercase letters.
//If you can't find one of the letters using the index numbers, return "No mission today".
/*
PLAN
    I. CONSTRAINTS  
        A. Input is a string and an array
        B. Output is a decoded lowercase string 
        C. If a letter is missing, return "No mission today"
        D. Array values correspond to letters, in ascending order
        E. Array values are unsorted


    II. OPERATIONS
        A. Sort input array
        B. Correspond array value with index value in string
        C. Concatenate string characters until all array values have been looped
        D. Return completed string as lowercase
        E. If no string character corresponds to array value, return "No mission today"

    III. GOAL(S)

    IV. DIVIDE
        A. PHASES
            1. Variables
                   i. return string

            2. Operators
                   i. + for concatenation of string chars

            3. Methods/Properties
                   i. .sort() for array
                  ii. 
                
            4. Conditionals
                   i. IF array value has no corresponding string index

			5. Loops
                   i. loop through all array values

        B. STEPS
            1. sort input array
            2. create loop 

    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. SOLVE MOST CONSTRAINED

    VI. REDUCE PROBLEM

    Possible solutions:

    Thoughts:
        - account for empty spaces
            - concatenate all individual characters to ignore spaces
            - checks each character value 
*/
function missingWord(nums, str) {
    let decoded = "";
    let sorted = nums.toSorted((a,b) => a - b);
    let nated = str.split(" ").join("");
    for (let i = 0; i < sorted.length; i++) {
        if (nated[sorted[i]] === undefined) {
            return "No mission today."
        }
        decoded += nated[sorted[i]];
    }
    return decoded.toLowerCase();
}

/*
==========
2025_09_24
==========
*/
//You only need one - Beginner 8kyu
//https://www.codewars.com/kata/57cc975ed542d3148f00015b
//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
//"a" can contain numbers or strings. "x" can be either.
//Return "true" if the array contains the value, "false" if not.
/*
PLAN
    I. CONSTRAINTS  
        A. Input will be an array and a value
        B. Need to check whether the array contains the value
        C. array can contain number or strings, value can be either
        D. Return "true" if array contains value, "false" otherwise

    II. OPERATIONS
        A. Check if array has a given value
        B. Return true or false as appropriate

    III. GOAL(S)

    IV. DIVIDE
        A. PHASES
            1. Variables


            2. Operators
  

            3. Methods/Properties
                   i. .includes()    

            4. Conditionals
  

			5. Loops
  

        B. STEPS
            1. .includes on array with value as argument

    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. SOLVE MOST CONSTRAINED

    VI. REDUCE PROBLEM

    Possible solutions:

    Thoughts:
  
*/
const check = (a,x) => a.includes(x)

/*
==========
2025_09_24
==========
*/
//Take an Arrow to the knee, Functionally 8kyu
/*
PLAN
    I. CONSTRAINTS  
        A. Input is an array of numbers
        B. Convert to letters using String.fromCharCode()

    II. OPERATIONS
        A. Pass array elements through String.fromCharCode()

    III. GOAL(S)

    IV. DIVIDE
        A. PHASES
            1. Variables


            2. Operators
  

            3. Methods/Properties
                   i. String.fromCharCode()
                  ii. .map()

            4. Conditionals
  

			5. Loops
  

        B. STEPS
            

    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. SOLVE MOST CONSTRAINED

    VI. REDUCE PROBLEM

    Possible solutions:

    Thoughts:
  
*/
const arrowFunc = (arr) => arr.map((elem) => String.fromCharCode(elem)).join("")

/*
==========
2025_09_24
==========
*/
//Reversed sequence
//https://www.codewars.com/kata/5a00e05cc374cb34d100000d
/*
PLAN
    I. CONSTRAINTS  


    II. OPERATIONS
        

    III. GOAL(S)

    IV. DIVIDE
        A. PHASES
            1. Variables


            2. Operators
  

            3. Methods/Properties
        

            4. Conditionals
  

			5. Loops
  

        B. STEPS
            

    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. SOLVE MOST CONSTRAINED

    VI. REDUCE PROBLEM

    Possible solutions:

    Thoughts:
  
*/
const reverseSeq = n => [...Array(n)].map((elem, index) => elem = index + 1).reverse()

/*
==========
2025_09_24
==========
*/
//MakeUpperCase
//http://codewars.com/kata/57a0556c7cb1f31ab3000ad7
/*
PLAN
    I. CONSTRAINTS  

    II. OPERATIONS

    III. GOAL(S)

    IV. DIVIDE
        A. PHASES
            1. Variables


            2. Operators
  

            3. Methods/Properties
        

            4. Conditionals
  

			5. Loops
  

        B. STEPS
            

    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. SOLVE MOST CONSTRAINED

    VI. REDUCE PROBLEM

    Possible solutions:

    Thoughts:
  
*/
const makeUpperCase = str => str.toUpperCase()

/*
==========
2025_09_25
==========
*/
//#1
//Sum of positive
//https://www.codewars.com/kata/5715eaedb436cf5606000381
const positiveSum = array => array.reduce((acc,currVal) => {
  return currVal >= 0 ? acc + currVal : acc
}, 0);

//#2
//isReallyNaN
//https://www.codewars.com/kata/56c24c58e0c0f741d4001aef
const isReallyNaN = (val) => Number.isNaN(val)

//#3
//Template Strings
//https://www.codewars.com/kata/55a14f75ceda999ced000048
var templateStrings = (noun, adjective) => `${noun} are ${adjective}`

//#4
//Add Length
//https://www.codewars.com/kata/559d2284b5bb6799e9000047
const addLength = (str) => str.split(" ").map((elem) => elem = `${elem} ${elem.length}`)

//#5
//Area or Perimeter
//https://www.codewars.com/kata/5ab6538b379d20ad880000ab
const areaOrPerimeter = (l , w) => (l === w) ? l*w : l*2 + w*2

/*
==========
2025_09_26
==========
*/
//#1
//Thinkful - Number Drills: Blue and red marbles
//https://www.codewars.com/kata/5862f663b4e9d6f12b00003b
function guessBlue(blueStart, redStart, blueTaken, redTaken) {
    return (blueStart - blueTaken)/((blueStart - blueTaken) + (redStart - redTaken))
}

//#2
//String repeat
//https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
function repeatStr (n, s) {
  return s.repeat(n);
}

//#3
//L1: Bartender, drinks!
//https://www.codewars.com/kata/568dc014440f03b13900001d
function getDrinkByProfession(param) {
  param = param.toLowerCase();
  
  switch(param) {
    case "jabroni": return "Patron Tequila";
    case "school counselor": return "Anything with Alcohol";
    case "programmer": return "Hipster Craft Beer";
    case "bike gang member": return "Moonshine";
    case "politician": return	"Your tax dollars";
    case "rapper": return "Cristal";
    default: return "Beer";
  }
}

//#4
//Basic Training: Add item to an Array
//https://www.codewars.com/kata/511f0fe64ae8683297000001
//Answer: websites.push("codewars")

//#5
//The Wide-Mouthed frog!
//https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89
function mouthSize(animal) {
   return (animal.toLowerCase() !== "alligator") ? "wide" : "small";
}

/*
==========
2025_09_29
==========
*/
//#1
//Parse nice int from char problem
//https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1
function getAge(inputString){
    return Number(inputString[0]);
}

//#2
//Name Shuffler
//https://www.codewars.com/kata/559ac78160f0be07c200005a
function nameShuffler(str){
    return str.split(" ").reverse().join(" ");
}

//#3
//Contamination #1 -String-
//https://www.codewars.com/kata/596fba44963025c878000039
function contamination(text, char){
     return char.repeat(text.length);
}

//#4
//How many stairs will Suzuki climb in 20 years?
//https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e
function stairsIn20(s){
     return s.flat(1).reduce((acc,currVal) => acc + currVal) * 20;
}

//#5
//Are there any arrows left?
//https://www.codewars.com/kata/559f860f8c0d6c7784000119
function anyArrows(arrows){
    return (arrows.length === 0) ? false
        : (arrows.every((obj) => obj.damaged === true)) ? false : true;
};

/*
==========
2025_09_30
==========
*/
//#1
//Third Angle of a Triangle
//https://www.codewars.com/kata/5a023c426975981341000014
function otherAngle(a, b) {
   return 180 - (a + b);
}

//#2
//Remove the time
//https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e
function shortenToDate(longDate) {
    return longDate.split(",")[0];
}

//#3
//Volume of a Cuboid
//https://www.codewars.com/kata/58261acb22be6e2ed800003a
class Kata {
  static getVolumeOfCuboid(length, width, height) {
      return length * width * height;
  }
}

//#4
//Quarter of the year
//https://www.codewars.com/kata/5ce9c1000bab0b001134f5af
const quarterOf = (month) => {
    return (month >= 1 && month <= 3) ? 1 
         : (month >= 4 && month <= 6) ? 2
         : (month >= 7 && month <= 9) ? 3 : 4; 
}

//#5
//String cleaning
//https://www.codewars.com/kata/57e1e61ba396b3727c000251
function stringClean(s){
    let cleaned = "";
    for (let i = 0; i < s.length; i++) {
        (s.charCodeAt(i) < 48 || s.charCodeAt(i) > 57) ? cleaned = cleaned + s[i] : "";
    };
    return cleaned;
}

/*
==========
2025_10_01
==========
*/
//#1
//Batman Quotes
//https://www.codewars.com/kata/551614eb77dd9ee37100003e
let quotes = ["WHERE IS SHE?!", "Holy haberdashery, Batman!", "Let's put a smile on that faaaceee!"];

let getQuote = (quotes, hero) => {
    let num = hero.split("").find((elem) => !Number.isNaN(+elem));
    let name = "";
    (hero.length === 6) ? name = "Batman"
        : (hero.split("").slice(2).some((elem) => elem === "b")) ? name = "Robin" : name = "Joker";
    return `${name}: ${quotes[num]}`;
}

//#2
//Band name generator
//https://www.codewars.com/kata/59727ff285281a44e3000011
function bandNameGenerator(str) {
    return (str.endsWith(str[0])) ? str[0].toUpperCase() + str.slice(1).repeat(2) : "The " + str[0].toUpperCase() + str.slice(1);
};

//#3
//Geometry Basics: Circle Circumference in 2D
//https://www.codewars.com/kata/58e43389acfd3e81d5000a88
function circleCircumference(circle) {
    return 2 * Math.PI * circle.radius;
};

//#4
//Be Concise I - The Ternary Operator
//https://www.codewars.com/kata/56f3f6a82010832b02000f38
const describeAge = a => (a > 64) ? "You're a(n) elderly" : (a >= 18) ? "You're a(n) adult" : (a > 12) ? "You're a(n) teenager" : "You're a(n) kid"

//#5
//Training JS #16: Methods of String object--slice(), substring() and substr()
//https://www.codewars.com/kata/57274562c8dcebe77e001012
const cutIt = arr => arr.map((el) => el.slice(0, (arr.reduce((a,c) => (a.length > c.length) ? a = c : a).length)))

/*
==========
2025_10_02
==========
*/
//#1
//Find the anonymous function
//https://www.codewars.com/kata/55a12bb8f0fac1ba340000aa
const FindFunction = (func, arr) => arr.filter(func.find((ele) => Number.isNaN(Number(ele))))

//#2
//Array Info
//https://www.codewars.com/kata/57f12b4d5f2f22651c00256d
function arrayInfo(arr){
    let newArr = [];
    newArr.push(
        [arr.length],
        [arr.filter((ele) => Number.isInteger(ele)).length],
        [arr.filter((ele) => (!Number.isInteger(Number(ele)) && (Number.parseFloat(ele)))).length],
        [arr.filter((ele) => typeof ele === "string" && ele !== " ").length],
        [arr.filter((ele) => ele === " ").length]
    )
    return ((newArr.length === 0) || (newArr.every((elem) => +elem === 0))) ? "Nothing in the array!" : newArr.map((elem) => (+elem === 0) ? elem = [null] : elem);
}

//#3
//A Needle in the Haystack
//https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf("needle")}`;
}

//#4
//Find the Remainder
//https://www.codewars.com/kata/524f5125ad9c12894e00003f
function remainder(n, m){
    return (n >= m && m !== 0) ? (n % m)
        : (m >= n && n !== 0) ? (m % n)
        : NaN
}

//#5
//Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
//https://www.codewars.com/kata/57faf12b21c84b5ba30001b0
function remove (string) {
    return string.replaceAll("!", "") + "!"
}

/*
==========
2025_10_03
==========
*/
//#1
//Makes the Sentence
//https://www.codewars.com/kata/59fb4d89ff58e5e816002efc
function makesTheSentence(characterArray, sentenceString) {
    return characterArray.sort().join("") === sentenceString.split("").filter(ele => ele !== " ").sort().join("");
}

//#2
//Easy Time Convert
//https://www.codewars.com/kata/5a084a098ba9146690000969
function timeConvert(num) { 
  return (num % 60 <= 0 && num / 60 <= 0) ? `00:00` : `${(Math.floor(num / 60)).toString().padStart(2, "0")}:${(num % 60).toString().padStart(2, "0")}`
}

//#3
//Maxed Out
//https://www.codewars.com/kata/584bf3b969ebc573ed00000f
function maxedOut(arr) {
    let total = arr.reduce((acc,currVal) => {
        acc = acc + currVal**3;
        return acc;
    }, 0);  
    return total <= Number.MAX_SAFE_INTEGER ? total : "You've pushed me to the max!";
}

//#4
//Colored Hexes!
//https://www.codewars.com/kata/57e17750621bca9e6f00006f
function hexColor(codes) {
    let codeArr = codes.split(" ");
    let red = +codeArr[0];
    let green = +codeArr[1];
    let blue = +codeArr[2];

    if (codeArr.reduce(((acc, currVal) => acc + +currVal), 0) === 0) {
        return 'black';
    }
    if (red === green && green === blue) {
        return 'white';
    }
    return (
        (red > green && red > blue) ? "red"
        : (red === green && red > blue) ? "yellow"
        : (red === blue && red > green) ? "magenta"
        : (green > blue) ? "green"
        : (green === blue) ? "cyan" : "blue"
  )
}

//#5
//pick a set of first elements
//https://www.codewars.com/kata/572b77262bedd351e9000076
function first(arr, n=1) {
  return (n === 0) ? [] : arr.slice(0,n);
}

/*
==========
2025_10_04
==========
*/
//#1
//Return Negative
//https://www.codewars.com/kata/55685cd7ad70877c23000102
function makeNegative(num) {
    return num.toString().split("")[0] == "-" ? num : -num
}

//#2
//Reversed Strings
//https://www.codewars.com/kata/5168bb5dfe9a00b126000018
function solution2(str) {
    return str.split("").reverse().join("");
}

//#3
//Convert a Number to String!
//https://www.codewars.com/kata/5265326f5fda8eb1160004c8

function numberToString(num) {
    return num.toString();
}

//#4
//Opposite number
//https://www.codewars.com/kata/56dec885c54a926dcd001095
function opposite(number) {
  return -number;
};

//#5
//Find the smallest integer in the array
//https://www.codewars.com/kata/55a2d7ebe362935a210000b2
function findSmallestInt(arr) {
  return Math.min(...arr);
};

/*
==========
2025_10_05
==========
*/
//#1
//Binary Zoo
//https://www.codewars.com/kata/5a1d91698ba9145199000141
function countTheAnimals(animals) {
    return (
      Object.values(animals)
        .map(elem => parseInt(elem, 2))
        .reduce(((acc,currVal) => acc + currVal), 0));
}

//#2
//Odder Than the Rest
//https://www.codewars.com/kata/5983cba828b2f1fd55000114
function oddOne(arr) {
    return arr.findIndex(elem => elem % 2 !== 0);
}

//#3
//Alphabetically ordered
//https://www.codewars.com/kata/5a8059b1fd577709860000f6
function alphabetic(s) {
  return s === s.split("").sort().join("");
}

//#4
//Basic Mathematical Operations
//https://www.codewars.com/kata/57356c55867b9b7a60000bd7
function basicOp(operation, value1, value2){
  switch(operation) {
      case "+":
        return value1 + value2;
      case "-":
        return value1 - value2;
      case "*":
        return value1 * value2;
      case "/":
        return value1 / value2;
  };
};

//#5
//Abbreviate a Two Word Name
//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
function abbrevName(name){
  return name.split(" ")[0][0].toUpperCase() + "." + name.split(" ")[1][0].toUpperCase();
}

/*
==========
2025_10_06
==========
*/
//#1
//Opposites Attract
//https://www.codewars.com/kata/555086d53eac039a2a000083
function lovefunc(flower1, flower2) {
    return Math.abs(flower1 - flower2) % 2 !== 0
}

//#2
//Returning Strings
//https://www.codewars.com/kata/55a70521798b14d4750000a4
function greet(name){
  return `Hello, ${name} how are you doing today?`;
}

//#3
//Function 1-hello world
//https://www.codewars.com/kata/523b4ff7adca849afe000035
function greet() {
  return "hello world!";
}

//#4
//Are You Playing Banjo?
//https://www.codewars.com/kata/53af2b8861023f1d88000832
function areYouPlayingBanjo(name) {
  return name.toLowerCase()[0] === 'r' ? `${name} plays banjo` : `${name} does not play banjo`
}

//#5
//Beginner Series #1 School Paperwork
//https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd
function paperwork(n, m) {
  return (n <= 0 || m <= 0) ? 0 : n * m;
}

/*
==========
2025_10_07
==========
*/
//#1
//Ones and Zeroes
//https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = arr => {
  return parseInt(arr.join(""), 2);
};

//#2
//Odd or Even?
//https://www.codewars.com/kata/5949481f86420f59480000e7
function oddOrEven(array) {
    return (array === 0) ? "even"
        : (array.reduce(((acc,currVal) => acc + currVal), 0) % 2 === 0) ? "even"
        : "odd";
}


//#3
//The museum of incredibly dull things
//https://www.codewars.com/kata/563cf89eb4747c5fb100001b
function removeSmallest(numbers) {
    let newArr = [...numbers];
    if (numbers.length === 0) {
      return numbers;
    }
    newArr.splice(
      (numbers.indexOf(
        numbers.reduce(
          (acc, currVal) => {
        if (acc >= currVal) {
            acc = currVal;
        }
        return acc;
        })
      )
    ), 1);
    return newArr;
}

//#4
//Testing 1-2-3
//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9
var number=function(array){
  return array.map((elem, index) => `${index+1}: ${elem}`);
}


//#5
//The highest profit wins!
//https://www.codewars.com/kata/559590633066759614000063
function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}

/*
==========
2025_10_08
==========
*/
//#1
//Friday the 13th Part 1
//https://www.codewars.com/kata/5925acf31a9825d616000e74
function killcount(counselors, jason){
  return counselors.filter((ele) => ele[1] < jason).map((ele) => ele[0]);
}

//#2
//Chinese Zodiac
//https://www.codewars.com/kata/57a73e697cb1f31dd70000d2
function chineseZodiac(year){
    return `${elements[Math.floor((year - 1924) / 2) % 5]} ${animals[(year-1924) % 12]}`;
}

//#3
//Nth Smallest Element (Array Series #4)
//https://www.codewars.com/kata/5a512f6a80eba857280000fc
function nthSmallest(arr, pos){
  return arr.sort((a, b) => a - b)[pos-1];
}

//#4
//Find all non-consecutive
//http://codewars.com/kata/58f8b35fda19c0c79400020f
function allNonConsecutive (arr) {
  return arr.filter((ele, ind) => {
    if (ind === 0) {
      return;
    }
    return (ele - 1 !== arr[ind - 1]);
  }).map((ele) => ({i: arr.indexOf(ele), n: ele}))
}

//#5
//Fifa 17 Launch
//https://www.codewars.com/kata/57ed6361e77282ee9300019f
function fifa(ticket, results){
    let splitResults = results.map((ele) => ele.split('-'));
    let namedResults = splitResults.map((ele) => {
      return (ele[0] > ele[1]) ? "Home" 
        : (ele[1] > ele[0]) ? "Away" : "Draw";
    });
    let winnings = '£'
    let winArr = [];
    let ticketResults = Object.entries(ticket)
    for (let i = 0; i < 3; i++){
      if (namedResults[i] === ticketResults[i][0]) {
        winArr.push(ticketResults[i][1]);
      }
    }
    winArr = winArr.join("").split('£');
    return winnings + winArr.reduce(((acc, currVal) => +acc + +currVal), 0);
} 


/*
==========
2025_10_09
==========
*/
//#1
//String Scramble
//https://www.codewars.com/kata/57cc4853fa9fc57a6a0002c2
function scramble(str, arr) {
  let newArr = [];
  newArr.length = str.length;
  arr.forEach((ele, ind) => {
    newArr.splice(arr[ind], 1, str[ind])
  });
  return newArr.join('');
}

//#2
//Grasshopper - Array Mean
//https://www.codewars.com/kata/55d277882e139d0b6000005d
function findAverage(nums) {
   return nums.reduce(((acc, currVal) => acc + currVal), 0)/nums.length
}

//#3
//UEFA EURO 2016
//https://www.codewars.com/kata/57613fb1033d766171000d60
function uefaEuro2016(teams, scores){
  return (
    `At match ${teams[0]} - ${teams[1]}, ` 
    + ((scores[0] == scores[1]) ? 'teams played draw.' 
        : ((scores[0] > scores[1]) ? `${teams[0]}` : `${teams[1]}`) + ' won!'));
}

//#4
//CSV representation of array
//https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036
function toCsvText(array) {
  return array.map(elem => `${elem}\n`).join('').slice(0, -1)
}

//#5
//Sum of differences in array
//https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
function sumOfDifferences(arr) {
  return (
    arr.sort((a, b) => b - a)
        .map((_, ind, arr) => (arr[ind+1] !== undefined) ? arr[ind] - arr[ind+1] : 0)
        .reduce(((acc, currVal) => acc + currVal), 0));
}

/*
==========
2025_10_10
==========
*/
//#1
//No Loops 1 - Small enough?
//https://www.codewars.com/kata/57cc4853fa9fc57a6a0002c2
function smallEnough(a, limit){
    return a.every(ele => ele <= limit);
}

//#2
//Convert the score
//https://www.codewars.com/kata/5b6c220fa0a661fbf200005d
function scoreboard(string) {
  return string.split(" ").slice(-2).map(ele => {
    switch(ele) {
        case 'one'
          : return ele = 1;
        case 'two'
          : return ele = 2;
        case 'three'
          : return ele = 3;
        case 'four'
          : return ele = 4;
        case 'five'
          : return ele = 5;
        case 'six'
          : return ele = 6;
        case 'seven'
          : return ele = 7;
        case 'eight'
          : return ele = 8;
        case 'nine'
          : return ele = 9;
        default: return ele = 0;
    }
  })
}

//#3
//Driving Licence
//https://www.codewars.com/kata/586a1af1c66d18ad81000134
function driver(data) {
  const monthArr = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  const surname = data[2].slice(0,5);
  const dob = data[3].split("-"); //split dob into array
  const month = dob[1].slice(0,3).toLowerCase(); //first 3 chars of month
  const monthNum = (monthArr.indexOf(month) + 1).toString().padStart(2, '0');
  
 return (((surname.length < 5) ? surname + "9".repeat(5 - surname.length) : surname)
            + dob[2][2]
            + ((data[data.length-1] == 'F') ? `${(+monthNum[0] + 5)}` + monthNum[1] : `${monthNum[0]}` + `${monthNum[1]}`)
            + dob[0]
            + dob[2][3]
            + ((data[1][0] == undefined) ? data[0][0] + '9' : data[0][0] + data[1][0])
            + '9AA').toUpperCase();
}

//#4
//Filter out the geese
//https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(bird => !geese.includes(bird));
};

//#5
//Find Multiples of a Number
//https://www.codewars.com/kata/58ca658cc0d6401f2700045f
function findMultiples(integer, limit, arr = [], incr = 0) {
  if (limit/integer < 1) {
    return arr;
  }
  arr.push(integer+incr);
  return findMultiples(integer, limit-integer, arr, incr+integer);
}

/*
==========
2025_10_11
==========
*/
//#1
//Hit Count
//https://www.codewars.com/kata/57b6f850a6fdc76523001162
function counterEffect(hitCount) {
  return hitCount.split('').map(ele => [+ele]).map(outEle => {
    for(let i = 0; i < outEle[0]; i++) {
      outEle.push(i);
    };
    return outEle.sort((a, b) => a - b);
  })
}

//#2
//Fake Binary
//https://www.codewars.com/kata/57eae65a4321032ce000002d
function fakeBin(x){
  return x.split('').map(ele => (ele < 5) ? ele = 0 : ele = 1).join('');
}

//#3
//A wolf in sheep's clothing
//https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
function warnTheSheep(queue) {
  if(queue.indexOf('wolf') == queue.length-1) {
    return `Pls go away and stop eating my sheep`
  } else {
    return `Oi! Sheep number ${queue.length-1 - queue.indexOf('wolf')}! You are about to be eaten by a wolf!`
  };
};

//#4
//Multiple of index
//https://www.codewars.com/kata/5a34b80155519e1a00000009
function multipleOfIndex(array) {
  return array.filter((ele, ind) => {
    return (ele == 0 || (Math.abs(ele) % ind == 0)) 
  })
}

//#5
//Reversing Words in a String
//https://www.codewars.com/kata/57a55c8b72292d057b000594
function reverse(string){
  return string.split(' ').reverse().join(' ');
}

/*
==========
2025_10_12
==========
*/
//#1
//Double Trouble
//https://www.codewars.com/kata/57f7796697d62fc93d0001b8
function trouble(x, t){
  for(let i = 0; i < x.length; i++) {
    if(x[i] + x[i+1] == t) {
      x.splice(i+1, 1)
      i--;
    } 
  }
  return x;
}

//#2
//Help the Fruit Guy
//https://www.codewars.com/kata/557af4c6169ac832300000ba
function removeRotten(bagOfFruits){
  return (bagOfFruits?.[0] == undefined) ? [] : bagOfFruits.join(' ').toLowerCase().replaceAll('rotten', '').split(' ');
}

//#3
//CompoundArray
//https://www.codewars.com/kata/56044de2aa75e28875000017
function compoundArray(a, b) {
    let newArr = [];
    let i = 0;
    while(i > -1){
      if (a[i] == undefined) {
        newArr = newArr.concat(b.slice(i));
        break;
      } else if (b[i] == undefined){
        newArr = newArr.concat(a.slice(i));
        break;
      } else {
        newArr.push(a[i], b[i]);
        i++;
      };
    };
  return newArr;
}

//#4
//Alternate Square Sum
//https://www.codewars.com/kata/559d7951ce5e0da654000073
function alternateSqSum(arr){
    for(let i = 0; i < arr.length; i++) {
    if(i % 2 !== 0) {
        arr.splice(i, 1, arr[i]**2);
    };
    }
    return arr.reduce(((acc, currVal) => acc + currVal), 0);
}

//#5
//Exclamation marks series #1: Remove an exclamation mark from the end of the string
//https://www.codewars.com/kata/57fae964d80daa229d000126
function remove (string) {
  return (string.endsWith('!')) ? string.slice(0,-1) : string;
}

/*
==========
2025_10_13
==========
*/
//#1
//Product of Maximums Of Array (Array Series #2)
//https://www.codewars.com/kata/5a63948acadebff56f000018
function maxProduct(numbers, size){
  let newArr = [];
  for (let i = 0; i <= size-1; i++) {
    newArr.push(Math.max(...numbers));
    numbers.splice(numbers.indexOf(Math.max(...numbers)), 1);
  }
  return newArr.reduce((acc, currVal) => acc * currVal);
}

//#2
//Dominant array elements
//https://www.codewars.com/kata/5a04133e32b8b998dc000089
const solve = arr => [...new Set(arr.filter((ele, ind) => ele == Math.max(...arr.slice(ind))))]

//#3
//The Feast of Many Beasts
//https://www.codewars.com/kata/5aa736a455f906981800360d
const feast = (beast, dish) => beast.startsWith(dish[0]) && beast.endsWith(dish.slice(-1))

//#4
//Safen User Input Part I - htmlspecialchars
//https://www.codewars.com/kata/56bcaedfcf6b7f2125001118
function htmlspecialchars(formData) {
  return formData
            .replaceAll('&', '&amp;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;')
};

//#5
//ES6 string addition
//https://www.codewars.com/kata/582e4c3406e37fcc770001ad
function joinStrings(string1, string2){
   return `${string1} ${string2}`
}

/*
==========
2025_10_14
==========
*/
//#1
//Well of Ideas - Easy Version
//https://www.codewars.com/kata/57f222ce69e09c3630000212
function well(x){
  if (x.every(ele => ele == 'bad')) {
    return 'Fail!';
  } else {
    return (x.join(" ").split("good").length-1 > 2) ? 'I smell a series!' : 'Publish!';
  };
}

//#2
//Find the Difference in Age between Oldest and Youngest Family Members
//https://www.codewars.com/kata/5720a1cb65a504fdff0003e2
function differenceInAges(ages){
  return [Math.min(...ages), Math.max(...ages), (Math.max(...ages) - Math.min(...ages))];
}

//#3
//Find numbers which are divisible by given number
//https://www.codewars.com/kata/55edaba99da3a9c84000003b
function divisibleBy(numbers, divisor){
  return numbers.filter(elem => elem % divisor == 0);
}

//#4
//SpeedCode #2 - Array Madness
//https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1
function arrayMadness(a, b) {
  return (a.map(ele => ele**2).reduce((acc, currVal) => acc + currVal) > b.map(ele => ele**3).reduce((acc, currVal) => acc + currVal))
}

//#5
//To square(root) or not to square(root)
//https://www.codewars.com/kata/57f6ad55cca6e045d2000627
function squareOrSquareRoot(array) {
    return array.map(elem => (Number.isInteger(Math.sqrt(elem))) ? Math.sqrt(elem) : elem**2);
}

/*
==========
2025_10_15
==========
*/
//#1
//Sort array by string length
//https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c
function sortByLength (array) {
 return array.sort((a, b) => a.length - b.length)
}

//#2
//Find the middle element
//https://www.codewars.com/kata/545a4c5a61aa4c6916000755
function gimme (triplet) {
  return triplet.indexOf(triplet.find(ele => ele !== Math.max(...triplet) && ele !== Math.min(...triplet)));
}

//#3
//Small enough? - Beginner
//https://www.codewars.com/kata/57cc981a58da9e302a000214
function smallEnough(a, limit){
 return a.every(ele => ele <= limit) 
}

//#4
//Check the exam
//https://www.codewars.com/kata/5a3dd29055519e23ec000074
function checkExam(array1, array2) {
  let score = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] == array2[i]) {
      score +=4;
    } else if (array2[i] == '') {
      score +=0;
    } else {
      score--;
    }
  }
  if (score < 0) {
    score = 0;
  }
  return score;
}

//#5
//Sum of Minimums!
//https://www.codewars.com/kata/5d5ee4c35162d9001af7d699
function sumOfMinimums(arr) {
  return arr.map(ele => Math.min(...ele)).reduce((acc, currVal) => acc + currVal);
}

/*
==========
2025_10_16
==========
*/
//#1
//Simple Comparison?
//https://www.codewars.com/kata/57f6ecdfcca6e045d2001207
function add(a, b){
	return +a == +b;
}

//#2
//My head is at the wrong end!
//https://www.codewars.com/kata/56f699cd9400f5b7d8000b55
function fixTheMeerkat(arr) {
  return arr.reverse();
}

//#3
//Get the mean of an array
//https://www.codewars.com/kata/563e320cee5dddcf77000158
function getAverage(marks){
  return Math.floor(marks.reduce(((acc, currVal) => acc + currVal), 0)/marks.length);
}

//#4
//Reversed Words
//https://www.codewars.com/kata/51c8991dee245d7ddf00000e
function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}

//#5
//Neutralisation
//https://www.codewars.com/kata/65128732b5aff40032a3d8f0
function neutralise(s1, s2) {
  return s1.split('').map((ele, ind) => ele != s2[ind] ? 0 : (ele == '+') ? '+' : '-').join('');
}

/*
==========
2025_10_17
==========
*/
//#1
//How many consecutive numbers are needed?
//https://www.codewars.com/kata/559cc2d2b802a5c94700000c
function consecutive(array) {
  let newArr = [];
  for (let i = Math.min(...array); i <= Math.max(...array); i++) {
    newArr.push(i);
  };
  return newArr.length - array.length;
}

//#2
//Difference between two collections
//https://www.codewars.com/kata/594093784aafb857f0000122
function diff(a, b){
  let aSet = [...new Set(a)];
  let bSet = [...new Set(b)];
  return aSet.concat(bSet).sort().filter((ele, ind, arr) => ele != arr[ind+1] && ele != arr[ind-1]);
}

//#3
//String Templates - Bug Fixing #5
//https://www.codewars.com/kata/55c90cad4b0fe31a7200001f
function buildString(...template){
  return `I like ${template.join(', ')}!`;
}

//#4
//Name on billboard
//https://www.codewars.com/kata/570e8ec4127ad143660001fd
const billboard = (name, price = 30, total = 0) => (total/name.length == price) ? total : billboard(name, price, total += price);

//#5
//Alan Partridge II - Apple Turnover
//https://www.codewars.com/kata/580a094553bd9ec5d800007d
function apple(x){
  return (x**2 > 1000) ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox.";
}

/*
==========
2025_10_18
==========
*/
//#1
//Find the capitals
//https://www.codewars.com/kata/539ee3b6757843632d00026b
var capitals = function (word) {
	return word.split('').map((ele, ind) => {
    return (ele == ele.toUpperCase()) ? ele = ind : null;
    }).filter(ele => ele != null);
};

//#2
//Flatten and sort an array
//https://www.codewars.com/kata/57ee99a16c8df7b02d00045f
function flattenAndSort(array) {
  return array.flat(1).sort((a, b) => a - b);
}

//#3
//Row Weights
//https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9
function rowWeights(array){
  let arr1 = [];
  let arr2 = [];
  array.forEach((ele, ind) => (ind % 2 == 0) ? arr1.push(ele) : arr2.push(ele));
  arr1 = [arr1.reduce(((acc, val) => acc + val), 0)];
  arr2 = [arr2.reduce(((acc, val) => acc + val), 0)];
  return arr1.concat(arr2)
}

//#4
//Coding Meetup #1 - Higher-Order Functions Series - Count the number of Javascript developers coming from Europe
//https://www.codewars.com/kata/582746fa14b3892727000c4f
function countDevelopers(list) {
  return list.filter(ele => (ele.language == 'JavaScript' && ele.continent == 'Europe')).length;
}

//#5
//No oddities here
//http://codewars.com/kata/51fd6bc82bc150b28e0000ce
function noOdds( values ){
  return values.filter(ele => ele % 2 == 0);
}

/*
==========
2025_10_19
==========
*/
//#1
//Even numbers in an array
//https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c
function evenNumbers(array, number) {
  return array.filter(ele => ele % 2 == 0).slice(-number)
}

//#2
//Sorted? yes? no? how?
//https://www.codewars.com/kata/580a4734d6df748060000045
function isSortedAndHow(array) {
  const ascend = array.slice().sort((a, b) => a - b).every((ele, ind) => ele == array[ind]);
  const descend = array.slice().sort((a, b) => b - a).every((ele, ind) => ele == array[ind]);
  return (ascend) ? 'yes, ascending'
    : (descend) ? 'yes, descending' : 'no';
}

//#3
//Fizz Buzz
//https://www.codewars.com/kata/5300901726d12b80e8000498
function fizzbuzz(n)
{
  return [...Array(n)].map((ele, ind) => {
    return ((ind + 1) % 3 == 0 && (ind + 1) % 5 == 0) ? ele = 'FizzBuzz'
      : ((ind + 1) % 3 == 0) ? ele = 'Fizz'
      : ((ind + 1) % 5 == 0) ? ele = 'Buzz' : ele = (ind + 1)
  })
}

//#4
//Do I get a bonus?
//https://www.codewars.com/kata/56f6ad906b88de513f000d96
function bonusTime(salary, bonus) {
  return (bonus) ? `£${salary * 10}` : `£${salary}`
}

//#5
//Stringy Strings
//https://www.codewars.com/kata/563b74ddd19a3ad462000054
function stringy(size) {
  return Array.from({length: size}, (v, k) => (k % 2 == 0) ? v = 1 : v = 0).join('');
}

/*
==========
2025_10_20
==========
*/
//#1
//Convert an array of strings to array of numbers
//https://www.codewars.com/kata/5783d8f3202c0e486c001d23
function toNumberArray(stringarray){
  return stringarray.map(ele => ele - 0);
}

//#2
//Divide and Conquer
//https://www.codewars.com/kata/57eaec5608fed543d6000021
function divCon(x){
  const numArr = [];
  const strArr = [];
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] == 'number') {
      numArr.push(x[i]);
    } else {
      strArr.push(Number(x[i]));
    }
  }
  return numArr.reduce(((a, c) => a + c), 0) - strArr.reduce(((a, c) => a + c), 0);
}

//#3
//max diff - easy
//https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095
function maxDiff(list) {
  return (list.length <= 1) ? 0 : Math.max(...list) - Math.min(...list);
};

//#4
//https://www.codewars.com/kata/580dda86c40fa6c45f00028a
function cubeOdd(arr) {
  let result = arr.reduce(((a, c) => (c % 2 != 0) ? a = a + c**3 : a), 0);
  return (Number.isNaN(result)) ? undefined : result;
}

//#5
//Short Long Short
//https://www.codewars.com/kata/50654ddff44f800200000007
function solution(a, b){
  return (a.length < b.length) ? a+b+a : b+a+b;
}

/*
==========
2025_10_21
==========
*/
//#1
//Smallest value of an array
//https://www.codewars.com/kata/544a54fd18b8e06d240005c0
function min(arr, toReturn) { 
    return (toReturn == 'value') ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
}

//#2
//The Office I - Outed
//https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1
function outed(meet, boss){
  const meetArr = Object.entries(meet);
  const score = meetArr.map(ele => ele[0] == boss ? ele[1] * 2 : ele[1]).reduce(((a, c) => {
    return a + c;
  }), 0);  
  return (score/meetArr.length <= 5) ? 'Get Out Now!' : 'Nice Work Champ!';
}

//#3
//The Office II - Boredom Score
//https://www.codewars.com/kata/57ed4cef7b45ef8774000014
function boredom(staff){
  const objKeys = {
    'accounts': 1,
    'finance': 2,
    'canteen': 10,
    'regulation': 3,
    'trading': 6,
    'change': 6,
    'IS': 8,
    'retail': 5,
    'cleaning': 4,
    'pissing about': 25,
  };
  const depts = Object.values(staff);
  let teamScore = depts.reduce(((a, c, i) => a += objKeys[c]), 0);
  return (teamScore <= 80) ? 'kill me now'
    : (teamScore < 100 && teamScore > 80) ? 'i can handle this' : 'party time!!'; 
}

//#4
//Simple consecutive pairs
//https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(ar){
  let count = 0;
  for (let i = 0; i < ar.length; i = i+2) {
    if (ar[i+1] == undefined) {
      return count;
    } 
    if (Math.abs(ar[i] - ar[i+1]) == 1) {
      count++;
    }
  }
  return count;
};

//#5
//Capitalization and Mutability
//https://www.codewars.com/kata/595970246c9b8fa0a8000086
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

/*
==========
2025_10_22
==========
*/
//#1
//Char Code Calculation
//https://www.codewars.com/kata/57f75cc397d62fc93d000059
function calc(x){
  let total1 = '';
  for (let i = 0; i < x.length; i++) {
    total1 += x.charCodeAt(i);
  }
  const total2 = (
    total1
      .replaceAll('7', '1')
      .split('')
      .map(ele => Number(ele))
      .reduce((acc, currVal) => acc + currVal)
  );
  total1 = (
    total1
      .split('')
      .map(ele => Number(ele))
      .reduce((acc, currVal) => acc + currVal)
  )
  return total1 - total2;
}

//#2
//Last Survivor
//https://www.codewars.com/kata/609eee71109f860006c377d1
function lastSurvivor(letters, coords) {
  const letterArr = letters.split('');
  for (let i = 0; i < coords.length; i++) {
   letterArr.splice(coords[i], 1);
  }
  return letterArr[0];
}

//#3
//Century From Year
//https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
function century(year) {
  return Math.ceil(year/100);
};

//#4
//Calculate BMI
//https://www.codewars.com/kata/57a429e253ba3381850000fb
function bmi(weight, height) {
  let bmi = weight/height**2;
  return (bmi > 30) ? 'Obese'
    : (bmi <= 30 && bmi > 25) ? 'Overweight'
    : (bmi <= 25 && bmi > 18.5) ? 'Normal' : 'Underweight';
}

//#5
//Is he gonna survive?
//https://www.codewars.com/kata/59ca8246d751df55cc00014c
function hero(bullets, dragons){
  return (bullets/dragons) < 2 ? false : true;
}

/*
==========
2025_10_23
==========
*/
//#1
//Head, Tail, Init and Last
//https://www.codewars.com/kata/54592a5052756d5c5d0009c3
function head(arr) {
  return arr[0];
}
function tail(arr) {
  return arr.slice(1);
}
function init(arr) {
  return arr.slice(0, arr.length-1);
}
function last(arr) {
  return arr.slice(-1)[0];
}

//#2
//Distance from the average
//https://www.codewars.com/kata/568ff914fc7a40a18500005c
function distancesFromAverage(arr) {
  const avg = (arr.reduce(((acc, currVal) => acc + currVal), 0)/arr.length).toFixed(2);
  return arr.map(ele => (avg - ele).valueOf());
}

//#3
//Grasshopper - Basic Function Fixer
//https://www.codewars.com/kata/56200d610758762fb0000002
function addFive(num) {
  var total = num + 5
  return total;
}

//#4
//Rock Paper Scissors!
//https://www.codewars.com/kata/5672a98bdbdd995fad00000f
const rps = (p1, p2) => {
  if (p1 == p2) {
    return 'Draw!';
  } else if (p1 == 'rock' && p2 == 'scissors' 
             || p1 == 'scissors' && p2 == 'paper' 
             || p1 == 'paper' && p2 == 'rock') {
    return 'Player 1 won!';
  } else {
    return 'Player 2 won!'
  }
};

//#5
//How many lightsabers do you own?
//https://www.codewars.com/kata/51f9d93b4095e0a7200001b8
function howManyLightsabersDoYouOwn(name) {
  return name == 'Zach' ? 18 : 0;
};

/*
==========
2025_10_24
==========
*/
//#1
//Partial Word Searching
//https://www.codewars.com/kata/54b81566cd7f51408300022d
function wordSearch(query, seq) {
  const result = seq.reduce(((acc, currVal) => {
    currVal.toLowerCase().includes(query.toLowerCase()) && acc.push(currVal);
    return acc;
  }), []);
  return result.length >= 1 ? result : ['Empty'];
}

//#2
//The 'if' function
//https://www.codewars.com/kata/54147087d5c2ebe4f1000805
function _if(bool, func1, func2) {
  console.log(bool);
  return bool ? func1() : func2();
}

//#3
//Find the position!
//https://www.codewars.com/kata/5808e2006b65bff35500008f
function position(letter){
  return `Position of alphabet: ${letter.charCodeAt(0) - 96}`;
}

//#4
//Training JS #4: Basic data types -- Array
//https://www.codewars.com/kata/571effabb625ed9b0600107a
function getLength(arr){
  //return length of arr
  return arr.length;
}
function getFirst(arr){
  //return the first element of arr
  return arr[0];
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length-1];
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el);
  return arr;
}
function popElement(arr){
  //pop an element from arr
  arr.pop();
  return arr;
}

//#5
//Training JS #10: loop statement -- for
//https://www.codewars.com/kata/5721a78c283129e416000999
function pickIt(arr){
  let odd = [], even = [];
  //coding here
  for (let i = 0; i < arr.length; i++) {
    (arr[i] % 2 != 0) ? odd.push(arr[i]) : even.push(arr[i]);
  }
  return [odd,even];
}

/*
==========
2025_10_25
==========
*/
//#1
//Arithmetic List!
//https://www.codewars.com/kata/541da001259d9ca85d000688
function seqlist(first, c, l) {
  return [...Array(l)].map((ele, ind, arr) => (ind == 0) ? first : c * ind + first);
};

//#2
//Array Array Array
//https://www.codewars.com/kata/57eb936de1051801d500008a
function explode(x) {
  let score = x.filter(ele => !(Number.isNaN(Number(ele))));
  return (score.length < 1) ? 'Void!'
    : (Number(...score) == 0) ? []
    : Array.from({length: score.reduce(((acc, currVal) => acc + currVal), 0)}, (v, k) => v = x);
}

//#3
//Sum without highest or lowest number
//https://www.codewars.com/kata/576b93db1129fcf2200001e6
function sumArray(array) {
  return (array && array.length > 1) ? array.reduce((a, c) => a + c) - (Math.max(...array) + Math.min(...array))
    : 0;
}

//#4
//Transportation on vacation
//https://www.codewars.com/kata/568d0dd208ee69389d000016
function rentalCarCost(d) {
  const rate = d * 40;
  return (d > 6) ? rate - 50
    : (d > 2) ? rate - 20 : rate;
};

//#5
//L1: Set Alarm
//https://www.codewars.com/kata/568dcc3c7f12767a62000038
function setAlarm(employed, vacation){
  return (employed && !vacation);
}

/*
==========
2025_10_26
==========
*/
//#1
//Array Leaders (Array Series #3)
//https://www.codewars.com/kata/5a651865fd56cb55760000e0
function arrayLeaders(numbers){
  let arr = [];
  let numbersRight;
  for (let i = 0; i < numbers.length; i++) {
    numbersRight = 0;
    for (let j = i+1; j < numbers.length; j++) {
      numbersRight += numbers[j];
    }
    if (numbers[i] > numbersRight) {
      arr.push(numbers[i]);
    };
  }
  return arr;
}

//#2
//Largest Elements
//https://www.codewars.com/kata/53d32bea2f2a21f666000256
function largest(n, array) {
  return n ? array.sort((a, b) => a - b).slice(-n) : [];
}

//#3
//The Office IV - Find a Meeting Room
//https://www.codewars.com/kata/57f604a21bd4fe771b00009c
function meeting(x){
  const room = x.indexOf('O');
  return room < 0 ? 'None available!' : room;
}

//#4
//Check three and two
//https://www.codewars.com/kata/5a9e86705ee396d6be000091
function checkThreeAndTwo(array) {
  let map = {
    'a': 0,
    'b': 0,
    'c': 0,
  }
  for (let elem of array) {
    map[elem] += 1;
  }
  return (Object.values(map).includes(3) && Object.values(map).includes(2)) ? true : false;
}

//#5
//Clean up after your dog
//https://www.codewars.com/kata/57faa6ff9610ce181b000028
function crap(x, bags, cap){
  const garden = x.flat();
  const poops = garden.filter(ele => ele == '@');
  return (garden.includes('D')) ? 'Dog!!'
    : (poops.length > bags * cap) ? 'Cr@p' : 'Clean'
}

/*
==========
2025_10_27
==========
*/
//#1
//Between Extremes
//https://www.codewars.com/kata/56d19b2ac05aed1a20000430
function betweenExtremes(numbers) {
    return Math.max(...numbers) - Math.min(...numbers);
}

//#2
//Insert dashes
//https://www.codewars.com/kata/55960bbb182094bc4800007b
function insertDash(num) {
  let output = '';
  const numStr = num.toString();
  for (let i = 0; i < numStr.length; i++) {
    output += numStr[i];
    if (numStr[i] % 2 != 0 && numStr[i+1] % 2 != 0 && numStr[i+1] != undefined) {
      output += '-';
    };
  };
  return output;
}

//#3
//Return the Missing Element
//https://www.codewars.com/kata/5299413901337c637e000004function getMissingElement(superImportantArray){
function getMissingElement(superImportantArray) {
  superImportantArray.sort((a, b) => a - b);
  for (let i = 0; i < superImportantArray.length; i++) {
    if (i != superImportantArray[i]) {
      return i;
    }
  }
}

//#4
//https://www.codewars.com/kata/5a1a9e5032b8b98477000004
//https://www.codewars.com/kata/5a1a9e5032b8b98477000004
function evenLast(numbers) {
  (numbers.length < 1) && 0;
  return numbers.reduce(((a, cV, cI) => (cI % 2 == 0) ? a + cV : a), 0) * numbers.slice(-1);
}

//#5
//Bingo (Or Not)
//https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145
function bingo(a) {
  const bingo = [2, 7, 9, 14, 15]
  return bingo.every(ele => a.includes(ele)) ? "WIN" : "LOSE"
}

/*
==========
2025_10_28
==========
*/
//#1
//Arithmetic progression
//https://www.codewars.com/kata/55caf1fd8063ddfa8e000018
function arithmeticSequenceElements(a, d, n) {
  return [...Array(n)].map((_, ind) => (ind == 0) ? a : a + (d * ind)).join(', ');
}

//#2
//Stanton measure
//https://www.codewars.com/kata/59a1cdde9f922b83ee00003b
function stantonMeasure(a){
  const n = a.filter(ele => ele == 1).length;
  return a.filter(ele => ele == n).length;
};

//#3
//By 3, or not by 3? That is the question...
//https://www.codewars.com/kata/59f7fc109f0e86d705000043
function divisibleByThree(str){
  return (str.split('').reduce((a, cV) => Number(a) + Number(cV)) % 3 == 0);
}

//#4
//Length and two values.
//https://www.codewars.com/kata/62a611067274990047f431a8
function alternate(n, firstValue, secondValue){
  return [...Array(n)].map((_, ind) => (ind % 2 == 0) ? firstValue : secondValue);
}

//#5
//Looking for a benefactor///////////
//https://www.codewars.com/kata/569b5cec755dd3534d00000f
function newAvg(arr, newavg) {
  try {
    const newcontributor = (newavg * (arr.length+1) - arr.reduce(((a, cV) => a + cV), 0));
    if (newcontributor > 0) {
      return Math.ceil(newcontributor);
    } else {
      throw new Error('Expected New Average is too low')
    }
  }
  catch(err){
    throw err;
  }
}

/*
==========
2025_10_29
==========
*/
//#1
//Drone Fly-By
//https://www.codewars.com/kata/58356a94f8358058f30004b5
function flyBy(lamps, drone){
  return lamps.split('').fill('o', 0, drone.length).join('');
}

//#2
//Double Sort
//https://www.codewars.com/kata/57cc79ec484cf991c900018d
function dbSort(a){
  const numArr = a.filter(ele => typeof ele == 'number');
  const strArr = a.filter(ele => typeof ele == 'string');
  return [...numArr.sort((a, b) => a - b), ...strArr.sort()];
}

//#3
//Move 10
//https://www.codewars.com/kata/57cf50a7eca2603de0000090
function moveTen(s){
  return s.split('').map((ele) => {
    const codePos = ele.charCodeAt(ele[0]) + 10;
    if (codePos > 122) {
      return String.fromCharCode(codePos - 26)
    } else {
      return String.fromCharCode(codePos);
    }
  }).join('');
}

//#4
//Thinkful - Logic Drils: Traffic light
//http://codewars.com/kata/58649884a1659ed6cb000072
function updateLight(current) {
  let lights = {
    'green': 'yellow',
    'yellow': 'red',
    'red': 'green'
  };
  return lights[current];
}

//#5
//
//https://www.codewars.com/kata/5875b200d520904a04000003
function enough(cap, on, wait) {
  const currCap = (cap - on);
  return (currCap >= wait) ? 0 : (wait - currCap);
}

/*
==========
2025_10_30
==========
*/
//#1
//Is every value in the array an array?
//https://www.codewars.com/kata/582c81d982a0a65424000201
const arrCheck = value => value.every(ele => Array.isArray(ele));

//#2
//Sort arrays - 1
//https://www.codewars.com/kata/51f41b98e8f176e70d0002a8
sortme = function( names ){
  return names.sort();
}

//#3
//Who's Online
//https://www.codewars.com/kata/5b6375f707a2664ada00002a
const whosOnline = (friends) => {
  let statuses = {};
  for (let obj of friends) {
    if (obj.lastActivity > 10 && obj.status == 'online') {
      (statuses.away == undefined) ? statuses.away = [obj.username] : statuses.away.push(obj.username);
    } else if (obj.status == 'offline') {
      (statuses.offline == undefined) ? statuses.offline = [obj.username] : statuses.offline.push(obj.username);
    } else {
      (statuses.online == undefined) ? statuses.online = [obj.username] : statuses.online.push(obj.username);
    }
  }
  return statuses;
}

//#4
//Numbers to Objects
//https://www.codewars.com/kata/57ced2c1c6fdc22123000316
function numObj(s){
  const arrOfObj = [];
  s.forEach(ele => {
    arrOfObj.push({
      [ele]: `${String.fromCharCode(ele)}`
    });
  });
  return arrOfObj;
}

//#5
//The Office III = Broken Photocopier
//https://www.codewars.com/kata/57ed56657b45ef922300002b
function broken(x){
  return x.split('').map(ele => (ele == 1) ? 0 : 1).join('');
}

/*
==========
2025_10_31
==========
*/
//#1
//Sum Array with different bases
//https://www.codewars.com/kata/5a005f4fba2a14897f000086
function sumItUp(numbersWithBases){
  return numbersWithBases.reduce(((a, cV) => a + Number.parseInt(...cV)), 0);
}

//#2
//Number Of Occurrences
//https://www.codewars.com/kata/52829c5fe08baf7edc00122b
Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
  value : function numberOfOccurrences(element) {
    return this.reduce(((a, cV) => {
      if (cV == element) {
        a++;
      }
      return a;
    }), 0)
}})

//#3
//Hells Kitchen
//https://www.codewars.com/kata/57d1f36705c186d018000813
function gordon(a){
  return (a.toUpperCase()
          .replaceAll('A', '@')
          .split(' ')
          .map(ele => {
            return ele.padEnd(ele.length + 4, '!');
          })
          .join(' ')
          .split('')
          .map(ele => {
            return (ele == 'E') ||
              (ele == 'I') ||
              (ele == 'O') ||
              (ele == 'U') ? '*' : ele
          })
          .join(''));
}

//#4
//Keep up the hoop
//https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145
function hoopCount (n) {
   return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
};

//#5
//Grasshopper - Check for factor
//https://www.codewars.com/kata/55cbc3586671f6aa070000fb
function checkForFactor (base, factor) {
  return base % factor == 0
}

/*
==========
2025_11_01
==========
*/
//#1
//Scrolling Text
//https://www.codewars.com/kata/5a995c2aba1bb57f660001fd
function scrollingText(text){
  text = text.toUpperCase();
  let arr = [text];
  for (let i = 0; i < text.length - 1; i++) {
    text = (text.slice(1) + text.slice(0,1));
    arr.push(text);
  }
  return arr;
}

//#2
//Is it even?
//https://www.codewars.com/kata/555a67db74814aa4ee0001b5
function testEven(n) {
    return n % 2 == 0;
}

//#3
//Powers of 
//https://www.codewars.com/kata/57a083a57cb1f31db7000028
function powersOfTwo(n){
  return Array.from({ length: n+1 }, ((v, k) => 2**k));
}

//#4
//Grasshopper - Messi goals function
//https://www.codewars.com/kata/55f73be6e12baaa5900000d4
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//#5
//Grasshopper - Debug sayHello
//https://www.codewars.com/kata/5625618b1fe21ab49f00001f
function sayHello(name) {
  return `Hello, ${name}`;
}

/*
==========
2025_11_02
==========
*/
//#1
//Well of Ideas - Harder Version
//https://www.codewars.com/kata/57f22b0f1b5432ff09001cab
function well(x){
  const newArr = x.flat().filter(ele => Number.isNaN(Number(ele))).map(ele => ele.toLowerCase()).filter(ele => ele == 'good');
  return (newArr.length > 2) ? 'I smell a series!'
    : (newArr.length > 0) ? 'Publish!' : 'Fail!';
}

//#2
//Substring fun
//https://www.codewars.com/kata/565b112d09c1adfdd500019c
function nthChar(words) {
  return words.reduce(((a, _, cI, arr) => a += arr[cI][cI]), '');
}

//#3
//Multiply Word in String
//https://www.codewars.com/kata/5ace2d9f307eb29430000092
function modifyMultiply (str,loc,num) {
  const word = str.split(' ')[loc];
  return (word + '-').repeat(num-1) + word;
} 

//#4
//Return a string's even characters.
//https://www.codewars.com/kata/566044325f8fddc1c000002c
function evenChars(string) {
  return (string.length < 2 || string.length > 100) ? 'invalid string'
    : string.split('').filter((_, ind) => (ind % 2 != 0));
}

//#5
//Working with arrays I (and why your code failes in some katas)
//https://www.codewars.com/kata/5a4ff3c5fd56cbaf9800003e
function withoutLast(arr) {
  const copy = arr.slice();
  copy.pop()
  return copy;
}

/*
==========
2025_11_03
==========
*/
//#1
//Filter unused digits
//https://www.codewars.com/kata/55de6173a8fbe814ee000061
function unusedDigits(...args) {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const sorted = args.join('').split('').sort((a, b) => a - b);
  return nums.filter(ele => sorted.indexOf(ele.toString()) == -1).join('')
}

//#2
//Merge two arrays
//https://www.codewars.com/kata/583af10620dda4da270000c5
function mergeArrays(a, b) {
  return Array.from({ length: (a.length >= b.length ? a.length : b.length) }, 
                    (_, k) => (b[k] == undefined) ? a[k]
                      : (a[k] == undefined) ? b[k]
                      : [a[k], b[k]]
  ).flat();
}

//#3
//Double Every Other
//https://www.codewars.com/kata/5809c661f15835266900010a
function doubleEveryOther(a) {
 return a.map((ele, ind) => (ind % 2 != 0) ? ele*2 : ele);
}                                                                              
  
//#4
//Number Pairs
//https://www.codewars.com/kata/563b1f55a5f2079dc100008a
function getLargerNumbers(a, b) {
  return a.map((ele, ind) => (ele >= b[ind]) ? ele : b[ind]);
};

//#5
//Odd Ones Out
//https://www.codewars.com/kata/5d376cdc9bcee7001fcb84c0
function oddOnesOut(nums) {
  const numSet = [...new Set(nums)];
  const odds = numSet.filter(ele => nums.filter(ele2 => ele2 == ele).length % 2 != 0)
  return nums.filter(ele => !odds.includes(ele));
}  

/*
==========
2025_11_04
==========
*/
//#1
//The Poet And The Pendulum
//https://www.codewars.com/kata/5bd776533a7e2720c40000e5
function pendulum(values) {
  return values.sort((a, b) => a - b).reduce(((a, cV, cI) => {
    return ((cI % 2 == 0) ? a.unshift(cV) : a.push(cV), a)
  }), []);
};

//#2
//Find sum of top-left to bottom-right diagonals
//https://www.codewars.com/kata/5497a3c181dd7291ce000700
function diagonalSum(matrix){
  return matrix.reduce(((a, _, cI, arr) => a + arr[cI][cI]), 0);
};

//#3
//Convert Hash To An Array
//https://www.codewars.com/kata/59557b2a6e595316ab000046/train/javascript
function convertHashToArray(hash){
  return Object.keys(hash).map(ele => [ele, hash[ele]]);
}

//#4
//LinkedList -> Array
//https://www.codewars.com/kata/557dd2a061f099504a000088
function listToArray(list, listArr=[]) {
  return (listArr.push(list.value), (list.next == null) ? listArr : listToArray(list.next, listArr));
};

//#5
//Mirror, mirror, on the wall...
//https://www.codewars.com/kata/5f55ecd770692e001484af7d
function mirror(data) {
  return (data.length == 0) ? data : data.slice()
    .sort((a, b) => b - a)
    .reduce(((a, cV) => (a.length == 0) ? (a.push(cV), a)
        : ((a.push(cV), a.unshift(cV)), a)), [])                                     
}

/*
==========
2025_11_05
==========
*/
//#1
//Get key/value pairs as arrays
//https://www.codewars.com/kata/515dfd2f1db09667a0000003
function keysAndValues(data){
  return [Object.keys(data), Object.values(data)];
}

//#2
//Are they square?
//https://www.codewars.com/kata/56853c44b295170b73000007
var isSquare = function(arr) {
  return (!arr.length) ? undefined
    : (arr.every(ele => Number.isInteger(Math.sqrt(ele))));
}

//#3
//First-Class Function Factory
//https://www.codewars.com/kata/563f879ecbb8fcab31000041
const factory = x => arr => arr.map(ele => ele * x)

//#4
//Squeaky Clean
//http://codewars.com/kata/53a8beaca9198e77b9000309
const squeakyClean = arr => arr.filter(ele => ele)

//#5
//Replace all items
//https://www.codewars.com/kata/57ae18c6e298a7a6d5000c7a
function replaceAll(seq, find, replace) {
  return (Array.isArray(seq)) ? seq.fill(replace) : seq.replaceAll(find, replace);
}

/*
==========
2025_11_06
==========
*/
//#1
//Homogenous arrays
//https://www.codewars.com/kata/57ef016a7b45ef647a00002d
function filterHomogenous(arrays) {
  return arrays.filter(ele => {
    return ((ele.every(item => typeof item == 'number' ) 
            || ele.every(item => typeof item == 'string'))
            && ele.length > 0);
  });
}

//#2
//The Lazy Startup Office
//https://www.codewars.com/kata/578fdcfc75ffd1112c0001a1
function binRota(arr){
  return arr.map((ele, ind) => (ind % 2 != 0) ? ele.reverse() : ele).flat();
}

//#3
//Grasshopper - Terminal game combat function
//https://www.codewars.com/kata/586c1cf4b98de0399300001d
function combat(health, damage) {
  return (damage > health) ? 0 : health - damage;
}

//#4
//Exclusive "or" (xor) Logical Operator
//https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c
function xor(a, b) {
  return (a ^ b) == 1;
}

//#5
//get character from ASCII Value
//https://www.codewars.com/kata/55ad04714f0b468e8200001c
function getChar(c){
  return String.fromCharCode(c);
}

/*
==========
2025_11_07
==========
*/
//#1
//Complete Series
//https://www.codewars.com/kata/580a4001d6df740d61000301
function completeSeries(arr) {
  return ([...new Set(arr)].length < arr.length) ? [0]
    : Array.from({ length: Math.max(...arr)+1}, (_, k) => k);
}

//#2
//Possibilities Array
//https://www.codewars.com/kata/59b710ed70a3b7dd8f000027
function isAllPossibilities(x){
  return (Math.min(...x) != 0) ? false
    : ((new Set(x).size) == x.length) && (x.length - 1 == Math.max(...x));
}

//#3
//What's my golf score?
//https://www.codewars.com/kata/59f7a0a77eb74bf96b00006a
function golfScoreCalculator(parList, scoreList){
  return (scoreList.split('').reduce(((a, cV) => Number(a) + Number(cV)), 0)) - (parList.split('').reduce(((a, cV) => Number(a) + Number(cV)), 0))
}

//#4
//Bin to Decimal
//https://www.codewars.com/kata/57a5c31ce298a7e6b7000334
function binToDec(bin) {
  return Number.parseInt(bin, 2);
}

//#5
//Training JS #7: if..else and ternary operator
//https://www.codewars.com/kata/57202aefe8d6c514300001fd
function saleHotdogs(n){
  return (n < 5) ? n * 100
    : (n >= 5 && n < 10) ? n * 95 : n * 90;
}

/*
==========
2025_11_08
==========
*/
//#1
//Array comparator
//https://www.codewars.com/kata/561046a9f629a8aac000001d
function matchArrays(v,r){
  return v.filter(ele => r.includes(ele)).length
}

//#2
//Naughty or Nice
//https://www.codewars.com/kata/52a6b34e43c2484ac10000cd
function getNiceNames(people, callback=[0]){
  let niceList = [];
  for (let person of people) {
      (person.wasNice) && (niceList.push(person.name));
  }
  return (niceList.length + callback.length > niceList.length) ? niceList
    : [];
};

function getNaughtyNames(people, callback=[0]){
  let naughtyList = [];
  for (let person of people) {
      (!person.wasNice) && (naughtyList.push(person.name));
  }
  return (naughtyList.length + callback.length > naughtyList.length) ? naughtyList
    : [];
};

//#3
//Dropcaps
//https://www.codewars.com/kata/559e5b717dd758a3eb00005a
function dropCap(n) {
  const nArr = n.split(' ');
  for (let i = 0; i < nArr.length; i++) {
    if (nArr[i].length < 3) {
      continue;
    }
    if (nArr[i][0] != ' ') {
      nArr[i] = nArr[i].slice(0, 1).toUpperCase() + nArr[i].slice(1).toLowerCase();
    };
  }
  return nArr.join(' ');
}

//#4
//Return a sorted list of objects
//https://www.codewars.com/kata/52705ed65de62b733f000064
function sortList (sortBy, list) {
  return list.sort((a, b) => (sortBy == 'a') ? b.a - a.a
   : b.b - a.b);
};

//#5
//Training JS #2: Basic data types--Number
//https://www.codewars.com/kata/571edd157e8954bab500032d
let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
  let a = v1,   
      b = v1;   
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2(){
  let a =  v3, //set number value to a
      b =  v1; //set number value to b
  return a - b;
}

function equal3(){
  let a =  v1, //set number value to a
      b =  v5; //set number value to b
  return a * b;
}

function equal4(){
  let a =  v4, //set number value to a
      b =  v5; //set number value to b
  return a / b;
}

function equal5(){
  let a =  v2, //set number value to a
      b =  v3; //set number value to b
  return a % b;
}

/*
==========
2025_11_09
==========
*/
//#1
//Paul's Misery
//https://www.codewars.com/kata/57ee31c5e77282c24d000024
function paul(x){
  const misery = {
    kata: 5,
    'Petes kata': 10,
    life: 0,
    eating: 1
  }
  const levelOfMisery = x.reduce(((a, cV) => a + misery[cV]), 0);
  return (levelOfMisery < 40) ? 'Super happy!'
    : (levelOfMisery < 70 && levelOfMisery >= 40) ? 'Happy!'
    : (levelOfMisery < 100 && levelOfMisery >= 70) ? 'Sad!' : 'Miserable!';
}

//#2
//Slaphead
//https://www.codewars.com/kata/57efab9acba9daa4d1000b30
function bald(x){
  const hairCount = x.split('/').length - 1;
  const shaved = x.slice().replaceAll('/', '-');
  const hairMap = {
    0: "Clean!",
    1: "Unicorn!",
    2: "Homer!"
  }
  return (hairCount > 5) ? [shaved, "Hobo!"]
    : (hairCount >= 3) ? [shaved, "Careless!"] : [shaved, hairMap[hairCount]];
}

//#3
//Pluck
//https://www.codewars.com/kata/530017aac7c0f49926000084
function pluck(objs, name) {
  return objs.map(obj => obj[name]);
}

//#4
//Rock Off!
//http://codewars.com/kata/5b097da6c3323ac067000036
function solve(a, b) {
  let aliceScore = 0;
  let bobScore = 0;
  a.forEach((ele, ind, arr) => {
    return (ele > b[ind]) ? aliceScore++ 
    : (b[ind] > ele) ? bobScore++ : '';
  });
  return `${aliceScore}, ${bobScore}: ` + ((aliceScore > bobScore) ? 'Alice made "Kurt" proud!'
    : (bobScore > aliceScore) ? 'Bob made "Jeff" proud!' : 'that looks like a "draw"! Rock on!')
};

//#5
//Strange mathematics
//https://www.codewars.com/kata/604517d65b464d000d51381f
function strangeMath(n, k){
  return [...Array(n)].map((ele, ind) => ind+1 ).sort().indexOf(k) + 1;
}

/*
==========
2025_11_10
==========
*/
//#1
//List of Presents
//https://www.codewars.com/kata/5a84d485742ba347b90006b7
function howManyGifts(maxBudget, gifts){
  let quantity = 0;
  const sorted = gifts.slice().sort((a, b) => a - b).reduce(((a, cV) => {
    if (a - cV < 0) {
      return -1;
    } else {
      quantity++;
      return a - cV;
    }
  }), maxBudget)
  return quantity;
}

//#2
//Determine offspring sex based on genes XX and XY chromosomes
//https://www.codewars.com/kata/56530b444e831334c0000020
function chromosomeCheck(sperm) {
  return 'Congratulations! You\'re going to have a ' + ((sperm.includes('Y')) ? 'son.' : 'daughter.')
}

//#3
//Enumerable Magic #25 - Take the First N Elements
//https://www.codewars.com/kata/545afd0761aa4c3055001386
function take(arr, n) {
  return arr.slice(0, n);
}

//#4
//101 Dalmations-squash the bugs, not the dogs!
//https://www.codewars.com/kata/56f6919a6b88de18ff000b36
function howManyDalmatians(number) {
  var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  var respond = (number <= 10) ? dogs[0] 
                 : (number <= 50) ? dogs[1] 
                 : (number == 101) ? dogs[3] : dogs[2]
  return respond
}

//#5
//Grasshopper - Function syntax debugging
//https://www.codewars.com/kata/56dae9dc54c0acd29d00109a
function main(verb, noun) {
  return verb + noun;
}

/*
==========
2025_11_11
==========
*/
//#1
//Birthday I - Cake
//https://www.codewars.com/kata/5805ed25c2799821cb000005
function cake(x, y) {
  const candlesFallen = y
    .split('')
    .map((ele, ind) => (ind % 2 == 0) ? ele.charCodeAt(0) : ele.charCodeAt(0) - 96)
    .reduce(((a, cV) => a + cV), 0);
  return (candlesFallen/x > .7) ? 'Fire!' : 'That was close!';
}

//#2
//Fix your code before the garden dies!
//https://www.codewars.com/kata/57158fb92ad763bb180004e7
function rainAmount(mm){
    if (mm < 40) {
         return "You need to give your plant " + `${40 - mm}` + "mm of water"
    } else {
         return "Your plant has had more than enough water for today!"
    };
}

//#3
//Training JS #5: Basic data types--Object
//https://www.codewars.com/kata/571f1eb77e8954a812000837
function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

//#4
//Holiday VIII - Duty Free
//https://www.codewars.com/kata/57e92e91b63b6cbac20001e5
function dutyFree(normPrice, discount, hol){
  return Math.floor(hol/(normPrice * (discount/100)));
}

//#5
//Enumerable Magic - Does My List Include This?
//https://www.codewars.com/kata/545991b4cbae2a5fda000158
function include(arr, item){
  return arr.includes(item);
}

/*
==========
2025_11_12
==========
*/
//#1
//Array Mash
//https://www.codewars.com/kata/582642b1083e12521f0000da
function arrayMash (array1, array2) {
  return [...Array(array1.length)].map((_, ind) => [array1[ind], array2[ind]]).flat();
}

//#2
//Training JS #3: Basic data types--String
//https://www.codewars.com/kata/571edea4b625edcb51000d8e
var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1+a2+d2;
}
function Bee(){
  //select some variable to combine "Bee"
  return b1+e2+e2;
}
function banana(){
  //select some variable to combine "banana"
  return b2+a2+n2+a2+n2+a2;
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
}

//#3
//Fundamentals: Return
//https://www.codewars.com/kata/55a5befdf16499bffb00007b
function add(a,b){
    return a + b;
}

function divide(a,b){
    return a / b;
}

function multiply(a,b){
    return  a * b;
}

function mod(a,b){
    return a % b;
}
   
function exponent(a,b){
    return a**b;
}
    
function subt(a,b){
    return a - b;
}

//#4
//Grasshopper-Combine strings
//https://www.codewars.com/kata/55f73f66d160f1f1db000059
function combineNames(first, last) {
  return `${first} ${last}`;
}

//#5
//Check same case
//https://www.codewars.com/kata/5dd462a573ee6d0014ce715b
function sameCase(a, b){
  const aCharCode = a.charCodeAt(0);
  const bCharCode = b.charCodeAt(0);
  return ((aCharCode >= 65 && aCharCode <= 90) && (bCharCode >= 65 && bCharCode <= 90)) ? 1
    : ((aCharCode >= 97 && aCharCode <= 122) && (bCharCode >= 97 && bCharCode <= 122)) ? 1
    : ((aCharCode >= 65 && aCharCode <= 90) && (bCharCode >= 97 && bCharCode <= 122)) ? 0
    : ((aCharCode >= 97 && aCharCode <= 122) && (bCharCode >= 65 && bCharCode <= 90)) ? 0 : -1;
}

/*
==========
2025_11_13
==========
*/
//#1
//Change two-dimensional array
//https://www.codewars.com/kata/581214d54624a8232100005f
function matrix(array) {
  let newArr = array.slice();
  newArr.forEach((ele, ind) => (ele[ind] < 0) ? newArr[ind].splice(ind, 1, 0) 
             : newArr[ind].splice(ind, 1, 1));
  return newArr;
}

//#2
//For the sake of the argument
//https://www.codewars.com/kata/5258b272e6925db09900386a
function numbers(...nums) {
  return nums.every(ele => typeof ele == 'number');
}

//#3
//Mean vs. Median
//https://www.codewars.com/kata/5806445c3f1f9c2f72000031
function meanVsMedian(numbers) {
  const mean = numbers.reduce(((a, cV) => a + cV), 0)/numbers.length;
  const median = numbers.slice().sort((a, b) => a - b)[Math.ceil(numbers.length/2)-1];
  return (mean > median) ? 'mean'
    : (mean < median) ? 'median' : 'same';
}

//#4
//Alan Partridge I - Partridge Watch
//https://www.codewars.com/kata/5808c8eff0ed4210de000008
function part(x){
  const mapArr = [
    'Partridge',
    'PearTree',
    'Chat',
    'Dan',
    'Toblerone',
    'Lynn',
    'AlphaPapa',
    'Nomad'
  ];
  const instances = x.reduce(((a, cV) => (mapArr.includes(cV)) ? a += 1 : a), 0);
  return (instances < 1) ? "Lynn, I've pierced my foot on a spike!!"
    : `Mine's a Pint${'!'.repeat(instances)}`;
}

//#5
//Matrix creation
//https://www.codewars.com/kata/5a34da5dee1aae516d00004a
const getMatrix = (number) => Array.from({ length: number }, (_, k) => [...Array(number)].map((_, ind) => (ind == k) ? 1 : 0))

/*
==========
2025_11_14
==========
*/
//#1
//Sort with Arrow Functions
//https://www.codewars.com/kata/559f3e20f4f29869cf0000ea
var OrderPeople = function(people){
  return people.sort( (a, b) => a.age - b.age ); //complete this function
}

//#2
//Lowercase strings in array
//https://www.codewars.com/kata/5729fa716c7d26dc84000040
function arrayLowerCase(arr) {
  return arr.map(ele => (typeof ele == 'string') ? ele.toLowerCase() : ele);
}

//#3
//Decreasing Inputs
//https://www.codewars.com/kata/555de49a04b7d1c13c00000e
function add(...args) {
  return Math.round(args.reduce(((a, cV, cI) => a + (cV/(cI+1))), 0));
}

//#4
//All, None & Any
//https://www.codewars.com/kata/54589f3b52756d34d6000158
Array.prototype.all = function (p) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] < 0) {
      return false;
    }
  }
  return true;
};

Array.prototype.none = function (p) {
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    if (!(this[i] < 0)) {
      return false;
    }
  }
  return true;
};

Array.prototype.any = function (p) {
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    if (this[i] > 0) {
      return true;
    }
  }
  return false;
};

//#5
//
//https://www.codewars.com/kata/58308360aeb69a460b0002b2
function unique(arr) {
  return arr.filter((ele, ind) => ind == arr.indexOf(ele));
};

/*
==========
2025_11_15
==========
*/
//#1
//Find an employees role in the company
//https://www.codewars.com/kata/55c9fb1b407024afe6000055
function findEmployeesRole(name) {
  let [firstName, lastName] = name.split(' ');
  let person = employees.filter(obj => {
    return (obj.firstName == firstName && obj.lastName == lastName) ? obj : '';
  });
  return person.length < 1 ? 'Does not work here!' : (([person] = person), person.role);
}

//#2
//Find missing numbers
//https://www.codewars.com/kata/56d02e6cc6c8b49c510005bb
function findMissingNumbers(arr){
  let result = [];
  for (let i = 0; i < arr.length-1; i++) {
    if ((arr[i] + 1) != arr[i+1]) {
      let j = arr[i];
      while ((j + 1) != arr[i+1]) {
        result.push(j+1);
        j++;
      }
    }
  }
  return result;
}

//#3
//Multiplication table for number
//https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
function multiTable(number) {
  let table = [...Array(10)].map((_, ind) => `${ind+1} * ${number} = ${(ind+1) * number}\n`).join('');
  return table.slice(0, table.length-1);
}

//#4
//Multiply the number
//https://www.codewars.com/kata/5708f682c69b48047b000e07
function multiply(number){
  const numDigits = Math.abs(number).toString().length;
  return ( number * (5**numDigits) );
}

//#5
//Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
//https://www.codewars.com/kata/57faf7275c991027af000679
const remove = (s,n) => (n == 0) ? s : remove(s.replace('!', ''), n-1)

/*
==========
2025_11_16
==========
*/
//#1
//Pair Zeroes
//https://www.codewars.com/kata/54e2213f13d73eb9de0006d2
function pairZeros(arr) {
  let zeroes = 0;
  return arr.slice().filter(ele => {
    return (ele) ? ele 
      : (!ele && !zeroes) ? (zeroes++, true) : zeroes = 0;
  });
}

//#2
//Password Check - Binary to String
//https://www.codewars.com/kata/5a731b36e19d14400f000c19
function decodePass( passArr, bin ){
  const intArr = bin.split(' ').map(ele => Number.parseInt(ele, 2));
  const str = String.fromCharCode(...intArr);
  return (passArr.includes(str) && str)
}

//#3
//Multiple the strings in the array
//https://www.codewars.com/kata/59b2963132779166d2001018
function arrMultiply(arr){
  return `${arr.reduce((a, cV) => +a * +cV)}`;
}

//#4
//Training JS #8: Conditional statement--switch
//https://www.codewars.com/kata/572059afc2f4612825000d8a
function howManydays(month){
  var days;
  switch (month){
    case 4: days = 30;
    case 6: days = 30;
    case 9: days = 30;
    case 11: days = 30;
      break;
    case 2: days = 28;
      break;
    default: days = 31;
  }
  return days;
}

//#5
//Grasshopper - Messi Goals
//https://www.codewars.com/kata/55ca77fa094a2af31f00002a
var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5

var totalGoals = (() => laLigaGoals + championsLeagueGoals + copaDelReyGoals)();


/*
==========
2025_11_17
==========
*/
//#1
//'x' marks the spot.
//https://www.codewars.com/kata/5777fe3f355edbf0a5000d11
function xMarksTheSpot(matrix) {
  return (matrix.flat().indexOf('x') !== matrix.flat().lastIndexOf('x')) ? []
    : (!matrix.flat().includes('x')) ? [] 
    : matrix.reduce(((a, cV, cI) => cV.includes('x') ? (a.push((cI), cV.indexOf('x')), a) : a), [])
}

//#2
//The mean of two means
//https://www.codewars.com/kata/583df40bf30065fa9900010c
function getMean(arr, x, y) {
  const meanOfX = arr.slice(0,x).reduce(((a, cV) => a + cV), 0)/x;
  const meanOfY = arr.slice(-y).reduce(((a, cV) => a + cV), 0)/y;
  return (x <= 1 || y <= 1) ? -1 
    : (x > arr.length || y > arr.length) ? -1 : (meanOfX + meanOfY)/2
}

//#3
//OOP: Object Oriented Piracy
//https://www.codewars.com/kata/54fe05c4762e2e3047000add
class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }
  isWorthIt = function() {
    return (this.draft - (this.crew * 1.5) > 20)
  }
}

//#4
//Training JS #6: Basic data types--Boolean and conditional statements if..else
//https://www.codewars.com/kata/571f832f07363d295d001ba8
function trueOrFalse(val){
  if (!val) {
    return 'false'
  } else {
    return 'true'
  };
}

//#5
//Kata Example Twist
//https://www.codewars.com/kata/525c1a07bb6dda6944000031
let websites = [];

while (websites.length < 1000) {
  websites.push('codewars');
}

/*
==========
2025_11_18
==========
*/
//#1
//Write shortest function to calculate Average number of Array
//https://www.codewars.com/kata/56c22cdbe0c0f7cae2001789
const avg = a => a.reduce(((a, v) => a + v), 0)/a.length

//#2
//Game Hit the target
//https://www.codewars.com/kata/5ffc226ce1666a002bf023d2
const solution = mtrx => {
  let aRow;
  let xRow; 
  mtrx.forEach(ele => {
    if (ele.includes('x')) {
      xRow = mtrx.indexOf(ele);
    }
    if (ele.includes('>')) {
      aRow = mtrx.indexOf(ele);
    }
  })
  const xPosition = mtrx[xRow].indexOf('x');
  const aPosition = mtrx[aRow].indexOf('>');
  if (xRow !== aRow) {
    return false;
  }
  if (xPosition < aPosition) {
    return false;
  }
  return true;
}

//#3
//Holiday VI-Shark Pontoon
//https://www.codewars.com/kata/57e921d8b36340f1fd000059
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if(dolphin){
    if((pontoonDistance/youSpeed)<(sharkDistance/(sharkSpeed/2))){
    return "Alive!";
    } else {
      return "Shark Bait!"
    };
  } else {
    if((pontoonDistance/youSpeed<sharkDistance/sharkSpeed)) {
      return "Alive!";
    }
    else {
      return "Shark Bait!"
    };
  }
}

//#4
//Sleigh Authentication
//https://www.codewars.com/kata/52adc142b2651f25a8000643
function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return (name == 'Santa Claus' && password == 'Ho Ho Ho!');
};

//#5
//Chuck Norris VII - True or False? (Beginner)
//https://www.codewars.com/kata/570669d8cb7293a2d1001473
function ifChuckSaysSo(){
  return (!true);
}

/*
==========
2025_11_19
==========
*/
//#1
//Olympic Rings
//https://www.codewars.com/kata/57d06663eca260fe630001cc
function olympicRing(a){
  const singleRings = ['a', 'b', 'd', 'e', 'g', 'o', 'p', 'q', 'A', 'D', 'O', 'P', 'Q', 'R'];
  const doubleRings = ['B'];
  let points = 0;
  for (let ele of a) {
    if (singleRings.includes(ele)) {
      points++;
    } else if (doubleRings.includes(ele)) {
      points += 2;
    } 
  }
  points = Math.floor(points/2);
  return (points > 3) ? 'Gold!'
    : (points === 3) ? 'Silver!'
    : (points === 2) ? 'Bronze!' : 'Not even a medal!';
};

//#2
//Array Appender
//https://www.codewars.com/kata/53a8a476947277a3020001cc
function appendArrays (arr1, arr2) {
  return arr1.concat(arr2);
}

//#3
//Leonardo Dicaprio and Oscars
//https://www.codewars.com/kata/56d49587df52101de70011e4
function leo(oscar){
  return (oscar == 88) ? "Leo finally won the oscar! Leo is happy"
    : (oscar == 86) ? "Not even for Wolf of wallstreet?!"
    : (oscar > 88) ? "Leo got one already!" : "When will you give Leo an Oscar?";
}

//#4
//Classy Classes
//https://www.codewars.com/kata/55a144eff5124e546400005a
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  };
  get info() {
    return `${this.name}s age is ${this.age}`;
  };
}

//#5
//Compare within margin
//https://www.codewars.com/kata/56453a12fcee9a6c4700009c
function closeCompare(a, b, margin=0){
  if (margin >= Math.abs(a - b)) {
    return 0;
  } else if (a > b) {
    return 1;
  } else {
    return -1;
  }
}

/*
==========
2025_11_20
==========
*/
//#1
//The average length
//https://www.codewars.com/kata/5a430359e1ce0e35540000b1
function averageLength(array) {
  const meanLength = array.reduce(((a, cV) => a + cV.length), 0)/array.length;
  return array.map(ele => ele.slice(0,1).repeat(Math.round(meanLength)));
}

//#2
//Sorting the Odd way!
//https://www.codewars.com/kata/57fb79784e2d0639c9000066
function sortItOut(array){
  const sortedOdds = array.filter(ele => Math.floor(ele) % 2 !== 0).sort((a, b) => a - b);
  const sortedEvens = array.filter(ele => Math.floor(ele) % 2 === 0).sort((a, b) => b - a);
  return sortedOdds.concat(sortedEvens);
}

//#3
//Training JS #9: loop statement --while and do..while
//https://www.codewars.com/kata/57216d4bcdd71175d6000560
function padIt(str,n){
  let newStr = str;
  while (n > 0) {
    if (n % 2 !== 0) {
      newStr = '*'.concat(newStr);
    } else {
      newStr = newStr.concat('*');
    }
    n--;
  }
  return newStr;
}

//#4
//Training JS #18: Methods of String object--concat() split() and its good friend join()
//https://www.codewars.com/kata/57280481e8118511f7000ffa
function splitAndMerge(string, separator) {
  return string.split(' ').map(ele => ele.split('').join(separator)).join(' ');
}

//#5
//Training JS #12: loop statement --for..in and for..of
//https://www.codewars.com/kata/5722b3f0bd5583cf44001000
function giveMeFive(obj){
  const result = [];
  for (let key in obj) {
    if (key.length === 5) {
      result.push(key);
    }
    if (obj[key].length === 5) {
      result.push(obj[key]);
    }
  }
  return result;
}

/*
==========
2025_11_21
==========
*/
//#1
//Training JS #11: loop statement --break,continue
//https://www.codewars.com/kata/5721c189cdd71194c1000b9b
function grabDoll(dolls){
  var bag=[];
  for (let i = 0; i < dolls.length; i++) {
    if (bag.length === 3) {
      break;
    }
    if (dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll') {
      bag.push(dolls[i]);
    } else {
      continue;
    }
  }
  return bag;
}

//#2
//Freudian translator
//https://www.codewars.com/kata/5713bc89c82eff33c60009f7
function toFreud(string) {
  return (string) ?  string.split(' ').map(ele => 'sex').join(' ') : '';
}

//#3
//Grasshopper-Order of operations
//https://www.codewars.com/kata/560ecf0cb040de130e00007d
function orderOperations () {
  return (2 + 2) * (2 + 2) * 2
}

//#4
//Grasshopper - Create the rooms
//https://www.codewars.com/kata/56a29b237e9e997ff2000048
// Add rooms here
var rooms = {
  room1: {
    name: 'living',
    description: 'a room that is lived in',
    completed: 'yes'
  },
  room2: {
    name: 'toilet',
    description: 'toilet room',
    completed: 'twice'
  },
  room3: {
    name: 'kitchen',
    description: 'a room for kitch"s',
    completed: 'never'
  } 
}

//#5
//Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()
//https://www.codewars.com/kata/57277a31e5e51450a4000010
function firstToLast(str,c){
  return (str.indexOf(c) === -1) ? -1 : str.lastIndexOf(c) - str.indexOf(c);
}

/*
==========
2025_11_22
==========
*/
//#1
//Every nth array element. (Basic)
//https://www.codewars.com/kata/5753b987aeb792508d0010e2
function every(arr, interval=1, start=0) {
  return arr.reduce(((a, _, cI) => {
    return ((cI % interval === 0) && (arr.slice(start)[cI] !== undefined)) ? (a.push(arr.slice(start)[cI]), a) : a;
  }), []);
}

//#2
//Find factors of a number
//https://www.codewars.com/kata/564fa92d1639fbefae00009d
function factors(x, n=x, arr=[]) {
  return (x <= 0 || !Number.isInteger(x)) ? -1
    : (n === 0) ? arr
    : (x % n !== 0) ? factors(x, n-1, arr) 
    : (arr.push(n), factors(x, n-1, arr));
}

//#3
//Is integer safe to use?
//https://www.codewars.com/kata/55a4f9afeffe4231090000d6
function SafeInteger(n) {
  return n <= Number.MAX_SAFE_INTEGER;
}

//#4
//Simple Fun #352: Reagent Formula
//https://www.codewars.com/kata/59c8b38423dacc7d95000008
function isValid(formula){
  console.log(formula)
  if (!(formula.includes(7) || formula.includes(8))) {
    console.log('1');
    return false;
  } else if ((formula.includes(5) ^ formula.includes(6))) {
    console.log('2')
    return false;
  } else if (formula.includes(3) && formula.includes(4)) {
    console.log('3')
    return false;
  } else if (formula.includes(1) && formula.includes(2)) {
    console.log('4')
    return false
  } else {
    return true;
  }
}

//#5
//Be Concise III - Sum Squares
//https://www.codewars.com/kata/56f8fe6a2e6c0dc83b0008a7
function sumSquares(array) {
  return array.reduce(((a, cV) => a + cV**2), 0);
}

/*
==========
2025_11_23
==========
*/
//#1
//Grid blast!
//https://www.codewars.com/kata/54fdfe14762e2edf4a000a33
function fire(x,y) {
  let grid = ['top left',    'top middle',    'top right',
 'middle left', 'center',        'middle right',
 'bottom left', 'bottom middle', 'bottom right'];
  return grid[x + (3 * y)];
}

//#2
//Grasshopper - Terminal Game Turn Function
//https://www.codewars.com/kata/56019d3b2c39ccde76000086
function doTurn () {
  rollDice();
  move();
  combat();
  getCoins();
  buyHealth();
  printStatus();
}

//#3
//Find variable which breaks strict comparison!
//https://www.codewars.com/kata/560f8d41cf6e1fe5c900002e
function findStrangeValue() {
  return NaN;
}

//#4
//Lexical this
//https://www.codewars.com/kata/55a13556ca4a6d0ab4000003
var Person = function(){
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) { 
      this._name = f;
      this._friends = this._name;
    }
  }
  return person;
}

//#5
//A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future"
//https://www.codewars.com/kata/562e98755e9214cd2500003d
function yourFutureCareer() {
	let career = Math.random();
		if (career <= 0.32) {
			return 'FrontEnd Developer';
		 } else if (career <= 0.65) {
			return 'BackEnd Developer';
		} else {
			return 'Full-Stack Developer';
		}
}

yourFutureCareer();

/*
==========
2025_11_24
==========
*/
//#1
//Wealth equality, finally!
//https://www.codewars.com/kata/5815f7e789063238b30001aa
function redistributeWealth(wealth) {
  const individualWealth = wealth.reduce(((a, cV) => a + cV), 0)/wealth.length;
  wealth.fill(individualWealth);
}

//#2
//Loop Array
//https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50
function loopArr(arr, direction, steps) {
  const arrCopy = arr.slice();
  for (let i = 0; i < steps; i++) {
    (direction === 'left') ? arrCopy.push(arrCopy.shift())
      : arrCopy.unshift(arrCopy.pop());
  }
  return arrCopy;
}

//#3
//Conference Traveller
//https://www.codewars.com/kata/56f5594a575d7d3c0e000ea0
function conferencePicker(citiesVisited, citiesOffered) {
	const citiesFiltered = citiesOffered.filter(city => !citiesVisited.includes(city));
  return citiesFiltered < 1 ? 'No worthwhile conferences this year!' : citiesFiltered[0];
}

//#4
//Sort with a sorting array
//https://www.codewars.com/kata/59dc8288fc3c49cc3f000039
function sort(initialArray, sortingArray) {
  return Array.from({ length: initialArray.length }, (v, k) => v = initialArray[sortingArray.indexOf(k)]);
}

//#5
//Sort by Example
//https://www.codewars.com/kata/5747fcfce2fab91f43000697
function exampleSort(arr,exampleArr){
  let resultArr = [];
  for (let i = 0; i < exampleArr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (!arr.includes(exampleArr[i])) {
        continue;
      }
      if (arr[j] === exampleArr[i]) {
        resultArr.push(arr[j]);
      };
    };
  };
  return resultArr;
}

/*
==========
2025_11_25
==========
*/
//#1
//zero-balanced Array
//https://www.codewars.com/kata/59c6fa6972851e8959000067
function ìsZeroBalanced(n) {
  if ((n.length < 1) || (n.reduce((a, cV) => a + cV)) !== 0) {
    return false;
  };
  if (n.indexOf(0) !== -1) {
    n.splice(n.indexOf(0), 1);
  };
  n.sort((a, b) => a - b);
  let j = n.length-1;
  for (let i = 0; i < n.length/2; i++) {
    if (n[i] + n[j] !== 0) {
      return false;
    }
    j--;
  }
  return true;
}

//#2
//Ball and Cups
//https://www.codewars.com/kata/5b715fd11db5ce5912000019
function cupAndBalls(b, arr) {
  return (arr.length > 0) ? arr.reduce((a, cV) => {
    return (!cV.includes(a)) ? a 
      : (!cV.find((ele => ele !== a))) ? a
      : a = cV.find(ele => ele !== a);
  }, b) : b;
}

//#3
//Configure package json for a node application
//https://www.codewars.com/kata/5692a582cc22387ccf000017
const configuration = {
  "name": "server",
  "version": "1.0.0",
  "description": "Codewars",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "dev": "node --watch --env-file=.env server.js"
  },
  "author": "Mike Jablowski",
  "license": "MIT",
  "devDependencies": {
    "@types/node": "^24.9.2",
    "express": "^5.1.0",
    "tedious": "^18.6.1"
  },
  "dependencies": {
    "mssql": "^12.0.0"
  }
}

//#4
//Training JS #13: Number object and its properties
//https://www.codewars.com/kata/5722fd3ab7162a3a4500031f
function whatNumberIsIt(n){
  return 'Input number is ' + (Number.isNaN(n) ? 'Number.NaN'
                                : (!Number.isFinite(n) && n > 0) ? 'Number.POSITIVE_INFINITY'
                                : (!Number.isFinite(n) && n < 0) ? 'Number.NEGATIVE_INFINITY'
                                : (n === Number.MIN_VALUE) ? 'Number.MIN_VALUE'
                                : (n === Number.MAX_VALUE) ? 'Number.MAX_VALUE' : `${n}`)                                 
}

//#5
//Training JS #14: Methods of Number object--toString() and toLocaleString()
//https://www.codewars.com/kata/57238ceaef9008adc7000603
function colorOf(...rgb) {
  return `#${rgb.map(ele => (ele.toString(16).length < 2) ? '0' + ele.toString(16) : ele.toString(16)).join('')}`
}

/*
==========
2025_11_26
==========
*/
//#1
//Gravity Flip
//https://www.codewars.com/kata/5f70c883e10f9e0001c89673
const flip=(d, a)=>{
  return (d === 'R') ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a);
}


//#2
//Logical calculator
//https://www.codewars.com/kata/57096af70dad013aa200007b
function logicalCalc(array, op){
  switch(op) {
      case "AND":
        return array.every(ele => ele);
      case "OR":
        return array.some(ele => ele);
      case "XOR":
        return array.reduce(((a, cV) => (a !== cV) ? true : false));
  }
}

//#3
//Push a hash/an object into array
//https://www.codewars.com/kata/527b3cd0492b6b15250060af
items = []
items.push({a: "b", c: "d"});

//#4
//Grasshopper - Grade book
//https://www.codewars.com/kata/55cbd4ba903825f7970000f5
function getGrade (...scores) {
  const avg = scores.reduce(((a, cV) => a + cV), 0)/3;
  return (avg >= 90) ? 'A'
    : (avg >= 80) ? 'B'
    : (avg >= 70) ? 'C'
    : (avg >= 60) ? 'D' : 'F';
}

//#5
//Cat years, Dog years
//https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b
var humanYearsCatYearsDogYears = function(humanYears) {
  const cat = (humanYears > 2) ? 15 + 9 + ((humanYears - 2) * 4)
    : (humanYears > 1) ? 15 + 9 : 15;
  const dog = (humanYears > 2) ? 15 + 9 + ((humanYears - 2) * 5)
    : (humanYears > 1) ? 15 + 9 : 15;
  return [humanYears, cat, dog];
}

/*
==========
2025_11_27
==========
*/
//#1
//Arguments to Binary addition
//https://www.codewars.com/kata/57642a90dee2da8dd3000161
function arr2bin(arr){
  return arr.reduce(((a, cV) => (typeof cV !== 'number') ? a + 0 : a + cV), 0).toString(2);
}

//#2
//Swap Values
//https://www.codewars.com/kata/5388f0e00b24c5635e000fc6
function swapValues(args) {
    args.reverse();
}

//#3
//Implement Array.prototype.filter()
//https://www.codewars.com/kata/56dd9b84fe5754786f0014f7
Array.prototype.filter = function (func) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
   if (func(this[i])) {
     result.push(this[i]);
   }
  }
  return result;
}

/*
==========
2025_11_28
==========
*/
//#1
//Sort My Textbooks
//https://www.codewars.com/kata/5a07e5b7ffe75fd049000051
function sorter(textbooks) {
  const textbooksCopy = textbooks.map(ele => ele.toUpperCase()).sort();
  return textbooks.map((_, ind) => {
    return textbooks.find(ele => {
      return ele.toUpperCase() === textbooksCopy[ind]
    })
  });
}

//#2
//Enumerable Magic #20 - Cascading Subsets
//https://www.codewars.com/kata/545af3d185166a3dec001190
function eachCons(array, n, i=0, subArr=[]) {
	return (i >= (array.length-n + 1)) ? subArr
    : (subArr.push(array.slice(i, i+n)), eachCons(array, n, i+1, subArr));
}

/*
==========
2025_11_29
==========
*/
//#1
//Polish alphabet
//https://www.codewars.com/kata/57ab2d6072292dbf7c000039
function correctPolishLetters (string) {
  let newStr = '';
  const map = {
    ą: 'a',
    ć: 'c',
    ę: 'e',
    ł: 'l',
    ń: 'n',
    ó: 'o',
    ś: 's',
    ź: 'z',
    ż: 'z'
  };
  
  for (let char of string) {
    (char in map) ? newStr += map[char]
      : newStr += char;
  }
  return newStr;
};

//#2
//Define a card suit
//https://www.codewars.com/kata/5a360620f28b82a711000047
function defineSuit(card) {
  const dict = {9827: 'clubs', 
                9824: 'spades', 
                9830: 'diamonds', 
                9829: 'hearts' };
  return dict[card.charCodeAt(card.length-1)];
};

/*
==========
2026_01_04
==========
*/
//#1
//Count words
//https://www.codewars.com/kata/570cc83df616a85944001315
function countWords(str) {
  let strArr;
  (str.includes('\ufeff')) ? strArr = str.split('\ufeff') : strArr = str.split(' ');
  return strArr.flatMap(ele => ele.split(' ')).filter(ele => ele !== "").length;
}

//#2
//Simple Change Machine
//https://www.codewars.com/kata/57238766214e4b04b8000011
function changeMe(moneyIn){
  const currencyMap = {
    '£5': 50,
    '£2': 20,
    '£1': 10,
    '50p': 5, 
    '20p': 2
  }
  return (!currencyMap[moneyIn]) ? moneyIn
    : (currencyMap[moneyIn] == 5) ? "20p 20p 10p"
    : (currencyMap[moneyIn] == 2) ? "10p 10p" : `${'20p '.repeat(currencyMap[moneyIn]/2).trim()}`;
}

//#3
//Dollars and Cents
//https://www.codewars.com/kata/55902c5eaa8069a5b4000083
function formatMoney(amount){
  if (Number.isInteger(amount)) {
    return `$${amount}.00`
  } else {
    let numArr = amount.toString().split('.');
    if (numArr[1].length < 2) {
      numArr[1] = numArr[1] + '0';
    };
    return `$${numArr.join('.')}`;
  }
}

//#4
//A Strange Trip to the Market
//https://www.codewars.com/kata/55ccdf1512938ce3ac000056
function isLochNessMonster(s) {
  return (s.includes('tree fiddy') || s.includes('3.50') || s.includes('three fifty'));
}

//#5
//Up and down, the string grows
//https://www.codewars.com/kata/644b17b56ed5527b09057987
const STRANGE_STRING = 'ß'

/*
==========
2026_01_15
==========
*/
//freeCodeCamp
//#1
//Vowel Balance
//https://www.freecodecamp.org/learn/daily-coding-challenge/2025-08-11

function isBalanced(s) {
  const vowelMap = ['a', 'e', 'i', 'o', 'u'];
  const strArr = s.toLowerCase().split('');
  const firstHArr = strArr.slice(0, s.length/2).filter(ele => vowelMap.includes(ele)).length;
  const secondHArr = strArr.slice(-(strArr.length/2)).filter(ele => vowelMap.includes(ele)).length;
  return firstHArr === secondHArr;
}

/*
==========
2026_01_17
==========
*/
//#1
//Maximum Product
//https://www.codewars.com/kata/5a4138acf28b82aa43000117
function adjacentElementsProduct(array) {
  let productArr = [];
  for (let i = 0; i < array.length-1; i++) {
    if (array[i+1] === undefined) {
      break;
    } else {
      productArr.push(array[i] * array[i+1])
    };
  };
  return Number.isFinite(Math.max(...productArr)) ? Math.max(...productArr) : 0;
}

//#2
//Coding Meetup #2 - Higher-Order Functions Series - Greet developers
//https://www.codewars.com/kata/58279e13c983ca4a2a00002a
function greetDevelopers(list) {
  const list1 = list;
  for (let ele of list1) {
    ele.greeting = `Hi ${ele.firstName}, what do you like the most about ${ele.language}?`;
  };
  return list1;
}

//#3
//Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
//https://www.codewars.com/kata/5827acd5f524dd029d0005a4
function isRubyComing(list) {
  return list.some(ele => ele.language === 'Ruby');
}

//#4
//Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer
//https://www.codewars.com/kata/5827bc50f524dd029d0005f2
function getFirstPython(list) {
  if (!list.some(ele => ele.language === 'Python')) {
    return 'There will be no Python developers';
  } else {
    for (let ele of list) {
      if (ele.language === 'Python') {
        return `${ele.firstName}, ${ele.country}`;
      }
    }
  };
};

/*
==========
2026_01_18
==========
*/
//#1
//Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
//https://www.codewars.com/kata/5828713ed04efde70e000346
function countLanguages(list) {
  return list.reduce((acc, _, currInd) => {
    !(list[currInd].language in acc) ? acc[list[currInd].language] = 1 : acc[list[currInd].language]++;
    return acc;
  }, {})
}

//#2
//Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
//https://www.codewars.com/kata/58287977ef8d4451f90001a0
function isSameLanguage(list) {
  const langs = list.map(ele => ele.language);
  return (new Set(langs).size === 1) || false;
};

//#3
//Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer
//https://www.codewars.com/kata/582887f7d04efdaae3000090
const findSenior = (list) => list.slice().filter(ele => ele.age === Math.max(...list.map(ele => ele.age)));

//#4
//Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?
//https://www.codewars.com/kata/58291fea7ff3f640980000f9
function allContinents(list) {
  const regionMap = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  return regionMap.every(ele => list.map(ele => ele.continent).includes(ele));
}

/*
==========
2026_01_19
==========
*/
//#1
//Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?
//https://www.codewars.com/kata/5829ca646d02cd1a65000284
function isAgeDiverse(list) {
  if (!list.some(ele => ele.age >= 100)) {
    return false
  }
  const digitList = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(ele => ele.toString());
  const ageList = list.map(ele => ele.age.toString()).filter(ele => ele.length === 2);
  return digitList.every(ele => ageList.some(ele2 => ele2[0].includes(ele)));
};

//#2
//Coding Meetup #10 - Higher-Order Functions Series - Create usernames
//https://www.codewars.com/kata/582a53ed261c2af9d200018c
function addUsername(list) {
  const listCopy = list.slice();
  listCopy.forEach(ele => ele.username = `${ele.firstName.toLowerCase()}${ele.lastName[0].toLowerCase()}${Number(new Date().getFullYear()) - ele.age}`);
  return listCopy;
}

/*
==========
2026_01_20
==========
*/
//#1
//Coding Meetup #11 - Higher-Order Functions Series - Find the average age
//https://www.codewars.com/kata/582ba36cc1901399a70005fc
const getAverageAge = list => Math.round(list.reduce((acc, currVal) => acc + currVal.age, 0)/list.length);

//#2
//Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins
//https://www.codewars.com/kata/582dace555a1f4d859000058
function findAdmin(list, lang) {
  return list.filter(ele => ele.language === lang && ele.githubAdmin === 'yes');
}

//#3
//Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?
//https://www.codewars.com/kata/58381907f8ac48ae070000de
function isLanguageDiverse(list) {
  const langObj = {
    'Python': 0,
    'Ruby': 0,
    'JavaScript': 0
  };
  list.forEach(ele => {
    switch(ele.language) {
        case 'Python': 
          langObj['Python']++;
          break;
        case 'Ruby': 
          langObj['Ruby']++;
          break;
        case 'JavaScript':
          langObj['JavaScript']++;
          break;
    };
  });
  return Math.min(...Object.values(langObj)) *2 >= Math.max(...Object.values(langObj))
}

/*
==========
2026_01_21
==========
*/
//#1
//Coding Meetup #14 - Higher-Order Functions Series - Order the food
//https://www.codewars.com/kata/583952fbc23341c7180002fd
function orderFood(list) {
  return list.reduce((acc, currVal) => {
    return ((acc[currVal.meal]++) || (acc[currVal.meal] = 1), acc);
  }, {})
}

//#2
//Coding Meetup #15 - Higher-Order Functions Series - Find the odd names
//https://www.codewars.com/kata/583a8bde28019d615a000035
function findOddNames(list) {
  return list.filter(dev => [...dev.firstName].reduce(((acc, char) => acc + char.charCodeAt(0)), 0) % 2 > 0);
}

//#3
//Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details
//https://www.codewars.com/kata/583d972b8bbc0402cf000121
function askForMissingDetails(list) {
  return list.map(dev => {
    for (let detail in dev) {
      !dev[detail] && (dev.question = `Hi, could you please provide your ${detail}.`)
    };
    return dev;
  }).filter(dev => dev.question);
} 

/*
==========
2026_01_22
==========
*/
//#1
//Basic subclasses - Adam and Eve
//https://www.codewars.com/kata/547274e24481cfc469000416
class God{
  static create(){
   return [new Man('Adam'), new Woman ('Eve')];
  }
}

class Human {
  constructor(name) {
    this.name = name;
  }
}

class Man extends Human {
  constructor(name) {
    super(name);
  }
}

class Woman extends Human {
  constructor(name) {
    super(name);
  }
}

//#2
//Grasshopper - Terminal Game #1
//https://www.codewars.com/kata/55e8aba23d399a59500000ce
class Hero {
    constructor(name='Hero') {
        this.name = name;
        this.position = '00';
        this.health = 100;
        this.damage = 5;
        this.experience = 0;
    }
}

//#3
//Classy Extentions
//https://www.codewars.com/kata/55a14aa4817efe41c20000bc
class Cat extends Animal {
  speak() {
    return `${this.name} meows.`
  }
}

//#4
//Barking mad
//https://www.codewars.com/kata/54dba07f03e88a4cec000caf
function Dog (breed) {
  this.breed = breed;
}

var snoopy = new Dog("Beagle");

snoopy.bark = function() {
  return "Woof";
};

var scoobydoo = new Dog("Great Dane");

scoobydoo.bark = function() {
  return "Woof";
};

//#5
//Finish Guess the Number Game
//https://www.codewars.com/kata/568018a64f35f0c613000054
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    return (this.lives === 0) ? (function() {throw new Error("You've run out of lives")})()
			: (n !== this.number) ? (this.lives--, false)
		  : true;
  }
}

/*
==========
2026_01_23
==========
*/
//#1
//Sum of odd numbers
//https://www.codewars.com/kata/55fd2d567d94ac3bc9000064
const rowSumOddNumbers = n => [...Array(n)].reduce((acc, _, currInd) => acc + (n + ((n - 1) * (n - 1)) + (currInd) * 2), 0);

/*
==========
2026_02_04
==========
*/
//#1
//Sort by Last Char
//https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0
function last(x){
  const wordArr = x.split(' ');
  const lastCharArr = wordArr.map(ele => ele.slice(-1)).sort();
  const resultArr = [];
  for (let i = 0; i < lastCharArr.length; i++) {
    for (let j = 0; j < wordArr.length; j++) {
      if (lastCharArr[i] === wordArr[j].slice(-1)) {
        resultArr.push(wordArr[j]);
        wordArr.splice(j, 1, '*');
      }
    }
  }
  return resultArr;
}

/*
==========
2026_02_05
==========
*/
//#1
//Numbers to Letters
//https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c
function switcher(x){
  return x.map(ele => {
    return (ele === '27') ? '!'
      : (ele === '28') ? '?'
      : (ele === '29') ? ' '
      : String.fromCharCode(123 - ele);
  }).join('');
}

/*
==========
2026_02_07
==========
*/
//#1
//Holiday II - Plane Seating
//https://www.codewars.com/kata/57e8f757085f7c7d6300009a
function planeSeat(a){
  const numMap = [
    {start: 1, end: 20, location: 'Front'},
    {start: 21, end: 40, location: 'Middle'},
    {start: 41, end: 60, location: 'Back'}
  ];
  
  const letterMap = [
    {start: 'a'.charCodeAt(0), end: 'c'.charCodeAt(0), location: 'Left'},
    {start: 'd'.charCodeAt(0), end: 'f'.charCodeAt(0), location: 'Middle'},
    {start: 'g'.charCodeAt(0), end: 'h'.charCodeAt(0), location: 'Right'},
    {start: 'k'.charCodeAt(0), end: 'k'.charCodeAt(0), location: 'Right'}
  ];
  
  const numArr = [];
  const letterArr = [];
  
  for (let char of a) {
    (Number(char) || char === '0') ? numArr.push(char) : letterArr.push(char.toLowerCase());
  }
  
  if (numArr.join('') >= 61 || letterArr[0] === 'i' || letterArr[0] === 'j') {
    return 'No Seat!!';
  }
  
  const pos1 = numMap.find(pos => pos.start <= numArr.join('') && pos.end >= numArr.join('')).location;
  const pos2 = letterMap.find(pos => pos.start <= letterArr[0].charCodeAt(0) && pos.end >= letterArr[0].charCodeAt(0)).location;
  return pos1 + '-' + pos2;
}

//#2
//Holiday III - Fire on the boat
//https://www.codewars.com/kata/57e8fba2f11c647abc000944/
function fireFight(s){
  return s.split(' ')
    .map(ele => (ele === 'Fire') ? '~~' : ele)
    .join(' ');
}

/*
==========
2026_02_08
==========
*/
//#1
//Holiday IV - Leg Room
//https://www.codewars.com/kata/57e8ff073d1cb559280005de
function legRoom (a, b){
  const lRoom = b.split('').filter(char => !['a', 'e', 'i', 'o', 'u'].includes(char)).length * 2;
  const lLength = Math.floor(a * .55);
  return (b.includes('00')) ? 'Jackpot!'
    : (lRoom > .15 * lLength) ? (lRoom > .25 * lLength ? 'super comfy' : 'comfortable') : 'ouch';
};

//#2
//Holiday V - SeaSick Snorkelling
//https://www.codewars.com/kata/57e90bcc97a0592126000064
function seaSick(x) {
  return (x.split('')
          .map((ele, ind, arr) => (ele !== arr[ind+1] && arr[ind+1]) ? '*' : '')
          .filter(ele => ele)
          .length > x.length * .2) ? 'Throw Up' : 'No Problem';
}

//#3
//Holiday VII - Local Talk
//https://www.codewars.com/kata/57e92812750fcc051800004d
function pak(s){
  const sArr = s.split(' ').filter(ele => ele);
  let resultArr = [];
  for (let i = 0; i < sArr.length; i++) {
    (i < sArr.length-1) ? resultArr.push(`${sArr[i]} pak`) : resultArr.push(sArr[i]);
  };
  return resultArr.join(' ');
}

//#4
//Welcome!
//https://www.codewars.com/kata/577ff15ad648a14b780000e7
function greet(language) {
const db = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso"
};
  return (db[language]) ? db[language] : 'Welcome';
}

//#5
//Expressions Matter
//https://www.codewars.com/kata/5ae62fcf252e66d44d00008e
function expressionMatter(a, b, c) {
  const resultArr = [[a + b + c],
                     [a * b * c],
                     [a + b * c], 
                     [a * b + c], 
                     [(a + b) * c],
                     [a * (b + c)]];
  return Math.max(...resultArr);
}

/*
==========
2026_02_09
==========
*/
//#1
//Holiday X - Bintang Vests
//https://www.codewars.com/kata/57e93e4a2aee4974d4000c2f
function vestBuy(price, haggle){
  const strategyMap = { light: .2, medium: .3, heavy: .4, walkandswear: .9 }
  return !strategyMap[haggle] ? 'Run!!' : price - (strategyMap[haggle] * price);
};

/*
==========
2026_02_10
==========
*/
//#1
//Maximum Gap (Array Series #4)
//https://www.codewars.com/kata/5a7893ef0025e9eb50000013
function maxGap (numbers){
  const numbersSort = numbers.sort((a, b) => a - b);
  let maxGap = 0;
  for (let i = 0; i < numbers.length-1; i++) {
    (Math.abs(numbersSort[i+1] - numbersSort[i] > maxGap)) && (maxGap = Math.abs(numbersSort[i+1] - numbersSort[i]));
    } 
  return maxGap;
}

//#2
//Is n divisible by x and y?
//https://www.codewars.com/kata/5545f109004975ea66000086
const isDivisible = (n, x, y) => n % x === 0 && n % y === 0;

//#3
//Simple validation of a username with regex
//https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023
const validateUsr = username => (username.length > 3 && username.length < 17) && (!/[^a-z0-9_]/.test(username))

//#4
//validate code with simple regex
//https://www.codewars.com/kata/56a25ba95df27b7743000016
const validateCode = code => /^[1-3]/.test(code);

//#5
//How much coffee do you need?
//https://www.codewars.com/kata/57de78848a8b8df8f10005b1/
function howMuchCoffee(events) {
  let coffees = 0;
  const eventsArr = ['cw', 'dog', 'cat', 'movie'];
  events.forEach(event => {
    if (eventsArr.includes(event.toLowerCase())) {
      (event === event.toLowerCase()) ? coffees++ : coffees += 2;
    }
  })
  return (coffees > 3) ? 'You need extra sleep' : coffees;
}

/*
==========
2026_02_11
==========
*/
//#1
//Alan Partridge III - London
//https://www.codewars.com/kata/580a41b6d6df740d6100030c
const alan = x => ['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway'].every(stop => x.includes(stop)) ? 'Smell my cheese you mother!' : 'No, seriously, run. You will miss it.';

//#2
//Robotic Tattoo Removal
//https://www.codewars.com/kata/57658f3dedc6f7a751000e7b
const robot = skinScan => skinScan.map(ele => ele.map(ele => (ele === 'X') ? '*' : ele))

//#3
//Equalize the array!
//https://www.codewars.com/kata/580a1a4af195dbc9ed00006c
function equalize(array){
  return array.reduce((acc, currVal, currInd, arr) => {
    acc.push(`${(currVal - arr[0] >= 0) ? '+' : ''}${currVal - arr[0]}`);
    return acc;
  }, [])
}

//#4
//What's the real floor?
//https://www.codewars.com/kata/574b3b1599d8f897470018f6
const getRealFloor = n => (n > 13) ? n - 2 : (n < 13 && n >= 1) ? n - 1 : n

//#5
//Convert to Binary
//https://www.codewars.com/kata/59fca81a5712f9fa4700159a
const toBinary = n => Number(n.toString(2))

/*
==========
2026_02_12
==========
*/
//#1
//Grouping in string
//https://www.codewars.com/kata/5ee8ba31b44cc30032cbce04
const isConsecutive = (str) => {
  for (let i = 0; i < str.length-1; i++) {
    if (str[i] !== str[i+1]) {
      if (i !== str.lastIndexOf(str[i])) {
        return false
      }
    }
  }
  return true;
}

//#2
//Get array elements with specified keys
//https://www.codewars.com/kata/586a3270c66d18ad810001d4
Array.prototype.only = function(keys)
{
  let outputArr = [];
  for (let key of keys.sort((a, b) => a - b)) {
    outputArr.push(this[key]);
  }
  return outputArr;
}

//#3
//Zip it!
//https://www.codewars.com/kata/56aaf25213edd3a88a000002
Array.prototype.zip = function (arr, fn) {
  let outputArr = [];
  const minLength = (this.length < arr.length) ? this.length : arr.length;
  for (let i = 0; i < minLength; i++) {
    outputArr.push(fn(this[i], arr[i]));
  };
  return outputArr;
}

//#4
//Sum The Array
//https://www.codewars.com/kata/56bdf9d50d0b6433df001074
Array.prototype.sum = function() {
  return this.reduce((a, cV) => a+cV ,0);
}

//#5
//Computer problem series #1: Fill the Hard Disk Drive
//https://www.codewars.com/kata/5d49c93d089c6e000ff8428c
function save(sizes, hd) {
  let currCap = hd;
  let fileArr = [];
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i] <= currCap) {
      currCap -= sizes[i];
      fileArr.push(sizes[i])
    } else {
      break;
    }
  }
  return fileArr.length;
}

/*
==========
2026_02_14
==========
*/
//#1
//Simple Sequence Validator
//https://www.codewars.com/kata/553f01db29490a69ff000049
function validateSequence(x) {
  let steps = 0;
  return x.every((ele, ind, arr) => {
    return (ind === 0) ? (steps = Math.abs(arr[ind+1] - arr[ind]), true)
      : (ind === arr.length-1) ? true
      : (Math.abs(arr[ind+1] - arr[ind]) !== steps) ? false : true;
  })
}

//#2
//Remove Empty Items of Array
//https://www.codewars.com/kata/5c857bab20089d4fe65a7f5b
function clean(arr) {
  const falsyMap = [false, null, undefined, 0, ''];
  return arr.filter(ele => ele || falsyMap.includes(ele) || Number.isNaN(ele));
}

//#3
//Ski Jump
//https://www.codewars.com/kata/57ed7214f670e99f7a000c73
function skiJump(mountain){
  const jump = ((mountain.length * (mountain.length * 1.5) * 9) /10).toFixed(2);
  return `${jump} metres: ` + ((+jump > 25) ? (+jump > 50 ? `Gold!!` : `He's flying!`) : (+jump > 10 ? `He's ok!` : `He's crap!`));
}

//#4
//Move Zeros
//https://www.codewars.com/kata/55c098aa8468f3b9030000f1
function move_zeros(arrNum, isRight = true){
  const zeroArr = [];
  const nonZeroArr = [];
  for (let i = 0; i < arrNum.length; i++) {
    (arrNum[i] === 0) ? zeroArr.push(arrNum[i]) : nonZeroArr.push(arrNum[i]);
  };
  return (isRight) ? nonZeroArr.concat(zeroArr) : zeroArr.concat(nonZeroArr);
}

//#5
//sum2total
//https://www.codewars.com/kata/559fed8454b12433ff0000a2
function total(arr, result = []) {
  if (arr.length <= 1) {
    return arr[0];
  }
  for (let i = 0; i < arr.length-1; i++) {
    result.push(arr[i] + arr[i+1]);
  }
  return total(result);
}

/*
==========
2026_02_15
==========
*/
//#1
//Minimize Sum Of Array (Array Series #1)
//https://www.codewars.com/kata/5a523566b3bfa84c2e00010b
function minSum(arr) {
  const products = [];
  const arrSorted = arr.sort((a, b) => b - a);
  for (let i = 0, j = arrSorted.length-1; i < arrSorted.length/2; i++, j--) {
    products.push(arrSorted[i] * arrSorted[j]);
  };
  return products.reduce((acc, currVal) => acc + currVal);
};

/*
==========
2026_02_16
==========
*/
//#1
//Pillow on the Fridge
//https://www.codewars.com/kata/57d147bcc98a521016000320
function pillow(s){
  const nInd = [];
  const bInd = [];
  s.forEach((ele, ind1) => ele.split('')
                              .forEach((char, ind2) => (ind1 === 0 && char === 'n') ? nInd.push(ind2)
                                              : (ind1 === 1 && char === 'B') ? bInd.push(ind2) : ''))
  return nInd.findIndex(ele => bInd.includes(ele)) !== -1;
}

/*
==========
2026_02_17
==========
*/
//#1
//https://www.codewars.com/kata/59656c69253c365e58000046
function maxPossibleScore(obj, arr) {
  let score = 0;
  for (let question in obj) {
    (arr.includes(question)) ? score += (2 * obj[question]) : score += obj[question];
  }
  return score;
}

/*
==========
2026_02_19
==========
*/
//#1
//Spanish Conjugator
//https://www.codewars.com/kata/5a81b78d4a6b344638000183
function conjugate(verb){
  const inf = verb.slice(-2).toLowerCase();
  const pref = verb.slice(0, -2);
  let secSing = 'e', 
      thirdSing = 'e', 
      firstPlur = 'e', 
      secPlur = 'éi', 
      thirdPlur = 'e';
  
  if (inf === 'ar') {
    secSing = 'a';
    thirdSing = 'a';
    firstPlur = 'a';
    secPlur = 'ái';
    thirdPlur = 'a';
  } else if (inf === 'ir') {
    firstPlur = 'i';
    secPlur = 'í'
  };
  
  const conjMap = {
    [verb]: [
      `${pref}o`,
      `${pref}${secSing}s`,
      `${pref}${thirdSing}`,
      `${pref}${firstPlur}mos`,
      `${pref}${secPlur}s`, 
      `${pref}${thirdPlur}n`
    ]
  }
  
  return conjMap; 
}

/*
==========
2026_02_20
==========
*/
//#1
//Food combinations
//https://www.codewars.com/kata/565f448e6e0190b0a40000cc
function actuallyReallyGood(foods){
  const yk = "You know what's actually really good?";
  if (foods.length === 0) {
    return `${yk} Nothing!`
  }
  const food1 = ((foods[0].slice(0, 1).toUpperCase()) + (foods[0].slice(1).toLowerCase()));
  let food2 = (foods.find(food => !food[0])) || foods[0];
  food2 = food2.toLowerCase();
  return `${yk} ` + ((food1.toLowerCase() === food2) ? `${food1} and more ${food2}.` : `${food1} and ${food2}.`)
};

//#2
//Dinner Plans
//https://www.codewars.com/kata/57212c55b6fa235edc0002a2
function commonGround(s1, s2){
  const s3 = s2.split(' ').filter(word => s1.split(' ').includes(word)).join(' ');
  return (!s3.length) ? 'death' : s3;
}

/*
==========
2026_02_21
==========
*/
//#1
//Bubble Sort
//https://www.codewars.com/kata/57403b5ad67e87b5e7000d1d
function bubble(arr) {
  let arrCopy = arr.slice();
  let snapshotArr = [];
  
  for (let i = arr.length-1; i >= 1; i--) {
    for (let a = 0, b = a+1; b <= i; a++, b++) {
      if (arrCopy[a] > arrCopy[b]) {
      let [high, low] = arrCopy.slice(a, b+1);
      arrCopy[b] = high;
      arrCopy[a] = low;
      snapshotArr.push(arrCopy.slice());
      }
    }
  }
  return snapshotArr;
}

/*
==========
2026_02_22
==========
*/
//#1
//Nice Array
//https://www.codewars.com/kata/59b844528bcb7735560000a0
const isNice = arr => arr.length ? arr.every(ele => arr.includes(ele+1) || arr.includes(ele-1)) : false;

//#2
//Add property to every object in array
//https://www.codewars.com/kata/54e8c3e89e2ae6f4900005a1
for (let obj of questions) {
  obj['usersAnswer'] = null;
};

//#3
//Calculate Two People's Individual Ages
//https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1
function getAges(sum,difference){
  if (sum < 0 || difference < 0) {
    return null;
  } 
  const youngest = (sum - difference) / 2;
  const oldest = ((sum - difference) / 2) + difference;
  return ( youngest < 0 || oldest < 0) ? null : [oldest, youngest];
};


/*
==========
2026_02_23
==========
*/
//#1
//Always perfect
//https://www.codewars.com/kata/55f3facb78a9fd5b26000036
function checkRoot(string){
  const stringArr = string.split(',');
  let product = 1;
  if (stringArr.length !== 4 || stringArr.some(char => Number.isNaN(Number(char)))) {
    return 'incorrect input'
  }
  for (let i = 0; i < stringArr.length; i++) {
    if (i < stringArr.length-1 && Number(stringArr[i]) !== stringArr[i+1]-1) {
      return 'not consecutive';
    } else {
      product *= stringArr[i];
    }
  }
  return `${(product + 1).toString()}, ${Math.sqrt(product + 1)}`;
}

//#2
//Array.prototype.size()
//https://www.codewars.com/kata/58638bd2210be9a9690001f7
Array.prototype.size = function() {
  return (this.lastIndexOf(...this.slice(-1)) + 1);
};

/*
==========
2026_02_24
==========
*/
//#1
//Split string by multiple delimiters
//https://www.codewars.com/kata/575690ee34a34efb37001796
function multipleSplit(string, delimiters=[]){
  let stringArr;
  for (let i = 0; i < delimiters.length; i++) {
    (i > 0) ? stringArr = stringArr.map(ele => ele.split(`${delimiters[i]}`))
                                   .flat(1)
                                   .filter(ele => ele !== '')
      : stringArr = string.split(`${delimiters[i]}`);
  }
  return (stringArr) ? stringArr : [string].filter(ele => ele !== '');
}

//#2
//ONE ONe One one
//https://www.codewars.com/kata/588ac50727eb94c87700001f
function consecutiveOnes(nums) {
  let prevCount = 0;
  let currCount = 0;
  for (let i = 0; i < nums.length; i++) {
    (nums[i] === 1)  ? currCount++ 
      : (currCount > prevCount) ? (prevCount = currCount, currCount = 0) : currCount = 0;
  }
  return (currCount > prevCount) ? currCount : prevCount;
};

//#3
//Shaving the Beard
//https://www.codewars.com/kata/57efa1a2108d3f73f60000e9
function trim(x){
  return x.map((subArr, ind, arr) => (ind === arr.length-1) ? subArr.map(hair => '...') : subArr.map(hair => (hair === 'J') ? '|' : hair));
}

//#4
//Basic method
//https://www.codewars.com/kata/55da49c166949c319200003e
Array.prototype.max = function() {
  return Math.max(...this);
};

/*
==========
2026_02_25
==========
*/
//#1
//The real size of a multi-dimensional array
//https://www.codewars.com/kata/57f032307b45ef9c8f0001dd
function realSize(arrays) {
  return arrays.flat(Infinity).filter(ele => Number.isInteger(ele)).length;
}

/*
==========
2026_02_26
==========
*/
//#1
//That unites us
//https://www.codewars.com/kata/5a3ddf58e1ce0e6f8f000030
const thatUnitesUs = (array1, array2, n) => [...new Set(array1.concat(array2).sort())].slice(0, n)

/*
==========
2026_03_04
==========
*/
//#1
//Multidimensional array
//https://www.codewars.com/kata/5a34e2eab6cfd7fcbc000008
function getElement(array, indexes, i=0) {
  return (i === indexes.length-1) ? array[indexes[i]] : getElement(array[indexes[i]], indexes, i+1)
}

/*
==========
2026_03_06
==========
*/
//#1
//Map function issue
//https://www.codewars.com/kata/560fbc2d636966b21e00009e
var func = function(item){
  return (!Number(item)) ? ''
    : (item % 2 === 0) ? true : false;
}

function map(arr, somefunction=func){
  const output = []
  if (!somefunction.prototype) {
    return 'given argument is not a function'
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof somefunction(arr[i]) !== 'boolean') {
      return 'array should contain only numbers';
    } else {
      output.push(somefunction(arr[i]));
    }
  }
  return output;
}

//#2
//The sortReloaded() method
//https://www.codewars.com/kata/5610a8eeb9a84d624b000005
Array.prototype.sortReloaded = function(dir = 'asc') {
  return (dir !== 'asc' && dir !== 'desc') ? false 
    : (dir === 'asc') ? this.slice().sort((a, b) => a - b) : this.slice().sort((a, b) => b - a);
}

//#3
//Celebrity Baby Names
//https://www.codewars.com/kata/577d5ce442a8d81e790002b2
function validName(array) {
  const ybna = ' your baby names are';
  return (!array.length) ? 'You must test at least one name.'
    : (array.length === 1) ? `Congratulations, you can choose any name you like!`
    : (array.every((ele, ind, arr) => (ind === 0) ? true 
                   : ele.slice(0,1).toLowerCase() === arr[ind-1].slice(-1).toLowerCase())) ? `Congratulations,${ybna} compatible!`
                      : `Back to the drawing board,${ybna} not compatible.`
}

/*
==========
2026_03_07
==========
*/
//#1
//"Consonant Please"
//https://www.codewars.com/kata/59727e04f6a02d0cde00001a
function sortLetters() {
  const vowelArr = [];
  const consonantArr = [];
  arguments[0].flat(Infinity).forEach(char => {
    (Number(char) || char == 0) ? '' 
      : (['A','E','I','O','U'].includes(char.toUpperCase())) ? vowelArr.push(char.toUpperCase()) : consonantArr.push(char.toUpperCase());
  })
  return [vowelArr, consonantArr];
}

//#2
//Search JSON for any key value pair
//https://www.codewars.com/kata/55d5da66a0e378b8bc0000c6
function getCharacters(obj, key, val) {
  var foundCharacters = [];
  for (let i = 0; i < obj.characters.length; i++) {
    (obj.characters[i]?.[key]) && 
      ((obj.characters[i][key].toLowerCase() === val.toLowerCase()) 
      && foundCharacters.push(obj.characters[i]))
    }
  return foundCharacters;
}

//#3
//Remove method in Arrays
//https://www.codewars.com/kata/565d76490397dcf0e700001e
Array.prototype.remove = function(index) {
  if (!Number.isInteger(index) || (index > this.length || index < 0)) {
    return this;
  } else {
    this.splice(index, 1);
    return this;
  }
};

/*
==========
2026_03_08
==========
*/
//#1
//Validate Passwords
//https://www.codewars.com/kata/5838719c6754d618240000ff
let passArr = [];

var signIn = function(newPassword) {
  passArr.push(newPassword);
};

var logIn = function(password) {
  return (passArr.includes(password));
};

//#2
//Second largest in Array
//https://www.codewars.com/kata/578fe7e2149935740f000525
function secondLargest(array){
  if (!Array.isArray(array)) {
    return;
  }
  let highest;
  let secondH;
  for (let i = 0; i < array.length; i++) {
    if (((typeof array[i] == 'number' || typeof array[i] == 'string') && Number(array[i])) || array[i] === 0) {
      (highest === undefined) ? highest = array[i]
        : (array[i] <= highest && secondH === undefined) ? secondH = array[i]
        : (array[i] > highest) ? (secondH = highest, highest = array[i])
        : (array[i] > secondH) ? secondH = array[i] : '';
    }
  }
  return (highest > secondH) ? Number(secondH) : undefined;
}

//#3
//Did we win the Super Bowl?
//https://www.codewars.com/kata/59f69fefa0143109e5000019
function didWeWin(plays){
  plays = plays.filter(subArr => subArr.length > 0);
  return (plays.some(subArr => subArr.includes('turnover'))) ? false
    : (plays.reduce((acc, currVal) => {
        return (currVal[1] == 'sack') ? acc += (-1 * currVal[0]) : acc += currVal[0];
        }, 0) > 10);
}

/*
==========
2026_03_10
==========
*/
//#1
//I'm already Tracer
//https://www.codewars.com/kata/5c15dd0fb48e91d81b0000c6
function teamComp(heroes) {
  const teamComp = [0, 0, 0];
  if (heroes.length > 6 || heroes.length < 6) {
    return 'GG';
  }
  for (let i = 0; i < heroes.length; i++) {
    if (heroes.indexOf(heroes[i]) !== heroes.lastIndexOf(heroes[i])) {
      return 'GG';
    }
    (TANK.includes(heroes[i])) ? teamComp[0]++
      : (DAMAGE.includes(heroes[i])) ? teamComp[1]++ : teamComp[2]++;
  }
  return teamComp;
}

//#2
//Selection in elementary school
//https://www.codewars.com/kata/5a2e2499b6cfd7f828000014
function schoolSelection(array) {
  const gradeMap = {
    'Kindergarten': 0,
    '1st grade': 0,
    '2nd grade': 0,
    '3rd grade': 0,
    '4th grade': 0
  }
  
  for (let i = 0; i < array.length; i++) {
    switch(array[i]) {
        case 5:
          gradeMap['Kindergarten']++;
          break;
        case 6:
          gradeMap['1st grade']++;
          break;
        case 7:
          gradeMap['2nd grade']++;
          break;
        case 8:
          gradeMap['3rd grade']++;
          break;
        case 9:
          gradeMap['4th grade']++;
          break;
        default:
          break;
    }
  }
    return gradeMap;
}

/*
==========
2026_03_12
==========
*/
//#1
//Oktober Fest: Bjorg's Got A Drinking Problem
//https://www.codewars.com/kata/59e71f7e23324365ce000026
function gameOfFives(bBB,sS){
  const bBB5s = bBB.filter(num => num === 5).length;
  const sS5s = sS.filter(num => num === 5).length;
  return (bBB5s === sS5s) ? "Drinks All Round! Free Beers on Bjorg!" : "Uh Oh! Bjorg's a donut! No beer for anyone!"
}

//#2
//Spanish sentences #1
//https://www.codewars.com/kata/5a30ae82ee1aaef63300001a
function spanishSent(arr) {
  const spanishSentNum = 
        arr.filter(str => {
          return ((str.slice(0,1) == '¡' && str.slice(-1) == '!') || (str.slice(0,1) == '¿' && str.slice(-1) == '?'))
        }).length;
  const plural = (spanishSentNum > 1 || spanishSentNum == 0) ? 'sentences' : 'sentence'
  return `¡${spanishSentNum} spanish ${plural} here and hasta la vista, baby!`
}

//#3
//A twisted way to select an element from an array.
//https://www.codewars.com/kata/5a1c84c1c374cb6f7e000104
function select (arrSearch, arrTake){
  return arrTake.find(str => arrSearch.sort().reverse()[2][2] == str.slice(0,1)) || 'Nothing here';
}

//#4
//Work out is it falsy or truthy?
//https://www.codewars.com/kata/583310c5dbeb310c34000352
function falsyOrTruthy(arr) {
  return (arr.length % 2 > 0) ? arr.filter(ele => !ele) : arr.filter(ele => ele);
}

/*
==========
2026_03_13
==========
*/
//#1
//Shorten your speech
//https://www.codewars.com/kata/5b5b12e705f04b3a740000d0
var shortenSpeech = function (str) {	
  let strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > 3) {
      for (let j = 3; j < strArr[i].length; j++) {
        if (['a','e','i','o','u'].includes(strArr[i][j])) {
          strArr[i] = strArr[i].slice(0,j) + '.';
        }
      }
    }
  }
  return strArr.join(' ');
}

/*
==========
2026_03_14
==========
*/
//#1
//Make techno.
//https://www.codewars.com/kata/563c8540d50eb20bab00009a
function perc (mins) {
  return (mins >= 1 && mins <= 100) ? 
    [
      `${Math.round(mins * 120)} kicks`, 
      `${Math.round(mins * 240)} hihats`, 
      `${Math.round(mins * 60)} claps`
    ] : 'invalid track time';
};

/*
==========
2026_03_15
==========
*/
//#1
//Podcast Speed Listening Calculator
//https://www.codewars.com/kata/5a08bb3c80171f4b040000fc
function speedListen(audioLength, playSpeed) {
  let calculatedSeconds = Math.floor(audioLength.split(':').map((ele, ind) => {
    ele = Number(ele);
    return (ind == 0) ? ele = ele * 60 * 60 
      : (ind == 1) ? ele = ele * 60 : ele = ele;
  }).reduce((acc, currVal) => acc + currVal, 0))/playSpeed;
  
  let listeningSeconds = 0;
  let listeningMinutes = 0;
  let listeningHours = 0;
  
  while (calculatedSeconds >= 3600) {
    calculatedSeconds -= 3600;
    listeningHours++;
  }
  while (calculatedSeconds >= 60) {
    calculatedSeconds -= 60;
    listeningMinutes++;
  }
  listeningSeconds = calculatedSeconds;
  
  const output = [listeningHours, listeningMinutes, listeningSeconds]
    .map(duration => {
      return Math.floor(duration)
    })
    .reduce((acc, currVal, currInd) => {
      if (currInd == 0) {
        return acc += (currVal < 10) ? ('0' + currVal) : currVal;
      } else {
        return acc += ':' + ((currVal < 10) ? ('0' + currVal) : currVal);
      } 
    }, '')
  
  return output;
}

/*
==========
2026_03_17
==========
*/
//#1
//Adaptive Security System
//https://www.codewars.com/kata/69b58aaee8f1deef7ece7d0e
function breachAttempts(hackers, securityLevel, increase) {
  return hackers.reduce((breaches, hacker) => {
  (hacker > securityLevel) ? breaches++ : securityLevel += increase;
  return breaches;
  }, 0)
}

/*
==========
2026_03_25
==========
*/
//#1
//Holiday Array Repair
//https://www.codewars.com/kata/5579906f2f0c0d0766000127
function holidayCount (a1, a2){
  const hisVacation = a1.filter(ele => typeof ele === 'number');
  const myVacation = a2.filter(ele => typeof ele === 'number');
  return (!hisVacation.length || !myVacation.length) ? 'Not possible'
    : (hisVacation[0] === myVacation[0]) ? 'Same'
    : (hisVacation[0] > myVacation[0]) ? 'Right' : 'Wrong';
}

/*
==========
2026_03_29
==========
*/
//#1
//Format data value
//https://www.codewars.com/kata/5a329fc9b6cfd7e8320000c9
function formatDataValue(data) {
  let tb, gb, mb;
  let outputStr = '';
  
  tb = Math.floor(data/1000000), data -= (tb * 1000000);
  gb = Math.floor(data/1000), data -= (gb * 1000);
  mb = data;
  
  (tb > 0) && (outputStr += `${tb}TB `);
  (gb > 0) && (outputStr += `${gb}GB `);
  (gb < 1 && tb > 0 && mb > 0) && (outputStr += '0GB ');
  
  if (mb > 0) {
    outputStr += `${mb}MB`
  } else if (mb < 1 && !outputStr) {
    outputStr += '0MB'
  };
  
  return outputStr.trim();
}

//#2
//Bicycle gear inch calculator
//https://www.codewars.com/kata/581f9a387a3a635dfc000128
function gearInchCalculator(chainrings, sprockets){
	var wheelDiameter = 26;
  return chainrings.map(chainring => sprockets.map(sprocket => Number((wheelDiameter * (chainring/sprocket)).toFixed(1))));
};

/*
==========
2026_03_30
==========
*/
//#1
//Thirsty Robot (Updated)
//https://www.codewars.com/kata/5b598ad0578c6ae27e00002b
function thirstyRobot(arr){
  console.log(arr);
  let wine = drink => drink > 8 && drink <= 15;
  let beer = drink => drink <= 8;
  let liquor = drink => drink > 15;
  let liquorPresent = arr.find(liquor);
  if (arr.findIndex(wine) > -1) { // checks position of wine and if found...
    console.log(arr.findIndex(wine));
    console.log(arr.slice(arr.findIndex(wine)));
    if (arr.slice(arr.findIndex(wine)).findIndex(beer) > -1) {
      if (liquorPresent) {
        return 'Poor robot'
      } else {
        return 'Oh dear'
      };
    } else if (liquorPresent) {
      return 'Wonky robot'
    } else {
      return 'Fine'
    }
  } else if (arr.findIndex(beer) > -1) {
    if (liquorPresent) {
      return 'Wonky robot'
    } else {
      return 'Fine'
    }
  } else if (liquorPresent) {
    return 'Wonky robot'
  } else {
    return 'Fine'
  };
};

/*
==========
2026_03_31
==========
*/
//#1
//Pythagorean Triple
//https://www.codewars.com/kata/5951d30ce99cf2467e000013
function isPythagoreanTriple(integers) {
  return !integers.every((num, ind, arr) => {
    const aInd = (arr.indexOf(num) >= arr.length-1) ? 0 : ind + 1;
    const bInd = (aInd >= arr.length-1) ? 0 : aInd + 1;
    return num**2 !== arr[aInd]**2 + arr[bInd]**2;
  });
}

/*
==========
2026_04_01
==========
*/
//#1
//Collatz Conjecture (3n+1)
//https://www.codewars.com/kata/577a6e90d48e51c55e000217
var hotpo = function(n, i=0){
  return (n == 1 || n == 0) ? i 
    : (n % 2 == 0) ? hotpo(n/2, i+1) : hotpo(3*n+1, i+1);
}

/*
==========
2026_04_02
==========
*/
//#1
//Witcher's Contract: The Bestiary
//https://www.codewars.com/kata/69b9359e8af0beedadc87db9
function identifyMonster(observedWeaknesses, bestiary) {
  for (let monster in bestiary) {
    if (observedWeaknesses.every(weakness => bestiary[monster].includes(weakness))) {
      return monster;
    }
  }
  return 'Unknown monster';
}

//#2
//Maximum Triplet Sum (Array Series #7)
//https://www.codewars.com/kata/5aa1bcda373c2eb596000112
function maxTriSum(numbers){
  return [...new Set(numbers)]
    .slice()
    .sort((a, b) => b - a)
    .reduce((acc, currVal, currInd) => (currInd < 3) ? acc + currVal : acc + 0);
}

//#3
//Minimum Steps (Array Series #6)
//https://www.codewars.com/kata/5a91a7c5fd8c061367000002
function minimumSteps(numbers, value){
  let operationCount = 0;
  numbers.slice()
    .sort((a, b) => a - b)
    .reduce((acc, currVal) => (acc >= value) ? acc : (operationCount++, acc + currVal));
  return operationCount;
 }

 /*
==========
2026_04_03
==========
*/
//#1
//Extra Perfect Numbers (Special Numbers Series #7)
//https://www.codewars.com/kata/5a662a02e626c54e87000123
function extraPerfect(n) {
  return [...Array(n)].map((ele, ind) => ele = ind+1)
    .filter(num => num.toString(2).startsWith('1') && num.toString(2).endsWith('1'))
    .sort((a, b) => a - b);
}

//#2
//The Office VI - Sabbatical
//https://www.codewars.com/kata/57fe50d000d05166720000b1
function sabb(s, val, happiness){
  return (s.split('')
          .map(char => ['s', 'a', 'b', 't', 'i', 'c', 'l'].includes(char) ? 1 : 0)
          .reduce((acc, currVal) => acc + currVal) + val + happiness > 22) ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'
}

//#3
//Coding Meetup #17 - Higher-Order Functions Series - Sort by programming language
//https://www.codewars.com/kata/583ea278c68d96a5fd000abd
function sortByLanguage(list) {
  return list.sort((a, b) => {
    const aLang = a.language.toLowerCase();
    const bLang = b.language.toLowerCase();
    const aName = a.firstName.toLowerCase();
    const bName = b.firstName.toLowerCase();
    return (aLang < bLang) ? -1
      : (aLang > bLang) ? 1 
      : (aName < bName) ? -1
      : (aName > bName) ? 1 : 0;
  })
}

 /*
==========
2026_04_06
==========
*/
//#1
//Quadrants
//https://www.codewars.com/kata/643af0fa9fa6c406b47c5399
function quadrant(x, y) {
  return (x > 0 && y > 0) ? 1 
    : (x < 0 && y > 0) ? 2
    : (x < 0 && y < 0) ? 3 : 4
}

 /*
==========
2026_04_07
==========
*/
//#1
//Basics 04: Rotate Matrix
//https://www.codewars.com/kata/56b5dd1702a30326ce000b02
function rotateMatrix(matrix) {
  const subArrCount = matrix.length;  
  const elemCount = matrix[0].length;
  const outputArr = [];

  for (let i = elemCount-1; i >= 0; i--) {
    const outputSubArr = [];    
   
    for (let j = 0; j < subArrCount; j++) {
      outputSubArr.push(matrix[j][i])  
    }
    outputArr.push(outputSubArr)
  }
  return outputArr;
}

 /*
==========
2026_04_08
==========
*/
//#1
//Training JS #25: methods of arrayObject---reverse() and sort()
//https://www.codewars.com/kata/572df796914b5ba27c000c90
function sortIt(arr){
  return arr.slice().sort((a, b) => {
    const aLength = arr.filter(ele => ele == a).length;
    const bLength = arr.filter(ele => ele == b).length;
    return aLength < bLength ? -1
      : aLength > bLength ? 1
      : a > b ? -1
      : a < b ? 1 : 0;
  });
}

 /*
==========
2026_04_09
==========
*/
//#1
//Chuck Norris IV - Bearded Fist
//https://www.codewars.com/kata/57066708cb7293901a0013a1
const fistBeard = arr => String.fromCharCode(...arr.flat(Infinity));

//#2
//Pirate Code
//https://www.codewars.com/kata/59e77930233243a7b7000026
const amaroPlan = pirateNum => [...Array(pirateNum)].map((ele, ind, arr) => (ind == 0) ? (20 * pirateNum) - (Math.floor((pirateNum-1)/2)) : (ind % 2 > 0) ? 0 : 1)

 /*
==========
2026_04_10
==========
*/
//#1
//Chuck Norris III - Cage Match
//https://www.codewars.com/kata/57061b6fcb7293901a000ac7
const headSmash = array => (Number.isInteger(array)) ? "This isn't the gym!!"
    : ((array.length == 0) || !array[0]) ? 'Gym is empty' : array.map(ele => ele.replaceAll('O', ' '));

//#2
//Birthday II - Presents
//https://www.codewars.com/kata/5805f0663f1f9c49be00011f
function present(x, y){ 
  return (x == 'badpresent') ? 'Take this back!'
    : (x == 'crap' || x == 'empty') ? x.split('').sort().join('')
    : (x == 'goodpresent') ? x.split('').map((_, ind) => x.charCodeAt(ind)).map(code => String.fromCharCode(code + y)).join('')
    : (x == 'bang') ? x.split('').map((_, ind) => x.charCodeAt(ind)).map(code => code - y).reduce((acc, currVal) => acc + currVal, 0)
    : `pass out from excitement ${y} times`;
}

 /*
==========
2026_04_13
==========
*/
//#1
//Geometry Basics: Distance between points in 2D
//https://www.codewars.com/kata/58dced7b702b805b200000be
function distanceBetweenPoints(a, b) {
  return Math.sqrt((a.x - b.x)**2 + (a.y - b.y)**2);
}

 /*
==========
2026_04_14
==========
*/
//#1
//Evil or Odious
//https://www.codewars.com/kata/56fcfad9c7e1fa2472000034
function evil(n) {
  return (n.toString(2)
          .split('')
          .filter(char => char == 1)
          .length % 2 > 0) ? "It's Odious!" : "It's Evil!"
};

 /*
==========
2026_04_18
==========
*/
//#1
//Simple Fun #380: Find d = a + b + c
//https://www.codewars.com/kata/5a139df8ba2a14e041000055
function findD(arr){
  const outputArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j == i) {
        continue;
      }
      for (let k = 0; k < arr.length; k++) {
        if (k == i || k == j) {
          continue;
        }
        for (let l = 0; l < arr.length; l++ ) {
          if (l == i || l == j || l == k) {
            continue;
          }
          if (arr[i] + arr[j] + arr[k] == arr[l]) {
            outputArr.push(arr[l]);
          }
        }
      }
    }
  }
  return (Number.isFinite(Math.max(...outputArr)) ? Math.max(...outputArr) : null);
}

 /*
==========
2026_04_19
==========
*/
//#1
//Pitch Class Set - Transpositions/Inversions
//https://www.codewars.com/kata/5a1fe6b1ffe75f9f5a00009f
function operate(pcSet, operation) {
  let output;
  const inversion = operation.slice(-1).toLowerCase() == 'i';
  const digits = Number(operation.toLowerCase().replace('t', '').replace('i', ''));
  
  output = (inversion) ? pcSet.map(pc => 12 - pc + digits - ((12 - pc + digits > 11) ? 12 : 0))
    : pcSet.map(pc => pc + digits - ((pc + digits > 11) ? 12 : 0));
  
  return output.sort((a, b) => a - b);
}

//#2
//Vowel Count
//https://www.codewars.com/kata/54ff3102c1bad923760001f3
const getCount = str => str.length - str.replaceAll(/[aeiou]/g, '').length

//#3
//Disemvowel Trolls
//https://www.codewars.com/kata/52fba66badcd10859f00097e
const disemvowel = str => str.replaceAll(/[aeiou]/gi, '')

 /*
==========
2026_04_20
==========
*/
//#1
//Tidy Number (Special Numbers Series #9)
//https://www.codewars.com/kata/5a87449ab1710171300000fd
function tidyNumber(n){
  return n.toString()
          .split('')
          .map(char => Number(char))
          .every((digit, ind, arr) => (ind == arr.length-1) ? true : digit <= arr[ind+1]);
}

 /*
==========
2026_04_21
==========
*/
//#1
//Product Array (Array Series #5)
//https://www.codewars.com/kata/5a905c2157c562994900009d
function productArray(numbers){
  const output = [];
  
  for (let i = 0; i < numbers.length; i++) {
    const numbersCopy = numbers.slice(); 
    numbersCopy.splice(i, 1);
    output.push(numbersCopy.reduce((acc, currVal) => acc * currVal, 1));
  }
 
  return output;
}

 /*
==========
2026_04_22
==========
*/
//#1
//Max-min arrays
//https://www.codewars.com/kata/5a090c4e697598d0b9000004
function solve(arr){
  const arrCopy = arr.slice();
  const outputArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 < 1) {
      outputArr.push(Math.max(...arrCopy));
      arrCopy.splice(arrCopy.indexOf(Math.max(...arrCopy)), 1);
    } else {
      outputArr.push(Math.min(...arrCopy));
      arrCopy.splice(arrCopy.indexOf(Math.min(...arrCopy)), 1)
    }
  }
  return outputArr
};

 /*
==========
2026_04_23
==========
*/
//#1
//Find Duplicates
//https://www.codewars.com/kata/5558cc216a7a231ac9000022
function duplicates(arr) {
  const dupArr = [];
  
  for (let i = 1; i < arr.length; i++) {
    for (let j = i-1; j >= 0; j--) {
      if (arr[i] == arr[j] && typeof arr[i] == typeof arr[j]) {
        if (dupArr.includes(arr[i])) {
          break;
        } else {
          dupArr.push(arr[i])
        }
      }
    }
  }
  return dupArr;
}

//#2
//Combine objects
//https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819
function combine(...objects) {
  const output = {}
  for (let obj of objects) {
    for (let prop in obj) {
      if (output[prop] == undefined) {
        output[prop] = obj[prop];
      } else {
        output[prop] += obj[prop];
      }
    }
  }
  return output;
}

//#3
//The reject() function
//https://www.codewars.com/kata/52988f3f7edba9839c00037d
const reject = (array, predicate) => array.filter(value => !predicate(value));

 /*
==========
2026_04_24
==========
*/
//#1
//Transpose two strings in an array
//https://www.codewars.com/kata/581f4ac139dc423f04000b99
function transposeTwoStrings (array) {
  const longest = Math.max(array[0].length, array[1].length);
  let output = '';
  
  for (let i = 0; i < longest; i++) {
    output += (array[0][i] || ' ') + ' ' + (array[1][i] || ' ');
    if (i !== longest-1) {
      output += '\n';
    };
  };
  return output;
}

 /*
==========
2026_04_25
==========
*/
//#1
//Ironman Triathlon
//https://www.codewars.com/kata/57d001b405c186ccb6000304
function iTri(s){
  const remainDist = 140.6 - s;
  const activity = [
    { start: 0.01, end: 2.39, leg: 'Swim'},
    { start: 2.4, end: 114.39, leg: 'Bike'},
    { start: 114.4, end: 130.6, leg: 'Run'}
  ];
  
  return (s == 0) ?  'Starting Line... Good Luck!' 
    : (s >= 140.6) ? "You're done! Stop running!" 
    : (s >= 130.7 && s <= 140.59) ? { 'Run': 'Nearly there!'} 
    : { [activity.find(portion => s >= portion.start && s <= portion.end).leg]: `${remainDist.toFixed(2)} to go!` };
}

 /*
==========
2026_04_26
==========
*/
//#1
//Find Your Villain Name
//https://www.codewars.com/kata/536c00e21da4dc0a0700128b
function getVillainName(birthday){
  const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
  const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
  
  const month = birthday.getMonth(); // number value
  const day = Number(birthday.getDate().toString().slice(-1)); // // last digit number value;
  
  return `The ${m[month]} ${d[day]}`;
}

 /*
==========
2026_04_27
==========
*/
//#1
//Sum ALL the arrays!
//https://www.codewars.com/kata/5594463eaf1701909c0000d4
const arraySum = arr => arr.flat(Infinity)
  .filter(ele => Number(ele))
  .reduce((acc, currVal) => acc + currVal, 0)

//#2
//Tetris Series #1 — Scoring System
//https://www.codewars.com/kata/5da9af1142d7910001815d32
function getScore(arr) {
  let line = 0;
  let currentScore = 0;
  let cleared = 0;
  
  const clearMap = { 0: 0, 1: 40, 2: 100, 3: 300, 4: 1200 };
  
  for (let i = 0; i < arr.length; i++) {
    currentScore += clearMap[arr[i]] * (line + 1);
    cleared += arr[i];
    if (cleared >= 10) {
      line++;
      cleared -= 10;
    };
  }
  return currentScore;
}

/*
==========
2026_04_29
==========
*/
//#1
//Operations with sequence
//https://www.codewars.com/kata/596ddaccdd42c1cf0e00005c
var calc = function(a) {
  return a.map(ele => (ele > 0) ? ele**2 : ele)
    .map((ele, ind) => ((ind + 1) % 3 == 0) ? ele * 3 : ele)
    .map((ele, ind) => ((ind +1) % 5 == 0) ? -1 * (ele) : ele)
    .reduce((acc, currVal) => acc + currVal, 0);
}

//#2
//Sum of differences between products and LCMs
//https://www.codewars.com/kata/56e56756404bb1c950000992
function sumDifferencesBetweenProductsAndLCMs(pairs){
  const output = [];
  for (let i = 0; i < pairs.length; i++) {
    let prod;
    let lcm;
    for (let j = 0; j < pairs[i].length-1; j++) {
      if (pairs[i][j] == 0 || pairs[i][j+1] == 0) {
        prod = 0;
        lcm = 0;
        break;
      }
      prod = pairs[i][j] * pairs[i][j+1];
      for (let k = 1; k <= prod; k++) {
        if (pairs[i][j] <= pairs[i][j+1]) {
          if ((pairs[i][j] * k) % pairs[i][j+1] == 0) {
            lcm = pairs[i][j] * k;
            break;
          }
        } else {
          if ((pairs[i][j+1] * k) % pairs[i][j] == 0) {
            lcm = pairs[i][j+1] * k;
            break;
          }
        }
      }
    }
    output.push(prod - lcm);
  }
  return output.reduce((acc, currVal) => acc + currVal, 0);
}

//#3
//Swap items in a dictionary
//https://www.codewars.com/kata/5a21e090f28b824def00013c
function switchDict(dic) {
  const newDic = {};
  for (let prop in dic) {
    if (newDic[dic[prop]] == undefined) {
      newDic[dic[prop]] = [prop];
    } else {
      newDic[dic[prop]].push(prop);
    }
  }
  return newDic;
}

/*
==========
2026_04_30
==========
*/
//#1
//Sorting Arrays
//https://www.codewars.com/kata/57fe864854685b1c420002e0
function sortArray(a1, a2) {  
  return [...Array(a1.length)]
    .map((str, ind) => a2.find(a2Str => a2Str[0] == a1[ind][0]));
}

/*
==========
2026_05_01
==========
*/
//#1
//NBA full 48 minutes average
//https://www.codewars.com/kata/587c2d08bb65b5e8040004fd
function pointsPer48(ppg, mpg) {
  return (!ppg || !mpg) ? 0 : Number(((ppg/mpg) * 48).toFixed(1));
}

/*
==========
2026_05_02
==========
*/
//#1
//Price of Mangoes
//https://www.codewars.com/kata/57a77726bb9944d000000b06
const mango = (quantity, price) => (quantity - Math.floor(quantity/3)) * price

/*
==========
2026_05_03
==========
*/
//#1
//Sequence generator
//https://www.codewars.com/kata/56ba8a9b022c16017d0001f3
const sequence = (n, pattern) => [...Array(n)].map((ele, ind) => (typeof pattern == 'function') ? pattern(0, ind) : pattern)


/*
==========
2026_05_04
==========
*/
//#1
//Sort the climbing grades
//https://www.codewars.com/kata/58a08e622e7fb654a300000e
function sortGrades(arr){
  const arrCopy = arr.slice();
  const gradeMap = { 'B':-2, '0': -1, '0+': 0};
  let grade1;
  let grade2;
  
  return arrCopy.sort((a, b) => {
    grade1 = ((a.length > 2) ? a.slice(-2) : a.slice(-1));
    grade2 = ((b.length > 2) ? b.slice(-2) : b.slice(-1));
    (gradeMap[grade1] !== undefined) && (grade1 = gradeMap[grade1]);
    (gradeMap[grade2] !== undefined) && (grade2 = gradeMap[grade2]);
    return grade1 - grade2;
  })
}

/*
==========
2026_05_05
==========
*/
//#1
//Don't give me five!
//https://www.codewars.com/kata/5813d19765d81c592200001a
const dontGiveMeFive = (start, end) => Array.from({ length: (Math.abs(start - end) + 1) }, (v, k) => k + start)
  .filter(val => !val.toString().includes('5'))
  .length

//#2
//Two Oldest Ages
//https://www.codewars.com/kata/511f11d355fe575d2c000001
function twoOldestAges(ages){
  const sortedArr = ages.slice().sort((a, b) => b - a);
  return [sortedArr[1], sortedArr[0]];
}

//#3
//Parts of a list
//https://www.codewars.com/kata/56f3a1e899b386da78000732
function partlist(arr) {
  const outputArr = [];
  for (let i = 0; i < arr.length-1; i++) {
    outputArr.push([arr.slice(0,i+1).join(' '), arr.slice(i+1).join(' ')]);
  }
  return outputArr;
}

//#4
//Lost number in number sequence
//https://www.codewars.com/kata/595aa94353e43a8746000120
const findDeletedNumber = (arr, mixArr) => arr.find(ele => !mixArr.includes(ele)) || 0

/*
==========
2026_05_06
==========
*/
//#1
//My Language Skills
//https://www.codewars.com/kata/5b16490986b6d336c900007d
const myLanguages = results => Object.keys(results)
  .filter(lang => results[lang] > 59)
  .sort((a, b) => results[b] - results[a])

//#2
//Array element parity
//https://www.codewars.com/kata/5a092d9e46d843b9db000064
function solve(arr){
  const unpairedTotal = [...new Set(arr)].reduce((acc, currVal) => acc + currVal);
  return (arr.includes(unpairedTotal)) ? arr.find(num => num === unpairedTotal) 
    : arr.find(num => arr.indexOf(num) !== arr.lastIndexOf(num))
};

/*
==========
2026_05_07
==========
*/
//#1
//Find The Duplicated Number in a Consecutive Unsorted List
//https://www.codewars.com/kata/558dd9a1b3f79dc88e000001
function findDup( arr ){
  return arr.filter((int, _, arr) => arr.indexOf(int) !== arr.lastIndexOf(int))[0];
};

//#2
//Find how many times did a team from a given country win the Champions League?
//https://www.codewars.com/kata/581b30af1ef8ee6aea0015b9
function countWins(winnerList, nation) {
  return winnerList.filter(winner => winner.country === nation).length;
}

//#3
//Absent vowel
//https://www.codewars.com/kata/56414fdc6488ee99db00002c
function absentVowel(x){
  const vowelMap = ['a','e','i','o','u'];
  return vowelMap.indexOf(vowelMap.find(vowel => !x.includes(vowel)));
}

//#4
//Determine if the poker hand is flush
//https://www.codewars.com/kata/5acbc3b3481ebb23a400007d
function isFlush(cards) {
  return cards.every((suit, ind, arr) => arr[ind+1] == undefined || suit.slice(-1) == arr[ind+1].slice(-1))
}

/*
==========
2026_05_10
==========
*/
//#1
//MinMaxMin: Bounded Nums
//https://www.codewars.com/kata/58d3487a643a3f6aa20000ff
function minMinMax(array) {
  const arraySorted = [...new Set(array.slice().sort((a, b) => a - b))];
  let minNum;
  
  for (let i = 0; i < arraySorted.length-1; i++) {
    if ((arraySorted[i] + 1) !== arraySorted[i+1]) {
      minNum = arraySorted[i] + 1;
      break;
    }
  }
  return [arraySorted[0], minNum, arraySorted[arraySorted.length-1]];
}

//#2
//Sum of Array Averages
//https://www.codewars.com/kata/56d5166ec87df55dbe000063
function sumAverage(arrays) {  
  return arrays.reduce((acc, currSubArr) => {
    return acc += currSubArr.reduce((acc, currVal) => {
      return acc + currVal;
    })/currSubArr.length;
  }, 0)
};

//#3
//Find the missing element between two arrays
//https://www.codewars.com/kata/5a5915b8d39ec5aa18000030
function findMissing(arr1, arr2) {
  const arr1Sorted = arr1.slice().sort((a, b) => a - b);
  const arr2Sorted = arr2.slice().sort((a, b) => a - b);
  for (let i = 0; i < arr1Sorted.length; i++) {
    if (arr1Sorted[i] !== arr2Sorted[i]) {
      return arr1Sorted[i];
    }
  }
}

//#4
//Least Larger
//https://www.codewars.com/kata/5f8341f6d030dc002a69d7e4
function leastLarger(a,i) {
  const aSorted = a.slice().sort((a, b) => a - b);
  for (let j = 0; j < aSorted.length; j++) { 
    if (a[i] < aSorted[j]) {
      return a.indexOf(aSorted[j]);
    }
  } return -1;
}

/*
==========
2026_05_11
==========
*/
//#1
//How many are smaller than me?
//https://www.codewars.com/kata/56a1c074f87bc2201200002e
function smaller(nums) {
  const output = [];
  for (let i = 0; i < nums.length-1; i++) {
    let count = 0;
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    output.push(count);
  }
  output.push(0);
  return output;
}

//#2
//What dominates your array?
//https://www.codewars.com/kata/559e10e2e162b69f750000b4
function dominator(arr) {
  const arrMap = {};
  
  for (let i = 0; i < arr.length; i++) {
    if (arrMap[arr[i]] == undefined) {
      arrMap[arr[i]] = 1;
    } else {
      arrMap[arr[i]]++;
    }
    if (arrMap[arr[i]] > arr.length/2) {
      return arr[i];
    }
  }
  return -1;
}

/*
==========
2026_05_12
==========
*/
//#1
//Sort Santa's Reindeer
//https://www.codewars.com/kata/52ab60b122e82a6375000bad
function sortReindeer(reindeerNames) {
  return reindeerNames.slice()
    .map(names => names.split(' '))
    .sort((a, b) => (a[1] < b[1]) ? -1 : (b[1] > a[1]) ? 1 : 0)
    .map(subArr => subArr.join(' '));
}

/*
==========
2026_05_13
==========
*/
//#1
//Likes Vs Dislikes
//https://www.codewars.com/kata/62ad72443809a4006998218a
function likeOrDislike(buttons) {
  if (buttons.length === 1) {
    return buttons[0];
  }
  return buttons.reduce((acc, currVal) => (acc !== currVal && acc === 'Nothing') ? currVal 
                        : (acc === currVal) ? 'Nothing' 
                        : currVal, 'Nothing')
}

//#2
//Multiply array values and filter non-numeric
//https://www.codewars.com/kata/55ed875819ae85ca8b00005c
const multiplyAndFilter = (array, multiplier) => array.filter(ele => typeof ele === 'number').map(num => num * multiplier);

//#3
//Finding length of the sequence
//https://www.codewars.com/kata/5566b0dd450172dfc4000005
var lengthOfSequence = function (arr, n) {
  const arrSorted = arr.slice().sort((a, b) => a - b);
  return (arrSorted.indexOf(n) !== (arrSorted.lastIndexOf(n) - 1)) ? 0 : (arr.lastIndexOf(n) - arr.indexOf(n) + 1)
};

//#4
//The dropWhile Function
//https://www.codewars.com/kata/54f9c37106098647f400080a
function dropWhile(array, predicate) {
  const booleanArr = array.map(ele => predicate(ele));
  return (booleanArr.indexOf(false) == -1) ? [] : array.slice(booleanArr.indexOf(false));
};

/*
==========
2026_05_14
==========
*/
//#1
//What is my name score? #1
//https://www.codewars.com/kata/576a29ab726f4bba4b000bb1
function nameScore(name){
  let score = 0;
  for (let group in alpha) {
    for (let char of name.toUpperCase()) {
      if (group.includes(char)) {
        score += alpha[group];
      }
    }
  }
  return { [name]: score };
}

/*
==========
2026_05_15
==========
*/
//#1
//80's Kids #2: Help ALF Find His Spaceship
//https://www.codewars.com/kata/5660aa3d5e011dfd6e000063
function findSpaceship(map) {
  if (!map || !map.includes('X')) {
    return 'Spaceship lost forever.'
  }
  const mapArr = map.split('\n');
  for (let i = mapArr.length-1; i < mapArr.length; i--) {
    let x = mapArr[i].indexOf('X');
    let y = mapArr.length-1 - i;
    if (x !== -1) {
      return [x, y];
    }
  }
}

/*
==========
2026_05_19
==========
*/
//#1
//New £5 notes collectors!
//https://www.codewars.com/kata/58029cc9af749f80e3001e34
function getNewNotes(salary,bills){
  const totalBills = bills.reduce((acc, currVal) => acc + currVal, 0);
  return (salary - totalBills > 0) ? Math.floor((salary - totalBills)/5) : 0;
}

//#2
//Unflatten a list (Easy)
//https://www.codewars.com/kata/57e2dd0bec7d247e5600013a
function unflatten (flatArray) {
  const flatCopy = flatArray.slice();
  const outputArr = [];
  
  while (flatCopy.length > 0) {
    if (flatCopy[0] < 3) {
      outputArr.push(flatCopy[0]) && flatCopy.splice(0, 1); 
    } else {
      outputArr.push(flatCopy.slice(0, flatCopy[0])) && flatCopy.splice(0, flatCopy[0]);
    };
  };
  return outputArr;
}

//#3
//Survive the attack
//https://www.codewars.com/kata/634d0f7c562caa0016debac5
function hasSurvived(attackers, defenders){

  const aCopy = [];
  const dCopy = [];
  
  for (let i = 0; i < Math.max(attackers.length, defenders.length); i++) {
    if (attackers[i] > defenders[i] || defenders[i] === undefined) {
      aCopy.push(attackers[i]);
    } else if (attackers[i] < defenders[i] || attackers[i] === undefined) {
      dCopy.push(defenders[i]);
    }
  }
  return (dCopy.length > aCopy.length) ? true 
    : (dCopy.length === aCopy.length) ? attackers.reduce((acc, currVal) => acc + currVal) <= defenders.reduce((acc, currVal) => acc + currVal)
    : false;
}

/*
==========
2026_05_20
==========
*/
//#1
//Sorted Union
//https://www.codewars.com/kata/5729c30961cecadc4f001878
function uniteUnique() {
  return [...new Set([...arguments].flat())];
};

//#2
//Working with arrays II (and why your code fails in some katas)
//https://www.codewars.com/kata/5a7b3d08fd5777bf6a000121
function removeNthElement(arr, n) {
  var arrCopy = arr.slice();
  arrCopy.splice(n, 1);
  return arrCopy;
}

//#3
//Sectional Array Sort
//https://www.codewars.com/kata/58ef87dc4db9b24c6c000092
function sectSort(arr, start=0, items=0) {
  const arrStart = arr.slice(0, start);
  const subset = (items) && arr.slice(start, start+items).sort((a, b) => a - b);
  
  if (!start && !items) {
    return arr.slice().sort((a, b) => a - b);
  };
  
  return [].concat(arrStart, ((!items) ? arr.slice(start).sort((a, b) => a - b) 
                              : (start+items < arr.length) ? [subset, arr.slice(start+items)] 
                              : [arrStart, subset])).flat();
}

/*
==========
2026_05_21
==========
*/
//#1
//Reducing Problems - Bug Fixing #8
//https://www.codewars.com/kata/55d2603d506a40e162000056
function calculateTotal(team1, team2) {
  let t1s = team1.reduce((t, c) => t + c, 0);
  let t2s = team2.reduce((t, c, i) => t + c, 0);
  return t1s > t2s;
}

//#2
//Difference between biggest 2 numbers
//https://www.codewars.com/kata/55e3f27d5dee52d8dd0000a9
function diffBig2(arr) {
  const arrCopy = arr.slice();
  const first = Math.max(...arrCopy);
  arrCopy.splice(arrCopy.indexOf(first), 1);
  const second = Math.max(...arrCopy);
  return first - second;
}

//#3
//Make a square box!
//https://www.codewars.com/kata/58644e8ddf95f81a38001d8d
function box(n) {
  return [...Array(n)].map((ele, ind) => (ind === 0 || ind === n-1) ? '-'.repeat(n) 
                           : (n > 2) ? '-' + ' '.repeat(n-2) + '-' 
                           : '--')
}

/*
==========
2026_05_22
==========
*/
//#1
//Array.prototype.reverse()
//https://www.codewars.com/kata/53b2ff49b82af296ce001139
Array.prototype.reverse = function() {
  const copyArr = this.slice();
  for (let i = copyArr.length-1; i >= 0; i--) {
    this[(copyArr.length-1) - i] = copyArr[i];
  };
  return this;
};

/*
==========
2026_05_23
==========
*/
//#1
//Array Manipulation
//https://www.codewars.com/kata/58d5e6c114286c8594000027
function arrayManip(array){
  const outputArr = [];      
  for (let i = 0; i < array.length; i++) {
    let lowest;
    for (let j = i+1; j < array.length; j++) {
      if (array[i] < array[j]) {
        if (lowest === undefined) {
          lowest = array[j];
        } else if (array[j] < lowest) {
          lowest = array[j];
        }
      }
    }
    if (lowest !== undefined) {
      outputArr.push(lowest);
    } else {
      outputArr.push(-1);
    }
  }
  return outputArr;
}

/*
==========
2026_05_24
==========
*/
//#1
//Player Contact Manager
//https://www.codewars.com/kata/5b203de891c7469b520000b4
function playerManager(players) {
  if (players) {
    const playersArr = players.split(', ')
    const outputArr = [];
    for (let i = 0; i < playersArr.length; i+=2) {
      outputArr.push({player: playersArr[i], contact: Number(playersArr[i+1])})
    }
    return outputArr;
  } else {
    return [];
  }
};

//#2
//Noonerize Me
//https://www.codewars.com/kata/56dbed3a13c2f61ae3000bcd
function noonerize(numbers) {
  let workingArr = [];
  let interim;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number') {
      return 'invalid array';
    } else {
      workingArr.push(numbers[i].toString());
    }
  }
  workingArr = workingArr.map(str => str.split(''));
  interim = workingArr[0][0];
  workingArr[0][0] = workingArr[1][0];
  workingArr[1][0] = interim;
  return workingArr.map(sub => Number(sub.join(''))).reduce((acc, currVal) => Math.abs(acc - currVal));
}

//#3
//Sort by binary ones
//https://www.codewars.com/kata/59eb28fb0a2bffafbb0000d6
function sortByBinaryOnes(list){
  return list.slice().map(num => num.toString(2)).sort((a, b) => {
    let a1 = a.split('0').join('').length;
    let b1 = b.split('0').join('').length;
    return (a1 > b1) ? -1 
      : (b1 > a1) ? 1 
      : (a.length < b.length) ? -1
      : (b.length < a.length) ? 1
      : (Number.parseInt(a, 2) < Number.parseInt(b, 2)) ? -1
      : (Number.parseInt(b, 2) < Number.parseInt(a, 2)) ? 1 : 0
  }).map(bit => Number.parseInt(bit, 2));
}

/*
==========
2026_05_25
==========
*/
//#1
//Sub-array elements sum
//https://www.codewars.com/kata/5b5e0ef007a26632c400002a
function elementsSum(arr,d=0){
  const outputArr = [];
  for (let i = arr.length-1, j = 0; i >= 0; i--, j++) {
    (arr[i][j] === undefined) ? outputArr.push(d) : outputArr.push(arr[i][j])
  }
  return outputArr.reduce((acc, currVal) => acc + currVal);
}

//#2
//Genetic Algorithm Series - #1 Generate
//https://www.codewars.com/kata/genetic-algorithm-series-number-1-generate
const generate = length => {  
  let string = '';
  for (let i = 0; i < length && length !== 0; i++) {
    string += String(Math.floor(Math.random() * (2)))
  }
  return string;  
}

/*
==========
2026_05_26
==========
*/
//#1
//Latin Squares
//https://www.codewars.com/kata/645fb55ecf8c290031b779ef
function makeLatinSquare(n) {
  const outputArr = [];
  
  for (let i = 0; i < n; i++) {
		const subArr = [];
    for (let j = 0; j < n; j++) {
      subArr[(i+j) % n] = j+1;
    }
		outputArr.push(subArr);
  }
	return outputArr;
}

/*
==========
2026_05_27
==========
*/
//#1
//Spin Around, Touch the Ground
//https://www.codewars.com/kata/65127141a5de2b1dcb40927e
function spinAround(turns) {
  return (Math.floor(Math.abs(turns.map(dir => dir === 'right' ? 90 : -90)
                              .reduce((acc, currVal) => acc + currVal, 0))/360));
}

//#2
//All or Nothing
//https://www.codewars.com/kata/65112af7056ad6004b5672f8
function possiblyPerfect(key,answers) {
  return key.every((ans, pos) => (ans === '_') || ans === answers[pos]) 
  || key.every((ans, pos) => (ans === '_') || ans !== answers[pos]);
}

//#3
//[JS] Parse integers in array
//https://www.codewars.com/kata/535d118ccdbf501816001101
var parseNumbers = function(intStrs) {
  return intStrs.map(ele => Number.parseInt(ele));
}

//#4
//Duck Shoot - Easy Version
//https://www.codewars.com/kata/57d27a0a26427672b900046f
function duckShoot(ammo, aim, ducks){
  let ducksCopy = ducks.slice();
  for (let i = 0; i < Math.floor(ammo * aim); i++) {
    ducksCopy = ducksCopy.replace('2', 'X');
  }
  return ducksCopy;
}

/*
==========
2026_05_28
==========
*/
//#1
//Job Matching #2
//https://www.codewars.com/kata/56c2578be8b139bd5c001bd8
function match(job, candidates) {
  let candidatesFiltered = candidates.slice();
  if (!job.equityMax) {
    candidatesFiltered = candidatesFiltered.filter(candidate => !candidate.desiresEquity)
  };
  candidatesFiltered = candidatesFiltered.filter(candidate => job.locations.some(location => candidate.currentLocation === location || candidate.desiredLocations.includes(location)));
  return candidatesFiltered;
}

/*
==========
2026_05_29
==========
*/
//#1
//JavaScript seems to be broken
//https://www.codewars.com/kata/565d6d1696e154b51b000076
function semicolonSeparationToCommaSeparation(input) {
  Array.prototype.join = function(separator) {
    let str = '';
    for (let elem of this) {
      str += elem + separator;
    }
    return str.slice(0, str.length-1);
  }
  return input.split(";").join(",");  
}

//#2
//Magic Index
//https://www.codewars.com/kata/57d5fed61a6282bf6f002a5f
const findMagic = arr => arr.find((num, pos) => num === pos) || -1;

//#3
//What rank is this card?
//https://www.codewars.com/kata/59cbcb4523dacc2ccd000030
function rank(card) {
  const cardMap = { t:10, j:11, q:12, k:13, a:14 };
  const cardVal = card.slice(0, 1).toLowerCase();
  return ((!cardMap[cardVal] && Number.isNaN(Number(cardVal))) || cardVal < 2) ? 0 
    : (cardMap[cardVal] || Number(cardVal));
}

//#4
//Max span
//https://www.codewars.com/kata/5a3f26dbb6486aa9c3000081
const maxSpan = (array) => {
  let span = 0;
  for (let i = 0; i < array.length; i++) {
    let tempArr = array.slice(array.indexOf(array[i]), array.lastIndexOf(array[i])+1).length;
    if (tempArr > span) {
      span = tempArr;
    }
  }
  return span;
}

/*
==========
2026_05_30
==========
*/
//#1
//noobCode 04: HOT SINGLES...compare two arrays, return the unpaired items !
//https://www.codewars.com/kata/57475353facb0e7431000651
function hotSingles(arr1, arr2) {
    const arr1Filtered = arr1.filter(ele => !arr2.includes(ele)); 
    const arr2Filtered = arr2.filter(ele => !arr1.includes(ele));
    return [...new Set(arr1Filtered.concat(arr2Filtered))];
}

/*
==========
2026_05_31
==========
*/
//#1
//Tree Photography
//https://www.codewars.com/kata/64fd5072fa88ae669bf15342
function treePhotography(trees) {
  
  let compNum = trees[0];
  let left = 1;
  let right = 1;
  
  for (let i = 1; i < trees.length; i++) {
     (compNum < trees[i]) && (left++, compNum = trees[i]);
  }
  
  compNum = trees[trees.length-1];
  
  for (let i = trees.length-2; i >= 0; i--) {
    (compNum < trees[i]) && (right++, compNum = trees[i]);
  }
  
  return (left > right) ? 'left' : 'right'
}


/*
==========
2026_06_01
==========
*/
//#1
//Stalin Sort
//https://www.codewars.com/kata/699af631058f5c12b04f4efe
function stalinSort(array) {
  let i = 0;
  while (array[i+1] !== undefined) {
    (array[i] <= array[i+1]) ? i++ : array.splice(i+1,1);
  }
}

//#2
//Deletion in an array
//https://www.codewars.com/kata/5505552bd181b990d9000caf
function deleteValues(array, pred) {
  for(var i = 0; i < array.length; i++) {
    if ( pred(array[i]) ) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
}

/*
==========
2026_06_02
==========
*/
//#1
//Swap two elements
//https://www.codewars.com/kata/5a3f4eace1ce0eeda600003d
function swapTwo(array, a, b) {
  const arrayCopy = array.slice();
  return (arrayCopy[array.indexOf(a)] = b, arrayCopy[array.lastIndexOf(b)] = a, arrayCopy);
}

//#2
//Pernicious Numbers
//https://www.codewars.com/kata/56e195d02bb22479e50016af
function pernicious(n){
  if (n < 3) {
    return 'No pernicious numbers';
  };
  let nCopy = Math.floor(n);
  const outputArr = [];
  for (let i = 1; i <= nCopy; i++) {
    let biValSum = i.toString(2).split('').reduce((acc, currVal) => Number(acc) + Number(currVal), 0);  
    for (let j = 1; j < biValSum; j++) {
      if (biValSum % j === 0 && j !== 1) {
       break;
      };
      if (j === biValSum-1) {
        outputArr.push(i);
      };
    };
  };
  return outputArr;
};

//#3
//Prison Break
//https://www.codewars.com/kata/6507e3170b7009117e0c7865
function freedPrisoners(prison){
  if (!prison[0]) {
    return 0;
  }
  const outputArr = [prison[0]];
  for (let i = 1; i < prison.length; i++) {
    prison[i] !== outputArr[outputArr.length-1] && outputArr.push(prison[i]);
  }
  return outputArr.length;
}

/*
==========
2026_06_03
==========
*/
//#1
//Party People
//https://www.codewars.com/kata/65013fc50038a68939098dcf
function partyPeople(party) {
  let partyCopy = party.slice();
  while(partyCopy.find(num => num > partyCopy.length)) {
    partyCopy = partyCopy.filter(num => num < partyCopy.length);
  };
  return partyCopy.length;
}

/*
==========
2026_06_05
==========
*/
//#1
//Lost Lineup
//https://www.codewars.com/kata/6914c975e159c8f7e120cc84function findLineup(distances) {
function findLineup(distances) {
  let sorted = distances.slice().sort((a, b) => a - b);
  for (let i = 0; i < distances.length; i++) {
    if (sorted[i] !== i) {
      return [];
    }
  } 
  sorted = sorted.map(num => distances.indexOf(num)+1);
  return sorted;
}

/*
==========
2026_06_06
==========
*/
//#1
//Highest and Lowest
//https://www.codewars.com/kata/554b4ac871d6813a03000035
function highAndLow(numbers) {  
  const strArr = numbers.split(' ');
  return `${Math.max(...strArr)} ${Math.min(...strArr)}`;
}

//#2
//Get the Middle Character
//https://www.codewars.com/kata/56747fd5cb988479af000028
function getMiddle(s) {
  let length = s.length;
  const middle = Math.floor(length/2);
  return s.slice(middle-((length % 2 > 0) ? 0 : 1), middle+1);
}

//#3
//Mumbling
//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
const accum = s => s.split('')
   .map((char, ind) => char.toUpperCase() + char.toLowerCase().repeat(ind))
   .join('-');

//#4
//Isograms
//https://www.codewars.com/kata/54ba84be607a92aa900000f1
function isIsogram(str){
  const setStr = [...new Set(str.toLowerCase())];
  return (setStr.length === str.length);
}

//#5
//Jaden Casing Strings
//https://www.codewars.com/kata/5390bac347d09b7da40006f6
Object.defineProperty(
  String.prototype,
  'toJadenCase',
  { value :
   function toJadenCase() {
     return this.split(' ')
       .map(word => word[0].toUpperCase() + word.slice(1))
       .join(' ');
   }
  }
);

//#6
//Complementary DNA
//https://www.codewars.com/kata/554e4a2f232cdd87d9000038
function dnaStrand(dna){
  return dna.split('')
    .map(sym => (sym === 'A') ? 'T' 
         : (sym === 'T') ? 'A' 
         : (sym === 'C') ? 'G' : 'C').join('');
}

/*
==========
2026_06_07
==========
*/
//#1
//Reverse words
//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
function reverseWords(str) {
  return str.split(' ')
    .map(word => word
         .split('')
         .reverse()
         .join(''))
    .join(' ');
}

//#2
//Anagram Detection
//https://www.codewars.com/kata/529eef7a9194e0cbc1000255
var isAnagram = function(test, original) {
  const testSorted = test.toLowerCase().split('').sort();
  const originalSorted = original.toLowerCase().split('').sort();  
  return testSorted.every((char, ind) => char === originalSorted[ind] 
                          && testSorted.length === originalSorted.length);
};

//#3
//Remove anchor from URL
//https://www.codewars.com/kata/51f2b4448cadf20ed0000386
const removeUrlAnchor = url => url.split('#')[0];

//#4
//Alternate capitalization
//https://www.codewars.com/kata/59cfc000aeb2844d16000075
function capitalize(s){
  let s1 = '', s2 = '';
  for (let i = 0; i < s.length; i++) {
    (i % 2 < 1) ? (s1 += s[i].toUpperCase(), s2 += s[i].toLowerCase()) 
      : (s1 += s[i].toLowerCase(), s2 += s[i].toUpperCase());
  }
  return [s1, s2];
};

//#5
//The Coupon Code
//https://www.codewars.com/kata/539de388a540db7fec000642
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  const currDate = new Date(currentDate);
  const lastDate = new Date(expirationDate);
  lastDate.setDate(lastDate.getDate()+1);
  return (enteredCode === correctCode && currDate <= lastDate)
}

/*
==========
2026_06_08
==========
*/
//#1
//Alphabet war
//https://www.codewars.com/kata/59377c53e66267c8f6000027
function alphabetWar(fight) {

  const leftMap = ['s','b','p','w'];
  const rightMap = ['z','d','q','m'];
  let leftTotal = 0;
  let rightTotal = 0;
  
  for (let i = 0; i < fight.length; i++) {
    let char = fight[i];
    leftMap.includes(char) && (leftTotal += leftMap.indexOf(char) +1);
    rightMap.includes(char) && (rightTotal += rightMap.indexOf(char) +1);
  }

  return (leftTotal === rightTotal) ? "Let's fight again!" :
    ((leftTotal > rightTotal) ? 'Left' : 'Right') + ' side wins!';
}

//#2
//Number of Decimal Digits
//https://www.codewars.com/kata/58fa273ca6d84c158e000052
const digits = n => n.toString().length

//#3
//Bumps in the Road
//https://www.codewars.com/kata/57ed30dde7728215300005fa
function bump(x){
  let bumps = 0;
  
  for (let i = 0; i < x.length; i++) {
    (x[i] === 'n') && bumps++;
  };
  
  return (bumps <= 15) ? 'Woohoo!' : 'Car Dead';
}

//#4
//Greet Me
//https://www.codewars.com/kata/535474308bb336c9980006f2
var greet = function(name) {
  let nameCopy = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return `Hello ${nameCopy}!`;
};

//#5
//Sort the Gift Code
//https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3
function sortGiftCode(code){
  return code
    .slice()
    .split('')
    .sort()
    .join('');
}

//#6
//Switcheroo
//https://www.codewars.com/kata/57f759bb664021a30300007d
function switcheroo(x){
  let output = '';
  
  for (let i = 0; i < x.length; i++) {
    output += ((x[i] === 'a') ? 'b'
      : (x[i] === 'b') ? 'a' : 'c')
    }
  
  return output;
}

//#7
//Filter the number
//https://www.codewars.com/kata/55b051fac50a3292a9000025
function filterString(value) {
 return Number(value.split('')
               .filter(char => !Number.isNaN(Number(char)))
               .join(''));
}

/*
==========
2026_06_09
==========
*/
//#1
//Moves in squared strings (I)
//https://www.codewars.com/kata/56dbe0e313c2f63be4000b25
function transformString(s) {
  return s.split('\n').map(chars => chars.split(''));
}

function vertMirror(strng) {
  return strng.map(subArr => subArr.reverse().join('')).join('\n');
}

function horMirror(strng) {
  const s = strng.map(subArr => subArr.join(''));
  for (let i = 0, j = s.length-1; i < s.length/2; i++, j--) {
    let interim = s[i];
    s[i] = s[j], s[j] = interim;
  }
  return s.join('\n');
}

function oper(fct, s) {
  return fct(transformString(s));
}

//#2
//Alphabet symmetry
//http://codewars.com/kata/59d9ff9f7905dfeed50000b0
function solve(arr){  
  return arr.map(elem => {
    let count = 0;
    for (let i = 0; i < elem.length; i++) {
      (elem[i].toLowerCase() === String.fromCharCode(i+97)) && count++;
      }
    return count;
  })
}

//#3
//Odd-Even String Sort
//https://www.codewars.com/kata/580755730b5a77650500010c
function sortMyString(S) {
    let evens = '';
    let odds = '';
  
    for (let i = 0; i < S.length; i++) {
      (i % 2 < 1) ? evens += S[i] : odds += S[i]
    }
  
    return `${evens} ${odds}`;
};

/*
==========
2026_06_16
==========
*/
//#1
//Caffeine Script
//https://www.codewars.com/kata/5434283682b0fdb0420000e6
function caffeineBuzz(n) {
    let outputStr = '';
    outputStr += ((n % 3 === 0 && n % 4 === 0) ? 'Coffee' 
                  : (n % 3 === 0) ? 'Java' : '');
    (outputStr && n % 2 === 0) && (outputStr += 'Script');
    return (outputStr) ? outputStr : 'mocha_missing!';
}

//#2
//All Inclusive?
//https://www.codewars.com/kata/5700c9acc1555755be00027e
function containAllRots(strng, arr) {
  if (!strng) {
    return true;
  }
  for (let i = 0; i < strng.length; i++) {
    let compareStr = '';
    for (let j = 0; j < strng.length; j++) {
      compareStr += strng[(i+j) % strng.length]
    }
    if (!arr.includes(compareStr)) {
      return false;
    }
  }
  return true;
}

//#3
//Substituting Variables Into Strings: Padded Numbers
//https://www.codewars.com/kata/51c89385ee245d7ddf000001
function solution(value){
  return `Value is ${String(value).padStart(5, '0')}`;
}

//#4
//Longest vowel chain
//https://www.codewars.com/kata/59c5f4e9d751df43cf000035
function solve(s){
  let prevChain = 0;
  let currChain = 0;
  const vowelMap = ['a','e','i','o','u'];
  for (let i = 0; i < s.length; i++) {
    if (vowelMap.includes(s[i])) {
      currChain++;
    } else {
      if (currChain > prevChain) {
        prevChain = currChain;
      }
      currChain = 0;
    }
  }
  return (prevChain > currChain) ? prevChain : currChain;
}

/*
==========
2026_06_17
==========
*/
//#1
//Changing letters
//https://www.codewars.com/kata/5831c204a31721e2ae000294
function swap (string) {
  let outputStr = '';
  for (let char of string) {
    outputStr += ('aeiou'.includes(char) ? char.toUpperCase() : char)
  }
  return outputStr;
}

//#2
//Cat and Mouse - Easy Version
//https://www.codewars.com/kata/57ee24e17b45eff6d6000164
const catMouse = x => (x.indexOf('m') - x.indexOf('C') > 4) ? "Escaped!" : "Caught!";

//#3
//String Merge!
//https://www.codewars.com/kata/597bb84522bc93b71e00007e
function stringMerge(string1, string2, letter) {
  return string1.slice(0, string1.indexOf(letter)+1) 
    + string2.slice(string2.indexOf(letter)+1)
}

/*
==========
2026_06_18
==========
*/
//#1
//Unique string characters
//https://www.codewars.com/kata/5a262cfb8f27f217f700000b
function solve(a,b){
  let outputStr = '';
  const aB = a+b
  for (let i = 0; i < aB.length; i++) {
    (a.includes(aB[i]) ^ b.includes(aB[i])) && (outputStr += aB[i])
  }
  return outputStr;
};

//#2
//Inspiring Strings
//https://www.codewars.com/kata/5939ab6eed348a945f0007b2
function longestWord(stringOfWords) {
  return stringOfWords.split(' ')
    .sort((a,b) => a.length - b.length)
    .slice(-1)[0]
}

//#3
//shorter concat [reverse longer]
//https://www.codewars.com/kata/54557d61126a00423b000a45
function shorterReverseLonger(a,b){
  let shortest, longest;
  (b.length > a.length) ? (longest = b, shortest = a) : (longest = a, shortest = b);
  return shortest + (longest.split('').reverse().join('')) + shortest
}

//#4
//Basic Math (Add or Subtract)
//https://www.codewars.com/kata/5809b62808ad92e31b000031
function calculate(str) {
  let outputStr = str.replaceAll('plus',' + ')
    .replaceAll('minus',' - ')
    .split(' ')
    .map(ele => !Number.isNaN(Number(ele)) ? Number(ele) : ele);
  
  let lOp = outputStr[0];
  
  for (let i = 1; i < outputStr.length-1; i = i+2) {
    lOp = ((outputStr[i] === '+') ? lOp + outputStr[i+1] : lOp - outputStr[i+1]);
  }
  
  return lOp.toString();
}

//#5
//makeBackronym
//https://www.codewars.com/kata/55805ab490c73741b7000064
var makeBackronym = function(string){
  let outputStr = '';
  for (let i = 0; i < string.length; i++) {
    outputStr += dict[string[i].toUpperCase()] + ' '
  }
  return outputStr.trim();
};

/*
==========
2026_06_19
==========
*/
//#1
//Vowel one
//https://www.codewars.com/kata/580751a40b5a777a200000a1
function vowelOne(s){
  const vowelMap = ['a','e','i','o','u'];
  const sCopy = s.toLowerCase();
  let outputStr = '';
  for (let i = 0; i < sCopy.length; i++) {
    outputStr += (vowelMap.includes(sCopy[i]) ? '1' : '0')
  }
  return outputStr;
}

//#2
//Initialize my name
//https://www.codewars.com/kata/5768a693a3205e1cc100071f
function initializeNames(name){
  const nameArr = name.split(' ');
  let outputArr = [nameArr[0]];
  const middle = (nameArr.length >= 3) && true;
  let initialsArr = [];
  
  for (let i = 1; i < nameArr.length-1; i++) {
    initialsArr.push(nameArr[i][0] + '.');
  };
  
  outputArr.push(...initialsArr), (nameArr.length > 1) && outputArr.push(nameArr[nameArr.length-1]);
  
  return outputArr.join(' ');
}

//#3
//Dot Calculator
//https://www.codewars.com/kata/6071ef9cbe6ec400228d9531
function dotCalculator(equation) {
  const opMap = ['+','-','*','//'];
  let eArr = equation.split(' ');
  eArr = eArr.map(ele => (!opMap.includes(ele)) ? ele.length : ele);
  
  switch(eArr[1]) {
      case '+': eArr = eArr[0] + eArr[2];
        break;
      case '-': eArr = eArr[0] - eArr[2];
        break;
      case '*': eArr = eArr[0] * eArr[2];
        break;
      case '//': eArr = eArr[0] / eArr[2];
        break;
  }
  
  return '.'.repeat(eArr);
}

//#4
//Help Bob count letters and digits.
//https://www.codewars.com/kata/5738f5ea9545204cec000155
function countLettersAndDigits(input) {
  return (
    input.toLowerCase()
      .split('')
      .filter(char => ((char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) 
                      || char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57))
      .length
  )
}

/*
==========
2026_06_20
==========
*/
//#1
//Building Strings From a Hash
//https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2
function solution(pairs){
  let outputStr = '';
  for (let prop in pairs) {
    outputStr += `${prop} = ${pairs[prop]},`
  }
  return outputStr.slice(0,outputStr.length-1);
}

//#2
//Interview Question (easy)
//https://www.codewars.com/kata/5b358a1e228d316283001892
function getStrings(city){
  const charMap = {};
  const cityCopy = city.toLowerCase();
  
  for (let char of cityCopy) {
    if (char === ' ') {
      continue;
    }
    (!charMap[char+':']) ? charMap[char+':'] = '*' : charMap[char+':'] += '*';
  }
  return Object.entries(charMap).map(subArr => subArr.join('')).join() 
}

//#3
//Search for letters
//https://www.codewars.com/kata/52dbae61ca039685460001ae
function change(string){
  let outputArr = '0'.repeat(26).split('');
  string
    .toLowerCase()
    .split('')
    .forEach(char => (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) 
             && (outputArr[char.charCodeAt(0) - 97] = '1'))
  return outputArr.join('');
}

/*
==========
2026_06_21
==========
*/
//#1
//Scaling Squared Strings
//https://www.codewars.com/kata/56ed20a2c4e5d69155000301
function scale(strng, k, n) {
  if (!strng) {
    return '';
  }
  
  return strng
    .split('\n')
    .map(elem => elem
         .split('')
         .map(char => char
              .repeat(k))
         .join(''))
    .map(ele => ele + (('\n'+ele).repeat(n-1))).join('\n');
}

//#2
//Find Screen Size
//https://www.codewars.com/kata/5bbd279c8f8bbd5ee500000f
function findScreenHeight(width, ratio) {  
  const ratioArr = ratio.split(':').map(num => Number(num));
  
  ratioArr[1] = (width/ratioArr[0]) * ratioArr[1];
  ratioArr[0] = width;

  return ratioArr.join('x');
}

//#3
//Return substring instance count
//https://www.codewars.com/kata/5168b125faced29f66000005
const solution = (fullText, search) => fullText.split(search).length -1


//#4
//Count consonants
//https://www.codewars.com/kata/564e7fc20f0b53eb02000106
const consonantCount = str => str.toLowerCase()
                                  .split('')
                                  .reduce((acc, currVal) => (currVal.charCodeAt(0) > 122 || currVal.charCodeAt(0) < 97) ? acc 
                                            : ('aeiou'.includes(currVal) ? acc : acc + 1), 0);

/*
==========
2026_06_22
==========
*/
//#1
//Frequency sequence
//https://www.codewars.com/kata/585a033e3a36cdc50a00011c
const freqSeq = (str, sep) => str.split('')
  .map((char, _, arr) => arr.reduce((acc, currVal) => (currVal === char) ? ++acc : acc, 0))
  .join(sep);

//#2
//Broken sequence
//https://www.codewars.com/kata/5512e5662b34d88e44000060
function findMissingNumber(sequence){
  const seqArr = sequence.split(' ').map(ele => Number(ele)).sort((a, b) => a - b);
  if (sequence.length === 0) {
    return 0;
  }
 if (seqArr.includes(NaN) || seqArr[0] !== 1) {
   return 1;
 }
  for (let i = 0; i < seqArr.length; i++) {
    if (seqArr[i+1] !== undefined) {
      if (seqArr[i+1] !== seqArr[i]+1) {
        return seqArr[i] + 1;
      }
    }
  }
  return 0
}
                    
/*
==========
2026_06_23
==========
*/
//#1
//Find the index of the second occurrence of a letter in a string
//https://www.codewars.com/kata/63f96036b15a210058300ca9
const secondSymbol = (s, symbol) => s.split('').reduce((acc, cV, cI) => (acc !== -1 
                                              || cV !== symbol 
                                              || cI == s.indexOf(symbol)) ? acc : acc = cI,-1)

//#2
//sPoNgEbOb MeMe
//https://www.codewars.com/kata/5982619d2671576e90000017
const spongeMeme = sentence => sentence
  .toLowerCase()
  .split('')
  .map((char, ind) => (ind % 2 < 1) ? char.toUpperCase() : char)
  .join('');
  
//#3
//Borrower Speak
//https://www.codewars.com/kata/57d2ba8095497e484e00002e
const borrow = s => s
  .toLowerCase()
  .split('')
  .map(char => (char.charCodeAt(0) < 97 
                || char.charCodeAt(0) > 122) ? '' : char)
  .join('')

//#4
//Number to digit tiers
//https://www.codewars.com/kata/586bca7fa44cfc833e00005c
const createArrayOfTiers = num => num
  .toString()
  .split('')
  .map((ele, ind, arr) => num.toString().slice(0, ind+1))

//#5
//Hungarian Vowel Harmony (easy)
//https://www.codewars.com/kata/57fd696e26b06857eb0011e7
function dative(word) {
  const front = ['e', 'é', 'i', 'í', 'ö', 'ő', 'ü', 'ű'];
  const back = ['a', 'á', 'o', 'ó', 'u', 'ú'];
  
  return word + word.split('').reduceRight((acc, cV) => (front.includes(cV)) ? acc 
                                           : (back.includes(cV)) ? (acc = 'nak', acc) : acc,'nek')
}

/*
==========
2026_06_24
==========
*/
//#1
//The old switcheroo 2
//https://www.codewars.com/kata/55d6a0e4ededb894be000005
const encode = str => str
  .toLowerCase()
  .split('')
  .map(char => (char.charCodeAt(0) >= 97 
    && char.charCodeAt(0) <= 122) ? (char.charCodeAt(0) - 96) : char)
  .join('')

//#2
//Scrabble Score
//https://www.codewars.com/kata/558fa34727c2d274c10000ae
const scrabbleScore = str => str
  .toUpperCase()
  .split('')
  .reduce((acc, currVal) => acc + ((!$dict[currVal]) ? 0 : $dict[currVal]),0)

//#3
//Move all vowels
//https://www.codewars.com/kata/56bf3287b5106eb10f000899
const moveVowel = input => input
    .toLowerCase()
    .split('')
    .sort((a,b) => (!'aeiou'.includes(a) && 'aeiou'.includes(b)) ? -1
                                                : ('aeiou'.includes(a) && 'aeiou'.includes(b) ? 1 : 0)).join('')

//#4
//Ch4113ng3
//https://www.codewars.com/kata/59e9f404fc3c49ab24000112
const nerdify = txt => txt.split('').map(char => (char === 'a' || char === 'A') ? '4'
                               : (char === 'e' || char === 'E') ? '3'
                               : (char === 'l') ? '1' : char).join('')


//#5
//Lottery machine
//https://www.codewars.com/kata/5832db03d5bafb7d96000107
const lottery = str => str
  .split('')
  .filter((char, ind, arr) => (!Number.isNaN(Number(char))) 
          && (!arr.slice(0,ind).includes(char)))
  .join('') || 'One more run!';                    

//#6
//SillyCASE
//https://www.codewars.com/kata/552ab0a4db0236ff1a00017a
const sillycase = silly => silly
  .split('')
  .map((ele, ind) => (ind < Math.ceil(silly.length/2)) ? ele.toLowerCase() : ele.toUpperCase())
  .join('')

/*
==========
2026_06_25
==========
*/
//#1
//FIXME: Replace all dots
//https://www.codewars.com/kata/596c6eb85b0f515834000049
var replaceDots = function(str) {
  const regExp = /\./g
  return str.replace(regExp, '-');
}

/*
==========
2026_06_28
==========
*/
//#1
//SevenAte9
//https://www.codewars.com/kata/559f44187fa851efad000087
function sevenAte9(str) {
  return str.split('').map((num, ind, arr) => (num !== '9' 
                                                          || arr[ind-1] !== '7' 
                                                          || arr[ind+1] !== '7') ? num : '').join('');
};

//#2
//Compare Strings by Sum of Chars
//https://www.codewars.com/kata/576bb3c4b1abc497ec000065
function compare(s1, s2) {
  let val1 = (typeof s1 !== 'string') ? 0
    : (s1 === '') ? 0 : s1.toUpperCase().split('')
  
  let val2 = (typeof s2 !== 'string') ? 0
    : (s1 === '') ? 0 : s2.toUpperCase().split('')
  
  if (val1 !== 0) {
    val1 = (val1.every(char => (char.charCodeAt(0) >= 65) && (char.charCodeAt(0) <= 90)) 
            && val1.reduce((acc, cV) => acc + cV.charCodeAt(0), 0)) || 0;
  }
  
  if (val2 !== 0) {
    val2 = (val2.every(char => (char.charCodeAt(0) >= 65) && (char.charCodeAt(0) <= 90)) 
            && val2.reduce((acc, cV) => acc + cV.charCodeAt(0), 0)) || 0;
  }
  
  return val1 === val2;
};

/*
==========
2026_06_29
==========
*/
//#1
//Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark
//https://www.codewars.com/kata/57fafb6d2b5314c839000195
function remove (string) {
  const outputStr = (
    string
    .split(' ')
    .map(sentence => (sentence
                      .split('')
                      .reduce((count, char) => (char === '!') ? count+1 : count,0) === 1) ? '' : sentence)
    .filter(ele => (ele)));
  return (!outputStr.join('')) ? outputStr.join('') : outputStr.join(' ');
}

//#2
//Reversing Fun
//https://www.codewars.com/kata/566efcfbf521a3cfd2000056
function flipNumber(s) {
  let sRev = s.slice().split('').reverse().join('');
  
  for (let i = 1; i < sRev.length; i++) {
    sRev = sRev.slice(0, i) + sRev.slice(i).split('').reverse().join('');
  }
  
  return sRev;
}

//#3
//Eliminate the intruders! Bit manipulation
//https://www.codewars.com/kata/5a0d38c9697598b67a000041
function eliminateUnsetBits(number) {
  return Number.parseInt(number.split('')
                         .filter(ele => ele !== '0')
                         .join(''), 2) || 0;
}

//#4
//Sort the Vowels!
//https://www.codewars.com/kata/59e49b2afc3c494d5d00002a
function sortVowels(s) {
  return (typeof s !== 'string' || !s) ? '' : s.split('')
    .map(char => ('aeiou'.includes(char.toLowerCase()) ? `|${char}` : `${char}|`))
    .join('\n');
}

//#5
//String Reordering
//https://www.codewars.com/kata/5b047875de4c7f9af800011b
function sentence(arrayOfObjects) {
  return arrayOfObjects
    .map(obj => Object.keys(obj))
    .flat()
    .sort((a,b) => Number(a) - Number(b))
    .map(key => arrayOfObjects.filter(obj => obj[key])[0][key])
    .join(' ');
}

/*
==========
2026_06_30
==========
*/
//#1
//The First Non Repeated Character In A String
//https://www.codewars.com/kata/570f6436b29c708a32000826
function firstNonRepeated(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return s[i];
    }
  }
  return null;
}

//#2
//Ce*s*r*d Strings
//https://www.codewars.com/kata/5ff6060ed14f4100106d8e6f
function uncensor(infected, discovered) {
  let outputStr = '';
  for (let i = 0, j = 0; i < infected.length; i++) {
    (infected[i] === '*') ? (outputStr += discovered[j], j++) : outputStr += infected[i];
  }
  return outputStr;
}

//#3
//How Many Unique Consonants?
//https://www.codewars.com/kata/5a19226646d843de9000007d
function countConsonants(str) {
  const strCopy = str
    .toLowerCase()
    .split('')
    .filter(char => !'aeiou'.includes(char) && (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122))
  
  const strSet = new Set(strCopy)

  return strCopy.length - (strCopy.length - strSet.size)
}

//#4
//Suzuki needs help lining up his students!
//https://www.codewars.com/kata/5701800886306a876a001031
const lineupStudents = students => students
  .split(' ')
  .sort((a, b) => ((a.length - b.length) < 0) ? 1
      : ((a.length - b.length) > 0) ? -1
      : ((a < b) ? 1 : (a > b) ? -1 : 0))

/*
==========
2026_07_01
==========
*/
//#1
//Ordering the words!
//https://www.codewars.com/kata/55d7e5aa7b619a86ed000070
const orderWord = s => (!s) ? 'Invalid String!' : s.split('').sort().join('');

/*
==========
2026_07_06
==========
*/
//#1
//Array.diff
//https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
const arrayDiff = (a, b) => a.filter(num => !b.includes(num))

//#2
//Sushi-go-round (Beginner's)
//https://www.codewars.com/kata/59619e4609868dd923000041
function totalBill(str) {
  let strArr = str.split(' ').join('').length;
  (strArr >= 5) && (strArr = Math.ceil(strArr - (strArr/5)))
  return strArr * 2;
}

/*
==========
2026_07_07
==========
*/
//#1
//Spot the Differences
//https://www.codewars.com/kata/5881460c780e0dd207000084
function spot(s1,s2){
  const outputArr = [];
  for (let i = 0; i < s1.length; i++) {
    (s1[i] !== s2[i]) && outputArr.push(i);
  };
  return outputArr;
}

/*
==========
2026_07_08
==========
*/
//#1
//Resistor Color Codes
//https://www.codewars.com/kata/57cf3dad05c186ba22000348
function decodeResistorColors(bands) {
  const ohmMap = ['black','brown','red','orange','yellow','green','blue','violet','gray','white'];
  const toleranceMap = {gold: 5, silver: 10}
  const [ band1, band2, band3 ] = bands.split(' ').map(band => ohmMap.indexOf(band));
  const band4 = bands.split(' ').slice(-1)[0];
  let ohms = Number(band1.toString() + band2.toString()) * 10**band3;
  
  const ohmStr = (ohms >= 1000000) 
    ? (Number.isInteger(ohms/1000000) 
       ? (ohms/1000000).toString()
       : (ohms/1000000).toFixed(1)) + 'M'
    : (ohms >= 1000) ? (Number.isInteger(ohms/1000) 
                        ? (ohms/1000).toString() 
                        : (ohms/1000).toFixed(1)) + 'k'
    : ohms.toString();
  
  return `${ohmStr} ohms, ${(!toleranceMap[band4]) ? '20' : toleranceMap[band4]}%`
}