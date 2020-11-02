
import React from 'react';
import List  from './component/List';
import logo  from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return ( <>
    <img src={logo} className="logo" alt="logo" />
    <List/>
    </> );
  }
  
export default App;
