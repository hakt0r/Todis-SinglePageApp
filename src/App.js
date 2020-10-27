
import React from 'react';
import List  from './component/List';
import logo  from './logo.svg';
import './App.scss';

function App(props) {
  const { addTodo, changeTodo, deleteTodo, toggleTodo, state } = props;
  // const addTodo = props.addTodo ...

  return ( <>
    <img src={logo} className="logo" alt="logo" />
    <List {...props}/>
    </> );
  }
  
export default App;
