const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      // responseText is a just long string. we need to parse the string to json object.
      const data = JSON.parse(request.responseText)
      callback(undefined, data)

    } else if (request.readyState === 4) {
      callback('could not fetch data', undefined)
    }
  })

  // request API can be applied to local json file
  // endpoints can be local directories
  request.open('GET', resource)
  request.send()
}

// Suppose I want to log the data in order
// How can we do?
getTodos('todos/luigi.json', (err, data) => {
  console.log(data)

  getTodos('todos/mario.json', (err, data) => {
    console.log(data)

    getTodos('todos/shaun.json', (err, data) => {
      console.log(data)
    })
  })
})

// When we write code like above, we would make 'callback hell'.