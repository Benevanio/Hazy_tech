import React from 'react'
import './Header.css'
import people from '../../assets/p1.jpg'
import people2 from '../../assets/p2.jpg'
import people3 from '../../assets/p3.jpg'
import ai from '../../assets/AI.png'
const Header = () => {
  return (
    <div className="AI__header section__padding" id="home">
    <div className="AI__header-content">
      <h1 className="gradient__text"> 
        Contrua sua IA com a gente
      </h1>
      <p>
        Nos somos a Auto_Com  uma empresa especiliazada em desenvolver softwares para atender as demandas dos nossoa clientes.
      </p>

      <div className="AI__header-content__input">
        <input type="email" placeholder="Seu Email" />
        <button type="button">Quero saber Mais</button>
      </div>

      <div className="AI__header-content__people">
        <img src={people}  alt="pessoas "/>
        <img src={people2} alt="pessoas "/>
        <img src={people3} alt="pessoas "/>
        
        <p>1600 pessoas já estão usando a Auto_Com para construir suas IAs e gerir as suas empresas
        </p>
      </div>
    </div>

    <div className="AI__header-image">
      <img src={ai} alt="IA"/>
    </div>
    
  </div>
  )
}

export default Header