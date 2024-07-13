const express = require('express')
const { ObjectId } = require('mongodb')
const { connectToDb, getDb } = require('./db')

// init app & middleware
const app = express()
  // We need to write below code to read req.body
app.use(express.json())

// db connection
let db

connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log('app listening on port 3000')
    })

    db = getDb()
  }
})

// routes
app.get('/books', (req, res) => {
  
  // current page
  const page = req.query.page || 1
  const booksPerPage = 3

  let books = []

  db.collection('books')
    .find() // cursor toArray forEach
    .sort({ author: 1 })
    .skip((page - 1) * booksPerPage)
    .limit(booksPerPage)
    .forEach(book => books.push(book))
    .then(() => {
      res.status(200).json(books)
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch the documents" })
    })
})

app.get('/books/:id', (req, res) => {

  if (ObjectId.isValid(req.params.id)) {
    db.collection('books')
      .findOne({ _id: new ObjectId(req.params.id) })
      .then((book) => {
        res.status(200).json(book)
      })
      .catch(() => {
        res.status(500).json({ error: "Could not fetch the document" })
      })
  } else {
    res.status(500).json({ error: "Not a valid doc id" })
  }
})

app.post('/books', (req, res) => {
  const book = req.body

  db.collection('books')
    .insertOne(book)
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((error) => {
      res.status(500).json({ error: "Could not create a new document" })
    })
})

app.delete('/books/:id', (req, res) => {

  if (ObjectId.isValid(req.params.id)) {
    db.collection('books')
      .deleteOne({ _id: new ObjectId(req.params.id) })
      .then((result) => {
        res.status(200).json(result)
      })
      .catch((error) => {
        res.status(500).json({ error: "Could not delete the document" })
      })
  } else {
    res.status(500).json({ error: "Not a valid doc id" })
  }
})

app.patch('/books/:id', (req, res) => {

  const updates = req.body

  console.log(updates)
  console.log(req.params.id)

  if (ObjectId.isValid(req.params.id)) {
    db.collection('books')
      .updateOne({ _id: new ObjectId(req.params.id) }, {$set: updates})
      .then((result) => {
        res.status(200).json(result)
      })
      .catch((error) => {
        res.status(500).json({ error: "Could not update the document" })
      })
  } else {
    res.status(500).json({ error: "Not a valid doc id" })
  }
})