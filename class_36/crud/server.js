import http from 'http';
import fs from 'fs/promises';
import path from 'path';
import url from 'url';
import express from 'express';
import { MongoClient } from 'mongodb';


const PORT = process.env.PORT;
const __dirname = url.fileURLToPath(import.meta.url);
const __pathname = path.dirname(__dirname);
console.log(__dirname);
console.log(__pathname);
const app = express();
const connectionString = 'mongodb+srv://mongodbdotcom202510091438_db_user:2CjjorSkvRkeKdbn@cluster0.kig7unp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';



MongoClient.connect(connectionString)
	
	.then(client => {
		const db = client.db('node-crud-test-thing');
		const quotesCollection = db.collection('quotes');
		
		app.set('views', './views');
		app.set('view engine', 'ejs');

		// Middleware to add form data to db object
		app.use(express.urlencoded({ extended: true }))
		app.use(express.static('public'));
		// Middleware to accept JSON data
		app.use(express.json())

		// GET handler
		console.log(Date.now())
		app.get('/', (req, res) => {
			db.collection('quotes')
				.find()
				.toArray()
				.then(results => {
					res.render('index.ejs', { quotes: results})
				})
				.catch(err => {
					console.log(`ERROR ${err}`)
				});
		})

		// Middleware to access /public
		//app.use(express.static('public'));

		// POST handler
		app.post('/quotes', (req, res) => {
			quotesCollection
				.insertOne(req.body)
				.then(result => {
					console.log(req.body);
					res.redirect('/');
				})
				.catch(err => {
					console.log(`Error during POST: ${err}`)
				});
		})

		app.put('/quotes', (req, res) => {
			console.log(req.body)
			quotesCollection
				.findOneAndUpdate(
					{ name: 'Yoda'}, 
					{ 
						$set: {
							name: req.body.name,
							quote: req.body.quote,
						},
					}, 
					{
						upsert: true,
					}
				)
				.then(result => {
					console.log(result);
					res.json('Success');
	
				})
				.catch(err => {
					console.log(err);
				})
		})

		app.delete('/quotes', (req, res) => {
			quotesCollection
				.deleteOne({ name: req.body.name })
				.then(result => {
					if (result.deletedCount === 0) {
						return res.json('No quote to delete');
					}
					res.json("Deleted Darth Vadar's quote");
				})
				.catch(err => {
					console.log(`Error ${err}`);
				})
		})

		
	})
	.catch(err => {
		console.log(`Error ${err}`)
	});

app.listen(3000, () => {
	console.log(`Express listening on 3000`)
})

const server = http.createServer((req, res) => {
});

server.listen(PORT, () => {
	console.log(`Server up and running on port ${PORT}`);
});