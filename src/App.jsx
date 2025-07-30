
import Landing from './components/Landing'
import './App.css'
import Navbar from './screens/Navbar'
import Footer from './screens/Footer'
import {BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Shop from './screens/Shop'
import About from './screens/About'
import Header from './screens/Header'
function App() {
  


 return (
  <BrowserRouter>
  
  <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
