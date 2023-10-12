

const drinksBtn = document.getElementById("drinksModalBtn")
const modal = document.getElementById("startModal")
let closeBtn = document.getElementsByClassName("close")[0]

const menuContent = document.querySelector(".menu-content")
menuContent.innerHTML = ` 
    <div class="grid-item">
    <img src='/assets/SithSurge.jpeg' alt='Sith Surge' />
    <h2>Sith Surge</h2>
    <p>'Feel a surge of power on your Darkest Days! Whether you are planning for galactic domination, wiping out Jedi and rebellion scum, or simply striving for unlimited power, "Sith Surge" is your ally. The real power is on the dark side!'</p>
    </div>

    <div class="grid-item">
    <img src='/assets/TheForce.jpeg' alt='The Force' />
    <h2>The Force</h2>
    <p>Feel the power of the galaxy coursing through you with "The Force". This energizing elixir is not just an energy drink; its an experience that will awaken The Force within.</p>
    </div>

    <div class="grid-item">
    <img src='/assets/JediJolt.jpeg' alt='Jedi Jolt' />
    <h2>Jedi Jolt</h2>
    <p>Unleash your inner Jedi with "Jedi Jolt", the energy drink that empowers you to reach new heights. This galactic elixir is inspired by the legendary warriors of the Jedi Order, known for their strength, focus, and unwavering determination... Even though they were eventually wiped out by the Dark Side. Minor detail</p>
    </div>

    <div class="grid-item">
    <img src='/assets/WookieWakeUp.jpeg' alt='Wookie Wake-Up' />
    <h2>Wookiee Wake-Up</h2>
    <p>Prepare to awaken your inner Wookiee! This energy drink packs a punch as mighty as Chewbaccas roar. Crafted with the spirit of Kashyyyk and the strength of Wookiee warriors, this energizing elixir will help you start your day with a mighty growl!<p>
    </div>`

drinksBtn.addEventListener("click", function () {
    modal.style.display = "block"
})

closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
})

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
})