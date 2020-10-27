
import React, { useState } from 'react';
import moment from 'moment';

import {
    STATUS_TEXT
} from '../Model';
import { Button } from 'react-bootstrap';
import Edit from './Edit';
import { ButtonGroup } from 'react-bootstrap';

export default function View(props) {
    const [ edit, setEdit ] = useState(false);
    const todo = props.todo;
    if ( edit ) return <Edit {...props} setEdit={setEdit} />;
    return (
        <tr>
            <td>{moment(todo.date).fromNow()}</td>
            <td>{todo.content}</td>
            <td>
                <Button onClick={ e => props.toggleTodo(todo.date) }>
                    {STATUS_TEXT[todo.status]}
                </Button>
            </td>
            <td>
                <ButtonGroup>
                    <Button
                        onClick={ e => setEdit(true) }
                        >Edit</Button>
                    <Button
                        variant="danger"
                        onClick={ e => props.deleteTodo(todo.date) }
                        >Delete</Button>
                </ButtonGroup>
            </td>
        </tr>
    )
}
