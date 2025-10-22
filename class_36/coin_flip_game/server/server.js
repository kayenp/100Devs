import http from 'http'
import fs from 'fs/promises'
import path from 'path'
import url from 'url'
import express from 'express'

const app = express();
const PORT = process.env.PORT;
const __dirname = import.meta.dirname;
const __public = path.join(__dirname, '..', '/public');
app.use(express.static(__public));
console.log(path.join(__public, 'index.html'))

const server = http.createServer((req, res) => {
	console.log(req.url, req.method);

	app.get('/', (req, res) => {
		//res.sendFile(path.join(__public, 'index.html'));
	})

	app.get('/api', (req, res) => {
		let result = flipCoin();
		res.send(result);
		console.log(result);
	})
});

app.listen(3000, () => {
	console.log('Express running on 3000');
});
server.listen(PORT, () => {
	console.log(`Nodejs running on ${PORT}`);
})

function flipCoin() {
	(Math.round(Math.random()) == 0) ? 'tails' : 'heads';
}