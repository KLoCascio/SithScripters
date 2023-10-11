const { Schema } = require('mongoose')

const drinksSchema = new Schema (
    {
        name: { type: String, required: true }, // Monster Energy Drink
        description: { type: String, required: true},
        image: { type: String, required: true}, // Image
        review: { type: Schema.Types.ObjectId, ref: 'Review'} // user input
    }
)

module.exports = drinksSchema