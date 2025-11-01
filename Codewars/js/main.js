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
//
//