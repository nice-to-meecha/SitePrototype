import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About from "./pages/About.jsx"
import AccountingDepartment from "./pages/services/AccountingDepartment.jsx"
import Advisory from "./pages/services/Advisory.jsx"
import Assurance from "./pages/services/Assurance.jsx"
import Contact from "./pages/Contact.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import NavBar from "./components/NavBar.jsx"
import Payroll from "./pages/services/Payroll.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
