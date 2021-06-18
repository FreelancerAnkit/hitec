const app = require('express')();
const routes = require('./routes');

routes(app);

app.listen(3000, ()=>{
    console.log("Listening.");
})