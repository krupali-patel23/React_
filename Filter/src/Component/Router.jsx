import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Navbar';
import { Crud } from './Crud';
import {Table} from './Table';


export default function ReactRouter() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar/>}></Route>
                <Route path="/crud" element={<Crud/>}></Route>
                <Route path="/table" element={<Table/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}
