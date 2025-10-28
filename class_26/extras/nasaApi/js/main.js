"use strict";

//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
//Hx5S49p7fAW1RhMasolaaubx77vkofzxEVxtMY4X

let btn = document.querySelector("button");
let bodyElem = document.querySelector("body");
let h2Elem = document.querySelector("h2");
let imgElem = document.querySelector("img");
let h3Elem = document.querySelector("h3");

async function getMedia(){
	let date = document.querySelector("input").value;
	let res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=Hx5S49p7fAW1RhMasolaaubx77vkofzxEVxtMY4X&date=${date}`);
	let data = await res.json();
	if (Error.isError(data)) {
		console.log(`Error: ${err}`);
	};

	if (data.media_type === "video") {
		if (data.url.includes("youtube.com")){
			(() => {
				data.url = data.url.replace("youtube.com", "youtube-nocookie.com");
			})();
		}
		let iframeElem = document.createElement("iframe");
		iframeElem.setAttribute("src", `${data.url}`)
		bodyElem.insertBefore(iframeElem, h3Elem);
	}
	else {
		imgElem.src = data.hdurl;
	}

	h2Elem.innerText = data.title;
	h3Elem.textContent = data.explanation;
}

btn.addEventListener("click", getMedia);