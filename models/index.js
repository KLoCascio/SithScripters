const mongoose = require('mongoose')

const drinksSchema = require('./drinks')
const reviewsSchema = require('./reviews')

const Drink = mongoose.model('drink', drinksSchema)
const Review = mongoose.model('review', reviewsSchema)

module.exports = {
    Drink,
    Review
}