import React from 'react'
import FB from '../img/fb-icon.svg'
import IG from '../img/ig-icon.svg'
import GH from '../img/gh-icon.svg'

export default function Footer() {
  return (
    <div className='footer'>
      <a href='https://www.facebook.com/arielS.bendoy/'>
        <img className='icon' src={FB} alt='fb-icon' />
      </a>
      <a href='https://www.instagram.com/jongggkkoy/'>
        <img className='icon' src={IG} alt='ig-icon' />
      </a>
      <a href='https://github.com/arielbendoy'>
        <img className='icon' src={GH} alt='gh-icon' />
      </a>
    </div>
  )
}
