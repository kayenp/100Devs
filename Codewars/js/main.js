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
2025_09_XX
==========
*/
//Minimize Sum Of Array (Array Series #1)
//https://www.codewars.com/kata/5a523566b3bfa84c2e00010b
//Given an array of integers, find the minimum sum which is obtained from summing each two integers product.
//Example: minSum({5,4,2,3}) ==> return (22) 
/*
PLAN
    I. CONSTRAINTS  
        A. Number of array elements are always even
        B. Element values are always positive
        C. Must return the LOWEST SUM of the PRODUCTS of the element values

    II. OPERATIONS
        A. Multiple each array item by each other
        B. Find the lowest sum value from the possible product combinations
        C. Return lowest sum
        
    III. GOAL(S)


    IV. DIVIDE
        A. PHASES
            1. Variables


            2. Operators


            3. Methods/Properties
                i. 

            4. Conditionals/Loops
                i. Loops through array elements

        B. STEPS


        
    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. PROBLEMS WITH MOST CONSTRAINTS

    VI. REDUCE PROBLEM

    Possible solutions:

    Thoughts:
    - Each element has to be multiplied by every other item, but no duplicate pairings
        - Results have to be kept for tracking
    - Sum n values where n = arr.length/2
        - if no duplicates, this would just be the number of results anyway?
    - How to check and eliminate combinations?
        - when running loop, index would be reference to the array value
            - index value could be used to keep track of combinations
			- store all values (including operands) in subarrays for tracking?
*/
function minSum(arr) {
	let productArr = [];
	for(let i = 0; i < arr.length; i++){
		for(let j = i+1; j < arr.length; j++){
			productArr.push([[arr[i], arr[j]],[arr[i] * arr[j]]]);
		}
	}
	console.log(productArr);
	/* for(let k = 0; k < productArr[0][0]; k++){ 		//number of sum operands take into account arr.length/2
		for(let l = 0; l < productArr.length; i++){		//arr
			if(productArr)
		}	
	} */
} 

console.log(minSum([5,4,2,3]))
console.log(minSum([12,6,10,26,3,24]))

let test = [5, 4];	//let i = 0; i < productArr.length; i += array.length-1
let match = [5, 1];	//let j = arr.length + 1; j < productArr.length; j++
					

console.log();
/*
arr[0][0][0]
arr[1][0][0]
arr[2][0][0]
arr[3][0][0]
arr[4][0][0]
arr[5][0][0]
arr[1][0][1]
arr[2][0][1]
arr[3][0][1]
arr[4][0][1]
arr[5][0][1]
inputArr.length/2 = iterations that first array comparison starts at; each subsequent comparison starts at 1 less than previous
*/