"use strict";

/*
PLAN	
	Constraints
		1. Must rotate through individual cocktails
		2. Must show outputs in appropriate parts of DOM
	Operations
		1. Retrieve api data
		2. Data is output to separate cocktailObj
		3. cocktailObj's entries are rotated through
	Divide
		Phases
			1. Output data to a new object
			2. 
		Steps

	Do what you know

	Reduce into smaller problems

	Thoughts
		- For carousel effect, needs to include a timer function (.setInterval() or .setTimeout() ?)
		- setTimeout() calls a function every X ms
			- so function it calls should rotate through all items
				- would NOT use a for loop because each setTimeout fn call would run the whole for loop every single time
			- function increments a counter and the counter is checked in the function to make sure
		- Cocktails constructor fn to create myCocktails
			- myCocktails needs to have method that outputs to DOM?
		- Take data and either append or create a new object that contiains the data + displayCocktail method
			- Option #1: Append method with Object.assign()
				-Object.assign() easier
				-More efficient
			- Option #2: Create new object with data values and method
				-Create new object more fun
					-Object.create() uses an object as prototype -- passes all values from that object 
*/

let inputElem = document.querySelector("input");
let buttonElem = document.querySelector("button");
let h2Elem = document.querySelector("h2");
let imgElem = document.querySelector("img");
let h3Elem = document.querySelector("h3");

let cocktails = new function(){
	this.counter = 0;
	this.displayDrinks = function(){
		if (this.counter === 0){
			h2Elem.innerText = this.drinks[this.counter].strDrink;
			imgElem.src = this.drinks[this.counter].strDrinkThumb;
			h3Elem.innerText = this.drinks[this.counter].strInstructions;
			this.counter++;
		}

		let interID = window.setInterval(function(){
			h2Elem.innerText = this.drinks[this.counter+1].strDrink;
			imgElem.src = this.drinks[this.counter+1].strDrinkThumb;
			h3Elem.innerText = this.drinks[this.counter+1].strInstructions;
			this.counter++;
			
			if (this.counter >= Object.keys(this.drinks).length-1){
			clearInterval(interID);
		}
		}.bind(this), 3000);
	}
}

async function getCocktail(){
	let cocktail = inputElem.value;
	const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`);
	const data = await res.json(); 
	if (Error.isError(data)) {
		console.log(`Error: ${data}`)
	}
	let myCocktails = Object.assign(data, cocktails);
	myCocktails.displayDrinks();
};

buttonElem.addEventListener("click", getCocktail);
