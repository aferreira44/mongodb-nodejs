const MongoClient = require('mongodb').MongoClient,
	assert = require('assert')

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
	assert.equal(null, err)
	console.log("Successfully connected to server")

	const db = client.db('video');

	// Find some documents in our collection
	db.collection('movies').find({}).toArray((err, docs) => {
		// Print the title of each document in the result set
		docs.forEach((doc) => {
			console.log(doc.title)
		})

		client.close()
	})

	console.log("Called find()")
})