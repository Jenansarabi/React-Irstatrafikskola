import React from 'react'
import './Kontakt.css'



const Kontakt = () => {
  return (
    <div id='kontakt' className='kontakt'>
        <h1>Kontakta Oss</h1>
        <p>  VILL DU KOMMA I KONTAKT MED OSS?</p>       

        <div className='container'>
              
            <div className='col-2'>
                <div className=''>Address: Valesväg 1</div>
                <div className=''> irstatrafikskola@hotmail.se</div>
                <div className=''>Mobilnummer: 0739922168</div>

             </div>
                  


             <div className='col-1'>

                <h4 >Vi har öppet</h4>
                <span  >Måndag – Torsdag <i > 08:00 – 15:00</i></span>
                <span>Fredag  08:00 – 13:00</span>
              </div>
         </div>      
                  
       </div>
        
  )
}

export default Kontakt