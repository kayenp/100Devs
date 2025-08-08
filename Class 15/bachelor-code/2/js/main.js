const contestants = [...document.querySelectorAll("h2")];
const images = [...document.querySelectorAll("img")];

for (let i = 0; i < contestants.length; i++) {
	contestants[i].addEventListener("click", hideAll);
	contestants[i].addEventListener("click", () => images[i].classList.remove("hidden"));
	contestants[i].addEventListener("click", rotateImg);

	function hideAll() {
		images.forEach((item) => item.classList.add("hidden"));
	}

	function rotateImg() {
		let rotations = 0;
		let setIntervalID = setInterval(rotate, 25);
		
		function rotate() {
			images[i].style.transform = `rotateZ(${rotations * 15}deg)`;
			
			rotations++;
			
			if (rotations == 25) {
			clearInterval(setIntervalID);
			};	
		}
	}
};
