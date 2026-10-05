import { useState } from 'react'
import DisplayBios from "./DisplayBios"
import AddDeveloper from './AddDeveloper'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Add-developer" element={<AddDeveloper />} />
        <Route path="/display-bios" element={<DisplayBios />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
