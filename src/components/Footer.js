import React from 'react'
import { Link } from 'react-scroll'

import './Footer.css'



const Footer = () => {
  return (
    <div className='footer'>
       
        <div className='container'>
        <div className='col-1'>
               <h2 id='link'>
                Länkar/Tips
                
              </h2>
              <a href=' https://www.transportstyrelsen.se/korkort' ><button  className='web'><h4>Transportsstyrelsen</h4></button></a>
            
              <a href='  https://www.korkort.nu/handledare/till-dig-som-vill-bli-handledare' > <button className='web'> <h4 >   Handledarsajten   </h4></button></a>
          </div>
            <ul>

                
            <li className='nav-item'> <Link to="hem" spy={true} smooth={true} offset={-90} duration={500} >Hem</Link></li>
            <li className='nav-item'> <Link to="priser" spy={true} smooth={true} offset={-90} duration={500} >Priser</Link></li>
            <li className='nav-item'>  <Link to="utbildning" spy={true} smooth={true} offset={-90} duration={500} >Utbildning</Link></li>
            <li className='nav-item'> <Link to="kontakt" spy={true} smooth={true} offset={-90} duration={500} >Kontakta Oss</Link></li>
            
                
                

            </ul>
         
            <div className='bottom'>
                <span className='line'></span>
                <p>2022 Execute, Inc. All rights reserved</p>

            </div>
        </div>
      
    </div>
  )
}

export default Footer
