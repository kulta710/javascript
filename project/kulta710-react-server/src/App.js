import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/include/Header'
import Navbar from './components/include/Navbar'
import Footer from './components/include/Footer'

import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/training" element={<Training />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;