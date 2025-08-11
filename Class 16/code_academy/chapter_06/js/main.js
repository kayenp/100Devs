"use strict";

/*
Arrays
*/

//Declare a variable using const named hobbies and set it equal to an array with three strings inside of it.
//Use console.log() to print hobbies to the console.
const hobbies = ["coding", "learning", "sleeping"];
console.log(hobbies);

//Create a variable named listItem and set it equal to the first item in the famousSayings array using square bracket notation ([]).
//Then use console.log() to print the listItem variable to the console.
//Now, console.log() the third element in the famousSayings array using bracket notation to access the element.
//Do not save the element to a new variable before you log it.
//Try to log the item at index [3] of famousSayings to the console. What is logged to the console?
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);

//Change the second element of the array groceryList to 'avocados'.
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = "avocados";

//After the two existing arrays, re-assign the element in index 0 of condiments to 'Mayo'.
//Log the updated array, condiments, to the console.
//Following your code from the previous step, reassign condiments to be a new array that contains a single string ['Mayo']
//Log the result to the console.
//Notice that you can reassign elements in an array and reassign an entirely new array to a variable declared using the let keyword.
//Following your code from the previous step, reassign the last item from the utensils array to 'Spoon'.
//Log the updated array to the console.
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = "Mayo";
console.log(condiments);
condiments = [condiments[0]];
console.log(condiments);
utensils[utensils.length -1] = "Spoon";
console.log(utensils);

//Find the length of the objectives array and log it to the console.
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

//Add two elements to the chores array using .push().
//Use console.log to print your chores array to make sure your items were added.
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push("clean bathroom");
chores.push("make bed");
console.log(chores);

//Use the .pop() method to remove the last element from chores.
//In a line after you called chores.pop(), log chores to the console to make sure it worked.
const chores2 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chores2);

//Use the .shift() method to remove the first item from the array groceryList.
//Log the updated groceryList to the console.
//Following your code from the previous step, use the .unshift() method to add 'popcorn' to the beginning of the grocery list.
//After calling .unshift() on groceryList, log groceryList to the console.
//You may wish to delete the console.log() statement from the previous step.
//You’re in a hurry, so you ask a friend to help with your grocery shopping. You want him to pick up the 'bananas', 'coffee beans', and 'brown rice'.
//Following your code from the previous step, use .slice() to provide your friend with a list of these three things.
//Log this part of the list to the console. Unlike the two previous checkpoints, you should do both of these steps in one line.
//After calling .slice() on groceryList, log the grocery list to the console one more time.
//Notice that the groceryList array still contains the same items it had in Step 2. That means .slice() is non-mutating! You can confirm this in the link in the previous step.
//Let’s find the index of a particular element in groceryList using .indexOf().
//Call .indexOf() on groceryList to find the index of the element 'pasta' and save the returned value to a const variable named pastaIndex.
//Then, log pastaIndex to the console. To declutter the terminal, you may remove previous console.log() statements.
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);
groceryList.unshift("popcorn");
console.log(groceryList);
console.log(groceryList.slice(1,4));
console.log(groceryList);
const pastaIndex = groceryList.indexOf("pasta");
console.log(pastaIndex);

//In main.js, there is an array concept. There is also a function changeArr that will assign the element in index 3 of an array to 'MUTATED'. The function changeArr was called with an argument of concept.
//Underneath the function call, log concept to the console to check if this reassignment mutated the array.
//Let’s double-check what happens if we mutate an array using a built-in method inside a function.
//Under the console.log() statement, define another function named removeElement that takes a parameter of newArr. Inside the function body, call .pop() on newArr.
//Call removeElement() with an argument of concept.
//After calling removeElement(concept), check the value of concept by logging it to console.
//Notice that in both cases, the change to the array was maintained outside of the function!
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement(newArr) {
    newArr.pop();
}

removeElement(concept);
console.log(concept);

//Let’s make a nested array! Create a variable numberClusters. Assign as its value an array with three elements, each another array.
//The first array element should hold the elements 1 and 2 in that order.
//The second array element should hold the elements 3 and 4 in that order.
//The third array element should hold the elements 5 and 6 in that order.
//Awesome, you made a nested array! Now, declare a variable named target using the const keyword and use chained bracket notation to access the element 6 from within numberClusters.
const numberClusters = [[1,2],[3,4],[5,6]];
const target = numberClusters[2][1];