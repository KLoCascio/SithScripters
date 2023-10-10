const { Schema } = require('mongoose')

const drinksSchema = new Schema (
    {
        name: { type: String, required: true }, // Monster Energy Drink
        image: { type: String, required: true}, // Image
        type: { type: String, required: true }, // Energy Drink / Coffee / Tea / Soda
        caffeine: { type: Boolean, required: true }, // True/False
        review: { type: Schema.Types.ObjectId, ref: 'Review'} // user input
    }
)

module.exports = drinksSchema