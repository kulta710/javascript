function Home () {

  const handleClick = (event) => {
    console.log('hello, ninjas', event)
  }

  const handleClickAgain = (event, name) => {
    console.log('hello ' + name, event.target)
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      {/* What if we want to assign parameters in a function. If we just call the function using (), it automatically execute when it is read. So, we must write anonymous function to give parameters to the function */}
      <button onClick={(event) => handleClickAgain(event, 'mario')}>Click me again</button>
    </div>
  )
}

export default Home