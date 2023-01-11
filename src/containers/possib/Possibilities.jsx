import React from 'react'
import './Possibilities.css'
import PossibilitiesImage from '../../assets/possibilities.png'
const Possibilities = () => {
  return (
    <div className='Ai__possibilidades section__padding' id='Possibility'>
      <div className='AI_possibility-image'>
        <img src={PossibilitiesImage}/>
      </div>
      <div className='AI_possibility-text'>
        <h4 className='AI_possibility-title gradient__text'>O futuro esta em suas maos!!!</h4>
        <h1 className='gradient__text'>
         <p>
          Torne a tecnologia uma aliada do seu negocio, automatize processos, aumente a produtividade e reduza custos.
          <br/>
          WELCOME TO THE FUTURE!!!
         </p>
        </h1>

        </div>
      </div>
  )
}

export default Possibilities