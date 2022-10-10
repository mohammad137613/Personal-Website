import React from 'react'
import './Header.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Header = ()=>{
  const location = useLocation();
  return(
    <div className="header">
      <div className='logo-div'>
        Muhammad
      </div>
      <div className='navbar'>
        <div className='home-div'>
          <Link className={location.pathname === '/' ? 'special-links active' : 'special-links'} to='/'>Home</Link>
        </div>

        <div className='about-div'>
          <Link className={location.pathname === "/about" ? 'special-links active' : 'special-links'} to='/about'>
            About
          </Link>
        </div>
        
        <div className='portfolio-div'>
          <Link className={location.pathname === '/portfolio' ? 'special-links active' : 'special-links'} to='/portfolio'>Portfolio</Link>
          </div>
        
        <div className='experiences-div'>
          <Link className={location.pathname === '/experiences' ? 'special-links active' : 'special-links'} to='/experiences'>Experiences</Link>
        </div>

      </div>
      <div className='resume-div'>
        <Button type="primary">Download Resume</Button>
      </div>
    </div>
  )
  
}

export default Header