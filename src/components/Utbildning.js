import React, { useState } from "react";
import "./Utbildning.css";

const ReadMore = ({ children }) => {
const text = children;
const [isReadMore, setIsReadMore] = useState(true);
const toggleReadMore = () => {
	setIsReadMore(!isReadMore);
};
return (
  
  <div id='utbildning' className='Utbildning'>

   <div className='content'>
     <p className="text">
      {isReadMore ? text.slice(0, 1, 2) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    	</p>
   </div>
</div>
);
};

const Utbildning = () => {
return (
  <div className="main" id='utbildning'>
	<div className="box">
       <h1>Utbildning  <span className='line'></span></h1>
       
  </div>
        <ReadMore> 

            <h2>Körkortsutbildning</h2>
            <span className='line'></span>

                <h4>Irsta trafikskola utbildar elever till att bli säkra och självständiga förare i trafiken.

                    Vi jobbar efter en utbildningsplan som har 13 olika moment. Momenten bygger på Trafikverkets krav på dagens förare.

                    Utifrån dessa moment anpassar vi utbildningen efter den enskilde elevens kunskaper och färdigheter. Vi erbjuder inte något fast intensivpaket med förbokade prov. Däremot kan vi lägga upp en intensiv utbildning i samråd med trafikläraren som är bättre anpassad till elevens färdigheter och mål.

                    </h4>
        </ReadMore>

        <ReadMore> 
        <h3>Uppkörning </h3>
        <span className='line'></span>

                    <h4>Eleven måste också ha kommit så långt i utbildningen att eleven på ett självständigt sätt kan framföra fordonet och samspela med övriga trafikanter utan hjälp från trafikläraren. Detta för att på ett så likt sätt som möjligt få känna på hur en uppkörning går till. Märker vi att eleven inte uppfyller kraven på självständig körning förbehåller vi oss även här att avboka/skjuta upp proven.

                            </h4>
                    <h4>Säkerhetskontroll  </h4>

                      <h4>
                        I slutet av utbildningen gör vi säkerhetskontroller så att eleven vet mer om bilens belysning, invändig kontroll, däck och vad som finns under motorhuven. Detta är det första man får göra under sin uppkörning och är således en del av ett körprov.
                  
                      </h4>

                    <h4>   Körprov  </h4>
                    <h4>
                      Om tex uppkörningen börjar 13:00 samlas trafikläraren och eleven på trafikskolan kl 12.15. Vi börjar med att kolla över någon säkerhetskontroll för att sedan köra en uppvärmningsrunda på 40 min där syftet är att eleven ska bli så avslappnad som möjligt inför provet. Vi avslutar uppvärmningen på Trafikverket där vi överlämnar eleven till förarprövaren som tar över under körprovet. OBS! medtag giltig legitimation.  Kostnaden till trafikskolan under körprovet blir: 40 mins körning och lån av bil ( 1300kr ). Övriga kostnader till Trafikverket tillkommer.

                      </h4>
        </ReadMore>
	</div>
);
};

export default Utbildning;


