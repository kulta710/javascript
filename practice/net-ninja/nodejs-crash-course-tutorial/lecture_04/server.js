const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    // set header content type
    // res.setHeader('Content-Type', 'text/plain')
    res.setHeader('Content-Type', 'text/html')
    
    // res.write('hello, ninjas')
    // res.write('<head><link rel="stylesheet" href="#"></head>')
    // res.write('<p>hello, ninjas</p>')
    // res.write('<p>hello again, ninjas</p>')

    // send an html file
    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            res.write(data)
            res.end()

            // 이렇게 end에 data를 바로 넣어주어도 된다.
            // res.end(data)
        }
    })

    // res.end()
})

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})