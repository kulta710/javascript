// async * await

const getTodos = async () => {
  const response1 = await fetch('todos/luigis.json')
  const response2 = await fetch('todos/mario.json')
  const response3 = await fetch('todos/shaun.json')

  if (response1.status !== 200 || response2.status !== 200 || response3.status !== 200) {
    throw new Error('cannot fetch the data')
  }

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
  .catch(err => {
    console.log("rejected:", err.message)
  })