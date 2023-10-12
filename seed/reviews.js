const db = require('../db')
const {Review, Drink} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


    const main = async () => {
        const ww = await Drink.find({name: 'Wookiee Wake-Up'})
        const tf = await Drink.find({name: 'The Force'})
        const ss = await Drink.find({name: 'Sith Surge'})
        const jj = await Drink.find({name: 'Jedi Jolt'})

        const reviews = [
        {
            drinkName: ss[0]._id,
            score: 4,
            comment: 'This drink was amazing! Highly recommend.'
        },
        {
            drinkName: tf[0]._id,
            score: 2,
            comment: 'Not a fan of this drink. Would not recommend.'
        },
        {
            drinkName: ww[0]._id,
            score: 5,
            comment: 'The best drink I have ever had. 10/10 would recommend!'
        },
        {   
            drinkName: ss[0]._id,
            score: 3,
            comment: 'Decent drink, but not exceptional.'
        },
        {
            drinkName: ww[0]._id,
            score: 5,
            comment: 'Absolutely loved this drink!'
        },
        {
            drinkName: ss[0]._id,
            score: 1,
            comment: 'Terrible drink, would never have it again.'
        },
        {
            drinkName: jj[0]._id,
            score: 4,
            comment: 'Great taste and presentation.'
        },
        {
            drinkName: tf[0]._id,
            score: 4,
            comment: 'Good choice if you like strong flavors.'
        }
];

await Review.insertMany(reviews)
    console.log("Drink up apprentice!")
}
const run = async () => {
    await main()
    db.close()
}

run()