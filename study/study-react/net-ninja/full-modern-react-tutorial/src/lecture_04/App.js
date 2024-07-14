import './App.css';

function App() {

  const title = 'welcome to the new block'
  const likes = 50
  // boolean and object themselves cannot be contained in location where string should be located in jsx elements expression
  // const person = { name: 'yoshi', age: 30}

  const link = 'http://www.google.com'

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>{ likes } times</p>

        {/* <p>{ person }</p> */}

        <p>{ 10 }</p>
        <p>{ "hello, ninjas" }</p>
        <p>{ [1, 2, 3, 4, 5] }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;