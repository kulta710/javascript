const getTodos = (callback) => {
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
  request.open('GET', 'todo.json')
  request.send()
}

console.log(1)
console.log(2)

getTodos((err, data) => {
  console.log('callback fired')
  err && console.log(err)
  data && console.log(data)
})

console.log(3)
console.log(4)