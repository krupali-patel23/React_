import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './Navbar';
import { Crudform } from './Crudform';


export default function ReactRouter() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navbar/>}></Route>
                <Route path='/crudform' element={<Crudform/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
