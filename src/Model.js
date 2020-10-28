
import React, { useEffect, useState }        from 'react';
import { MdDone, MdAccessTime, MdSnooze } from 'react-icons/md';
import { GET, SET } from './lib';

export const PENDING    = 1;
export const INPROGRESS = 2;
export const DONE       = 3;

export const STATUS_TEXT = {
    1: 'Pending',
    2: 'In Progress',
    3: 'Done'
}

export const STATUS_ICONS = {
    1: <MdSnooze/>,
    2: <MdAccessTime/>,
    3: <MdDone/>
}

export const STATUS_VARIANT = {
    1: "secondary",
    2: "warning",
    3: "success"
}

const defaultState = {
    list:[
        { content:"Test", status:PENDING, date: Date.now() }
    ]
}

if ( ! localStorage.getItem('todis-store') ){
    SET('todis-store', defaultState);
}

const initialState = GET('todis-store');

const addTodoGenerator = (state,setState)=> (content)=> {
    // if ( current state contains a content equal to content ) return;
    const newState = {...state};
    const newTodo  = {
        content:content,
        date:Date.now(),
        status:PENDING
    }
    newState.list = [ newTodo, ...state.list ];
    setState(newState);
}

const changeTodoGenerator = (state,setState)=> (date,content)=> {
    // if ( current state contains a content equal to content ) return;
    const newState = { ...state };
    const oldTodoIndex  = state.list.findIndex( t => t.date === date );
    if ( oldTodoIndex === -1 ) return;
    const oldTodo  = state.list[oldTodoIndex];
    const newTodo  = { ...oldTodo, content:content }; 
    newState.list  = [ ...state.list ];
    newState.list[oldTodoIndex] = newTodo;
    setState(newState);
}

const toggleTodoGenerator = (state,setState)=> (date,status)=> {
    const newState = { ...state };

    const oldTodoIndex  = state.list.findIndex( t => t.date === date );
    if ( oldTodoIndex === -1 ) return;
    
    const oldTodo  = state.list[oldTodoIndex];

    const newTodo  = { ...oldTodo, status }; 

    newState.list  = [ ...state.list ];
    newState.list[oldTodoIndex] = newTodo;

    setState(newState);
}

const deleteTodoGenerator = (state,setState)=> (date)=> {
    const newState = { ...state };
    newState.list = state.list.filter( t => t.date !== date );
    setState(newState);
}

export default function TodisStore( { children } ) {
    const [ state, setState ] = useState(initialState);
    useEffect( ()=> SET('todis-store',state), [state] );
    const addTodo    = addTodoGenerator(state,setState);
    const changeTodo = changeTodoGenerator(state,setState);
    const deleteTodo = deleteTodoGenerator(state,setState);
    const toggleTodo = toggleTodoGenerator(state,setState);
    // children is on the the App component in this case
    // usually it would be an array of elements...
    const newChildren = React.cloneElement( children, {
        state,
        addTodo,
        changeTodo,
        deleteTodo,
        toggleTodo
    })
    return <div id="store">{newChildren}</div>;
}