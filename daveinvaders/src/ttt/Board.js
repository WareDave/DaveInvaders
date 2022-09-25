import React, { Component, Col, Container, Row } from 'react'
import './ttt.scss'


  
  function Square(props) {
    return (
      <button class="square" onClick={() => props.onClick()}>
        {props.value}
      </button>
    );
  }
  
  class Board extends Component {
    renderSquare(i) {
      const squares = this.props.squares;
      return <Square value={squares[i]} onClick={() => this.props.onClick(i)} />;
    }
    render() {
      return (
       
        <main>

        
         
        <div>

          <div class="board-row">

            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}

          </div>

          <div class="board-row">

            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}

          </div>

          <div class="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>

        </div>

        
        </main>
      );
    }
  }













export default Board;