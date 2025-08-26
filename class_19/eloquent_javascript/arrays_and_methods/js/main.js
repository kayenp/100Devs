"use strict";

/*
Sum of a Range
*/
//Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.
const range = (start,end) => {
    let newArr = [];
    for (let i = (start - 1); i < end; i++) {
        newArr.push(i+1);
    };
    return newArr;
}


//Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
const sum = (arr) => arr.reduce((acc,currVal) => acc + currVal);


//As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements should go up by increments of one, corresponding to the old behavior. 
// The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure this also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
/*
GOAL - adds all numbers to array from start to end. adds array values in increments set by step value. needs to add values in either direction. needs to take into account step value for incrementing.
*/
const rangeBetter = (start,end,step = 0) => {
    let newArr = [];
    let difference = Math.abs(start - end);
    step = Math.abs(step);
    for (let i = 0; i <= difference; (step === 0) ? i++ : i = (i + step)) {
        (start < end) ? newArr.push(start + i) : newArr.push(start - i);
    };
    return newArr;
}

/*
Reversing an array
*/
//Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
// The first, reverseArray, should take an array as its argument and produce a new array that has the same elements in the inverse order. 
//==================================================
let arrVal = [1,2,3,4,5];

const reverseArray = arr => {
    let newArr = [];
    for (let i = (arr.length - 1); i >= 0; i--) {
        newArr.push(arr[i]);
    };
    return newArr;
}

// The second, reverseArrayInPlace, should do what the reverse method does: modify the array given as its argument by reversing its elements. 
const reverseArrayInPlace = arr => {
    let val = arr.length;
    console.log(val);
    for (let i = 0; i < (val - 1) ; i++){
        arr.splice(0,0,arr[i+1]);
        arr.splice([i+2], 1);
    }
    return (arr);
}

// Neither may use the standard reverse method.
//Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?
//A: reverseArray should run faster and be more flexible/useful than reverseArrayInPlace

/*
A list
*/
//Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.

let arr = [1,2,3];
class Node {
    constructor(value, rest = null) {
        this.value = value;
        this.rest = rest;
    };
};

const arrayToList = arr => {
    let newObj;
    for (let i = arr.length - 1; i >= 0; i--) {
        (newObj === undefined) ? newObj = new Node(arr[i]) : newObj = new Node(arr[i], newObj);
    };
    return newObj;
}

// Also write a listToArray function that produces an array from a list.
let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        },
    },
};

const listToArray = list => {
    let newArr = Object.values(list);
    while (true) {
        let lastElem = newArr.length - 1;
        if (newArr[lastElem] !== null) {
            newArr = newArr.concat(Object.values(newArr[lastElem]));
        } else {
            break;
        }
    }
    return newArr = newArr.filter(elem => (Number.isInteger(elem) === true));
}


// nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element
const arrayToList2 = arr => {
    let newObj;
    for (let i = arr.length - 1; i >= 0; i--) {
        (newObj === undefined) ? newObj = new Node(arr[i]) : newObj = new Node(arr[i], newObj);
    };
    return newObj;
}

// Add the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list
let list2 = {
    value: 4,
    rest: {
        value: 5,
        rest: {
            value: 6,
            rest: null
        },
    },
};

const prepend = (objElem, list) => {
    objElem.rest = list;
    return objElem;
};

let resultObj = prepend(list,list2);
let {rest} = resultObj;
console.log(rest);

//nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.
//If you haven’t already, also write a recursive version of nth.
const nth = (list,num) => {
    

    for (let i = 0; i < num; i++) {
        
    }

}




//Goal - 
//==================================

//==============================
/*
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
*/

/*
Deep comparison
*/