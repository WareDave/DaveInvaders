import React, { Component } from 'react'
import './nav.scss'








class Nav extends Component {
 

  render() {


    
    
    return (
     


      
      <main>
        
    <div class='sticky'>
   
        <div class="topnav">
            <a href="#home"><i class="fa fa-fort-awesome"></i></a>
            <a href="#about"><i class="fa fa-info-circle" aria-hidden="true"></i></a>
            <a href="#javascript"><i class="fab fa-js-square"></i></a>
            <a><i class="fab fa-python"></i></a>
            <a href="#about"><i class="fas fa-comments"></i></a>
            <a><i class="fas fa-chess"></i></a>
            <a><i class='fa fa-search'></i></a>
        </div>
       
    </div>
    </main>
     
    )
  }
}

export default Nav;  