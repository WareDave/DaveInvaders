import React, { Component } from 'react';
import './App.scss'
import Nav from '../nav/nav.js'
import Hero from '../hero/hero'
import Head from '../header/header.js'
import Apps from '../apps/apps';
import Html from '../html/html.js'
import Css from '../css/css.js'
import JavaScript from '../javascript/javascript';
import Python from '../python/python';
import Timeline from '../timeline/timeline.js'
import Col from '../col/col.js'
import Footer from '../footer/footer.js'








class App extends Component {
 

  render() {

   
    
    
    return (
     
     


      
    <main>

      <Nav/>
          <Head/>
            <Hero /><br></br>
          
            <h1 class='about' href='#contact'>[ Contact ]</h1><br></br>

            <Col/><br></br>

            <h1 class='about'>[ APPS <a  href="https://company.wizards.com/content/games" class="fab fa-d-and-d red-text"></a> GAMES ]</h1><br></br>

            <Apps/>

            <h1 class='about'>[ HTML ]</h1>

            <Html/>

            <h1 class='about'>[ CSS ]</h1>

            <Css/>

            <h1 class='about'>[ Python ]</h1>

            <Python/>

            <h1 class='about'>[ JavaScript ]</h1><br></br>

            <JavaScript/>

            <h1 class='about' href='#abot'>[ About Dave ]</h1><br></br>

            <Timeline href='#timeline'/><br></br><br></br><br></br>
               
      <Footer/>


    </main>
     
    )
  }
}

export default App;  