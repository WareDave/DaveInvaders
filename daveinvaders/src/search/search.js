import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './search.scss'




function theSearch() {

    let input,
    filter, 
    ul, 
    li, 
    a, 
    i;

    input = document.getElementById("mySearch");

    filter = input.value.toUpperCase();

    ul = document.getElementById("myMenu");

    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {

      a = li[i].getElementsByTagName("a")[0];

      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {

        li[i].style.display = "";
      }
      
      else {

        li[i].style.display = "none";

      }

    }
    
  }

  function Alert() {
    alert('Search Under Maintenance. [ Dave is Sorry =( ]');
  }

  // const alert = document.getElementById('alert');
          
  //         alert.onclick =  Alert();




class Search extends Component {


  
 

  render() {

   
    
    
    return (
     

        <main>

        <div class='block_search'>
     
        <div class="row_search">

        <div class="left_search">

        <h4 class='h_search'>Site Search</h4>

        <input type="text" id="mySearch" onkeyup="theSearch()" placeholder="Search.." title="Type in a category"></input>

        <button class='button_search' id={Alert}>Search</button>

        <ul id="myMenu">


          <li><a href="mailto: davetheclark87@gmail.com">Contact</a></li>

          <li><a href="#HTML">HTML</a></li>

          <li><a href="#CSS">CSS</a></li>

          <li><a href="#JavaScript">JavaScript</a></li>

          <li><a href="#Python">Python</a></li>

          <li><a href="#About">About</a></li>

          {/* <li><a href="#React">React</a></li> */}

          {/* <li><a href="#SQL">SQL</a></li>

          <li><a href="#Bootstrap">Bootstrap</a></li>

          <li><a href="#Node.js">Node.js</a></li> */}

          </ul>

        </div>

        </div>
        
        </div>

        </main>
   
     
    )
  }
}

export default Search;  