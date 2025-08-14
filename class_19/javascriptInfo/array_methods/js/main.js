"use strict";

/*
Translate border-left-width to borderLeftWidth
*/
//Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
//That is: removes all dashes, each word after dash becomes uppercased.
/*
Examples:
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Hint: use split to split the string into an array, transform it and join back.
*/
const camelize = (str) => {
    const strArr = str.split("-");
    for (let i = 1; i < strArr.length; i++){
        let charArr = strArr[i].split("");
        charArr.splice(0,1,`${charArr[0].toUpperCase()}`);
        let newArr = charArr.join("");
        strArr.splice([i], 1, newArr);
    };
    let newStr = strArr.join("");
    return newStr;
}

/*
Filter range
*/
//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
//The function should not modify the array. It should return the new array.
/*
For instance:
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (matching values)
alert( arr ); // 5,3,8,1 (not modified)
*/
let arr = [5, 3, 8, 1];
const filterRange = (arr,a,b) => {
    let newArr = arr.filter((elem) => ((elem >= a) && (elem <= b)));
};
let filtered = filterRange(arr, 1, 4);

/*
Filter range "in place"
*/
//Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
//The function should only modify the array. It should not return anything.
/*
For instance:
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
alert( arr ); // [3, 1]
*/
let arr2 = [5, 3, 8, 1];
const filterRangeInPlace = (arr2,a,b) => {
    for (let elem of arr2) {
        console.log(elem);
        if (!(a <= elem) || !(elem <= b)) {
            arr2.splice(arr2.indexOf(elem), 1);
        };
    };
}
let fRIP = filterRangeInPlace(arr2, 1, 4);

/*
Sort in decreasing order
*/
/*
let arr = [5, 2, 1, -10, 8];
// ... your code to sort it in decreasing order
alert( arr ); // 8, 5, 2, 1, -10
*/
let arr3 = [5, 2, 1, -10, 8];
let descendSort = arr => arr.sort((a,b) => b - a)

/*
Copy and sort array
*/
//We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
/*
Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
*/
let arr4 = ["HTML", "JavaScript", "CSS"];
const copySorted = arr => arr.toSorted();
let sorted = copySorted(arr4);

/*
Create an extendable calculator
*/
//Create a constructor function Calculator that creates “extendable” calculator objects.
/*
The task consists of two parts.
First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.
Usage example:
let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10
*/
function Calculator() {
    this.calculate = (str) => {
        let arr = str.split(" ");
        return (arr[1] === "+") ? Number(arr[0]) + Number(arr[2]) : Number(arr[0]) - Number(arr[2]);
    }
    this.addMethod = (name, func) => { //Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

    } 
}
let calc = new Calculator();

//Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.
function Supercalc() {
    this.methods = {
        "+": (a,b) => a + b,
    }

    this.addMethod = (operation, func) => {
        this.methods[operation] = func;
    }

    this.calculate = (str) => {
        const strArr = str.split(" ");
        const result = this.methods[strArr[1]](Number(strArr[0]), Number(strArr[2]));
        return result;
    }
}
let powerCalc = new Supercalc();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");

/*
Map to names
*/
//You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [ john, pete, mary ];
let names = users.map((elem) => elem["name"]);

/*
Map to objects
*/
//You have an array of user objects, each one has name, surname and id.
//Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
let john2 = { name: "John", surname: "Smith", id: 1 };
let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary2 = { name: "Mary", surname: "Key", id: 3 };
let users2 = [ john2, pete2, mary2 ];
let usersMapped = users2.map((elem) => ({   
        fullName: `${elem["name"]} ${elem["surname"]}`,
        id: elem["id"],
    })
)
//alert( usersMapped[0].id ) // 1
//alert( usersMapped[0].fullName ) // John Smith

/*
Sort users by age
*/
//Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
let john3 = { name: "John", age: 25 };
let pete3 = { name: "Pete", age: 30 };
let mary3 = { name: "Mary", age: 28 };
let arr5 = [ pete3, john3, mary3 ];
const sortByAge = users => users.sort((a,b) => a["age"] - b["age"]);

// now: [john, mary, pete]
//alert(arr5[0].name); // John
//alert(arr5[1].name); // Mary
//alert(arr5[2].name); // Pete

/*
Shuffle an array
*/
//Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
//Multiple runs of shuffle may lead to different orders of elements. For instance:
let arr6 = [1, 2, 3];
//shuffle(arr6);
// arr = [3, 2, 1]
//shuffle(arr6);
// arr = [2, 1, 3]
//shuffle(arr6);
// arr = [3, 1, 2]
// ...
const shuffleBetter = arr => arr.sort((a,b) => {
    let random = () => Math.random() * (Math.ceil(1) - Math.floor(-1)) + Math.floor(-1);
    a = random();
    b = random();
    return a - b;
});

/*
Get average age
*/
//Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
//The formula for the average is (age1 + age2 + ... + ageN) / N.
let john4 = { name: "John", age: 25 };
let pete4 = { name: "Pete", age: 30 };
let mary4 = { name: "Mary", age: 29 };
let arr7 = [ john4, pete4, mary4 ];
//alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
const getAverageAge = arr => {
    let ageArr = arr.map((elem) => elem["age"]);
    let total = ageArr.reduce((a,b) => a + b);
    return (total / arr7.length);
}

/*
Filter unique array members
*/
//Let arr be an array.
//Create a function unique(arr) that should return an array with unique items of arr.
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
const unique = arr => { 
    let emptyArr = [];
    arr.forEach((elem) => {
        if (!emptyArr.includes(elem)) {emptyArr.push(elem)};
        }
    );
    return emptyArr;
}


//alert( unique(strings) ); // Hare, Krishna, :-O

/*
Create keyed object from array
*/
//Let’s say we received an array of users in the form {id:..., name:..., age:... }.
//Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
let users3 = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

/*
// after the call we should have:
usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
const groupById = arr => {
    let newObj = {};
    arr.forEach((elem) => {
        newObj[`${elem["id"]}`] = {
            id: elem["id"],
            name: elem["name"],
            age: elem["age"],
        }
    })
    let newArr = [newObj];
    return newArr;
}
let usersById = groupById(users3);




const groupByIdReduced = arr => {
    let newObj = {};
    arr.reduce((acc, currVal) => {
        acc[currVal["id"]] = currVal;
        return acc;
    }, newObj)
    let newArr = [newObj];
    return newArr;   
}

let usersById2 = groupByIdReduced(users3);
console.log(groupByIdReduced(users3));