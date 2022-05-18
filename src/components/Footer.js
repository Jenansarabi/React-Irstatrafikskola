import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
       
        <div className='container'>
        <div className='col-1'>
               <h2 id='link'>
                Länkar
                  Transportsstyrelsen
                
              </h2>
              <a href=' https://www.transportstyrelsen.se/korkort' > <h4 className='web'>Transportsstyrelsen</h4></a>
            
              <a href='    https://www.korkort.nu/handledare/till-dig-som-vill-bli-handledare' > <h4 className='web'>Handledarsajten   https://www.korkort.nu/handledare/till-dig-som-vill-bli-handledare'</h4></a>
          </div>
            <ul>
                <li className='nav-item'><a href='/'>Hem</a></li>
                <li className='nav-item'><a href='#priser'>Priser</a></li>
                <li className='nav-item'><a href='#utbildning'>Utbildning</a></li>
                <li className='nav-item'><a href='#kontakt'>Kontakta Oss</a></li>


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
