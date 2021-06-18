const services = require('../services');
module.exports = (req, res  )=>{
    res.send("<h1>Home</h1>")
    services.getUsers.then(response =>{
        console.log("Home response", response)
    })
}