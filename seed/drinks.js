const db = require('../db')
const { Drink, Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const drinks = [
    {   
        name: 'Sith Surge', 
        description: 'Feel a surge of power on your Darkest Days! Whether you are planning for galactic domination, wiping out Jedi and rebellion scum, or simply striving for unlimited power, "Sith Surge" is your ally. The real power is on the dark side!', 
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Aloe_vera_flower_inset.png'

    },
        { name: 'The Force', description: 'Feel the power of the galaxy coursing through you with "The Force Energy Drink." This energizing elixir is not just a beverage; its an experience that will awaken The Force within.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg/2560px-Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg' },
        { name: 'Jedi Jolt', description: 'Unleash your inner Jedi with "Jedi Jolt," the energy drink that empowers you to reach new heights. This galactic elixir is inspired by the legendary warriors of the Jedi Order, known for their strength, focus, and unwavering determination...', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Dypsis_lutescens1.jpg/1280px-Dypsis_lutescens1.jpg' },
        { name: 'Wookiee Wake-Up', description: 'Prepare to awaken your inner Wookiee! This energy drink that packs a punch as mighty as Chewbaccas roar. Crafted with the spirit of Kashyyyk and the strength of Wookiee warriors, this energizing elixir will help you start your day with a mighty growl!', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hierbabuena_0611_Revised.jpg/1920px-Hierbabuena_0611_Revised.jpg' },
        
    ]

    await Drink.insertMany(drinks)
    console.log("Drink up apprentice!")
}
const run = async () => {
    await main()
    db.close()
}

run()