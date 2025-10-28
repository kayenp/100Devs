"use strict";

let myHeaders = new Headers();
const myInput = document.querySelector("input");
const myBtn = document.querySelector("button");
const aElem = document.querySelector("a");


function searchSet(){
	let set = myInput.value;

	fetch(`https://api.scryfall.com/sets/${set}`, {
		headers: myHeaders,
	})
		.then(res => res.json())
		.then(data => {
			console.log(data.scryfall_uri)
			aElem.innerText = "View on scryfall";
			aElem.href = data.scryfall_uri;
			
	})
		.catch(err => {
			console.log(`Error: ${err}`);
	});
}

myBtn.addEventListener("click", searchSet);