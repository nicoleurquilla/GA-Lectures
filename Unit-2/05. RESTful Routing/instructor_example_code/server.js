/* Import Express and create Express app
------------------------------------------------ */
// const express = require('express')
import express from 'express'
import morgan from 'morgan'

const app = express()


/* Middleware
------------------------------------------------ */
app.use(morgan('dev'))
// Body parser: used for POST/PUT/PATCH routes:
// this will take incoming strings from the body that are URL encoded and parse them
// into an object that can be accessed in the request parameter as a property called body (req.body).
app.use(express.urlencoded({ extended: true }));


/* Routes
------------------------------------------------ */
// Home route: redirect to index route
app.get('/', (req, res) => {
    res.redirect('/blogs')
})

// Index Route: GET/read all blogs
app.get('/blogs', (req, res) => {
    res.send('I will eventually display all the blog posts')
})

// New Route: GET the form page
app.get('/blogs/new', (req, res) => {
    res.send('I will eventually display a form used to create a blog post')
})

// Show Route: GET/read a single blog
app.get('/blogs/:blogId', (req, res) => {
    res.send('I will eventually display a single blog post with this ID: ' + req.params.blogId)
})

// Edit Route: GET a form page, read a single blog to pre-fill the form
app.get('/blogs/:blogId/edit', (req, res) => {
    res.send(`This will eventually display a form to edit blog post ${req.params.blogId}`)
})

// Create Route: POST/create a new blog
app.post('/blogs', (req, res) => {
    console.log(req.body)
    res.send('You created a blog')
})

// Update Route: PUT/update a new blog
app.put('/blogs/:blogId', (req, res) => {
    console.log(req.body)
    res.send('You updated blog ' + req.params.blogId)
})

// Delete/Destroy Route: DELETE/delete a blog
app.delete('/blogs/:blogId', (req, res) => {
    res.send('You deleted blog ' + req.params.blogId)
})


/* Run the Express app
------------------------------------------------ */
app.listen(3000, () => {
    console.log('Listening on port 3000')
})