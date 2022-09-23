import React, { Component } from 'react';
import './javascript.scss'









class JavaScript extends Component {
 

  render() {

   
    
    
    return (
     
     


      
    <main>

    <div class='block_js'>

    <div class='img_div'>

    <a class='img_js' href="https://en.wikipedia.org/wiki/HTML"><img class='img_js' src="https://i.imgur.com/SYmeIXtb.jpg" title="source: imgur.com" /></a>

    </div>

    <h1 class='header_js'>What's JavaScript/ES6</h1>

    <div class='div_info'>

    <p class='info_js'>

    JavaScript (/ˈdʒɑːvəˌskrɪpt/), often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.
    JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, 
    prototype-based object-orientation, and first-class functions.
    Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. JavaScript enables interactive web pages
    and is an essential part of web applications. The vast majority of websites use it for client-side page behavior,
    and all major web browsers have a dedicated JavaScript engine to execute it.
    As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative programming styles. It has application
    programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model
    (DOM). However, the language itself does not include any input/output (I/O), such as networking, storage, or graphics facilities,
    as the host environment (usually a web browser) provides those APIs.
    JavaScript engines were originally used only in web browsers, but they are now embedded in some servers, usually via Node.js.
    They are also embedded in a variety of applications created with frameworks such as Electron and Cordova.
    Although there are similarities between JavaScript and Java, including language name, syntax, and respective standard libraries,
    the two languages are distinct and differ greatly in design.<br/>
    
    
    </p>  

    </div>

    <pre>
    
    <code class="code">

    Data Types:
    undefined : "undefined"<br/>
    Boolean : "boolean"<br/>
    Number : "number"<br/>
    String : "string"<br/>
    BigInt : "bigint"<br/>
    Symbol : "symbol"<br/><br/>
    
                                     
    </code>
    
    </pre> 

    <div>

    <h2 class="header_js">Basic Logic:</h2>

    </div>
                                      
    <pre>
      
    <code class="code">

    Looping from 1 to 100 white board<br/><br/>

    // If the number is divisible by 3, log X foo<br/>
    // if the number is divisible by 5, log X bar<br/>
    // If the number is divisible by 15, log X foobar<br/>
    // Only one output per number<br/>
    // Expected output:<br/>
    //<br/>
    // 1<br/>
    // 2<br/>
    // 3 foo<br/>
    // 4<br/>
    // 5 bar
    // 6 foo<br/>
    // ...<br/>
    // 15 foobar<br/>
    // ...<br/>
    // 100 bar

    </code>
    
    </pre>                                   
                                      
    <div>

    <h2 class='header_js'>Basic Syntax:</h2>

    </div>


    <pre>
    <code class="code">
    

    const a = 4;<br/> 
    const b = 53;<br/> 
    const c = 57;<br/> 
    const d = 16;<br/> 
    const e = 'Dave';<br/> 
    const f = false;<br/>                          
    'Dave' = 'Sux'<br/> 
    a + b == c<br/> 
    a * a == b<br/> 
    e === 'Sux'<br/> 
    42 == '42'<br/> 
    console.log e + Dave + f = Dave Sux false
                                  

    </code>
    
    </pre> 

    </div>

    </main>
     
    )
  }
}

export default JavaScript;  