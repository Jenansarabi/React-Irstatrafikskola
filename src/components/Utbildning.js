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
	<div className="container">

      <h2>
        <ReadMore> 

            <h3>Körkortsutbildning</h3>
                <p>Irsta trafikskola utbildar elever till att bli säkra och självständiga förare i trafiken.

                    Vi jobbar efter en utbildningsplan som har 13 olika moment. Momenten bygger på Trafikverkets krav på dagens förare.

                    Utifrån dessa moment anpassar vi utbildningen efter den enskilde elevens kunskaper och färdigheter. Vi erbjuder inte något fast intensivpaket med förbokade prov. Däremot kan vi lägga upp en intensiv utbildning i samråd med trafikläraren som är bättre anpassad till elevens färdigheter och mål.

                    </p>
        </ReadMore>
      </h2>

      <h2>
        <ReadMore> 
        <h3>Uppkörning </h3>
                    <p>Eleven måste också ha kommit så långt i utbildningen att eleven på ett självständigt sätt kan framföra fordonet och samspela med övriga trafikanter utan hjälp från trafikläraren. Detta för att på ett så likt sätt som möjligt få känna på hur en uppkörning går till. Märker vi att eleven inte uppfyller kraven på självständig körning förbehåller vi oss även här att avboka/skjuta upp proven.

                            </p>
                    <h5>Säkerhetskontroll  </h5>

                      <p>
                      I slutet av utbildningen gör vi säkerhetskontroller så att eleven vet mer om bilens belysning, invändig kontroll, däck och vad som finns under motorhuven. Detta är det första man får göra under sin uppkörning och är således en del av ett körprov.
                  
                      </p>

                    <h5>   Körprov  </h5>
                    <p>
                      Om tex uppkörningen börjar 13:00 samlas trafikläraren och eleven på trafikskolan kl 12.15. Vi börjar med att kolla över någon säkerhetskontroll för att sedan köra en uppvärmningsrunda på 40 min där syftet är att eleven ska bli så avslappnad som möjligt inför provet. Vi avslutar uppvärmningen på Trafikverket där vi överlämnar eleven till förarprövaren som tar över under körprovet. OBS! medtag giltig legitimation.  Kostnaden till trafikskolan under körprovet blir: 40 mins körning och lån av bil ( 1300kr ). Övriga kostnader till Trafikverket tillkommer.

                      </p>
        </ReadMore>
      </h2>
	</div>
);
};

export default Utbildning;


