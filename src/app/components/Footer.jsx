import React from 'react'
import Image from 'next/image'
import logo from '../../../public/Logo/logo-dark.png'

function Footer() {
  return (
    
      <div className="back-clr">
      <div className="py-20 container mx-auto">
        <div className='flex justify-center mb-10'>
            <Image src={logo} alt="Logo" width={100} height={50} />
        </div>
        <div className='flex items-center justify-center gap-10'>
                <li className='list'>
                    <a href="#">About</a>
                    <a href="#">Server</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Contact</a>
                </li>
        </div> 
        <div className='footer-text'>
            <p>All rights reserved by <span>Ansar Sultan</span></p>
        </div>
      </div>
      </div>
    
  )
}

export default Footer
