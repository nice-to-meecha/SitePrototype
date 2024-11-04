import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
import Test from './Test.jsx'
import './index.css'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      {/* <Routes>
        <Route path='/' element={<Test />}/>
        <Route path='/about' element={<Test />}/>
        <Route path='/services' element={<Test />}/>
        <Route path='/contact' element={<Test />}/>
      </Routes> */}
      {/* <App /> */}
      <main>
      <Test />
      </main>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
