import { useState } from 'react'

function Home () {

  // let name = 'mario'
  const [name, setName] = useState('luigi')
  const [age, setAge] = useState(25)

  const handleClick = () => {
    // If we just assign other values, it is not rendered into elements.
    // To achive this, we should make the variable reactive.
    // We can use at that time, the Hook!
    // name = 'luigi'
    // console.log(name)

    setName('mario')
    setAge(30)
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Home