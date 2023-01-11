import React from 'react'
import './Brand.css'
import {google,Slack,Atlassian,Shopify, DropBox } from "./importsimgs"
const Brand = () => {
  return (
    <div className='AI__brand section__padding'>
      <div>
        <img src={google} alt='google' />
      </div>
      <div >
        <img src={Slack} alt='google' />        
      </div>
      <div >
        <img src={Atlassian} alt='google' />        
      </div>
      <div >
        <img src={ DropBox } alt='google' />        
      </div>
      <div >
        <img src={Shopify } alt='google' />        
      </div>
    </div>
  )
}

export default Brand