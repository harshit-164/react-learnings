import React from 'react'
import { Routes,Route } from "react-router-dom";
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <div id="nav">
        <Link to='/'> HomePage </Link>
        <Link to='/contact' > Contact </Link>
        <Link to='/about' > About </Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <div><h3>THIS IS FOTTER</h3></div>
    </div>
  )
}

export default App