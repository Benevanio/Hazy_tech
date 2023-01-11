import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logotipo.png';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="AI__navbar">
      <div className="AI__navbar-links">
        <div className="AI__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="AI__navbar-links_container">
          <p><a href="#home">Home</a></p>
            <p><a href="#WAi">IA da Auto-com</a></p>
            <p><a href="#Features">Casos de Sucesso</a></p>
            <p><a href="#Possibility">Auto-com IA</a></p>
           
            <p><a href="#blog">Blog</a></p>
        </div>
      </div>
      <div className="AI__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="AI__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="AI__navbar-menu_container scale-up-center">
          <div className="AI__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#WAi">IA da Auto-com</a></p>
            <p><a href="#Features">Casos de Sucesso</a></p>
            <p><a href="#Possibility">Auto-com IA</a></p>
            
            <p><a href="#blog">Blog</a></p>
          </div>
          <div className="AI__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;