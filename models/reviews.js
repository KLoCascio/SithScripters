const { Schema } = require('mongoose')

const reviewsSchema = new Schema (
    {
        drinkName: { type: Schema.Types.ObjectId, ref:'Drink' }, // drop-down menu 
        score: { type: Number, required: true}, // out of 5
        recommend: { type: Boolean, required: true}, // yes = true, no = false
        comment: { type: String, required: true} // input field
    }
)

module.exports = reviewsSchema