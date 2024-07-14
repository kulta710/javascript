const express = require('express')

// express app
const app = express()

app.listen(5000, () => {
  console.log('Listening at port 3000')
})

// middleware & static files
app.use(express.static('public'))

app.get('/', (req, res) => {

  res.json({ data: 'home' })
})