import React from 'react'
import './WHATAI.css'
import Features from '../features/Features'
const WhatIA = () => {
  return (
    <div className='AI__whatAI  section__margin' id='WAi'>
      <div className='AI__whatAI-features'>
        <Features />
      </div>
      <div className='AI__whatAI-heading'>
        <h1 className="gradient__text">
          As possibilidades de crescer estão no nivel de sua imaginação.
        </h1>
        <p>
          Veja como a inteligência artificial pode ajudar a sua empresa a crescer
        </p>
      </div>
      <div className='AI__whatAI-container'>
        <Features />
      
        <Features />
        <Features />
      </div>
    </div>
  )
}

export default WhatIA