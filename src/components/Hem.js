import React from 'react'
import { Link } from 'react-scroll'
import hurra from './images/hura.png'
import './Hem.css'

const About = () => {
   
  return (
      <div className='hem' id='hem'>
      <div className='container' >
          <div className='col-2'>

              <h2>Irstatrafikskola</h2>
              <h3>Hem</h3>

              <span className='line'></span>
               <p>Ett körkort öppnar upp många nya möjligheter i livet. Och med en gedigen trafikutbildning, under överinseende av professionell pedagog, så når du snabbare ditt mål och känner dig dessutom säkrare som bilförare. 

                      Vi hjälper dig att bli en trygg bilförare som känner dig säker bakom ratten, inte bara vid uppkörningen utan även under resten av ditt bilkörande liv.
                 </p>
               <button className='button'><Link to='kontakt' spy={true} smooth={true} offset={-90} duration={500} >Kontakta Oss</Link></button>
          </div>
             <span className='img'>
                <img src={hurra} alt='hurra' />
             </span>
      </div>   
    </div>

    
  )
}

export default About
