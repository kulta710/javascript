const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const blogRoutes = require('./routes/blogRoutes')

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
// express.urlencoded()는 굉장히 중요하다
// 이 middleware를 사용해야만 req.body로 request에서 실어 보내는 데이터를
// 읽어들일 수 있다.
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
app.use('/blogs', blogRoutes)

// 404 page
app.use((req, res) => {

    res.status(404).render('404', { title: '404' })
})