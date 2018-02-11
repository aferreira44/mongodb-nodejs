# Reading Documents

```js
db.movieDetails.find({ rated: "PG-13" }).pretty()

db.movieDetails.find({ rated: "PG-13", year: 2009 }).count()

db.movieDetails.find({ "tomato.meter": 100}).count()

db.movieDetails.find({ "tomato.meter": 100}).pretty()

db.movieDetails.find({ "writers": ["Ethan Coen", "Joel Coen"]}).count()

db.movieDetails.find({ "writers": ["Ethan Coen", "Joel Coen"]}).pretty()

db.movieDetails.find({ "actors": "Jeff Bridges"}).pretty()

db.movieDetails.find({ "actors.0": "Jeff Bridges"}).pretty()

db.movieDetails.find({ rated: "PG" })

db.movieDetails.find({ rated: "PG" }, { title: 1 }).pretty()

db.movieDetails.find({ rated: "PG" }, { title: 1, _id: 0 }).pretty()

db.movieDetails.find({ rated: "PG" }, { writers: 0, actors: 0 }).pretty()

var c = db.movieDetails.find()

var doc = function() { return c.hasNext() ? c.next() : null }

c.objsLeftInBatch()

doc()
doc()
doc()
```