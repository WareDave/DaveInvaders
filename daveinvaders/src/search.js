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
     
     


      
   <div>

   </div>
     
    )
  }
}

export default App;  