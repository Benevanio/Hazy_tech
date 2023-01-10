import React,{useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './Navbar.scss'
import logo from '../../assets/logotipo.png'
const Navbar = () => {
  const [menu, setMenu] = useState(false)
  return (
  <div className="AI__navbar">
    <div className="AI__navbar-links">
      <div className="AI__navbar-links_logo">
        <img src={logo} />
      </div>
      <div className="AI__navbar-links_container">
        <p><a href="#home">Home</a></p>
        <p><a href="#aicom">About IA?</a></p>
        <p><a href="#possibility">Open-D</a></p>
        <p><a href="#features">Cases</a></p>
        <p><a href="#blog">Library</a></p>
      </div> 
    <div className="AI__navbar-sign">
      <p>Login</p>
      <button type='button'>Sign Up</button>
    </div>    
    </div>
    <div className="AI__navbar-menu">
      {menu ? <RiCloseLine size={28} onClick={() => setMenu(false)} /> : <RiMenu3Line size={28} onClick={() => setMenu(true)} />        
      }
    </div>
  </div>
  )
}

export default Navbar