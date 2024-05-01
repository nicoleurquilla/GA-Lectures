/* DEPENDENCIES
---------------------------------------------------- */
const express = require('express')
const morgan = require('morgan')

// Create an application with the Express package
const app = express()


/* MIDDLEWARE
---------------------------------------------------- */
function customMiddleware(req, res, next) {
    // Perform some logic or tasks here
    console.log('Custom middleware executed');
    next(); // Invoke the next middleware function
}

app.use(customMiddleware)

// Use Morgan middleware with the 'dev' option for concise output
app.use(morgan('dev'))


/* ROUTES
---------------------------------------------------- */
// Home route (static)
app.get('/', function (request, response) {
    response.send(`
    <h1>Hello world!<h1>
    <h3>Welcome to my express app!</h3>
    `)
})

// Static route
app.get('/about', (req, res) => {
    res.send('About me')
})

app.get('/hello', (req, res) => {
    console.log(req.query)
    // Using the query parameters to customize the response
    res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`);
})

// Route with a parameter (dynamic)
app.get('/product/:id', (req, res) => {
    // 1. query database for product id
    // 2. pass product information into page
    console.log(req.params)
    res.send('You are viewing a product: ' + req.params.id)
})

// Dynamic route
app.get('/greet/:name', (req, res) => {
    res.send('Hello, ' + req.params.name)
})


/* Run Express app on your computer on port 3000
---------------------------------------------------- */
app.listen(3000, () => {
    console.log('Listening on port 3000')
})