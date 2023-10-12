
document.addEventListener('DOMContentLoaded', async function() {
    const drinks = document.querySelector('#drinks')
    const display = document.querySelector('#display')
    let response = await axios.get(`http://localhost:3001/drinks`)
    let responseRev = await axios.get(`http://localhost:3001/reviews`)
    
    
    response.data.forEach(drink => {
        const option = document.createElement('option')
        option.value = drink._id
        option.id = drink._id
        option.textContent = drink.name
        drinks.appendChild(option)
    });


    
    


})

const form = document.querySelector('#form')

form.addEventListener('submit', async function(e) {

    e.preventDefault()
    const formData = new FormData(form)
    const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
    console.log(data)

    let send = await axios.post(`http://localhost:3001/reviews`, data)


    

})
    


