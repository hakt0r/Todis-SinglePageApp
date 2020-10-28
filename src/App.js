
import React from 'react';
import List  from './component/List';
import logo  from './logo.svg';
import './App.scss';

function App(props) {
  return ( <>
    <img src={logo} className="logo" alt="logo" />
    <List {...props}/>
    </> );
  }
  
export default App;
