import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Men from './pages/Men';
import Women from './pages/Women';
import Kid from './pages/Kid';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Navbar2 from './components/Navbar2';

const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      

      <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About />} />
                <Route path='/product' element={<Product/>} >
                    <Route path='men' element={<Men />} />
                    <Route path='women' element={<Women />} />
                    <Route path='kid' element={<Kid />} />
                </Route>
                <Route path='/courses' element={<Courses/>} ></Route>
                <Route path='/courses/:id' element={<CourseDetail/>}/>
                <Route path='*' element={<NotFound />} />
      </Routes>


      <Footer />

    </div>
  )
}

export default App