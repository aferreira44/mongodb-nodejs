const path = require('path')
const express = require('express')
const assert = require('assert');
const cons = require('consolidate')
const bodyParser = require('body-parser')
const router = express.Router()
const MongoClient = require('mongodb').MongoClient;
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.engine('html', cons.handlebars)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, '/views'))
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'video';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
 
  router.get('/', (req, res, next) => {
    res.render('index')
  })
  
  router.post('/movie', (req, res, next) => {
    const title = req.body.title
    const year = req.body.year
    const imdb = req.body.imdb

    db.collection('movies').insertOne({
      'title': title,
      'year': year,
      'imdb': imdb
    }, (err, result) => {
      assert.equal(null, err);
      res.send('Movie inserted!!! Title: ' + title + ', Year: ' + year + ', IMDB: ' + imdb)
    })
  })
  
  app.use(router)
  
  app.listen(3000)
  console.log('Express server listening on port 3000')
});