const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog')

// express app
const app = express()

// connect to mongodb
const dbURI = 'mongodb+srv://kulta710:bpfg10047@kulta710.bkqi64r.mongodb.net/node-tutorial?retryWrites=true&w=majority&appName=kulta710'

mongoose.connect(dbURI)
    .then((result) => {
        console.log('connected to db')

        // listen for requests
        app.listen(3000)
    })
    .catch(console.log)

// register view engine
app.set('view engine', 'ejs')

// middleware & static files
app.use(express.static('public'))
// express.urlencoded() is very important.
// We can read data from request using req.body only if we use this middleware
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

// routes
app.get('/', (req, res) => {

    res.redirect('/blogs')
})

app.get('/about', (req, res) => {
    
    res.render('about', { title: 'About' })
})

// blog routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result })
        })
        .catch(console.log)
})

app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body)

    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch(console.log)
})

app.get('/blogs/create', (req, res) => {

    res.render('create', { title: 'Create a new Blog' })
})

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id
    console.log(id)

    Blog.findById(id)
        .then((result) => {
            res.render('details', { title: 'Blog Details', blog: result })
        })
        .catch(console.log)
})

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id
    
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({
                redirect: '/blogs'
            })
        })
        .catch(console.log)
})

// 404 page
app.use((req, res) => {

    res.status(404).render('404', { title: '404' })
})