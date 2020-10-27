
import React from 'react';
import List  from './component/List';
import logo  from './logo.svg';

function App(props) {
  const { addTodo, changeTodo, deleteTodo, toggleTodo, state } = props;
  // const addTodo = props.addTodo ...

  return (
    <List {...props}/>
    );
  }
  
// <img src={logo} className="App-logo" alt="logo" />
export default App;
