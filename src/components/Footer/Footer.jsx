import React from 'react'
import './Footer.css'
import Icons from '../Icons/Icons'

const Footer = ()=>{
  return(
    
    <footer className='Footer'>
      <div className="icons">
        <Icons name="Twitter" />
        <Icons name="Facebook" />
      </div>
      <div className='copyright'>
        © 2022. All rights reserved.
      </div>
    </footer>
  )
  
}

export default Footer