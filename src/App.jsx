import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Homepage from './Pages/Homepage'
import { Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Services from './Pages/Services'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import Journal from './Pages/Journal'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/journal' element={<Journal/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
