import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './apps.scss'









class Apps extends Component {
 

  render() {

   
    
    
    return (
     
     


      
    <main>
    
    <div class='block_apps'>

    <div>
    <h4 class='header_apps'>APPS  <a  href="https://company.wizards.com/content/games" class="fab fa-d-and-d red-text"></a>  LINKS</h4>
    </div>

    <div class='button_con'>

    <h5 class='text_hov'>Post It App</h5>

    <h5 class='text_hov'>Star Fleet</h5>

    <h5 class='text_hov'>LinkedIn</h5>

    <h5 class='text_hov'>Git</h5>

    </div>

    <div class='button_con'>

    <button class='button_apps' type="button" onclick="window.location.href='https://post-hub.herokuapp.com/';"><h5 class='text_hov'><a class='fa fa-floppy-o' href='https://post-hub.herokuapp.com/'></a></h5></button>

    <button class='button_apps' type="button" onclick="window.location.href='https://captains-tools.herokuapp.com/';"><h5 class='text_hov'><a class='fa fa-hand-spock' href='https://captains-tools.herokuapp.com/'></a></h5></button>

    <button class='button_apps' type="button" onclick="window.location.href='https://www.linkedin.com/in/dave-the-clark/';"><h5><a class='icon_apps fa fa-linkedin-square' href='https://www.linkedin.com/in/dave-the-clark/'></a></h5></button>

    <button class='button_apps' type="button"><h5 class='text_hov'><a class='fa fa-github-alt' href='https://github.com/WareDave'></a></h5></button>

    </div>

    </div>

    <div class='block_apps'>

    <div>
    <h4 class='header_apps'>Games  <a  href="https://company.wizards.com/content/games" class="fab fa-d-and-d red-text"></a>  Fun</h4>
    </div>

    <div class='button_con'>

    <h5 class='text_hov'>MTG</h5>

    <h5 class='text_hov'>TicTac_Go</h5>

    <h5 class='text_hov'>CHESS</h5>

    <h5 class='text_hov'>D&D</h5>

    </div>

    <div class='button_con'>

    <button class='button_apps' type="button"><h5 class='text_hov'><a class='fab fa-wizards-of-the-coast' href='https://post-hub.herokuapp.com/'></a></h5></button>

    <button class='button_apps' type="button" ><h5 class='text_hov'><a class='fa fa-th' href='https://captains-tools.herokuapp.com/'></a></h5></button>

    <button class='button_apps' type="button"><h5 class='text_hov'><a class='fas fa-chess' href='https://www.linkedin.com/in/dave-the-clark/'></a></h5></button>

    <button class='button_apps' type="button"><h5 class='text_hov'><a class='fas fa-dice-d20' href='https://github.com/WareDave'></a></h5></button>

    </div>

    </div>

    </main>
     
    )
  }
}

export default Apps;  