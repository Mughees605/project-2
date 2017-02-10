import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import TimeWrapper from './components/project-3'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// component //
// import Modal from "./component4/Modal"
// import Checkout from "./component4/Checkout"
// import Product from "./component4/Product"
// import Cart from "./component4/Cart"
// component end //
ReactDOM.render(
  <TimeWrapper/>
  ,
  document.getElementById('root')
);
