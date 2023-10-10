const db = require('../db')
const {Review, Drink} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))




const reviews = [
    {
        drinkName: '1',
        score: 4,
        recommend: true,
        comment: 'This drink was amazing! Highly recommend.'
    },
    {
        drinkName: '2',
        score: 2,
        recommend: false,
        comment: 'Not a fan of this drink. Would not recommend.'
    },
    {
        drinkName: '3',
        score: 5,
        recommend: true,
        comment: 'The best drink I have ever had. 10/10 would recommend!'
    },
    {
        drinkName: '3',
        score: 3,
        recommend: true,
        comment: 'Decent drink, but not exceptional.'
    },
    {
        drinkName: '4',
        score: 5,
        recommend: true,
        comment: 'Absolutely loved this drink!'
    },
    {
        drinkName: '5',
        score: 1,
        recommend: false,
        comment: 'Terrible drink, would never have it again.'
    },
    {
        drinkName: '6',
        score: 4,
        recommend: true,
        comment: 'Great taste and presentation.'
    },
    {
        drinkName: '7',
        score: 4,
        recommend: true,
        comment: 'Good choice if you like strong flavors.'
    }
];

module.exports = reviews;