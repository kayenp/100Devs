/*
Improved hello
*/

//Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.
function outputName() {
    function user(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }

    let myName = new user(prompt("What is your first name?"), prompt("What is your last name?"));

    console.log(`Your name is ${myName.fName} ${myName.lName}`);
}

/*
Final values
*/

//Observe the following program and try to predict the final values of its variables.
/*
let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = a * b / a;
const g = b / a * a;
console.log(a, b, c, d, e, f, g);
*/
//Check your prediction by executing it.

let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = a * b / a;
const g = b / a * a;
console.log(a, b, c, d, e, f, g);

/*
VAT calculation
*/

//Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.
function calcAfterVAT() {
    let price = prompt("Input your price before VAT");
    console.log(`Your price post VAT is ${price = price * 1.206}`);
}

/*
From Celsius to Fahrenheit degrees
*/

//Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.
function fToC() {
    let temp = prompt("Input a temperature in Celsius to see Farenheit");
    console.log(`The temperature you input in Celsius was ${temp} and the temperature in Farenheit is ${temp * 9/5 + 32}`);
}

/*
Variable swapping
*/

//Observe the following program.
/*
let number1 = 5;
let number2 = 3;
// TODO: type your code here (and nowhere else!)
console.log(number1); // Should show 3
console.log(number2); // Should show 5
*/
//Add the necessary code to swap the values of variables number1 and number2.

function swapVariables() {
    let number1 = 5;
    let number2 = 3;
    
    let arr = [number1, number2];
    number1 = arr[1];
    number2 = arr[0];

    console.log(number1); // Should show 3
    console.log(number2); // Should show 5
}