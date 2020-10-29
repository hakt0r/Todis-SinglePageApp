
import React from 'react';
import List  from './component/List';
import logo  from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App(props) {
  return ( <>
    <img src={logo} className="logo" alt="logo" />
    <List {...props}/>
    </> );
  }
  
export default App;
