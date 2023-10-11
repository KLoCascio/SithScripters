const { Review } = require('../models')

module.exports = {
    getReviews,
    createReview
}

async function createReview (req, res) {
    console.log('test', req.body)
    try {
        const review = await Review.create(req.body)
        return res.status(201).json(review)


    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

async function getReviews(req, res) {
    try {
        const reviews = await Review.find()
        res.json(reviews)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}



