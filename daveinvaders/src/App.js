import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import Ttt from './ttt';
import Nav from './nav.js'
import Hero from './hero'
import Head from './header.js'
import Timeline from './timeline.js'
import Col from './col.js'
import Footer from './footer.js'








class App extends Component {
 

  render() {

   
    
    
    return (
     
     


      
    <main>

      <Nav/>
          <Head/>
            <Hero/><br></br>

           
            <h1 class='about'>[ Colaberation ]</h1><br></br>

            <Col/>

            <h1 class='about'>[ About Dave ]</h1><br></br>

            <Timeline/><br></br><br></br><br></br>
           
           
           
           
           
   
    
    
      <Footer/>


    </main>
     
    )
  }
}

export default App;  