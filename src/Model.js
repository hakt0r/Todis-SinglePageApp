
import { GET, SET } from './lib';

import React, { useState, useEffect } from 'react';

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

export const TodoContext = React.createContext();

// Actions

function add (content) {
    this.setState({ ...this.state, list: [
        {
            content: content,
            date:    Date.now(),
            status:  PENDING
        },
        ...this.state.list
    ]});
}

function change (date,content) {
    const list  = this.state.list;
    const index = list.findIndex( t => t.date === date );
    if ( index === -1 ) return;

    list[index] = { ...list[index], content }; 
    this.setState({ ...this.state, list: [ ...list ] });
}

function set (date,status) {
    const list  = this.state.list;
    const index = list.findIndex( t => t.date === date );
    if ( index === -1 ) return;
    
    list[index] = { ...list[index], status };
    this.setState({ ...this.state, list: [ ...list ] });
}

function remove (date) {
    this.setState({ ...this.state,
        list: this.state.list.filter( t => t.date !== date )
    });
}

// Controller component

export default function TodisStore( { children } ) {
    const [ state, setState ] = useState(initialState);

    useEffect( ()=> SET('todis-store',state), [state] );
    
    return <TodoContext.Provider value={{
        state,
        setState,
        add,
        change,
        remove,
        set,
    }}>
        {children}
    </TodoContext.Provider>
}