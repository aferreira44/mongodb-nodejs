# CRUD Operations

`show dbs`

`use movies`

`db.movies.insertOne({ "title": "Jaws", "year" : 1975, "imdb" : "tt0073195" })`
`db.movies.insertOne({ "title": "Movie 2", "year" : 1981, "imdb" : "tt0045645" })`
`db.movies.insertOne({ "title": "Movie 3", "year" : 2000, "imdb" : "tt0078675" })`
`db.movies.insertOne({ "title": "Movie 4", "year" : 2006, "imdb" : "tt0034534" })`

`db.movies.find()`
`db.movies.find().pretty()`

`db.movies.find({ "year" : 1975 }).pretty()`

`var c = db.movies.find()`

`c.hasNext()`
`c.next()`
`c.next()`
`c.next()`

## Resources

- [](https://docs.mongodb.com/manual/crud/)