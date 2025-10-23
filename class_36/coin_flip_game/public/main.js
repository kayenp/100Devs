const btn = document.querySelector('button');
const h3 = document.querySelector('h3');

const sendMsg = async () => {
	const res = await fetch('http://localhost:3000/api');
	const data = await res.json();
	console.log(data);
	h3.innerText = data.value;
}

btn.addEventListener("click", sendMsg);

