const btn = document.querySelector('button');

btn.addEventListener("click", sendMsg);

async function sendMsg() {
	const res = await fetch('/api');
	const data = await res.json();
	console.log(data);
}