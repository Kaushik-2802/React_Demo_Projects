import { useState } from 'react'
import DeveloperBios from './DeveloperBios'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Home'
import AddDeveloper from './AddDeveloper'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/developer-bios" element={<DeveloperBios />} />
        <Route path="/add-developer" element={<AddDeveloper />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
