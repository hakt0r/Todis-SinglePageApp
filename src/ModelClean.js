
import { GET, SET } from './lib';

import React, { useReducer, useEffect } from 'react';

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

// Reducer

function reducer ( state, { type, date, content, status } ){

    const { list } = state;

    function modifyTodo ( modification ) {
        const index = list.findIndex( t => t.date === date );
        if ( index === -1 ) return state;
        state = { ...list[index], ...modification };
        return { ...state, list: [ ...list ] };
    }

    switch ( type ) {
        
        case "add":
            return { ...state, list: [
                {
                    content: content,
                    date:    Date.now(),
                    status:  PENDING
                },
                ...list
            ]};
            
        case "change":
            return modifyTodo( { content } );

        case "set":
            return modifyTodo( { status } );

        case "remove":
            return { ...state, list: list.filter( t => t.date !== date ) };
    
        default:
            break;
    }
}

// Actions

function actions ( dispatch ) {
    return {
        add:         (content) => dispatch({type:'add',content}),
        change: (date,content) => dispatch({type:'change',date,content}),
        set:     (date,status) => dispatch({type:'set',date,status}),
        remove:         (date) => dispatch({type:'remove',date})
    };
}

// Controller component

export default function TodisStore( { children } ) {
    const [ state, dispatch ] = useReducer(reducer,initialState);
    
    const {add,change,set,remove} = actions(dispatch);

    useEffect( ()=> SET('todis-store',state), [state] );
    
    return <TodoContext.Provider value={{
        state,
        add,
        change,
        remove,
        set,
    }}>
        {children}
    </TodoContext.Provider>
}