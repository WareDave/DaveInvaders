import React, { Component } from 'react';
import './dice.scss'
import Nav from '../nav/nav';
import Head from '../header/header';
import Footer from '../footer/footer';






class Dice extends Component {


    componentDidMount() {
        

        const dice6 = {
            sides: 6,
            roll: function () {
              const randomNumber = Math.floor(Math.random() * this.sides) + 1;
              return randomNumber;
            }
          }
          
        
          const dice4 = {
            sides: 4,
            roll: function () {
              const randomNumber = Math.floor(Math.random() * this.sides) + 1;
              return randomNumber;
            }
          }
    
          const dice12 = {
            sides: 12,
            roll: function () {
              const randomNumber = Math.floor(Math.random() * this.sides) + 1;
              return randomNumber;
            }
          }
    
          const dice10 = {
            sides: 10,
            roll: function () {
              const randomNumber = Math.floor(Math.random() * this.sides) + 1;
              return randomNumber;
            }
          }
          const dice8 = {
            sides: 8,
            roll: function () {
              const randomNumber = Math.floor(Math.random() * this.sides) + 1;
              return randomNumber;
            }
          }
    
          
          const dice20 = {
            sides: 20,
            roll: function () {
              const randomNumber = Math.floor(Math.random() * this.sides) + 1;
              return randomNumber;
            }
          }
    
          function printNumber(number) {
            const placeholder = document.getElementById('placeholder');
            placeholder.innerHTML = number;
          }
          
          const button6 = document.getElementById('button6');
          
          button6.onclick = function() {
            const result = dice6.roll();
            printNumber(result);
          };
    
          const button4 = document.getElementById('button4');
          
          button4.onclick = function() {
            const result = dice4.roll();
            printNumber(result);
          };
    
          
    
          
          
          const button10 = document.getElementById('button10');
          
          button10.onclick = function() {
            const result = dice10.roll();
            printNumber(result);
          };
    
          
          
          const button8 = document.getElementById('button8');
          
          button8.onclick = function() {
            const result = dice8.roll();
            printNumber(result);
          };
    
          
          
          const button12 = document.getElementById('button12');
          
          button12.onclick = function() {
            const result = dice12.roll();
            printNumber(result);
          };
    
        
          
          const button20 = document.getElementById('button20');
          
          button20.onclick = function() {
            const result = dice20.roll();
            printNumber(result);
          };

    }


 

  render() {

   
    
    
    return (
     
     
      
    <main>

    <Nav/>

    <Head/>

    <div class='block_dice'>
    
    <div className='div_anw'>

    <h1 class='h_awn' id="placeholder">
    
    </h1>

    </div>    

    <div class='div_col'>    
    

    <button class='dice_6' id="button6">Roll D6</button>
 

    <button class='dice_4' id="button4">Roll D4</button>


    <button class='dice_8' id="button8">Roll D8</button>


    <button class='dice_10' id="button10">Roll D10</button>

     

    <button class='dice_12' id="button12">Roll D12</button>

    

    <button class='dice_20' id="button20">Roll D20</button>

     
     </div>

     </div>

     <div class='h-new'>
    <h3 class='h_new'>DICE <a  href="https://company.wizards.com/content/games" class="fab fa-d-and-d red-text"></a> ROLLER</h3>
     </div>

     <Footer/>

    </main>
     
    )
  }
}

export default Dice;  