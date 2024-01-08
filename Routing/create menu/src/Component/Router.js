import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Signup from './Signup';
import Login from './Login';
import Navbar from './Navbar';

 function ReactRouter() {
  return (
    
         <BrowserRouter>
                <Routes>
                        <Route path='/' element={<Navbar/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/signup" element={<Signup/>}/>
                        <Route path="/login" element={<Login/>}/>
                </Routes>
         </BrowserRouter>
      
  )
}
export default  ReactRouter;