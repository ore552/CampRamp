import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <header>
            <nav className='navbar'>
                <Link to={'/'} className='logo'><h2 className='logo'>CampRamp</h2></Link>
                <input type="checkbox" id='menu-toggler'/>
                <label htmlFor="menu-toggler" id='hamburger-btn'></label>
                <ul className='all-links'>
                    <Link to={'/'}><li>Home</li></Link>
                    <Link to={'/services'}><li>Services</li></Link>
                    <Link to={'/portfolio'}><li>Portfolio</li></Link>
                    <Link to={'/blog'}><li>Blog</li></Link>
                    <Link to={'/about'}><li>About Us</li></Link>
                    <Link to={'/contact'}><li>Contact Us</li></Link>
                    <Link to={'/journal'}><li>Journal</li></Link>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Navbar