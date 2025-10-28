"use strict";

/*
Objects
*/

/*
Adding character experience
*/
//Improve our example RPG program to add an experience property named xp to the character. Its initial value is 0. Experience must appear in character description.
const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    experience: 0,

    describe() {
        return `${this.name}'s ${Object.keys(this)[1]} is ${this.health}, their ${Object.keys(this)[2]} is ${this.strength} and their ${Object.keys(this)[3]} is ${this.experience}`;
    },
};

aurora.describe();

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());

/*
Modeling a dog
*/
//Complete the following program to add the dog object definition.
const dog = {
    name: "Sparky",
    species: "Jack Russell",
    size: "3 feet",

    bark() {
        return `"GRRR!!! I, ${this.name} am a very tough ${this.species} and feel much bigger than ${this.size}! I will get that CAT!"`
    },
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

/*
Modeling a circle
*/
//Complete the following program to add the circle object definition. Its radius value is input by the user.

const r = Number(prompt("Enter the circle radius:"));

const circle = {
    circumference() {
        return (2 * Math.PI * r);
    },
    area() {
        return (Math.PI * r**2);
    },    
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

/*
Modeling a bank account
*/
//Write a program that creates an account object with the following characteristics:
/*
A name property set to "Alex".
A balance property set to 0.
A credit method adding the (positive or negative) value passed as an argument to the account balance.
A describe method returning the account description.
Use this object to show its description, crediting 250, debiting 80, then show its description again.
*/

const acctObj = {
    name: "Alex",
    balance: 0,
    transaction() {
        return this.balance = this.balance + Number(prompt("Enter an integer")); 
    },
    currBalance() {
        return `Hello, ${this.name}! Your account balance is ${this.balance}.`;
    },
};

console.log(acctObj.transaction(), acctObj.transaction(), acctObj.name, acctObj.balance);
