import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './include/Header'
import Navbar from './include/Navbar'
import Footer from './include/Footer'

import Home from './home/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route>
              <Blog />
            </Route>
            <Route>

            </Route>
            <Route>

            </Route>
            <Route>

            </Route>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;