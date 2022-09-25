import React, { Component, Col, Container, Row } from 'react'
import './ttt.scss';
import  Board  from "./Board.js";
import Head from "../header/header";
import Nav from '../nav/nav';
import Footer from '../footer/footer';





function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}



<Head/>

class Ttt extends Component {


  
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        xIsNext: true
      }],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    var history = this.state.history.slice(0, this.state.stepNumber + 1);
    var current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([{
        squares: squares,
        xIsNext: !this.state.xIsNext
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true,
    });
  }

  render() {


    const history = this.state.history;
    const current = history[this.state.stepNumber];

    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'You Are Up: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    let moveReset;
    let movesX = [];
    let movesO = [];

    history.map((step, move) => {
      let desc;
      if (move === 0) {
        desc = 'Restart';
        moveReset = <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
      } else {
        if (step.xIsNext) {
          desc = 'Kills' ;
          movesO.push(
            <li key={move}>
              <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
            </li>
          )
        } else {
          desc = 'Kills' ;
          movesX.push(
            <li key={move}>
              <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
            </li>
          )
        }
      }
    });

    return (

      <main>

      <Nav/>

      <Head/>

      <div class='block_ttt'>
            
            <div class="game-wrap">

              <div class="game-header">

                <div>
                  
                  <h1 class='h_ttt'>{status}</h1>

                </div>

                <div>{moveReset}</div>

              </div>

              <div class="game-body">

                <div class="game-left">

                  <div class="title">X Dude</div>

                  <ol>{movesX}</ol>

                </div>

                <div class="game-main">

                  <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />

                </div>

                <div class="game-right">

                  <div id='fuckery' class="title">O Dude</div>

                  <ol>{movesO}</ol>

                </div>

              </div>

            </div>


     
      </div>

      <h3 class='h_go'>TICTAC GO</h3>

      <Footer/>

      </main>
    );
  }
}


export default Ttt;