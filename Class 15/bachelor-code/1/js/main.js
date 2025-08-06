const claire = document.querySelector("#claire");
const sharleen = document.querySelector("#sharleen");

document.querySelector('#finalRose').addEventListener('click', hide)

function hide(){
	let opacity = getComputedStyle(claire).getPropertyValue("opacity");

	let intervalID = setInterval(fade, 75);

	function fade() {
			claire.style.opacity = `${opacity - 0.1}`;
			sharleen.style.opacity = `${opacity - 0.1}`;
			opacity = getComputedStyle(claire).getPropertyValue("opacity");
		};
	if (opacity === 0) {
		clearInterval(intervalID);
	};
}
