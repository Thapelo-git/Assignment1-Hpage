
import Landing from './components/Landing'
import './App.css'
import Navbar from './screens/Navbar'
import Footer from './screens/Footer'
import {BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Shop from './screens/Shop'
import About from './screens/About'
import Header from './screens/Header'
import Details from './screens/Details'
import Cart from './screens/Cart'
function App() {
  


 return (
  <BrowserRouter>
  
  <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/about' element={<About/>}/>
     <Route path='/details/:Name' element={<Details/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
