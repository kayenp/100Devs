"use strict";

/*
Using "this" in object literal
*/
//Here the function makeUser returns an object.
//What is the result of accessing its ref? Why?
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}
let user = makeUser();
//alert( user.ref.name ); // What's the result?
//A: Result is "John". Reason is because the value of ref is "this", which refers to the "user" object that "this" resolves to at run-time.
//^^^ Wrong answer. 
//Revised A: "this" is referring to the whole function, not the object literal values within it

/*
Create a calculator
*/
//Create an object calculator with three methods:
//read() prompts for two values and saves them as object properties with names a and b respectively.
//sum() returns the sum of saved values.
//mul() multiplies saved values and returns the result.
let calculator = {
  read(){
    this.a = Number(prompt("Enter A"));
    this.b = Number(prompt("Enter B"));
  },
  sum(){
    return this.a + this.b;
  },
  mul(){
    return this.a * this.b;
  },
};
//calculator.read();
//alert(calculator.sum());
//alert(calculator.mul());

/*
Chaining
*/
//There’s a ladder object that allows you to go up and down:
/*
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};
*/
//Now, if we need to make several calls in sequence, we can do it like this:
//ladder.up();
//ladder.up();
//ladder.down();
//ladder.showStep(); // 1
//ladder.down();
//ladder.showStep(); // 0
//Modify the code of up, down, and showStep to make the calls chainable, like this:
//ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
let ladder = {
  step: 0,
  up: function() {
    this.step++;
	return this;
  },
  down: function() {
    this.step--;
	return this;
  },
  showStep: function() { // shows the current step
    alert( this.step );
	return this;
  }
};