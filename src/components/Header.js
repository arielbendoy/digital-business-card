import React from 'react'
import ariel from '../img/ariel.jpeg'
import Email from '../img/mail-icon.svg'
import LinkedIn from '../img/li-icon.svg'

export default function Header() {
  return (
    <div className='header'>
      <img className='header-image' src={ariel} alt='ariel' />
      <h1 className='header-name'>Ariel Bendoy</h1>
      <h2 className='header-job'>Frontend Developer</h2>
      <h4 className='header-website'>arielben.work</h4>
      <div className='btn'>
        <button className='btn-el'>
          <a className='btn-text1' href='https://www.icloud.com/mail/'>
            <img className='btn-img' src={Email} alt='Email' />
            Email
          </a>
        </button>
        <button className='btn-li'>
          <a
            className='btn-text2'
            href='https://www.linkedin.com/in/arielbendoy/'
          >
            <img className='btn-img' src={LinkedIn} alt='LinkedIn' />
            LinkedIn
          </a>
        </button>
      </div>
    </div>
  )
}
