import React, { useState } from 'react'
import { Link } from 'react-scroll'

import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './images/logo.png'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <div className='logo'>
                <img src={logo} alt='logo' />

                </div>

                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                   
                    <li className='nav-item'>
                      <Link to="hem" spy={true} smooth={true} offset={-90} duration={500} onClick={closeMenu}>Hem</Link>
                    </li>
                  
                    <li className='nav-item'>
                    <Link to="priser" spy={true} smooth={true} offset={-90} duration={500} onClick={closeMenu}>Priser</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='utbildning' spy={true} smooth={true} offset={-90} duration={500} onClick={closeMenu}>Utbildning</Link>

                    </li>

                    <li className='nav-item'>
                    <Link to='kontakt' spy={true} smooth={true} offset={-90} duration={500} onClick={closeMenu}>Kontakta Oss</Link>
                    </li>
                   
                    <li className='nav-item'>
                    <Link to='link' spy={true} smooth={true} offset={-90} duration={500} onClick={closeMenu}>Länk-Tips</Link>
                    </li>
                   
                  
               
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
