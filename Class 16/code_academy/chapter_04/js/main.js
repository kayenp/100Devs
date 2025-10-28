"use strict";

/*
Functions
*/
//Let’s create a function that prints a reminder to the console. Using a function declaration, create a function called getReminder().
//In the function body of getReminder(), log the following reminder to the console: 'Water the plants.'
function getReminder() {
    console.log("Water the plants");
}

//Let’s create another function that prints a useful Spanish travel phrase to the console.
//Using a function declaration, create a function called greetInSpanish().
//Add code to the function body of greetInSpanish():
//In the function body, console.log() the following Spanish phrase to the console: 'Buenas tardes.'
function greetInSpanish() {
    console.log("Buenas tardes.");
}

//Imagine that we manage an online store. When a customer places an order, we want to send them a thank-you note. Let’s create a function to complete this task:
//Define a function called sayThanks() as a function declaration.
//In the function body of sayThanks(), add code such that the function writes the following thank-you message to the console when called: 'Thank you for your purchase! We appreciate your business.'
function sayThanks() {
    console.log("Thank you for your purchase! We appreciate your business.");
}

//Call sayThanks() to view the thank-you message in the console.
sayThanks();

//Functions can be called as many times as needed.
//Imagine that three customers placed orders and we want to send each of them a thank-you message. Update the code to call sayThanks() three times.
sayThanks();
sayThanks();

//The sayThanks() function works well, but let’s add the customer’s name in the message.
//Add a parameter called name to the function declaration for sayThanks().
//With name as a parameter, it can be used as a variable in the function body of sayThanks().
//Using name and string concatenation, change the thank-you message into the following:
function sayThanksAgain(name) {
  console.log('Thank you for your purchase, '+ name + '! We appreciate your business.');
}

//A customer named Cole just purchased something from the online store. Call sayThanks() and pass 'Cole' as an argument to send Cole a personalized thank-you message.
sayThanksAgain("Cole");

//The function makeShoppingList() creates a shopping list based on the items passed to it as arguments.
//Imagine we always purchase milk, bread, and eggs every time we shop for groceries. To make creating a grocery list easier, let’s assign default values to the parameters in makeShoppingList().
//Change the parameters of makeShoppingList() into default parameters :
//Assign 'milk' as the default value of item1.
//Assign 'bread' as the default value of item2.
//Assign 'eggs' as the default value of item3.
function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs"){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

//Imagine if we needed to order monitors for everyone in an office and this office is conveniently arranged in a grid shape. We could use a function to help us calculate the number of monitors needed!
//Declare a function monitorCount() that has two parameters. The first parameter is rows and the second parameter is columns.
//Let’s compute the number of monitors by multiplying rows and columns and then returning the value.
//In the function body of the function you just wrote, use the return keyword to return rows * columns.
//Now that the function is defined, we can compute the number of monitors needed. Let’s say that the office has 5 rows and 4 columns.
//Declare a variable named numOfMonitors using the const keyword and assign numOfMonitors the value of invoking monitorCount() with the arguments 5 and 4.
function monitorCount(rows, columns) {
    return rows * columns;
};

const numOfMonitors = monitorCount(5,4);

//To check that the function worked properly, log numOfMonitors to the console.
console.log(numOfMonitors);

//In the previous exercise, we created a function to find the number of monitors to order for an office. Now let’s write another function that uses the monitorCount function to figure out the price.
//Below monitorCount, create a function declaration named costOfMonitors with two parameters: rows and columns. 
//Add a return statement that returns the value of calling monitorCount(rows, columns) multiplied by 200.

function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
}

//Declare a variable named totalCost using the const keyword. Assign to totalCost the value of calling costOfMonitors() with the arguments 5 and 4 respectively.
const totalCost = costOfMonitors(5,4);

//To check that the function worked properly, log totalCost to the console.
console.log(totalCost);

//Let’s say we have a plant that we need to water once a week on Wednesdays. We could define a function expression to help us check the day of the week and if the plant needs to be watered:
//Create a variable named plantNeedsWater using the const variable keyword.
//Assign an anonymous function that takes in a parameter of day to plantNeedsWater.
//Now we need to add some code to the function body of plantNeedsWater():
//In the function body add an if conditional that checks day === 'Wednesday'.
//If the conditional is truthy, inside the if code block, use the return keyword to return true.
//On days that aren’t 'Wednesday', plantNeedsWater() should return false:
//Add an else statement after the if statement.
//Inside the else statement use the return keyword to return false.
//Call the plantNeedsWater() and pass in 'Tuesday' as an argument.
//Log plantNeedsWater('Tuesday') to the console. If it worked correctly, false should be logged to the console.
const plantNeedsWater = function (day){
    if (day === "Wednesday"){
        return true;
    } else {
        return false;
    };
}

console.log(plantNeedsWater("Tuesday"));

//Change plantNeedsWater() to use arrow function syntax.
const plantNeedsWaterAgain = day => {
    if (day === "Wednesday"){
        return true;
    } else {
        return false;
    };
}

//Let’s refactor plantNeedsWater() to be a concise body. Notice that we’ve already converted the if/else statement to a ternary operator to make the code fit on one line.
const plantNeedsWaterThird = day => day === 'Wednesday' ? true : false;