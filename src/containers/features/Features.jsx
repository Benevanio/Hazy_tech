import React from 'react'

// eslint-disable-next-line react/prop-types
const Features = ({title, text}) => {
  return (
    <div className='AI__features-container__features'id="Features">
      <div className='AI__features-container__features__feature'>
      <div >
        <h1>{title}</h1>
      </div>
      <div className='AI__features-container__features__feature__text'>
        {text}
      </div>
      </div>
    </div>
  )
}

export default Features