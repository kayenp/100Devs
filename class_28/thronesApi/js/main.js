"use strict";
let img = document.querySelector("img");
let button = document.querySelector("button");

function getThroner(){
	fetch("https://thronesapi.com/api/v2/Characters")
		.then(res => res.json())
		.then(data => {
			console.log(data)
			img.src = data[(Math.round(Math.random() * (data.length - 0) + 0))].imageUrl
		})
		.catch(err => console.log(`Error ${err}`));
}

button.addEventListener("click", getThroner);