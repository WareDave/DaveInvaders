import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './mtg.scss'
import Nav from '../nav/nav';
import Head from '../header/header';
import Footer from '../footer/footer';
const $ = window.$;







class Mtg extends Component {
 
  componentDidMount() {
    

    //   let userTron = prompt('Who are you');
    //   alert("Life Starts at 20 For all MTG players")

    //   function UserTron(){
    //     document.getElementById('userTron').innerHTML = userTron; 
       
    //   }



    //   let userFoe = prompt('Who are you playing');
    //   alert(userFoe + " Doom is in the cards if you play" + userTron)

    //   function UserFoe(){
    //     document.getElementById('userTron').innerHTML = userFoe; 
       
    //   } 
      
      

     
      

      var counter = 20;

      $("#plus").click(function(){
        counter++;
        $("#count").text(counter);
      });
      
      $("#minus").click(function(){
        counter--;    
        $("#count").text(counter);
      });
      
    
  }

  

  

 
  render() {
   
    return(
      
      <main>

      <Nav/>

      <Head/>
          
      <div class='block_mtg'>

      <h1 class='pl'>[ You ] </h1>

      <h3 class="button" id="minus">-</h3>

      <h1 id="count">20</h1>

      <h3 class="button" id="plus">+</h3>

      
      <br></br><br></br><br></br>


      {/* <h1 class='pl'>[ Foe ] </h1>

      <h3 class="button" id="minus">-</h3>

      <h1 id="count">20</h1>

      <h3 class="button" id="plus">+</h3>   */}

      </div>

      <h3 class='ti'>
        
       <a class='fab fa-wizards-of-the-coast red-text'></a>
      
       MTG COUNTER
       
       </h3>


      <Footer/>
  
      </main>
     
    )
  }
}

export default Mtg;