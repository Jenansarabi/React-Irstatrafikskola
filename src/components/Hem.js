import React from 'react'
import hurra from './images/hura.png'


import './Hem.css'

const About = () => {
  return (
    <div className='hem' id='hem'>
      <div className='container' >
          <div className='col-2'>
              <h2>Hem</h2>
              <span className='line'></span>
               <p>Ett körkort öppnar upp många nya möjligheter i livet. Och med en gedigen trafikutbildning, under överinseende av professionell pedagog, så når du snabbare ditt mål och känner dig dessutom säkrare som bilförare. 

          Vi hjälper dig att bli en trygg bilförare som känner dig säker bakom ratten, inte bara vid uppkörningen utan även under resten av ditt bilkörande liv.
          </p>
               <button className='button'>Kontakta Oss</button>
          </div>
             <span className='img'>
                <img src={hurra} alt='hurra' />
             </span>
      </div>   
    </div>

    
  )
}

export default About
