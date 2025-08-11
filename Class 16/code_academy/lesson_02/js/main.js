"use strict";
/*
Variables
*/
//Declare a variable named favoriteFood using the var keyword and assign to it the string 'pizza'.
var favoriteFood = "pizza";

//Declare a variable named numOfSlices using the var keyword and assign to it the number 8.
var numOfSlices = 8;

//Under the numOfSlices variable, use console.log() to print the value saved to favoriteFood.
//On the following line, use console.log() to print the value saved to numOfSlices.
console.log(favoriteFood);
console.log(numOfSlices);

//Create a let variable called changeMe and set it equal to the boolean true.
let changeMe = true;

//On the line after changeMe is declared, set the value of changeMe to be the boolean false.
//To check if changeMe was reassigned, log the value saved to changeMe to the console.
changeMe = false;
console.log(changeMe);

//Create a constant variable named entree and set it to equal to the string 'Enchiladas'.
const entree = "Enchiladas";

//Just to check that you’ve saved the value of 'Enchiladas' to entree, log the value of entree to the console.
console.log(entree);

//Paste the following code to the bottom of the program.
/*
entree = 'Tacos';
*/
//A: entree = 'Tacos';

//Now, let’s test what happens when we try to declare a const variable without a value. Paste in the following code into the program:
//A: const testing;

//Use the += mathematical assignment operator to increase the value stored in levelUp by 5.
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

levelUp += 5;

//Use the -= mathematical assignment operator to decrease the value stored in powerLevel by 100.
powerLevel -= 100;

//Use the *= mathematical assignment operator to multiply the value stored in multiplyMe by 11.
multiplyMe *= 11;

//Use the /= mathematical assignment operator to divide the value stored in quarterMe by 4.
quarterMe /= 4;

//Using the increment operator, increase the value of gainedDollar.
let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;

//Using the decrement operator, decrease the value of lostDollar.
lostDollar--;

//Create a variable named favoriteAnimal and set it equal to your favorite animal.
let favoriteAnimal = "cat";

//Use console.log() to print 'My favorite animal: ANIMAL' to the console. Use string concatenation so that ANIMAL is replaced with the value in the favoriteAnimal variable.
console.log("My favorite animal: " + favoriteAnimal);

//Create a variable called myName and assign it your name.
let myName = "ken";

//Create a variable called myCity and assign it your favorite city’s name.
let myCity = "alhambra";

//Use a single template literal to interpolate your variables into the sentence below. Use console.log() to print your sentence to the console in the following format:
//My name is NAME. My favorite city is CITY.
console.log(`My name is ${myName}. My favorite city is ${myCity}.`)

//Use console.log() to print the typeof newVariable.
let newVariable = 'Playing around with typeof.';

console.log(typeof newVariable);

//Great, now let’s check what happens if we reassign the variable.
//Below the console.log() statement, reassign newVariable to 1.
newVariable = 1;

//Since you assigned this new value to newVariable, it has a new type! On the line below the reassignment, use console.log() to print typeof newVariable again.
console.log(typeof newVariable);

