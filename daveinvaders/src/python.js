import React, { Component } from 'react';
import './python.scss'









class Python extends Component {
 

  render() {

   
    
    
    return (
     
     


      
    <main>
    
    <div class='block_py'>

    <a class='img_py' href="https://imgur.com/Tqmi0k1"><img src="https://i.imgur.com/Tqmi0k1.png" title="source: imgur.com" /></a>

    <div class='code_div'>

    <p class='info_py'>
    Python is a general purpose, mid, and high level programming language. What what what! It has a large number of uses. lol. You can use Python for developing desktop GUI applications,
    websites and web applications. 
    Python, as a high level programming language, allows you to focus on core functionality of the application by taking care of common programming tasks.
    Pyhton as a mid level to function as a translator to your base level.
    
    </p>
    
    
    </div>


    
    
    <div class='code_div'>

    <pre><code class='code_py'>
             the basics: <br/>
             Data types:<br/>
             Text Type:	str<br/>
              Numeric Types:	int, float, complex<br/>
              Sequence Types:	list, tuple, range<br/>
              Mapping Type:	dict<br/>
              Set Types:	set, frozenset<br/>
              Boolean Type:	bool<br/>
              Binary Types:	bytes, bytearray, memoryview<br/><br/>
              Variables:<br/>
              dave = 0<br/>
              sux = 5<br/>
              print(dave)<br/>
              print(sux)<br/><br/>
              Numbers:<br/>
              int<br/>
              float<br/>
              complex<br/>
              dave = 42<br/>
              still = 4.2<br/>
              sux = 4two<br/><br/>
      </code></pre>

      </div>

      <p class='info_py'>Basic Syntax and loops:</p><br/>

      <div class='code_div'>

      <pre><code class="code_py">player_name =  input("Ready to boogie what's your name?")<br/>
      print("ready for this {}".format(player_name) + 'let us Boogie')<br/>


      States=list(state_capitals.keys())# sets list with key<br/>
      print ('Your bitch ass still needs to learn US States and Capitals. 50 mf rounds. Enter exit to punk out.')<br/>
      point=0 <br/>
      for i in range(5): # sets up rounds<br/>
      state=random.choice(States) <br/>
      capital = state_capitals[state]<br/>
      user_guess = input('what is the capital of %s?'%state + 'your going to get it wrong {}. '.format(player_name))<br/>
      if user_guess.lower() == 'exit': # lets you to exit <br/>
      break<br/>
      elif user_guess.title() == capital:<br/>
      point+=1<br/>
      print('Want A Cookie! point to player %d' %point)<br/>
      else:<br/>
      print('You suck, The capital of {} is {}.'.format(state,capital))<br/>
      print('We are done here all you got right was %d, You are dead inside' %point) # end game<br/>
      restart = input("Do you want to restart the game {}? Yes or No ".format(player_name))<br/>
      if restart == 'yes':<br/>
      main()<br/>
      </code></pre>

      </div>

  <div class='code_div'>     
      
  <pre class="code_py line-numbers"><code class="code _py language-python"> 
  
  import sys<br/>
  import random<br/><br/>

  ans = True<br/><br/>

  while ans:<br/>
    question = input("Ask the WareDave a question: (press enter to quit) ")<br/><br/>
    
  answers = random.randint(1,25)<br/><br/>
    
  if question == "":<br/><br/>
        sys.exit()<br/>
    
  elif answers == 1:<br/><br/>
        print ("I'm going home")<br/><br/>
    
  elif answers == 2:<br/><br/>
        print ("we need to get the hell out of dodge")<br/><br/>
    
  elif answers == 3:<br/><br/>
        print ("if it's going to be that kind of party")<br/><br/>
  elif answers == 4:<br/><br/>
        print ("fuck off")<br/><br/>
    
  elif answers == 5:<br/><br/>
        print ("your mother had a peg leg with a kick stand")<br/><br/>
    
  elif answers == 6:<br/><br/>
        print ("han shot first")
    
  elif answers == 7:<br/><br/>
        print ("doom,doom,doom. Time to sing the doom song.")<br/><br/>
    
  elif answers == 8:<br/><br/>
        print ("Good, Bad, I'm the guy with the gun.")<br/><br/>
		
	elif answers == 9:<br/><br/>
		print ("time to start hooking")
		<br/><br/>
	elif answers == 10:<br/><br/>
		print ("Batman")<br/><br/>
		
	elif answers == 11:<br/><br/>
		print ("Dick, as in you are a.")<br/><br/>
		
	elif answers == 12:<br/><br/>
		print ("Stop asking")<br/><br/>
		
	elif answers == 13:<br/><br/>
		print ("your face hangs like sleaves of wizard")<br/><br/>
		
	elif answers == 14:<br/><br/>
		print ("you are sick. why would you ask that?")<br/><br/>
		
	elif answers == 15:<br/><br/>
		print ("you are my guy")<br/><br/>
		
	elif answers == 16:<br/><br/>
		print ("i donno, maybe get a cat.")<br/><br/>
		
	elif answers == 17:	<br/><br/>
		print ("quit your day job")<br/><br/>
	
	elif answers == 18:<br/><br/>
	    print ("you will die alone")<br/><br/>
		
	elif answers == 19:<br/><br/>
		print ("you made it move, then you lost it. put the bag back on")<br/><br/>
		
	elif answers == 20:<br/><br/>
		print ("try getting him drunk, he may not care that your ugly.")<br/><br/>
		
	elif answers == 21:<br/><br/>
		print ("spam, spam eggs and spam")<br/><br/>
		
	elif answers == 22:<br/><br/>
		print ("you mother was a hampster")<br/><br/>
		
	elif answers == 23:<br/><br/>
		print ("no, you smell like candy")<br/><br/>
		
	elif answers == 24:<br/><br/>
		print ("try the truck stop, you may have better luck.")<br/><br/>
		
	elif answers == 25: <br/><br/>
		print ("not metal.")<br/><br/>
  </code></pre>


  </div>


  </div>


    </main>
     
    )
  }
}

export default Python;  