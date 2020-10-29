
import { GET, SET } from './lib';

import React, {
    useEffect, useState
} from 'react';

import {
    MdDone, MdAccessTime, MdSnooze
} from 'react-icons/md';

// Model constants

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

// Initialize from localStorage

const defaultState = {
    list: [{ content:"Test", status:PENDING, date: Date.now() }]
};

if ( ! localStorage.getItem('todis-store') ){
    SET('todis-store', defaultState);
}

const initialState = GET('todis-store');

// State change generators

const addTodoGenerator = (state,setState)=> (content)=> {
    setState({ ...state, list: [
        {
            content: content,
            date:    Date.now(),
            status:  PENDING
        },
        ...state.list
    ]});
}

const changeTodoGenerator = (state,setState)=> (date,content)=> {
    const list  = state.list;
    const index = list.findIndex( t => t.date === date );
    if ( index === -1 ) return;

    list[index] = { ...list[index], content }; 
    setState({ ...state, list: [ ...list ] });
}

const setTodoGenerator = (state,setState)=> (date,status)=> {
    const list  = state.list;
    const index = list.findIndex( t => t.date === date );
    if ( index === -1 ) return;
    
    list[index] = { ...list[index], status };
    setState({ ...state, list: [ ...list ] });
}

const deleteTodoGenerator = (state,setState)=> (date)=> {
    setState({ ...state,
        list: state.list.filter( t => t.date !== date )
    });
}

// Controller component

export default function TodisStore( { children } ) {
    const [ state, setState ] = useState(initialState);

    useEffect( ()=> SET('todis-store',state), [state] );

    const addTodo    = addTodoGenerator(state,setState);
    const changeTodo = changeTodoGenerator(state,setState);
    const deleteTodo = deleteTodoGenerator(state,setState);
    const setTodo    = setTodoGenerator(state,setState);

    // children is on the the App component in this case
    // usually it would be an array of elements...

    const newChildren = React.cloneElement( children, {
        state, addTodo, changeTodo, deleteTodo, setTodo
    });

    return <div id="store">{newChildren}</div>;
}