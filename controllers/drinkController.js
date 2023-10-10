const { Drink } = require('../models')

module.exports = {
    getDrinks,
    getDrink
}

async function getDrinks(req, res) {
    try {
        const drinks = await Drink.find()
        res.json(drinks)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function getDrink(req, res) {
    try {
        const id = req.params.id
        const drink = await Drink.findById(id)
        if (drink) {
            return res.json(drink)
        }
        return res.status(404).send(`${Drink} isn't a real drink.`)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}