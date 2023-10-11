const express = require('express')
const db = require('./db')

const logger = require('morgan')
const bodyParser = require('body-parser')

const drinkController = require('./controllers/drinkController')
const reviewController = require('./controllers/reviewController')

const PORT = process.env.PORT || 3001
const app = express()

const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded( { extended: true}))

app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send({ msg: "Sith 4 Eva"})
})

app.get('/drinks', drinkController.getDrinks)
app.get('/drinks/:id', drinkController.getDrink)
app.get('/reviews', reviewController.getReviews)
// app.get('/reviews/:id', reviewController.getReview)
app.post('/reviews', reviewController.createReview)




app.listen(PORT, () => console.log(`Server is running on ${PORT}`))