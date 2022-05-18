import React, { useState } from 'react'
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
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                   
                    <li className='nav-item'>
                        <a href='#hem' onClick={closeMenu}>Hem</a>
                    </li>
                  
                    <li className='nav-item'>
                        <a href='#priser' onClick={closeMenu}>Priser</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#utbildning' onClick={closeMenu}>Utbildning</a>
                    </li>

                    <li className='nav-item'>
                        <a href='#link' onClick={closeMenu}>Länker/Tips</a>
                    </li>
                   
                  
                    <li className='nav-item'>
                        <a href='#kontakt' onClick={closeMenu}>Kontakta Oss</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
