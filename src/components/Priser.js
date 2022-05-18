import React from 'react'

import './Priser.css'
const Priser = () => {
  return (
    <div className='priser' id='priser'>
        <div className='container'>   
              <div className='volvo'>
              <span className='img'>
              </span>
              </div>
                           
          <div className='col-2'>
              <h2 className='h2'>PrisLista</h2>
              <span className='line'></span>
             
                                            
                <div id="index1">
                    <span class="left-side">1 körlektion</span>
                    <span class="right-side"> 520Kr</span>
                </div>

                <div id="index1">
                    <span class="left-side">5 körlektioner</span>
                    <span class="right-side">2500</span>
                </div>

                <div id="index1">
                    <span class="left-side">10 körlektioner </span>
                    <span class="right-side"> 4800</span>
                </div>
                <div id="index1">
                    <span class="left-side">Lån av bil vid prov inkl. uppvärmningslektion</span>
                    <span class="right-side"> 1300kr</span>
                </div>
                <div id="index1">
                    <span class="left-side">Bokpaket</span>
                    <span class="right-side"> 600kr</span>
                </div>
                <div id="index1">
                    <span class="left-side">Utländska körkortsböcker  </span>
                    <span class="right-side"> 550kr</span>
                </div>
    
              
               

               <button className='button' id='kontakt'>Kontakta oss</button>
          </div>
        </div>
    </div>
  )
}

export default Priser