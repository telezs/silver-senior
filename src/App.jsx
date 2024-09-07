import { Routes, Route } from 'react-router-dom';
import Nav from './nav';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/home';
import Mission from './pages/mission';
import About from './pages/about';
import Donate from './pages/donate';
import "bootstrap/dist/js/bootstrap.js"
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { motion } from "framer-motion"


function App() {

  

  return (
    <div>
      <Nav>
        
      </Nav>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/mission' element={<Mission/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/donate' element={<Donate/>}></Route>
        </Routes>
      </div>
      
      <Footer>
      </Footer>
    </div>
  )
}

export default App
