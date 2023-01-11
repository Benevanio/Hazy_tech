import React from 'react'
import './WHATAI.css'
import Features from '../features/Features'
const WhatIA = () => {
  return (
    <div className='AI__whatAI  section__margin' id='WAi'>
      <div className='AI__whatAI-features'>
        <Features title="Oque e a AutoCom?" text="
          A AutoCom é uma empresa de inteligência artificial que tem como objetivo ajudar empresas a crescerem e se destacarem no mercado. Através de uma inteligência artificial que analisa dados e informações de empresas e clientes, a AutoCom pode ajudar a sua empresa a crescer e se destacar no mercado. "/>
        
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
        <Features title="Chatbots" text="Acesse o nosso chat para saber mais" />
        <Features  title="IA Educacional" text="Use nossa IA  na sua escola ou faculdade"/>
        <Features title="IA para empresas" text="Use nossa IA para melhorar a sua empresa"/>
      </div>
    </div>
  )
}

export default WhatIA