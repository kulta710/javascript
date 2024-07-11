const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog')

// express app
const app = express()

// connect to mongodb
const dbURI = 'mongodb+srv://kulta710:bpfg10047@kulta710.bkqi64r.mongodb.net/node-tutorial?retryWrites=true&w=majority&appName=kulta710'

// If we bother from a deprecation warning, we can write like below to ignore it.
// mongoose.connect(dbURI, { userNewUrlParser: true, useUnifiedTopology: true })

mongoose.connect(dbURI)
    .then((result) => {
        console.log('connected to db')

        // listen for requests
        app.listen(3000)
    }).catch(console.log)

// register view engine
app.set('view engine', 'ejs')

// middleware & static files
app.use(express.static('public'))
app.use(morgan('dev'))

// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'about my new blog',
        body: 'more about new blog'
    })

    blog.save()
        .then((result) => {
            res.send(result)
        }).catch(console.log)
})

app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result)
        }).catch(console.log)
})

app.get('/single-blog', (req, res) => {
    Blog.findById('668e200d4c4cb6672875b1b5')
        .then((result) => {
            res.send(result)
        }).catch(console.log)
})

app.get('/', (req, res) => {

    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' }
    ]

    res.render('index', { title: 'Home', blogs })
})

app.get('/about', (req, res) => {
    
    res.render('about', { title: 'About' })
})

app.get('/blogs/create', (req, res) => {

    res.render('create', { title: 'Create a new Blog' })
})

// 404 page
app.use((req, res) => {

    res.status(404).render('404', { title: '404' })
})