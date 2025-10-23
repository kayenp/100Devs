import http from 'http'
import fs from 'fs/promises'
import path from 'path'
import url from 'url'
import express from 'express'

const app = express();
const PORT = process.env.PORT;
const __dirname = import.meta.dirname;
const __public = path.join(__dirname, '..', '/public');
//app.use(express.static(__public));
console.log(path.join(__public, 'index.html'))

const server = http.createServer((req, res) => {
	console.log(req.url, req.method);
});

// Express routing for index.html
app.get('/', (req, res) => {
		res.sendFile(path.join(__public, 'index.html'));
})

// Express routing for index.html css
app.get('/main.css', (req, res) => {
	res.sendFile(path.join(__public, 'main.css'))
})

// Express routing for index.html js
app.get('/main.js', (req, res) => {
	res.sendFile(path.join(__public, 'main.js'));
})

// Express routing for /api
app.get('/api', (req, res) => {
	console.log(req);
	let result = flipCoin();
	console.log(result);
	res.send({ 'value': result });
})

// Listening ports
app.listen(3000, () => {
	console.log('Express running on 3000');
});
server.listen(PORT, () => {
	console.log(`Nodejs running on ${PORT}`);
})

// Flip coin function
function flipCoin() {
	return (Math.round(Math.random()) == 0) ? 'tails' : 'heads';
}