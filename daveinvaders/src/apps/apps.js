import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './apps.scss'









class Apps extends Component {
 

  render() {

   
    
    
    return (
     
     


      
    <main>
    
    <div class='block_apps'>
        
    <div>
    <h4 class='header_apps'>APPS & LINKS</h4>
    </div>

    <div class='button_con'>

    <button class='button_apps' type="button" onclick="window.location.href='https://post-hub.herokuapp.com/';">PostIt App</button>

    <button class='button_apps' type="button" onclick="window.location.href='https://captains-tools.herokuapp.com/';">Star Fleet</button>

    <button class='button_apps' type="button" onclick="window.location.href='https://www.linkedin.com/in/dave-the-clark/';">linkedIn</button>

    <button class='button_apps' type="button" onclick="window.location.href='https://github.com/WareDave';">GitHub</button>

    </div>

    </div>

    </main>
     
    )
  }
}

export default Apps;  