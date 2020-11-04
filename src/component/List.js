
import React           from 'react';
import { useContext }  from 'react';

import { Table }       from 'react-bootstrap';

import { TodoContext } from '../Model';

import Add             from './Add';
import View            from './View';

export default function List() {
    const Todo = useContext(TodoContext);
    return (
    <Table>
        <thead>
            <Add/>
        </thead>
        <tbody>
            { Todo.state.list.map( ( todo, index ) =>
                <View todo={todo} key={index}/>
            )}
        </tbody>
    </Table> );
}
