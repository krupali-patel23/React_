// import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from "./Component/Home";
import About from './Component/About';
import Contact from './Component/Contact';
import Signup from './Component/Signup';
import Login from "./Component/Login";



function App() {
  return (
    <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/home" element={<Home/>}>Home</Route>
                <Route path="/about" element={< About/>}>About</Route>
                <Route path="/contact" element={<Contact/>}>Contact</Route>
                <Route path="/signup" element={<Signup/>}>Signup</Route>
                <Route path="/login" element={<Login/>}>Login</Route>
                
            </Routes>
    </div>
  );
}

export default App;
