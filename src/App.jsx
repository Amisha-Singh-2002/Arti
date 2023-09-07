import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Propshow from './Propshow.jsx'
import {Routes,Route} from 'react-router-dom'
import Allhtmltag from './Allhtmltag.jsx'
import Navbar from './Navbar.jsx'
import Form from './Form.jsx'

function App() {
  //ROUTING
  //   http://localhost:5173/Amisha
  return (
    <>
    <Navbar />
      <Routes>
        <Route element={<Allhtmltag />} path="/" />
        <Route element={<Form/>} path="/Form" />
        <Route element={<Propshow name="Amisha" roll="73" sec="b"  />} path="/Amisha" />
        <Route element={<Propshow name="Aarti" roll="65" sec="b" />} path="/Aarti" />
        <Route element={<Propshow  name="Sattwik" roll="101" sec="b" />} path="/Sattwik" />
      </Routes>
      
      
      

    </>
  )
}

export default App
