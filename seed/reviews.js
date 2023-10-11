const db = require('../db')
const {Review, Drink} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

    const ww = Drink.find({name: 'Wookiee Wake-Up'})
    const tf = Drink.find({name: 'The Force'})
    const ss = Drink.find({name: 'Sith Surge'})
    const jj = Drink.find({name: 'Jedi Jolt'})

    const main = async () => {
        const reviews = [
        {
            drinkName: ss[0]._id,
            score: 4,
            recommend: true,
            comment: 'This drink was amazing! Highly recommend.'
        },
        {
            drinkName: tf[0]._id,
            score: 2,
            recommend: false,
            comment: 'Not a fan of this drink. Would not recommend.'
        },
        {
            drinkName: ww[0]._id,
            score: 5,
            recommend: true,
            comment: 'The best drink I have ever had. 10/10 would recommend!'
        },
        {   
            drinkName: ss[0]._id,
            score: 3,
            recommend: true,
            comment: 'Decent drink, but not exceptional.'
        },
        {
            drinkName: ww[0]._id,
            score: 5,
            recommend: true,
            comment: 'Absolutely loved this drink!'
        },
        {
            drinkName: ss[0]._id,
            score: 1,
            recommend: false,
            comment: 'Terrible drink, would never have it again.'
        },
        {
            drinkName: jj[0]._id,
            score: 4,
            recommend: true,
            comment: 'Great taste and presentation.'
        },
        {
            drinkName: tf[0]._id,
            score: 4,
            recommend: true,
            comment: 'Good choice if you like strong flavors.'
        }
];

await Review.insertMany(reviews)
    console.log("Drink up apprenticec!")
}
const run = async () => {
    await main()
    db.close()
}

run()