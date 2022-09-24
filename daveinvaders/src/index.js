import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import Ttt from './ttt/ttt.js'
import {Route, Routes} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}></Route>
    <Route path='/ticTacToe' element={<Ttt/>}></Route>
  </Routes>
</BrowserRouter>,


document.getElementById('root'));

