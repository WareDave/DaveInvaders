import React, { Component } from 'react';
import './App.scss'
import Nav from './nav.js'
import Hero from './hero'
import Head from './header.js'
import Timeline from './timeline.js'
import Footer from './footer'








class App extends Component {
 

  render() {


    
    
    return (
     


      
    <main>
      <Nav/>
          <Head/>
            <Hero/><br></br>

            <h1 class='about'>[ About Dave ]</h1><br></br>

            <Timeline/>
   
    
    
      <Footer/>


    </main>
     
    )
  }
}

export default App;  