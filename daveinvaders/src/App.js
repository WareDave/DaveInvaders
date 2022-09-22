import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import Ttt from './ttt';
import Nav from './nav.js'
import Hero from './hero'
import Head from './header.js'
import Html from './html.js'
import Css from './css.js'
import Timeline from './timeline.js'
import Col from './col.js'
import Footer from './footer.js'








class App extends Component {
 

  render() {

   
    
    
    return (
     
     


      
    <main>

      <Nav/>
          <Head/>
            <Hero /><br></br>

           
            <h1 class='about' href='#contact'>[ Contact ]</h1><br></br>

            <Col/><br></br>

            <h1 class='about'>[ HTML ]</h1>

            <Html/>

            <h1 class='about'>[ CSS ]</h1>

            <Css/>

            <h1 class='about'>[ SASS/SCSS ]</h1><br></br>

            <h1 class='about'>[ JavaScript ]</h1><br></br>

            <h1 class='about'>[ Python ]</h1><br></br>

            <h1 class='about'>[ React ]</h1><br></br>

            <h1 class='about'>[ SQL ]</h1><br></br>



            <h1 class='about' href='#abot'>[ About Dave ]</h1><br></br>


            <Timeline href='#timeline'/><br></br><br></br><br></br>
           
           
           
           
           
   
    
    
      <Footer/>


    </main>
     
    )
  }
}

export default App;  