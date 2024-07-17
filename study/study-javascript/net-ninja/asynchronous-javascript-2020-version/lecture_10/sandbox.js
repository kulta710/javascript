// async * await

// async function always returns a Promise which resolve and return data of returning data of the async function
const getTodos = async () => {
  const response1 = await fetch('todos/luigi.json')
  const response2 = await fetch('todos/mario.json')
  const response3 = await fetch('todos/shaun.json')

  const data1 = await response1.json()
  const data2 = await response2.json()
  const data3 = await response3.json()

  return [data1, data2, data3]
}

getTodos()
  .then(data => {
    console.log("data1:", data[0])
    console.log("data2:", data[1])
    console.log("data3:", data[2])
  })
  .catch(console.log)

/*
getTodos('todos/luigi.json')
.then(data => {
  console.log(data)
  
  return getTodos('todos/mario.json')
})
.then(data => {
  console.log(data)

  return getTodos('todos/shaun.json')
})
.then(data => {
  console.log(data)
})
.catch(err => {
  console.log(err)
})
*/