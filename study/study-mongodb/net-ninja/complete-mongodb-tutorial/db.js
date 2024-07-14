const { MongoClient } = require('mongodb')

let dbConnection

function connectToDb (cb) {
  MongoClient.connect('mongodb+srv://kulta710:bpfg10047@kulta710.bkqi64r.mongodb.net/?retryWrites=true&w=majority&appName=kulta710')
    .then((client) => {
      dbConnection = client.db('bookstore')
      return cb()
    })
    .catch((error) => {
      console.log(error)
      return cb(error)
    })
}

function getDb () {
  return dbConnection
}

module.exports = {
  connectToDb,
  getDb
}