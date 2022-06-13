import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import './index.css'

export default function App() {
  return (
    <div className='card'>
      <div className='color-card'>
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  )
}
