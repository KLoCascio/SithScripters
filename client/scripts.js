let button = document.querySelector("#button")


button.addEventListener('click', async () => {

    
    //where does this need to be scoped?
    let textInput = document.querySelector("#inputBar").value

    let response = await axios.get(`http://localhost:3001/${textInput}`)
    
}
)