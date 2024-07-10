const express = require('express')

// express app
const app = express()

// register view engine
app.set('view engine', 'ejs')

// express는 views를 default path로 보기 때문에
// 특별히 지정하지 않으면, views 아래를 찾아본다.
// 아래와 같이 'views' 이외의 경로를 지정해줄 수 있다.
// app.set('views', 'myviews')

// listen for requests
app.listen(3000)

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