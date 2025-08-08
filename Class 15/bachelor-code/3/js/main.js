const bodyElem = document.querySelector("body");
const contestants = document.querySelectorAll(".contestant");
const scriptElem = document.querySelector("script");
const newH2Elem = document.createElement("h2");
const newSpan = document.createElement("span");
const newDocFrag = document.createDocumentFragment();
bodyElem.insertBefore(newH2Elem, scriptElem);
newDocFrag.appendChild(newSpan);

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose));

matchName();

function matchName() {
	let guess = prompt("Who do you think the final contestant is?");

	while(true) {
		if (guess.toLowerCase() === "nikki") {
			guess = "nikki"
			document.querySelector("#nikki").classList.toggle("hidden");
			break;
		} else if (guess.toLowerCase() === "claire") {
			alert("WRONG!");
			break;
		} else {
			guess = prompt("Enter one of the names below");
		}
	}

	newSpan.innerText = `Your guess was: ${guess.toUpperCase()}`;
	newSpan.style.color = "red";
	newH2Elem.appendChild(newDocFrag);
}

function checkForRose(click) {
	if(click.target.classList.contains("rose")){
		document.querySelector('#nikki').classList.removeclair("hidden");
	}else{
		alert("Wrong!");
	}
}
