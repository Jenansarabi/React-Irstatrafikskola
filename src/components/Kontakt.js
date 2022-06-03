import React from 'react'
import './Kontakt.css'



const Kontakt = () => {
  return (
    <div id='kontakt' className='kontakt'>
          <h3>  Vill du komma i kontak med oss?</h3>       
          <h1>Kontakta Oss</h1>
        <div className='container'>
      
          
            <div className='col-2'>
              <span className='oss'>
                
               <h4>Address: Valesväg 1</h4>
               <h4>irstatrafikskola@hotmail.se</h4>
               <h4>Mobilnummer: 0739922168</h4>
              </span>
        
             </div>
                  


             <div className='col-1'>
                <h4 >Vi har öppet</h4>
                <p  >Måndag – Torsdag <i > 08:00 – 15:00</i></p>
                <p>Fredag  08:00 – 13:00</p>
            </div>
         </div>      
                  
      </div>
        
  )
}

export default Kontakt