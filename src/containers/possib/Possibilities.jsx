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
        <h4 className='AI_possibility-title gradient__text'>Solicite acesso Para continuar</h4>
        <h1 className='gradient__text'>
         <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium doloribus nam obcaecati quod atque? Fugit id porro, impedit voluptatibus assumenda adipisci ullam cupiditate accusantium quos ut cumque possimus, tempore at!
         </p>
        </h1>

        </div>
      </div>
  )
}

export default Possibilities