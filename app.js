
const express = require('express')
const app = express() 
//specify the port to listen on 
const port = 3000

//this app starts a server and listens on port 3000 for connections. The app responds with 'hello world!' for requests to the root URL (.) or route. For every other path, it responds with a 404 not found 

//defining a route in express 
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//include route files 
const usersRoute = require('./routes/users')
const productsRoute = require('./routes/products')

//use routes 
app.use('/users', usersRoute)
app.use('/products', productsRoute)


//start the server 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


