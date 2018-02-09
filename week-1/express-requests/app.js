const path = require('path')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cons = require('consolidate')
const router = express.Router()
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.engine('html', cons.swig)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, '/views'))

// Handler for internal server errors
function errorHandler (err, req, res, next) {
  console.error(err.message)
  console.error(err.stack)
  res.status(500)
  res.render('error_template', { error: err })
}

app.use(errorHandler)

// router.get('/:name', (req, res, next) => {
//   const name = req.params.name
//   const getVar1 = req.query.getVar1
//   const getVar2 = req.query.getVar2
//   res.render('hello', { name, getVar1, getVar2 })
// })

router.get('/fruits', (req, res, next) => {
  res.render('fruitPicker', { 'fruits': ['apple', 'orange', 'banana', 'peach'] })
})

router.post('/favoriteFruit', (req, res, next) => {
  const favorite = req.body.fruit
  if (typeof favorite === 'undefined') {
    next(Error('Please choose a fruit!'))
  } else {
    res.send('Your favorite fruit is ' + favorite)
  }
})

app.use(router)

app.listen(3000)
console.log('Express server listening on port 3000')
