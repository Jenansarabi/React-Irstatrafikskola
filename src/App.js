
import React from 'react'
import Navbar from './components/Navbar'
import Hem from './components/Hem'
import Priser from './components/Priser'
import Utbildning from './components/Utbildning'
import Kontakt from './components/Kontakt'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Navbar />
      <Hem/>
      <Priser/>
      <Utbildning/>
      <Kontakt />
      <Footer/>

    </div>
  );
}

export default App;
