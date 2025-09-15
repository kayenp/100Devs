"use strict";

let button = document.querySelector("button");
let input = document.querySelector("input");
let spanValue = document.querySelector(".value");
let spanDate = document.querySelector(".date");
let spanWorth = document.querySelector(".worth");

function doThing(){
	let inputValue = input.value;

	fetch("https://api.coinpaprika.com/v1/tickers/btc-bitcoin")
		.then(res => res.json())
		.then(data => {
			console.log(data);
			spanValue.innerText = (data.quotes.USD.price).toFixed(2);
			spanDate.innerText = (data.last_updated).slice(0,10);
			spanWorth.innerText = +spanValue.innerText * +inputValue;
			
		})
		.catch(err => console.log(`Error ${err}`));
}

button.addEventListener("click", doThing);