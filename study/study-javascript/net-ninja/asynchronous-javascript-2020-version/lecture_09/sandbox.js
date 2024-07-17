// fetch api

// fetch API only reject() when there is network error.
// If we request through wrong URL, request API will still resolve()
fetch('todos/luigi.json')
.then((response) => {
  console.log('resolved', response)
  
  return response.json()
})
.then(data => {
  console.log(data)
})
.catch((err) => {
  console.log('rejected', err)
})