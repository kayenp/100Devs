	"use strict";

/*
Two functions – one object
*/
//Is it possible to create functions A and B so that new A() == new B()?
/*
function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
*/
/*
PLAN
    I. CONSTRAINTS  
		A. create functions a & b
		B. fn a & b must both reference the same object
		C. Meaning both create the same object ^^^
    II. OPERATIONS

    III. GOAL(S)

    IV. DIVIDE
        A. PHASES
            1. Variables

            2. Methods/Properties
                

            3. Conditionals/Loops

        B. STEPS
        
    V. DO WHAT YOU KNOW
        A. OBVIOUS SOLUTIONS
        
        B. MOST CONSTRAINED

    VI. REDUCE

    Possible solutions:

    Thoughts: 
		- functions a & b are both constructor functions
		- they could reference a 3rd function as a parent object/function?
		- is constraint that only function a & b be used?
		- if both reference the same object, object can't be defined in only 1 function unless parent object/function?
			^^^ does recursive reference work for omitting parent?
*/
let obj = {};
function A(){
	return obj;
}
function B(){
	return obj;
}

/*
Create new Calculator
*/
//Create a constructor function Calculator that creates objects with 3 methods:
/*
read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
*/
function Calculator(){
	this.read = function(){
		this.a = Number(prompt("Input first value"));
		this.b = Number(prompt("Input second value"));
	};
	this.sum = function(){
		return this.a + this.b;
	}
	this.mul = function(){
		return this.a * this.b;
	};
};

/*
Create new Accumulator
*/
//Create a constructor function Accumulator(startingValue).
//Object that it creates should:
/*
Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
The read() method should use prompt to read a new number and add it to value.
*/
//In other words, the value property is the sum of all user-entered values with the initial value startingValue.
function Accumulator(startingValue = 0){
	this.value = startingValue;
	this.read = function(){
		this.currValue = Number(prompt("Input value"));
		this.value += this.currValue;
	};
};
let accum = new Accumulator(20);
