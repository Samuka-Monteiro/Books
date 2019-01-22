const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
const cors = require('./assets/cors') 
/*CORS is a mechanism that uses additional HTTP headers to tell a 
browser to let a web application running at one origin (domain)
have permission to access selected resources from a server at a different origin.*/


app.use(bodyParser.json())
app.use(cors)


app.get('/books', function(req,res){
    res.send('helo')
})


app.listen(port, () => { console.log('Server UP on port '+ port)})

module.exports = app