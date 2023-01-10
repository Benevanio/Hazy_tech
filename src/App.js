import React from 'react'
import './App.css'
import { Footer, Blog,Header, Features, WhatIA, Posibilities } from './containers'
import { Brand,Action, Navbar } from './components'
const App = () => {
  return (
    <div className='App'>
       <div className='gradient_bg'>
        <Navbar />
        <Header />
       </div>
       <Brand />
        <WhatIA />
        <Features />
        <Posibilities />
        <Action />
        <Blog />
        <Footer />
    </div>
  )
}
export default App