```js

// Comparison

db.movieDetails.find({ runtime: { $gt: 90}}).pretty()

db.movieDetails.find({ runtime: { $gt: 90, $lt: 120 }}).pretty()

db.movieDetails.find({ runtime: { $gte: 90, $lte: 120 }}).pretty()

db.movieDetails.find({ runtime: { $gte: 90, $lte: 120 }}, { title: 1, runtime: 1, _id: 0 }).pretty()

db.movieDetails.find({ "tomato.meter" : { $gte: 95 }, runtime: { $gte: 180 }}, { title: 1, runtime: 1, _id: 0 }).pretty()

db.movieDetails.find({ rated: { $ne: "UNRATED" }}, { title: 1, runtime: 1, _id: 0 }).pretty()

db.movieDetails.find({ rated: { $in: ["G", "PG", "PG-13"] }}, { title: 1, runtime: 1, _id: 0 }).pretty()

// Element

db.movieDetails.find({ "tomato.meter" : { $exists: true }}).pretty()

db.movieDetails.find({ "tomato.meter" : { $exists: false }}).pretty()

db.movieDetails.find({ "_id" : { $type: "string" }}).count()

db.movieDetails.find({ "_id" : { $type: "objectId" }}).count()

// Logical

db.movieDetails.find({ $or: [{ "tomato.meter" : { $gt: 95 }}, { "metacritic": { $gt: 88 }}] }).pretty()

db.movieDetails.find({ $and: [{ "tomato.meter" : { $gt: 95 }}, { "metacritic": { $gt: 88 }}] }).pretty()

db.movieDetails.find({"tomato.meter" : { $gt: 95 }, "metacritic": { $gt: 88 }}).pretty()

db.movieDetails.find({ $and: [{ "metacritic": { $ne: null }}, { "metacritic": { $exists: true }}]})

```

## Reference

- [https://docs.mongodb.com/manual/reference/operator/query/]()
- [https://docs.mongodb.com/manual/reference/operator/query/type/#document-type-available-types]()