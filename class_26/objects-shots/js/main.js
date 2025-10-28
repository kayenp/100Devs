//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
let cocktail;
let input = document.querySelector("input");
let button = document.querySelector("button");

button.addEventListener("click", retrieveValue);
button.addEventListener("click", checkDb);

function retrieveValue(){
	cocktail = input.value;
}

function checkDb(){
	fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
	.then(res => res.json())
	.then(data => {
		if (data.drinks === null){
			document.querySelector("h2").innerText = "No drink found!";
		};
		let result = data.drinks[0];
		let img = document.querySelector("img");
		document.querySelector("h2").innerText = result.strDrink;
		document.querySelector("h3").innerText = result.strInstructions;
		img.src = result.strDrinkThumb;
		img.alt = result.strGlass;
		input.name = result.strDrink;
	})
	.catch(err => {
		console.log(`Error ${err}`);
	})
}

function randomizer(arr){
	return Math.round(Math.random() * (arr.length - 0) + 0);
}

