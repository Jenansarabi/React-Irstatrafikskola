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
                    <span className="left-side">1 körlektion</span>
                    <span className="right-side"> 520Kr</span>
                </div>

                <div id="index1">
                    <span className="left-side">5 körlektioner</span>
                    <span className="right-side">2500</span>
                </div>

                <div id="index1">
                    <span className="left-side"><p>10 körlektioner</p> </span>
                    <span className="right-side"> 4800</span>
                </div>
                <div id="index1">
                    <span className="left-side">Lån av bil vid prov inkl. uppvärmningslektion</span>
                    <span className="right-side"> 1300kr</span>
                </div>
                <div id="index1">
                    <span className="left-side">Bokpaket</span>
                    <span className="right-side"> 600kr</span>
                </div>
                <div id="index1">
                    <span className="left-side">Utländska körkortsböcker  </span>
                    <span className="right-side"> 550kr</span>
                </div>
    
              
               

          </div>
        </div>
    </div>
  )
}

export default Priser