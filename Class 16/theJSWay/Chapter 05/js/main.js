/*
Improved hello
*/
//Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.
/*
// Say hello to the user
function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}
// TODO: ask user for first and last name
// TODO: call sayHello() and show its result
*/
function sayHello(fName,lName) {
    fName = prompt("What is your first name?");
    lName = prompt("What is your last name?");
    const message = `Hello, ${fName} ${lName}!`;
    return message;
};

/*
Number squaring
*/
//Complete the following program so that the square1() and square2() functions work properly.
/*
// Square the given number x
function square1(x) {
  // TODO: complete the function code
}
*/
function square1(x) {
    console.log(x**x);
};    

// Square the given number x
//const square2 = x => // TODO: complete the function code
const square2 = x => console.log(x**x);

/*
console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25
*/
//When it's done, update the program so that it shows the square of every number between 0 and 10.
const square3 = () => {
    for (let i = 0; i < 10; i++) {
        console.log(i**i);
    };
}

/*
Minimum of two numbers
*/
//Let's pretend the JavaScript Math.min() function doesn’t exist. Complete the following program so that the min() function returns the minimum of its two received numbers.
function min(num1, num2) {
    const numArr = [];
    for (let i = 0; i < min.length; i++) {
        numArr.push(arguments[i]);
    };
    let sortedArr = numArr.toSorted(((a,b) => a-b), numArr);
    console.log(sortedArr[0]);
}

/*
Calculator
*/
//Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.
/*
// TODO: complete program
console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity
*/
function calculator(num1, operator, num2) {
    switch(operator) {
        case "+": 
            console.log(`${num1} + ${num2} is ${num1 + num2}`);
            break;
        case "-": 
            console.log(`${num1} - ${num2} is ${num1 - num2}`);
            break;
        case "*": 
            console.log(`${num1} * ${num2} is ${num1 * num2}`);
            break;
        case "/": 
            console.log(`${num1} / ${num2} is ${num1 / num2}`);
            break;
        default: console.log("Please check your syntax");
    };
}

/*
Circumference and area of a circle
*/
//Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.
/*
Here are some tips for solving this exercise:
Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away :)
The value of number π (Pi) is obtained with Math.PI in JavaScript.
You might want to use the exponentiation operator ** to perform computations.
console.log(2 ** 3); // 8: 2 * 2 * 2
console.log(3 ** 2); // 9: 3 * 3
*/
function circle(radius) {
    const circumference = radius => (2 * Math.PI * radius);
    const area = radius => (Math.PI * radius**radius);
    const circResult = circumference(radius);
    const areaResult = area(radius);
    console.log(`The circumference and area of a circle with a radius of ${radius} are ${circResult} and ${areaResult}`);
}

circle(3);