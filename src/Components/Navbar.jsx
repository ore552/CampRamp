import React from 'react'


const Navbar = () => {
  return (
    <div>
        <header>
            <nav className='navbar'>
                <h2 className='logo'><a href="#">LOGO</a></h2>
                <input type="checkbox" id='menu-toggler'/>
                <label htmlFor="menu-toggler" id='hamburger-btn'></label>
                <ul className='all-links'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Navbar