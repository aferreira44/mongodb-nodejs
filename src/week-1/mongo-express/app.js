const express = require('express')
const engines = require('consolidate')
const	assert = require('assert')
const MongoClient = require('mongodb').MongoClient
const app = express()

app.engine('html', engines.nunjucks)
app.set('view engine', 'html')
app.set('views', __dirname + '/views')

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
	assert.equal(null, err)
	console.log("Successfully connected to server")

	const db = client.db('video');

	app.get('/', (req, res) => {
		db.collection('movies').find({}).toArray((err, docs) => {
			res.render('movies', { 'movies': docs})
		})
	})

	app.use((req, res) => {
		res.sendStatus(404)
	})
	
	const server = app.listen(3000, () => {
		const port = server.address().port
		console.log('Express server listening on port %s', port)
	})
})