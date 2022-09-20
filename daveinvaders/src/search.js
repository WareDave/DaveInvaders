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



function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }




class App extends Component {
 

  render() {

   
    
    
    return (
     
     
        <div class="row">
        <div class="left" style="background-color:#bbb;">
          <h2>Menu</h2>
          <input type="text" id="mySearch" onkeyup="myFunction()" placeholder="Search.." title="Type in a category"></input>
          <ul id="myMenu">
            <li><a href="#About">About</a></li>
            <li><a href="#Contact">Contact</a></li>
            <li><a href="#HTML">HTML</a></li>
            <li><a href="#CSS">CSS</a></li>
            <li><a href="#JavaScript">JavaScript</a></li>
            <li><a href="#Python">Python</a></li>
            <li><a href="#React">React</a></li>
            <li><a href="#SQL">SQL</a></li>
            <li><a href="#Bootstrap">Bootstrap</a></li>
            <li><a href="#Node.js">Node.js</a></li>
          </ul>
        </div>
        
      
        <div class='right'>
           <h1>plese use this to find anything lister on this site</h1>
        </div>
        </div>
   
     
    )
  }
}

export default App;  