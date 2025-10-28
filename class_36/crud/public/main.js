"use strict";

const update = document.querySelector('#update-button');

update.addEventListener('click', _ => {
	fetch('/quotes', {
		method: 'put',
		headers: { 'Content-Type': 'application/json'},
		body: JSON.stringify({
			name: 'Darth Vadar',
			quote: 'I find your lack of proper api usage disturbing.'
		}),
	})
	.then(res => {
		if (res.ok) {
			return res.json()
		}
	})
	.then(response => {
		console.log(response);
	})
	.catch(err => {
		console.log(`Error ${err}`);
	})
})

const deleteButton = document.querySelector('#delete-button');

deleteButton.addEventListener('click', _ => {
	fetch('/quotes', {
		method: 'delete',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			name: 'Darth Vadar',
		})
	})
	.then(res => {
		if (res.ok) {
			return res.json();
		};
	})
	.then(response => {
		if(response == 'No quote to delete') {
			console.log(response);
			messageDiv.textContent = 'No Darth Vadar quote to delete'
		} else {
			window.location.reload(true);
		}
	})
	// .then(data => {
	// 	window.location.reload();
	// })
	.catch(err => {
		console.log(`Error ${err}`);
	})
});