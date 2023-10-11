const db = require('../db')
const { Drink, Review } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const drinks = [
        { 
            name: 'Sith Surge', 
            description: 'Feel a surge of power on your Darkest Days! Whether you are planning for galactic domination, wiping out Jedi and rebellion scum, or simply striving for unlimited power, "Sith Surge" is your ally. The real power is on the dark side!', 
            image: './assets/SithSurge.jpeg' },
        { 
            name: 'The Force', 
            description: 'Feel the power of the galaxy coursing through you with "The Force". This energizing elixir is not just an energy drink; its an experience that will awaken The Force within.', 
            image: './assets/TheForce.jpeg' },
        { 
            name: 'Jedi Jolt', 
            description: 'Unleash your inner Jedi with "Jedi Jolt", the energy drink that empowers you to reach new heights. This galactic elixir is inspired by the legendary warriors of the Jedi Order, known for their strength, focus, and unwavering determination... Even though they were eventually wiped out by the Dark Side. Minor detail', 
            image: './assets/JediJolt.jpeg' },
        { 
            name: 'Wookiee Wake-Up', 
            description: 'Prepare to awaken your inner Wookiee! This energy drink packs a punch as mighty as Chewbaccas roar. Crafted with the spirit of Kashyyyk and the strength of Wookiee warriors, this energizing elixir will help you start your day with a mighty growl!', 
            image: './assets/WookieWakeUp.jpeg' },
        
    ]

    await Drink.insertMany(drinks)
    console.log("Drink up apprentice! Through passion, I gain strength. Through strength, I gain power. Through power, I gain victory!")
}
const run = async () => {
    await main()
    db.close()
}

run()